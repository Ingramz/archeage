# ArcheAge patcher

Utility for performing operations with ArcheAge pak files.

The patching procedure is identical to what [KakaoGames ArcheAge Launcher](https://archeage.playkakaogames.com/download) performs internally.

## Basic usage

Download the pre-built binary from [releases page](https://github.com/Ingramz/archeage/releases).

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

## Known issues

* Due to application being `xlpack.dll` based, it will not be able to open files created on a filesystem with a different sector size.
  All first party `game_pak`-s and patches are distributed with sector size of 512 bytes. Opening a 512 byte formatted file on a 4096 byte filesystem will overwrite its contents.

## Building the project

Install [.NET SDK](https://dotnet.microsoft.com/en-us/download).

Copy [`xlpack.dll`](https://web.archive.org/web/20240428065207/https://akamai-aa-gamecdn.playkakaogames.com/live/Launcher/Archeage/deploy/plugins/xlpack.dll.zip) and [`tbb.dll`](https://web.archive.org/web/20240428065232/https://akamai-aa-gamecdn.playkakaogames.com/live/Launcher/Archeage/deploy/plugins/tbb.dll.zip) from an installed [ArcheAge Launcher](https://archeage.playkakaogames.com/download) to `native` directory.

Create the release binary:
```
dotnet publish -c Release
```

## Acknowledgements

[XlPakTool](https://github.com/nikes/XlPakTool) for `xlpack.dll` DLL imports.
