# Ventoy – 免費USB多重系統選單開機碟的新世代製作工具

[Ventoy - 免費USB多重系統選單開機碟的新世代製作工具 - 挨踢路人甲](https://walker-a.com/archives/6571)

自從雲端與隨身碟普及後，光碟的使用率就一直下降中，連安裝也都使用虛擬光碟方式來掛載ISO檔，為了小巧化，我也都使用迷你機殼且不安裝光碟機，如果你的和我一樣，電腦或筆電沒有裝光碟機，當想要重灌系統Windows 7/8/10或Linux時，怎麼辦？這時USB隨身碟將是你的救星，讓挨踢路人甲來告訴你使用 Ventoy 來製作多重系統選單的USB安裝隨身碟。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-01.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-01.jpg?ssl=1)

> 用 Telegram 訂閱【挨踢路人甲】最新文章：https://t.me/itwshare
> 

製作USB安裝碟的工具不少，之前微軟有推出一套「[Windows 7 USB/DVD Download Tool](https://www.microsoftstore.com/store/msusa/html/pbPage.Help_Win7_usbdvd_dwnTool)」工具程式，此工具主要是將ISO映像檔轉至USB隨身碟或光碟上，被轉移的媒體會建立可啟動的bootable，這樣就可以使用USB隨身碟來安裝Windows系統。至於筆者常用的是使用[麻雀雖小五臟俱全的USB開機工具 Rufus](https://walker-a.com/archives/5865)，還可支援直接下載 Windows 10，如果只有有開機隨身碟的使用需求或單系統的安裝，當然Rufus絕對是首選。

Ventoy是一套新興的開機啟動載入的碟製工具，就是讓USB磁碟擁有多重開機選單的功能，可說是新世代的USB重灌工具，Ventoy會為USB製作出兩個分割區，一個分割區放引導開機程式，另一個來放不同系統的iso檔案，你只需要把 ISO/WIM/IMG/VHD(x)/EFI 等類型的文件拷貝到USB碟內就可以啟動了選單了，無需其他的操作。

Ventoy是一套開源軟體， 支援 Legacy BIOS 與 UEFI 模式，且讓沒有相關背景知識的使用者也可輕鬆多重開機隨身碟，因此在 Github 上釋出，來看看挨踢路人甲的操作教學。首先到[官方網站的下載頁面](https://www.ventoy.net/en/download.html)即可看到檔案清單，筆者使用的是Windows 10，所以下載對應的壓縮檔。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-02.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-02.jpg?ssl=1)

目前的最新版本是1.0.32。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-04.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-04.jpg?ssl=1)

解壓縮後找到目錄內的Ventoy2Disk.exe來執行，筆者習慣以滑鼠右鍵的「以系統管理員身分執行」。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-05.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-05.jpg?ssl=1)

執行後只有一個視窗畫面，一般來說會自動抓取目前USB裝置的資訊，下圖自動偵測到筆者的32G隨身碟，沒有的話請插入USB隨身碟吧！

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-06.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-06.jpg?ssl=1)

不喜歡英文介面，也可以改成中文。

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-07.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-07.jpg?ssl=1)

製作時很簡單，只要按下〔安裝〕即可。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-08.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-08.jpg?ssl=1)

接著會詢問隨身碟背格式化的警告訊息，由於製作過程有兩個分割區，所以詢問兩次。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-09.gif?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-09.gif?ssl=1)

可以看到製作中的過程進度，很不用多久時間，很快就完成。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-11.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-11.jpg?ssl=1)

當看到此視窗表示多重開機隨身碟已經製作完成。

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-12.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-12.jpg?ssl=1)

此時畫面上會顯示目前隨身碟所安裝的軟體版本，日後有看到新版職接案下〔升級〕即可。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-13.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-13.jpg?ssl=1)

來驗證一下，使用磁碟管理來查看，發現隨身碟上有兩個分割區，一個是Ventoy分割區，就是ISO所要存放的位置，另一個是佔比較小的VentoyEFI分割區，這個分割區主要是來開機用的。

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-14.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-14.jpg?ssl=1)

最後要將作業系統的ISO映像檔放入Ventoy分割區內，也可建立資料夾，Ventoy程式會讀取此磁碟下所有檔案，不過有點要注意，不管是檔案或資料夾名稱，都不可以有空白或中文字元。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-16.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-16.jpg?ssl=1)

終於來到結果測試的步驟了，準備一台PC且將剛剛製作的隨身碟插入機器的USB孔上。

![https://i2.wp.com/image.walker-a.com/2018/08/rufus/ru-15.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2018/08/rufus/ru-15.jpg?ssl=1)

接著開機進入電腦BIOS內調整開機順序的設定，每個電腦的BIOS設定都有些差異，下圖是我測試機器的BIOS設定的畫面，重點就將USB隨身碟調成開機時的第一個啟動裝置。

![https://i2.wp.com/image.walker-a.com/2016/01/ros/ros-19.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2016/01/ros/ros-19.jpg?ssl=1)

果然出現選單畫面，只要偵測到映像檔都會出現在選單上，如下圖筆者刻意放入Office 2016的img檔，結果被撈出變成選單了（第二項）。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-17.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-17.jpg?ssl=1)

比者選擇Windows 10 2004版的映象檔來安裝。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-18.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-18.jpg?ssl=1)

開始進入Windows 10的安裝過程，因為第一次進入如同一個全新的Windows 10安裝環境，之後的動作如同一般Windows安裝方式。

![https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-19.jpg?ssl=1](https://i1.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-19.jpg?ssl=1)

Ventoy選單畫面下方有幾個功能快速鍵，F1(Memdisk)是使用記憶體來提高成功安裝的機率，一般是從隨身碟中來讀取ISO檔，若開起 Memdisk 模式後，會先將 ISO 中的讀到至建立的虛擬記憶體磁碟中再執行，對於老舊的機器是個不錯的方式。

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-20.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-20.jpg?ssl=1)

F2(Power)就是重新啟動電腦或關機，不多解釋。F3(TreeView)就是檢視隨身碟中的ISO映像檔詳細資訊，此時也會看到資料夾的資訊。

![https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-21.jpg?ssl=1](https://i0.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-21.jpg?ssl=1)

F4(Localboot)是使用本機開機，F5(Tools)是內建的一些工具，如設定螢幕解析度、文字或圖形介面模式的選單、UEFI等。

![https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-22.jpg?ssl=1](https://i2.wp.com/image.walker-a.com/2021/01/ventoy/ventoy-22.jpg?ssl=1)