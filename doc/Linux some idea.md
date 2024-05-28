
# ubuntu

More in notion

https://owl-nest.notion.site/Linux-139f56a430b14ef5b5e12f0850561d33

## shell
p(shell)

## OBS UVC hdmi on pc

# OBS studio
for HDMI capture
install app in app store, OBS studio

# add source
* for no video show out
add these source
video, video capture device (V4L2)
audio, audio input capture (Plus Audio)

# open monitor of audio
* for no sound from pc speak output
in audio mixer/audio input capture/setting/advanced audio preperities/(mic/aux) audio monitoring/
set to monitor and output

# full screen
in preview area/right click mouse/full screen project(preview)/display 1

## pdf to txt


1. First, type the following in Terminal and hit "Enter"

    sudo apt install poppler-utils
    [Works for Debian, Mint, Ubuntu, etc.]

2. The next command is the one for conversion, and it should look like this:

    pdftotext -layout source.pdf target.txt   
    [Source is the original PDF and Target is the final output]

https://pdf.wondershare.com/pdf-knowledge/pdf-to-text-linux.html

## 拼音 ubuntu

in ubuntu

1.sudo apt -y install ibus-pinyin
2. reboot
3. setting/lang/add ime/pinyin
done


## exfat


$ sudo add-apt-repository universe

$ sudo apt update
$ sudo apt install exfat-fuse exfat-utils
or
$ sudo apt install exfatprogs

https://www.ltsplus.com/linux/ubuntu-mount-exfat-usb

## ffmpeg

ffmpeg -i totoro.mkv -c:v libx264 -c:a aac ttt.mp4


ffmpeg -i ttt.mp4 -vf subtitles=totoro.mkv:si=1 uuu.mp4


ffmpeg -i totoro.mkv -c:v libx264 -c:a aac  -vf subtitles=totoro.mkv vvv.mp4 


ffmpeg -i ttr1.mp4 -c:v libx264 -c:a aac ttrr1.mp4

ffmpeg -i totoro.mp4 -ss 50:00 -to 55:00 -codec copy ttr2.mp4

ffmpeg -i ttr2.mp4 -c:v libxvid -c:a libmp3lame ttr2.avi

ffmpeg -i ttr2.mp4 -video_size 1920x1080 -c:v mpeg4 -preset superfast -c:a libmp3lame -vtag xvid ttr22.avi

ffmpeg -i ttr2.mp4 -c:v libx264 -pix_fmt yuv420p -crf 24 ttrr2.mov

ffmpeg
https://youtu.be/ojhzJKhkuPE

ffmpeg -i sleepsound.m4a -ss 00:00:00 -t 01:00:00 -c:a copy output1.m4a

ffmpeg -i sleepsoundsmall.m4a -codec:a libmp3lame sleepsoundsmall.mp3

## ddns

https://id:pass@domains.google.com/nic/update?hostname=boy.jwint.net&myip=114.32.51.54


------------------------------------

支援 Google Domains 的 DDclient

ddclient.conf 項目：

ssl=yes

protocol=googledomains

login=generated_username

password=generated_password

your_resource.your_domain.tld

------------------------------------------
不支援 Google Domains 的 DDclient

protocol=dyndns2

use=web

server=domains.google.com

ssl=yes

login=generated_username

password=generated_password

your_resource.your_domain.tld

## mount iso

sudo mkdir /media/iso
sudo mount -o loop path/to/iso/file/YOUR_ISO_FILE.ISO /media/iso
sudo umount /media/iso


## KVM

https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/

## rtl8812au

- git clone https://github.com/vNZNaaxjiPcoUd/rtl8812au.git
    - git clone https://github.com/aircrack-ng/rtl8812au
- cd dir
- make
- sudo make install
- reboot

------------------------------
my fork https://github.com/JW1213812138/rtl8812au.git
github@jwint.net//npry


## yt-dlp

p(youtubedl)

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

## rtl8812au

- git clone https://github.com/JW1213812138/rtl8812au.git
- cd dir
- make
- make install
- reboot

------------------------------
my fork https://github.com/JW1213812138/rtl8812au.git
github@jwint.net//npry

-----
- git clone https://github.com/aircrack-ng/rtl8812au

## linux tip

https://share.jwint.net/doc/Linux%20Tip.html
