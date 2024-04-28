# Where to get old ArcheAge builds

## AAEmu mega folder
`https://mega.nz/folder/C3Q0WQjT#vRUethZLPiYSo2B4nE_etg`

## XLGames-based launchers

XLGames `patcher.exe` contains a default config in its embedded resources, which will first reveal the url of the webview:
* ArcheAge Korea: `https://patcher.xlgames.com/archeage/index.html`
* ArcheWorld: `https://patcher.asia.archeworld.com/`
* ArcheAge Japan: `http://archeage.pmang.jp/game_launcher`

To visit these, your HTTP User-Agent string needs to contain the word `ArcheAge`. Inside the HTML source you can find a JavaScript file containing another config file, which will reveal the IP address and port of the `PatchWebServer`:
* ArcheAge Korea: `117.52.149.11:8080`
* ArcheWorld Asia: `pub-patchweb2-elb-1510574807.ap-southeast-1.elb.amazonaws.com:8080`
* ArcheWorld NA/SA: `pub-patchweb-elb-1108394719.us-east-1.elb.amazonaws.com:8080`
* ArcheAge Japan: `pw-1.archeage.jp:8080`

To see all the files required to install the game, visit the List endpoint:
`http://117.52.149.11:8080/PatchWebServer/Patches/List.aspx?patch_value=0`
then visit the endpoint for each file to get a "Torrent" file
`http://117.52.149.11:8080/PatchWebServer/Patches/SendFile.aspx?id=1231` (642866to643443_pak_c00.torrent)

CDN servers we get from the following endpoint:
`http://117.52.149.11:8080/PatchWebServer/Services/List.aspx?mac=00-00-00-00-00-00&patcher_version=643443`
* ArcheAge Korea: `http://archeage-download1.xlgames.com/xlpak/` and `http://archeage-download3.xlgames.com/xlpak/`
* ArcheWorld: `http://aw-download1.archeworld.com/xlpak/`
* ArcheAge Japan: `http:/aa-cdn.pmang.jp/archeage/client/`

Finally to download the compressed file:
1. Remove `.torrent` from the received file name.
2. Prepend CDN url

Which will finally give us: `http://archeage-download1.xlgames.com/xlpak/642866to643443_pak_c00`

Then to see what's inside, first decompress, then unpack:
```
aadecompress 642866to643443_pak_c00 642866to643443_pak_c00_de
aapatcher unpack 642866to643443_pak_c00_de 642866to643443_unpacked
```

## Kakao (Only as historical reference)

### Version information
`https://akamai-aa-gamecdn.playkakaogames.com/live/Game/Archeage/Config/config.patch.version`


### Patch files
* `https://akamai-aa-gamecdn.playkakaogames.com/live/Game/Archeage/Patch/<patchnumber>.pak`
* `https://akamai-aa-gamecdn.playkakaogames.com/test/Game/Archeage/Patch/<patchnumber>.pak`
* `https://akamai-aa-gamecdn.playkakaogames.com/alpha/Game/Archeage/Patch/<patchnumber>.pak`
