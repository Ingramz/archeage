# unluac for ArcheAge

To create UI mods for ArcheAge, one tool that is invaluable for converting binary LUA scripts back into text format is unluac.

However ArcheAge does not use exactly a standard build of LUA. On top of Lua 5.1.1 it also applies a [LNUM patch](https://web.archive.org/web/20220326222437/http://files.luaforge.net/releases/lnum/lnum/lnum-221006/lnum-221006.patch) in double+int64 configuration as revealed in version string:

```
$Lua: Lua 5.1.1 Copyright (C) 1994-2006 Lua.org, PUC-Rio (double+int64) $\n$Authors: R. Ierusalimschy, L. H. de Figueiredo & W. Celes $\n$URL: www.lua.org $
```

The included unluac patch makes LNUM in that specific configuration work and can be applied to latest unluac builds.

## Building unluac

Obtaining source for unluac and applying the patch in repository is left as an exercise for the reader.

```sh
cd unluac/src
mkdir build
javac -verbose -deprecation -Werror -d build unluac/*.java
cd build
jar --create --verbose --main-class=unluac.Main --file=unluac.jar unluac
```
