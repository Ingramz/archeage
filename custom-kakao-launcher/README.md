# Custom Kakao Launcher

This is a slimmed down ArcheAge launcher for use with Kakao Games service. Original Kakao Launcher was littered with telemetry requests
sent to **Korean** servers, which made starting up the game really slow or near impossible whenever there were network connectivity issues.

This launcher uses the minimum possible amount of HTTP requests (1 reused TLS connection) required to communicate with Kakao login servers to generate a play token
and then start the game up. However this was not fast enough for me, so I also added cookie/play token memorization such that starting the game
afterwards would be instant.

Requires some version of Node.js, current LTS is fine.

1. Install dependencies using `npm install`.
2. Add your credentials to `accounts.json file`
3. Start with `node index.mjs main`

## Extra

To reverse engineer Kakao Games launcher, I used [dnSpyEx](https://github.com/dnSpyEx/dnSpy). The trick was to open/attach modules from already loaded into memory when debugger got attached, which led to readable C# source code for the DLL files of interest.
