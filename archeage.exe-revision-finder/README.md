# How to find revision from archeage.exe

`archeage.exe` is built with a custom PE section called `.xlgames` which includes in its first four bytes the integer value of the revision.

Example C# program included.

## `game.sqlite3` key

`archeage.exe` also appears to include the 128-bit key used to decrypt `game.sqlite3`, which is normally not shipped with the game client.
Currently observed offset seems to be `.xlgames + 72`, though not rigorously tested between game older versions.

Versions of `game.sqlite3` which surfaced in June 2026 are encrypted using AES-128-CBC with that key, no padding (SQLite database file sizes should be multiples of 16 bytes anyway) and IV=0.

Revised code includes encryption and decryption routines in the example C# program.

Alternatively the key can be pulled from the exe using a hex editor or another reverse engineering tool and database be decrypted using OpenSSL (substitute the key first):

```sh
openssl aes-128-cbc -d -in game.sqlite3 -out game_decrypted.sqlite3 -K CAFEBABEBEEFCAKEDEAFADDEDFADEDCC -iv 00000000000000000000000000000000 -nopad
```