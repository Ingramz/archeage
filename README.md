# ArcheAge patcher

Utility for performing operations with ArcheAge pak files.

The patching procedure is identical to what [KakaoGames ArcheAge Launcher](https://archeage.playkakaogames.com/download) performs internally.

## Basic usage

Download the pre-built binary from [releases page](https://github.com/Ingramz/aapatcher/releases).

Then run from command line:
```
aapatcher.exe patch C:\KakaoGames\ArcheAge C:\path\to\a\patch.pak --extract
```

Output:
```
Creating temporary file system... SUCCESS
Mounting 'C:\KakaoGames\ArcheAge\game_pak' to /master... SUCCESS
Applying 'C:\path\to\a\patch.pak to /master'... SUCCESS
Unmounting '/master'... SUCCESS
Mounting 'C:\KakaoGames\ArcheAge\game_pak' to /src... SUCCESS
Mounting 'C:\KakaoGames\ArcheAge' to /dst... SUCCESS
Copying directory 'src/bin32' to 'dst/bin32'... SUCCESS
Copying directory 'src/bin64' to 'dst/bin64'... SUCCESS
Copying directory 'src/easyanticheat' to 'dst/easyanticheat'... SUCCESS
Copying file 'src/launch_game.exe' to 'dst/launch_game.exe'... SUCCESS
Unmounting '/src'... SUCCESS
Unmounting '/dst'... SUCCESS
Destroying temporary file system... SUCCESS
```

## Building the project

Install [.NET SDK](https://dotnet.microsoft.com/en-us/download).

Copy `xlpack.dll` and `tbb.dll` from an installed [ArcheAge Launcher](https://archeage.playkakaogames.com/download) to `native` directory.

Create the release binary:
```
dotnet publish -c Release
```

## Acknowledgements

[XlPakTool](https://github.com/nikes/XlPakTool) for `xlpack.dll` DLL imports.
