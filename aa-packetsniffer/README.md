# ArcheAge passive packetsniffer

This is the culmination of [Tamaki's](https://github.com/0x795E69D8) research into previous attempts of packet sniffing in ArcheAge.

While confirming his findings, I wrote a simple chat packet parser first as wireshark plugin (wireshark-plugin.lua) and then later as a standalone .NET application built on top of SharpPcap.

Packet information is mostly taken from AAEmu / [NL0bP's repositories](https://github.com/NL0bP)

To use you will need to change the constant `0xF900` (or `0x00F9` depending on endianness) to whatever value it is that certain week (the packet id-s or opcodes rotate each patch, but are always in same order, so they can be predictably calculated as long as you know value for one of them).

Running is as simple as `dotnet run`

## Prior art

[TT6 Movinggun](https://github.com/movinggun) once had a website `https://chat.kfc.solutions` which posted live chats of NA Nuia/Haranya chat.
