# The fastest ArcheAge database extractor in the West

This is a precursor of the other database extractor which could statically (without needing to start up the game) extract database ZIP from just x2game.dll and encrypted compact.sqlite from game_pak. Developed as gcc project in WSL.

Compile:
```
gcc -O2 -march=native main.c -o main -lmbedcrypto
```

Run ([31.pak](https://web.archive.org/web/20240428111941/https://akamai-aa-gamecdn.playkakaogames.com/test/Game/Archeage/Patch/31.pak) used as example):
```
./main "31/bin64/x2game.dll" "31/game/db/compact.sqlite" 31.zip
```

This will not work for current versions due to game being obfuscated once again, however it was a fun exercise to study how the inner workings of the database encryption.
