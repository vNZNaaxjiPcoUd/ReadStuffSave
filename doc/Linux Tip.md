Linux Tip
=========

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
