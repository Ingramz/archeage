@echo off

cd /D "%~dp0"

set /p "patchnumber=Enter Patch Number: "

if exist %patchnumber%\ (
  echo Directory %patchnumber% already exists, aborting.
  pause
  exit
)

echo Creating directory %patchnumber%
mkdir %patchnumber%

echo Downloading %patchnumber%.pak
curl --output-dir "%patchnumber%" -f -O "https://akamai-aa-gamecdn.playkakaogames.com/test/Game/Archeage/Patch/%patchnumber%.pak" || goto :error

echo Patching game
aapatcher.exe patch "C:\KakaoGames\ArcheAge" "%patchnumber%\%patchnumber%.pak" --extract || goto :error

echo Dumping database from game
x64dbg\release\x64\x64dbg.exe "C:\KakaoGames\ArcheAge\bin64\archeage.exe" "-t +auth_ip 5.79.111.102 -auth_port 1237 -authtoken toomuchfun -lang en_us -time_offset -180"  || goto :error

move database.zip %patchnumber%

echo Unzipping archive
pushd %patchnumber%
tar -xf database.zip || goto :error
popd

echo Creating SQLite Database
node reader.js %patchnumber%\game11 %patchnumber%\game2 %patchnumber%\%patchnumber%-english.sqlite ./schemas/schema-190.json || goto :error

echo Database saved at %patchnumber%\%patchnumber%-english.sqlite successfully.
pause
goto :EOF


:error:
echo Failed with error #%errorlevel%.
pause
exit /b %errorlevel%
