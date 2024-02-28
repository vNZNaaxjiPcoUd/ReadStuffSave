# Andriod Studio 從入門到進入狀況

1. 沒學過Android程式，對Android程式有興趣的人
2. 稍微學過Android程式，想要重新再加強基本觀念的人
3. 我只是路過，只不過想看看而已，哪那麼多理由？

不管是什麼樣的人，如果對我的文章有疑問或想要進一步補充的，都歡迎在下面留言一起討論學習。

- -----------------------------可愛的分隔線又來了------------------------------

接下來進入正題了，要學Android應用程式，第一件事當然就是要先安裝程式，Android官方建議寫Android程式要用Android Studio編寫，於是今天我們就來下載安裝Android Studio吧！

要安裝Android Studio主要需要安裝下列三者1.安裝 Java 開發工具包(Java Development Kit , JDK)2.安裝 Android Studio3.安裝Android 軟體開發套件 (Software Development Kit, SDK)

1.安裝 Java 開發工具包(Java Development Kit , JDK)

- 至[Oracle官網](http://www.oracle.com/technetwork/java/javase/downloads/index.html)下載適當的JDK版本，點選【DOWNLOAD】
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694KldR7GvVCe.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694KldR7GvVCe.png)
    
- 選擇接受(Accept License Agreement)，以Windows作業系統為例，下載32或64位元的安裝檔Windows x86 = 32位元Windows x64 = 64位元如果不知道自己電腦的是多少位元，把滑鼠移到「我的電腦」點選右鍵可以看到
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694Tpvcz20gsK.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694Tpvcz20gsK.png)
    
- 根據作業系統，下載下來安裝即可

2.安裝 Android Studio

- 到 [Android Developer官網](https://developer.android.com/studio/index.html) 下載Android Studio
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694lhQD9Aw1Xf.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694lhQD9Aw1Xf.png)
    
- 你必須勾選已閱讀並同意授權條款, 然後才能按一下 Download Android Studio 鈕, 就會開始下載檔案。
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694mDptE5cTz3.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694mDptE5cTz3.png)
    
- 執行下載的Android Studio安裝檔，接著一直點擊「Next 」直到下圖步驟，設定Android Studio 與 Android SDK 的安裝路徑，點擊「Next」。
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694xbk5OjjBNc.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694xbk5OjjBNc.png)
    
- 設定 Android Studio 在開始功能表中的項目名稱，使用預設即可，點擊「Install」進行安裝。
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694pilLklUugx.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694pilLklUugx.png)
    
- 安裝完成後，點選Next就會進入下面的畫面，可勾選「Start Android Studio」，點擊「Finish」後會直接啟動 Android Studio。
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694EynMp10ufh.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694EynMp10ufh.png)
    
- 第一次執行 Android Studio 時會提示，是否要從以前的版本導入設置，沒有的話使用預設，點擊「OK」
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694L7Rt9eGOoc.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694L7Rt9eGOoc.png)
    

3.安裝Android 軟體開發套件 (Software Development Kit, SDK)

- 看到這畫面代表你Android Studio已經安裝好了，接著要開始安裝Android SDK，繼續點擊【Next】
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694OUXQehuTwH.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694OUXQehuTwH.png)
    
- 安裝類型選擇「Standard」，點擊【Next】
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/201056947FBfRQ5Lhk.png](https://ithelp.ithome.com.tw/upload/images/20181007/201056947FBfRQ5Lhk.png)
    
- 選擇編輯器的樣式，這是新版的Andriod Studio才有
- 原本的畫面(點擊白色區域的畫面)
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694PvkTDS0J4W.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694PvkTDS0J4W.png)
    
- 點擊黑色區域的畫面
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694hCMwGlkeHR.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694hCMwGlkeHR.png)
    
- 選好後點選Next進入以下畫面，點選Finish按鈕
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694Jo0j6UIJv2.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694Jo0j6UIJv2.png)
    
- 接著會自動開始下載Android SDK相關套件（只會下載最新版），這邊等待時候取決於你的網路速度。
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694uuLoW8tMSC.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694uuLoW8tMSC.png)
    
- 點選Show Details會顯示下載的檔案名稱，當Android SDK下載完畢後最下方會顯示「Done」，接著點擊「Finish」
    
    ![https://ithelp.ithome.com.tw/upload/images/20181007/20105694g0HeiOvg3p.png](https://ithelp.ithome.com.tw/upload/images/20181007/20105694g0HeiOvg3p.png)
    

參考資料[【Android】模擬器Android Studio安裝教學 從0到1](http://learnexp.tw/%E3%80%90android%E3%80%91android-studio%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8-%E5%BE%9E0%E5%88%B01/)

- [留言](https://ithelp.ithome.com.tw/articles/10200176#reply)
- [追蹤](https://ithelp.ithome.com.tw/users/login)
- [檢舉](https://ithelp.ithome.com.tw/users/login)
- 
- 
- 

**[上一篇**[Day 00] 前言 - 心情隨筆](https://ithelp.ithome.com.tw/articles/10200150)

**[下一篇**[Day 02] 我的第一個Android程式 - Hello Android!](https://ithelp.ithome.com.tw/articles/10200466)

**系列文**

**[[Andriod] Andriod Studio 從入門到進入狀況](https://ithelp.ithome.com.tw/users/20105694/ironman/1642)** 共 33 篇

**目錄**

[RSS系列文](https://ithelp.ithome.com.tw/rss/series/1642)

[訂閱系列文](https://ithelp.ithome.com.tw/users/login)

141 人訂閱

1. 29[[Day 28] 我的第一個Android程式 - BMI程式設計(十七) 從其他頁面帶資料回來](https://ithelp.ithome.com.tw/articles/10207667)
2. 30[[Day 29] 我的第一個Android程式 - BMI程式設計(十八) 從其他頁面帶資料回來(二)](https://ithelp.ithome.com.tw/articles/10207911)
3. 31[[Day 30] Android程式設計完結篇 - 改變API版本的方式(一)](https://ithelp.ithome.com.tw/articles/10208200)
4. 32[[Day 31] Android程式設計完結篇 - 改變API版本的方式(二)](https://ithelp.ithome.com.tw/articles/10208404)
5. 33[[Day 32] Android程式設計真的完結篇 - 來個閒聊結束吧](https://ithelp.ithome.com.tw/articles/10208611)

[完整目錄](https://ithelp.ithome.com.tw/users/20105694/ironman/1642)

[[Andriod] Andriod Studio 從入門到進入狀況](https://ithelp.ithome.com.tw/users/20105694/ironman/1642)