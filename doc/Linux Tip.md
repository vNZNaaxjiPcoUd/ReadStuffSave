Linux Tip
=========

# https://go.jwint.net/dnscarton
```
51jobs
apec.fr
bestjobs
cadremploi.fr
careerweb
careerbuilder
craigslist
dice.com
glassdoor
handshake
indeed
infojobs
linkedin
monster
naukri
profesia
reed.co.uk
theladders
totaljobs
xing
ejobs
```

## 庆余年
nivod


https://www.nivod.tv/



庆余年 第一季

https://www.nivod.tv/0EQHE6EtvBBETIyPtqdOAs8aK4cNaLrb-ece580aeb85fbeabcfa89b166fc0c696-1080-0-0-play.html?x=1

## rtl8812au

- git clone https://github.com/JW1213812138/rtl8812au.git
- cd dir
- make
- make install
- reboot




## yt-dlp

sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp
sudo chmod a+rx yt-dlp
install ffmpeg also , can support format transfer.

-F 	列出所有可供下載的格式及格式程式碼
-f [FORMAT] 	指定格式程式碼



-F	列出所有可供下載的格式及格式程式碼
-f [FORMAT]	指定格式程式碼
--extract-audio	將影片檔案轉換為純音訊檔案
--audio-format [FORMAT]	指定音訊格式 目前支援 mp3 / m4a / opus / wav / aac / flac / vorbis
--recode-video [FORMAT]	指定影片格式 目前支援 mp4 / flv / ogg / webm / mkv / avi
--embed-subs	嵌入字幕至影片中 僅適用於mp4 / webm / mkv
--concurrent-fragments [N]	
多線程下載 可以指定你想要的線程數
如不使用此指令 預設線程數為1
--version	確認當前yt-dlp版本
--update	更新yt-dlp
--output 'X:\[PATH]'	

## 瑪登瑪朵

https://www.youtube.com/watch?v=00KrBtWw6DA&list=PLIs8BZ6OTJPgwMZegORM2ZbAGhmWPYr9_&index=39

## qr code gen

http://qr.calm9.com/tw/

https://www.the-qrcode-generator.com/

## html to md

https://www.convertsimple.com/convert-html-to-markdown/

## SequenceDiagram

https://github.com/geraintluff/sequence-diagram-html


## Line office

https://tw.linebiz.com/

market
https://tw.line-oa-marketplace.com/list/

advertisement

## Jocye 四葉草

https://www.youtube.com/watch?v=A3KzJ2xNuzg&list=RDEMgHSEdTTuShy_yMZiKUyRnw
https://www.youtube.com/watch?v=sqANL8NP3ps&list=PLTw-MymvXhFms3oThAB823eEDXrJLvTES

## Get IP by php
$ip = $_SERVER['HTTP_CLIENT_IP'] 
   ? $_SERVER['HTTP_CLIENT_IP'] 
   : ($_SERVER['HTTP_X_FORWARDED_FOR'] 
        ? $_SERVER['HTTP_X_FORWARDED_FOR'] 
        : $_SERVER['REMOTE_ADDR']);


// Function to get the user IP address
function getUserIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}




## HTML5 象棋

https://github.com/xiugangzhang/ChineseChess

https://github.com/itlwei/Chess

## our world in data

https://ourworldindata.org/

## markdown sequence diagram

https://gist.github.com/martinwoodward/8ad6296118c975510766d80310db71fd
https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/

## ffmpeg
https://youtu.be/ojhzJKhkuPE

ffmpeg -i sleepsound.m4a -ss 00:00:00 -t 01:00:00 -c:a copy output1.m4a

ffmpeg -i sleepsoundsmall.m4a -codec:a libmp3lame sleepsoundsmall.mp3

## yt-dlp


sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp
sudo chmod a+rx yt-dlp

wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp
chmod a+rx yt-dlp

-F 	列出所有可供下載的格式及格式程式碼
-f [FORMAT] 	指定格式程式碼


# https://github.com/JW1213812138/yt-dlp
github account is github@jwint.net // npry

## egg

120K boxes for daily need
leak 8K boxes now.
8K boxes =  1.6M eggs
1 boxes = 200 eggs
    = 1,200 NTD

https://youtu.be/2iskpyp5rZw

## movie IYF

https://www.iyf.tv/play/uP4ybUUkKuE

## HTML 2 MD Tool
====
https://onlinehtmleditor.dev/
https://www.convertsimple.com/convert-html-to-markdown/

## KVM

https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/



## windows change disk

https://www.youtube.com/watch?v=0ZutH3WZp1U

1. create disk partition (use WINPE / DiskGenius)
    - format to GPT type (GUID) 
    - create ESP and main partition
        - match segment 
2. copy ESP partition
3. copy main partition
    - delete page and swap in old main partition before copy
4. update UEFI boot from new ESP
    - use BOOTICE
    - choice windows boot manage
    - choice new ESP
5. update BCD (boot configure data)
    - assign new ESP to a disk symbol ex: "F:"
    - use BOOTICE to change BCD to new main partition
        - BCD is in new ESP/ EFI / Microsoft / Boot / BCD
Done.

if no ESP ( from old bios boot disk ), can use this command to create
1. format new disk with ESP partition
2. mount ESP to disk symbol (ex: F:)
3. open BOOTICE, UEFI fix, command line, 
4. command line command
    - bcdboot C:\windows /s f: /f UEFI

if black screen when boot in, this usally in mulitiple partition, this is register table miss match. To fix it, need edit register table. 
1. in WINPE, open command "regedit" to open register table editor.
2. open main partition registable
    - file / add config unit / goto main partition / windows / system32 / config / SYSTEM
    - fill name ( not system, can be s1 )
    - open LOCAL_MACHINE / s1 / MountedDevices 
    - delete all items except default.
3. offload config unit 
4. reboot

PS: if old disk is not remove, it maybe cannot boot from new disk, screen show black or goto recovery or cannot boot. reference this https://youtu.be/oPlMSkLGPWE?si=DeKivI1EYcW8iOj3

Solution: use diskgenius system move function . or remove/formation old disk.




## 登機箱
：通常為尺寸20吋以下（每件各邊以23cm x 36cm x 56cm為上限，或單邊長寬高總和不得超過115cm）的隨身行李，能陪你一起上飛機； 託運箱：20吋以上，以重量計件，無法陪你一起上飛機、只能託運，且超過航空公司規定的重量限制需加收超重費用。

https://decathlon.tw/dsm-309659.html

## ublock origin

youtube no ad

https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=zh-TW&utm_source=ext_sidebar

## mount iso

sudo mkdir /media/iso
sudo mount -o loop path/to/iso/file/YOUR_ISO_FILE.ISO /media/iso
sudo umount /media/iso


## DDclient

https://ddclient.net/

setup file is /etc/ddclient/ddclient.cfg, 
change interface to get different IP

## Cloud service setup

Function

- design
   - static web
   - interaction web
   - web base app
   - API
- implement
   - development
      - CI/CD
   - host in cloud
- operation
   - health
   - log analysis
   - authentication user
   - accounting
   - advertise
- maintain

Service type

- static web
- interaction web
- device server
- stream server
- API 
- chatbot
- web base app [Progressive web applications](https://budibase.com/blog/web-application-development/)

Tech

- web
   - HTML
      - HTML 5
   - CSS
   - JS
   - Python
- API

## diff -qr dir1 dir2

比對兩目錄

## Ubuntu vi 上下左右变ABCD问题解决方法

#### solution

    sudo apt remove vim-common
    sudo apt install vim

***or***

    edit /etc/vim/vimrc.tiny

set compatible => set nocompatible (solve direct cursor issue) 
 +> set backspace=2 (solve backspace issue)

## ffmpeg totoro

ffmpeg -i totoro.mkv -c:v libx264 -c:a aac ttt.mp4

ffmpeg -i ttt.mp4 -vf subtitles=totoro.mkv:si=1 uuu.mp4

ffmpeg -i totoro.mkv -c:v libx264 -c:a aac  -vf subtitles=totoro.mkv vvv.mp4 

ffmpeg -i ttr1.mp4 -c:v libx264 -c:a aac ttrr1.mp4

ffmpeg -i totoro.mp4 -ss 50:00 -to 55:00 -codec copy ttr2.mp4

ffmpeg -i ttr2.mp4 -c:v libxvid -c:a libmp3lame ttr2.avi

ffmpeg -i ttr2.mp4 -video_size 1920x1080 -c:v mpeg4 -preset superfast -c:a libmp3lame -vtag xvid ttr22.avi

ffmpeg -i ttr2.mp4 -c:v libx264 -pix_fmt yuv420p -crf 24 ttrr2.mov

## git reset --hard HEAD

退兩步 git reset --hard HEAD~2

－－－－－－

git checkout -f some_branch

強制切換到新分支，並放棄本地目前的修改。

## sleep youtube

https://www.youtube.com/watch?v=0BZOl07czVI

https://www.youtube.com/watch?v=VnXM76G2P-c

https://www.youtube.com/watch?v=RxXFPTHyJsI

tw
https://www.youtube.com/watch?v=-BjfCZUdYFw

## 🍀

🍀
