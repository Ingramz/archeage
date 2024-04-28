using System.CommandLine;

var rootCommand = new CliRootCommand(@"Utility for performing operations with ArcheAge pak files.

https://github.com/Ingramz/archeage

Copyright (c) 2022 Indrek 'Ingram' Ardel
Source code is licensed under the MIT License.");

var MakePatchCommand = () =>
{
    var patchCommand = new CliCommand("patch", "Apply a patch pak");
    var gameDirectoryArgument = new CliArgument<DirectoryInfo>("game directory") { Description = "Path to game directory containing game_pak" };
    patchCommand.Arguments.Add(gameDirectoryArgument);

    var patchPakArgument = new CliArgument<FileInfo[]>("patch pak") { Description = "Path to patch pak(s)" };

    patchCommand.Arguments.Add(patchPakArgument);

    var extractOption = new CliOption<bool>("--extract") { Description = "Extract executables after patching" };

    patchCommand.Options.Add(extractOption);

    patchCommand.SetAction((ctx) =>
    {
        Patch(ctx.GetValue(gameDirectoryArgument), ctx.GetValue(patchPakArgument), ctx.GetValue(extractOption));
    });

    return patchCommand;
};

rootCommand.Subcommands.Add(MakePatchCommand());

var MakeInstallCommand = () =>
{
    var installCommand = new CliCommand("install", "Extract executable files from game_pak");

    var gameDirectoryArgument = new CliArgument<DirectoryInfo>("game directory") { Description = "Path to game directory containing game_pak" };

    installCommand.Arguments.Add(gameDirectoryArgument);

    installCommand.SetAction((ctx) =>
    {
        Install(ctx.GetValue(gameDirectoryArgument));
    });

    return installCommand;
};

rootCommand.Subcommands.Add(MakeInstallCommand());

var MakeUnpackCommand = () =>
{
    var unpackCommand = new CliCommand("unpack", "Unpack files from pak");
    var pakArgument = new CliArgument<FileInfo>("pak") { Description = "Path to pak" };
    unpackCommand.Arguments.Add(pakArgument);

    var destinationArgument = new CliArgument<DirectoryInfo>("destination") { Description = "Destionation where to extract the files" };

    unpackCommand.Arguments.Add(destinationArgument);

    unpackCommand.SetAction((ctx) =>
    {
        Unpack(ctx.GetValue(pakArgument), ctx.GetValue(destinationArgument));
    });

    return unpackCommand;
};

rootCommand.Subcommands.Add(MakeUnpackCommand());

var MakeCreateCommand = () =>
{
    var createCommand = new CliCommand("create", "Create a pak");
    var pakArgument = new CliArgument<FileInfo>("pak") { Description = "Path to pak" };
    createCommand.Arguments.Add(pakArgument);

    var rootArgument = new CliArgument<DirectoryInfo>("root") { Description = "Path to root of files" };
    createCommand.Arguments.Add(rootArgument);

    createCommand.SetAction((ctx) =>
    {
        Create(ctx.GetValue(pakArgument), ctx.GetValue(rootArgument));
    });

    return createCommand;
};

rootCommand.Subcommands.Add(MakeCreateCommand());

return await rootCommand.Parse(args).InvokeAsync();

static void Create(FileInfo? pakFi, DirectoryInfo? rootDirectoryFi)
{
    ArgumentNullException.ThrowIfNull(pakFi);
    ArgumentNullException.ThrowIfNull(rootDirectoryFi);

    string pak = Path.GetFullPath(pakFi.FullName);
    string rootDirectory = Path.GetFullPath(rootDirectoryFi.FullName);

    if (File.Exists(pak))
    {
        Console.Error.WriteLine($"pak file '{pak}' already exists.");
        Environment.Exit(1);
    }

    if (!Directory.Exists(rootDirectory))
    {
        Console.Error.WriteLine($"Root directory '{rootDirectory}' does not exist.");
        Environment.Exit(1);
    }

    Dictionary<string, IntPtr> handles = new Dictionary<string, IntPtr>();

    Action<string, Func<bool>> step = (text, func) =>
    {
        Console.Write($"{text}... ");
        bool result = func();
        Console.WriteLine(result ? "SUCCESS" : "FAILURE");

        if (!result)
        {
            Environment.Exit(1);
        }
    };

    step($"Creating temporary file system", () => XLPack.CreateFileSystem());

    step($"Creating pak file '{pak}'", () => XLPack.CreatePak(pak, false));

    step($"Mounting '{pak}' to /pak", () =>
    {
        IntPtr handle = XLPack.Mount("/pak", pak, true);

        handles["pak"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Mounting '{rootDirectory}' to /dir", () =>
    {
        IntPtr handle = XLPack.Mount("/dir", rootDirectory + @"\", true);

        handles["dir"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Copying directory '/dir' to '/pak'", () => XLPack.CopyDir("/dir", "/pak"));

    step("Unmounting '/dir'", () => XLPack.Unmount(handles["dir"]));
    step("Unmounting '/pak'", () => XLPack.Unmount(handles["pak"]));

    step("Destroying temporary file system", () =>
    {
        XLPack.DestroyFileSystem();
        return true;
    });
}

static void Patch(DirectoryInfo? gameDirectoryFi, FileInfo[]? patchPakFis, bool extract)
{
    ArgumentNullException.ThrowIfNull(gameDirectoryFi);
    ArgumentNullException.ThrowIfNull(patchPakFis);

    string gameFolder = Path.GetFullPath(gameDirectoryFi.FullName);
    string gamePakStr = Path.Join(gameFolder, "game_pak");
    string gamePak = Path.GetFullPath(gamePakStr);
    string[] patchPaks = patchPakFis.Select(pak => Path.GetFullPath(pak.FullName)).ToArray();

    if (!Directory.Exists(gameFolder))
    {
        Console.Error.WriteLine($"game directory '{gameFolder}' does not exist.");
        Environment.Exit(1);
    }

    if (!File.Exists(gamePak))
    {
        Console.Error.WriteLine($"game pak not found at path '{gamePak}'");
        Environment.Exit(1);
    }

    string? missingPak = patchPaks.FirstOrDefault(patchPak => !File.Exists(patchPak), null);
    if (missingPak != null)
    {
        Console.Error.WriteLine($"patch pak not found at path '{missingPak}'");
        Environment.Exit(1);
    }

    if (FileUtil.IsFileLocked(gamePak))
    {
        Console.Error.WriteLine($"game pak '{gamePak}' is being used by another process.");
        Environment.Exit(1);
    }

    Action<string, Func<bool>> step = (text, func) =>
    {
        Console.Write($"{text}... ");
        bool result = func();
        Console.WriteLine(result ? "SUCCESS" : "FAILURE");

        if (!result)
        {
            Environment.Exit(1);
        }
    };

    Dictionary<string, IntPtr> handles = new Dictionary<string, IntPtr>();

    step("Creating temporary file system", () => XLPack.CreateFileSystem());

    step($"Mounting '{gamePak}' to /master", () =>
    {
        IntPtr handle = XLPack.Mount("/master", gamePak, true);

        handles["master"] = handle;

        return handle != IntPtr.Zero;
    });

    foreach (var patchPak in patchPaks)
    {
        step($"Applying '{patchPak} to /master'", () => XLPack.ApplyPatchPak("/master", patchPak));
    }

    step("Unmounting '/master'", () => XLPack.Unmount(handles["master"]));

    if (extract)
    {
        step($"Mounting '{gamePak}' to /src", () =>
        {
            IntPtr handle = XLPack.Mount("/src", gamePak, true);

            handles["src"] = handle;

            return handle != IntPtr.Zero;
        });

        step($"Mounting '{gameFolder}' to /dst", () =>
        {
            IntPtr handle = XLPack.Mount("/dst", gameFolder + @"\", true);

            handles["dst"] = handle;

            return handle != IntPtr.Zero;
        });

        step($"Copying directory 'src/bin32' to 'dst/bin32'", () => XLPack.CopyDir("src/bin32", "dst/bin32"));
        step($"Copying directory 'src/bin64' to 'dst/bin64'", () => XLPack.CopyDir("src/bin64", "dst/bin64"));
        step($"Copying directory 'src/easyanticheat' to 'dst/easyanticheat'", () => XLPack.CopyDir("src/easyanticheat", "dst/easyanticheat"));
        step($"Copying file 'src/launch_game.exe' to 'dst/launch_game.exe'", () => XLPack.Copy("src/launch_game.exe", "dst/launch_game.exe"));

        step("Unmounting '/src'", () => XLPack.Unmount(handles["src"]));
        step("Unmounting '/dst'", () => XLPack.Unmount(handles["dst"]));
    }

    step("Destroying temporary file system", () =>
    {
        XLPack.DestroyFileSystem();
        return true;
    });
}

static void Install(DirectoryInfo? gameDirectoryFi)
{
    ArgumentNullException.ThrowIfNull(gameDirectoryFi);

    string gameFolder = Path.GetFullPath(gameDirectoryFi.FullName);
    string gamePakStr = Path.Join(gameFolder, "game_pak");
    string gamePak = Path.GetFullPath(gamePakStr);

    if (!Directory.Exists(gameFolder))
    {
        Console.Error.WriteLine($"game directory '{gameFolder}' does not exist.");
        Environment.Exit(1);
    }

    if (!File.Exists(gamePak))
    {
        Console.Error.WriteLine($"game pak not found at path '{gamePak}'");
        Environment.Exit(1);
    }

    if (FileUtil.IsFileLocked(gamePak))
    {
        Console.Error.WriteLine($"game pak '{gamePak}' is being used by another process.");
        Environment.Exit(1);
    }

    Action<string, Func<bool>> step = (text, func) =>
    {
        Console.Write($"{text}... ");
        bool result = func();
        Console.WriteLine(result ? "SUCCESS" : "FAILURE");

        if (!result)
        {
            Environment.Exit(1);
        }
    };

    Dictionary<string, IntPtr> handles = new Dictionary<string, IntPtr>();

    step("Creating temporary file system", () => XLPack.CreateFileSystem());

    step($"Mounting '{gamePak}' to /src", () =>
    {
        IntPtr handle = XLPack.Mount("/src", gamePak, true);

        handles["src"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Mounting '{gameFolder}' to /dst", () =>
    {
        IntPtr handle = XLPack.Mount("/dst", gameFolder + @"\", true);

        handles["dst"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Copying directory 'src/bin32' to 'dst/bin32'", () => XLPack.CopyDir("src/bin32", "dst/bin32"));
    step($"Copying directory 'src/bin64' to 'dst/bin64'", () => XLPack.CopyDir("src/bin64", "dst/bin64"));
    step($"Copying directory 'src/easyanticheat' to 'dst/easyanticheat'", () => XLPack.CopyDir("src/easyanticheat", "dst/easyanticheat"));
    step($"Copying file 'src/launch_game.exe' to 'dst/launch_game.exe'", () => XLPack.Copy("src/launch_game.exe", "dst/launch_game.exe"));

    step("Unmounting '/src'", () => XLPack.Unmount(handles["src"]));
    step("Unmounting '/dst'", () => XLPack.Unmount(handles["dst"]));
    step("Destroying temporary file system", () =>
    {
        XLPack.DestroyFileSystem();
        return true;
    });
}

static void Unpack(FileInfo? pakFi, DirectoryInfo? destinationFi)
{
    ArgumentNullException.ThrowIfNull(pakFi);
    ArgumentNullException.ThrowIfNull(destinationFi);

    string gamePak = Path.GetFullPath(pakFi.FullName);
    string destinationFolder = Path.GetFullPath(destinationFi.FullName);

    if (!File.Exists(gamePak))
    {
        Console.Error.WriteLine($"game pak not found at path '{gamePak}'");
        Environment.Exit(1);
    }

    if (!Directory.Exists(destinationFolder))
    {
        Console.WriteLine($"Destination directory '{destinationFolder}' not found, creating.");
        Directory.CreateDirectory(destinationFolder);
    }

    Action<string, Func<bool>> step = (text, func) =>
    {
        Console.Write($"{text}... ");
        bool result = func();
        Console.WriteLine(result ? "SUCCESS" : "FAILURE");

        if (!result)
        {
            Environment.Exit(1);
        }
    };

    Dictionary<string, IntPtr> handles = new Dictionary<string, IntPtr>();

    step("Creating temporary file system", () => XLPack.CreateFileSystem());

    step($"Mounting '{gamePak}' to /src", () =>
    {
        IntPtr handle = XLPack.Mount("/src", gamePak, true);

        handles["src"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Mounting '{destinationFolder}' to /dst", () =>
    {
        IntPtr handle = XLPack.Mount("/dst", destinationFolder + @"\", true);

        handles["dst"] = handle;

        return handle != IntPtr.Zero;
    });

    step($"Copying directory 'src' to 'dst'", () => XLPack.CopyDir("src", "dst"));

    step("Unmounting '/src'", () => XLPack.Unmount(handles["src"]));
    step("Unmounting '/dst'", () => XLPack.Unmount(handles["dst"]));
    step("Destroying temporary file system", () =>
    {
        XLPack.DestroyFileSystem();
        return true;
    });
}
