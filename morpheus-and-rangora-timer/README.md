# How to know when Morpheus spawns after maintenance

It is rather widely known information that Morpheus/Rangora initial spawn time is related to when the server got restarted.

Here is a method to reliably (±1 minute) to find out when that happened which can be automated.

1. Find the game server IP address (easiest way is using Windows built-in Resource Monitor), should be port 1239
2. Wait for server to go down.
3. Ping that IP address and port using a TCP pinging tool repeatedly. `Test-NetConnection 5.79.111.70 -Port 1239`
4. Mark down the time when server started responding.
5. Add 8 minutes to that time.
6. If the maintenance doesn't end within the next hour, then add additional 13 hours.

8 minutes isn't very scientific, but seems to be the general startup time of the server until NPC-s get spawned into the server.

Alternative way of finding out when they spawn would be to observe in game the timer of bonds board in hero hall because it has a rather long cooldown period. Then use basic math and deduction skills to find the most likely time server got restarted. No need to add/subtract 8 minutes this way.
