# XIGNCODE3 bypass for ArcheAge

Original: https://github.com/luciouskami/XignCode3Bypass (probably mirror of a mirror)

The bypass abuses the fact that cryaction.dll can be shimmed without detection (`XignCode Loader.dll` should be used as `cryaction.dll` and original file should be renamed as `_cryaction.dll`). The shim then loads `x2game.dll` and replaces occurrences of `x3_x64.xem` in memory with `x3_x64.dll` which is the file name for our fake `XignCode Client.dll`, while keeping the original file untouched.

As far as the game is concerned, the loading of XIGNCODE3 succeeded and the game will launch without it. However since there is no heartbeat implemented, that part will still fail and eventually kick you out of the game. I only used this bypass to prove that ArcheAge can be successfuly played in Linux using Wine if XIGNCODE3 supported it and had no need for the game to run beyond the heartbeat interval.

I will not teach you how to cheat. If you want to actually use this, you will need to learn how to build and run it. The first paragraph contains all the information you need. The code should build, but i have commented out parts I did not need so uncomment as needed.

If XL wants to patch this, then they would need to load XIGNCODE3 as soon as the game is started (like Black Desert and SoulWorker are doing). This makes proxying dll-s such as `cryaction.dll` not as straightforward. Also update/enable your XIGNCODE3 to allow playing with Wine on Linux. The game still runs great in `wine-staging` if the anticheat issue was fixed.
