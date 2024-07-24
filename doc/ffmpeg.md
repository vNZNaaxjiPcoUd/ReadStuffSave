ffmpeg
======

## merge yutube video audio

video 160 (-f 160)

audio 140 (-f 140)

    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a aac -map 0:v -map 1:a output.mp4


p(ffmpeg)

# to mp3
    ffmpeg -i audio.ogg -acodec mp3 newfile.mp3

# to mp4
    ffmpeg -i totoro.mkv -c:v libx264 -c:a aac ttt.mp4

# handle totoro

    ffmpeg -i ttt.mp4 -vf subtitles=totoro.mkv:si=1 uuu.mp4


    ffmpeg -i totoro.mkv -c:v libx264 -c:a aac  -vf subtitles=totoro.mkv vvv.mp4 


    ffmpeg -i ttr1.mp4 -c:v libx264 -c:a aac ttrr1.mp4

    ffmpeg -i totoro.mp4 -ss 50:00 -to 55:00 -codec copy ttr2.mp4

    ffmpeg -i ttr2.mp4 -c:v libxvid -c:a libmp3lame ttr2.avi

    ffmpeg -i ttr2.mp4 -video_size 1920x1080 -c:v mpeg4 -preset superfast -c:a libmp3lame -vtag xvid ttr22.avi

# to mov
    ffmpeg -i ttr2.mp4 -c:v libx264 -pix_fmt yuv420p -crf 24 ttrr2.mov

https://youtu.be/ojhzJKhkuPE

# cut audio
    ffmpeg -i sleepsound.m4a -ss 00:00:00 -t 01:00:00 -c:a copy output1.m4a

# to mp3
    ffmpeg -i sleepsoundsmall.m4a -codec:a libmp3lame sleepsoundsmall.mp3

