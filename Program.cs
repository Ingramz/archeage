if (args.Length < 2) {
    Console.Error.WriteLine($"Usage: <game_directory> <patch_pak>");
    Environment.Exit(0);
}

string gameFolderStr = args[0];
string patchPakStr = args[1];

string gameFolder = Path.GetFullPath(gameFolderStr);
string gamePakStr = Path.Join(gameFolder, "game_pak");
string gamePak = Path.GetFullPath(gamePakStr);
string patchPak = Path.GetFullPath(patchPakStr);

if (!Directory.Exists(gameFolder)) {
    Console.Error.WriteLine($"game directory '{gameFolder}' does not exist.");
    Environment.Exit(1);
}

if (!File.Exists(gamePak)) {
    Console.Error.WriteLine($"game pak not found at path '{gamePak}'");
    Environment.Exit(1);
}

if (!File.Exists(patchPak)) {
    Console.Error.WriteLine($"patch pak not found at path '{patchPak}'");
    Environment.Exit(1);
}

if (FileUtil.IsFileLocked(gamePak)) {
    Console.Error.WriteLine($"game pak '{gamePak}' is being used by another process.");
    Environment.Exit(1);
}

Action<string, Func<bool>> step = (text, func) =>
{
    Console.Write($"{text}... ");
    bool result = func();
    Console.WriteLine(result ? "SUCCESS" : "FAILURE");
    
    if (!result) {
        Environment.Exit(1);
    }
};

Dictionary<string, IntPtr> handles = new Dictionary<string, IntPtr>();

step("Creating temporary file system", () => XLPack.CreateFileSystem());

step($"Mounting '{gamePak}' to /master", () => {
    IntPtr handle = XLPack.Mount("/master", gamePak, true);
    
    handles["master"] = handle;
    
    return handle != IntPtr.Zero;
});

step($"Applying '{patchPak} to /master'", () => XLPack.ApplyPatchPak("/master", patchPak));

step("Unmounting '/master'", () => XLPack.Unmount(handles["master"]));

step($"Mounting '{gamePak}' to /src", () => {
    IntPtr handle = XLPack.Mount("/src", gamePak, true);
    
    handles["src"] = handle;
    
    return handle != IntPtr.Zero;
});

step($"Mounting '{gameFolder}' to /dst", () => {
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
step("Destroying temporary file system", () => {
    XLPack.DestroyFileSystem();
    return true;
});
