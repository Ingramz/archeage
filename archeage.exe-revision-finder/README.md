# How to find revision from archeage.exe

archeage.exe is built with a custom PE section called `.xlgames` which includes in its first four bytes the integer value of the revision.

Example C# program included.
