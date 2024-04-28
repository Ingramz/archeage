# Kakao Games ArcheAge launcher Version.dat encoder/decoder

This tool decodes the incredibly convoluted Kakao Games Version.dat format used for storing the current patch version.

Blowfish with PKCS5 padding using key `Archeage!(*!`, and byte swaps caused by P/Invoke calls.

Node.js version requires running with legacy openssl algorithms enabled: `node --openssl-legacy-provider index.js`

C# version ported by [Nidoran](https://github.com/Seanm07)
