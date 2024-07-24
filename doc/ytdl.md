yt-dlp
======


    sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp

    sudo chmod a+rx yt-dlp

    wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp

    chmod a+rx yt-dlp

-F 	列出所有可供下載的格式及格式程式碼

-f [FORMAT] 	指定格式程式碼



-F 	列出所有可供下載的格式及格式程式碼

-f [FORMAT] 	指定格式程式碼

通常1080p以上品質的影片並不會自帶聲音
    所以要額外多加下載音訊檔案
    選定你想要的影片和音訊內容
    在2者之間的ID加上 + 這個符號
    示範如下

    yt-dlp -f 303+251 https://youtu.be/mimLMJO5o9o


--extract-audio 	將影片檔案轉換為純音訊檔案

--audio-format [FORMAT] 	指定音訊格式 目前支援 mp3 / m4a / opus / wav / aac / flac / vorbis

--recode-video [FORMAT] 	指定影片格式 目前支援 mp4 / flv / ogg / webm / mkv / avi

--embed-subs 	嵌入字幕至影片中 僅適用於mp4 / webm / mkv

--concurrent-fragments [N] 	
    多線程下載 可以指定你想要的線程數
    如不使用此指令 預設線程數為1

--version 	確認當前yt-dlp版本

--update 	更新yt-dlp

--output 'X:\[PATH]' 	指定檔案輸出位置




    wget https://yt-dl.org/downloads/latest/youtube-dl

    chmod +x youtube-dl

    youtube-dl

    ./youtube-dl -f 22 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PLATwx1z00HscKbq4ImEJrOh_7EsAtv-iZ;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 

https://youtube.com/playlist?list=PLATwx1z00HscKbq4ImEJrOh_7EsAtv-iZ

https://www.youtube.com/watch?v=D8K8nbposnI

    ./youtube-dl -F https://www.youtube.com/watch?v=D8K8nbposnI


https://www.youtube.com/playlist?list=PLzNcE0R_T2fpJgrWKNyrsryxJQ4NkRgTq

    ./youtube-dl -f 251 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PL0jbufV9LjGrPNm4wCO85XCtAKLyQcEjc;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 



https://www.youtube.com/watch?v=nWb_X3ZJQjw&list=PLDgLLnSBXR_MdsJ_b_lXNKU9y8dTJZU08

    ./youtube-dl -f 140 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PLDgLLnSBXR_MEiSCD8RDFPgNoCqkZPQz0;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; sleep 1; echo $'\07'; sleep 1; echo $'\07';


    ./youtube-dl -f 140 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=RD2nry60MCU8U;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 

https://www.youtube.com/watch?v=2nry60MCU8U&list=RD2nry60MCU8U


p(youtubedl)


https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#readme

