using System.CommandLine;

var rootCommand = new CliRootCommand(@"Utility for decompresing XL Games ArcheAge compressed pak files.

https://github.com/Ingramz/aadecompress

Copyright (c) 2024 Indrek 'Ingram' Ardel
Source code is licensed under the MIT License.");

var sourcesArgument = new CliArgument<FileInfo[]>("sources") {
    Description = "Source file names. If there are multiple, then they need to be declared in order.",
    Arity = ArgumentArity.OneOrMore,
    CustomParser = result =>
    {
        int count = result.Tokens.Count - 1;

        if (count == 0) {
            return null;
        }

        result.OnlyTake(count);

        return result.Tokens.Take(count).Select(x => new FileInfo(x.Value)).ToArray();
    }
};
var destinationArgument = new CliArgument<FileInfo>("destination") { Description = "Destination file name.", Arity = ArgumentArity.ExactlyOne };

rootCommand.Arguments.Add(sourcesArgument);
rootCommand.Arguments.Add(destinationArgument);

rootCommand.SetAction((ctx) => {
    FileInfo[]? sources = ctx.GetValue(sourcesArgument);
    FileInfo? destination = ctx.GetValue(destinationArgument);
    ArgumentNullException.ThrowIfNull(sources);
    ArgumentNullException.ThrowIfNull(destination);

    foreach (FileInfo source in sources) {
        if (!source.Exists) {
            Console.Error.WriteLine($"Source file '{source.Name}' does not exist.");
            Environment.Exit(1);
        }
    }

    if (destination.Exists) {
        Console.Error.WriteLine($"Destination file '{destination.Name}' already exists");
        Environment.Exit(1);
    }

    string[] sourcePaths = sources.Select(source => source.FullName).ToArray();
    string destinationPath = destination.FullName;

    if (AADecompress.Decompress(sourcePaths, destinationPath)) {
        Console.WriteLine($"Decompression complete. ({destination.Name})");
    } else {
        Console.Error.WriteLine("Decompression failed.");
        Environment.Exit(1);
    }
});

return await rootCommand.Parse(args).InvokeAsync();
