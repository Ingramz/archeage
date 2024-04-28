# ArcheAge decompressor

Utility for decompresing XL Games ArcheAge compressed pak files.

Decompression is performed by XL's own patcher code.

## Basic usage

Download the pre-built binary from [releases page](https://github.com/Ingramz/archeage/releases).

### Decompressing a single source file

Then run from command line:
```
aadecompress.exe 642866to643443_pak_c00 642866to643443_pak_c00_de
```

Output:
```
Decompression complete. (642866to643443_pak_c00_de)
```

### Decompressing multiple source files

When the decompressed file has been split into multiple compressed files, you need to specify source files in exact order:
```
aadecompress.exe 632793to632793_pak_c00 632793to632793_pak_c01 632793to632793_pak_c02 632793to632793_pak_c03 632793to632793_pak_c04 632793to632793_pak_c05 632793to632793_pak_c06 632793to632793_pak_c00_de
```

Output:
```
Decompression complete. (632793to632793_pak_c00_de)
```

### Limitations

Providing incomplete amount of source files or invalid files may crash the application with a `0xC0000005` error.

## Building the project

Install [.NET SDK](https://dotnet.microsoft.com/en-us/download).

Copy contents of Bin32 folder of [ArcheAge Downloader](https://archeage.xlgames.com/downloads/clients) to `native` directory.

Convert `patcher.exe` to a dll file using [EXE_to_DLL](https://github.com/hasherezade/exe_to_dll) (32-bit):
```
exe_to_dll.exe patcher.exe patcher.dll
```

If the patcher has been updated, you may need to correct the offset constants defined in `AADecompress.cs`.

Create the release binary:
```
dotnet publish -c Release
```
