# 如何安裝及設定ESP32的開發環境

[【ESP32專欄】如何安裝及設定ESP32的開發環境 - 引領創新的科技實作社群媒體](https://makerpro.cc/2020/06/how-to-install-and-configure-esp32-development-environment/)

[上一篇文章](https://makerpro.cc/2020/06/esp32-review-and-why-recommend-nodemcu-32s/)介紹了ESP32的特點與種類，並與目前常見的UNO、上一代的ESP8266進行比較，也說明了推薦NodeMCU的理由。如果你已決定採用ESP32並已入手，那就接下來當然就是要來安裝和設定ESP32的開發環境了，本文將帶你搞定這些動作。

### **ESP32 Arduino IDE開發核心安裝**

若還沒安裝Arduino IDE，必須先至原廠網站下載並安裝，請依照以下步驟完成安裝。

### **1. 下載Arduino IDE**

請至[https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)網站下載，筆者比較建議直接下載免安裝檔（如下圖：Windows ZIP for non admin install），解壓縮後直接可用。

![https://makerpro.cc/wp-content/uploads/2020/06/7.png](https://makerpro.cc/wp-content/uploads/2020/06/7.png)

此處選擇Just Download，另外一個選項則是捐獻Arduino基金會。

![https://makerpro.cc/wp-content/uploads/2020/06/8.png](https://makerpro.cc/wp-content/uploads/2020/06/8.png)

下載完成後，找到下載的壓縮檔，選擇解「壓縮所有檔案」，直接將壓縮檔解壓縮到C:\或D:\跟目錄下，例如筆者常放在C:\之下。

![https://makerpro.cc/wp-content/uploads/2020/06/9.png](https://makerpro.cc/wp-content/uploads/2020/06/9.png)

等候3~5分鐘解壓縮完畢之後，我們可以在C:\Arduino1.8.x下找到主程式Arduino.exe，這樣主程式就算安裝完畢，接下來準備安裝ESP32開發核心。

![https://makerpro.cc/wp-content/uploads/2020/06/10.png](https://makerpro.cc/wp-content/uploads/2020/06/10.png)

### **2. 安裝ESP32開發核心**

至C:\arduino1.8.x目錄中，找到主程式arduino.exe，直接點兩下執行主程式，開啟主程式後，選擇功能表的檔案/偏好設定，開啟偏好設定視窗。

![https://makerpro.cc/wp-content/uploads/2020/06/11.png](https://makerpro.cc/wp-content/uploads/2020/06/11.png)

在偏好設定視窗中下方的額外開發板管理員輸入以下網址後，按確定。[https://dl.espressif.com/dl/package_esp32_index.json](https://dl.espressif.com/dl/package_esp32_index.json)

接著點選工具/開發板/開發板管理員，即會出現開發板管理員視窗，在開發板管理員視窗中，輸入關鍵字ESP32後，即可篩選出ESP32核心套件，目前（2020/02月）最新版本為1.0.4，直接點選右側的安裝按鈕，並等候5~10分鐘讓系統下載核心套件並完成安裝，最後再關閉開發板管理員視窗。

![https://makerpro.cc/wp-content/uploads/2020/06/12.png](https://makerpro.cc/wp-content/uploads/2020/06/12.png)

完成以上步驟，再次選擇工具/開發板，並往下拉即可在下方找到最新的ESP32系列主板，接下來就看您買的是哪一種ESP32主板來選擇。

![https://makerpro.cc/wp-content/uploads/2020/06/13.png](https://makerpro.cc/wp-content/uploads/2020/06/13.png)

若您購買的是NodeMCU-32s，選擇正確的版本後會出現以下畫面，除了序列埠稍後要更改之外，其餘都請保留預設值不要更動。

![https://makerpro.cc/wp-content/uploads/2020/06/14.png](https://makerpro.cc/wp-content/uploads/2020/06/14.png)

### **ESP32 USB驅動程式安裝**

完成環境設定後，我們將購買的ESP32插入USB，會發現需要安裝USB驅動程式，大部分的ESP32都是採用CP210x與電腦溝通並上傳程式，傳統UNO則是CH340，目前windows或MAC系統都沒有內建驅動，因此當您接上ESP32的USB後，還需要安裝驅動。

開啟檔案總管，並在本機上按右鍵/管理，可以進入裝置管理員。由於尚未安裝驅動程式，因此會列在其他裝置，使用者應該能找到這個前方有驚嘆號「!」的CP2102 USB to UART裝置，就是Arduino ESP32負責讓訊號轉成USB來與電腦溝通上傳程式碼。

![https://makerpro.cc/wp-content/uploads/2020/06/15.png](https://makerpro.cc/wp-content/uploads/2020/06/15.png)

由於剛剛下載的Arduino 資料夾內已經有CP210x驅動（MAC電腦請至[CP210x原廠網站下載](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) ），因此安裝時只需要指定驅動程式路徑到Arduino安裝資料夾即可，首先快點兩次CP2102 USB to UART裝置，開啟內容視窗，點選更新驅動程式。

點選瀏覽電腦上的驅動程式軟體。

![https://makerpro.cc/wp-content/uploads/2020/06/16.png](https://makerpro.cc/wp-content/uploads/2020/06/16.png)

![https://makerpro.cc/wp-content/uploads/2020/06/17.png](https://makerpro.cc/wp-content/uploads/2020/06/17.png)

點選瀏覽，然後在瀏覽資料夾視窗中選擇一開始您解壓縮Arduino資料夾位置，例如C:\Arduino-1.8.12\driver資料夾，按下確定後，點選下一步。

![https://makerpro.cc/wp-content/uploads/2020/06/18.png](https://makerpro.cc/wp-content/uploads/2020/06/18.png)

稍等一會電腦即會找到驅動程式，並完成安裝。

![https://makerpro.cc/wp-content/uploads/2020/06/19.png](https://makerpro.cc/wp-content/uploads/2020/06/19.png)

安裝正確的話，前方的驚嘆號會消失，並會將裝置放在連接埠下，此時要記得紀錄一下最後方的COM編號喔。

![https://makerpro.cc/wp-content/uploads/2020/06/20.png](https://makerpro.cc/wp-content/uploads/2020/06/20.png)

完成驅動程式安裝，再回到Arduino IDE中，此時在工具/開發板的序列埠選擇取得正確的COM編號（本例為COM3）。

![https://makerpro.cc/wp-content/uploads/2020/06/21.png](https://makerpro.cc/wp-content/uploads/2020/06/21.png)

### **程式上傳測試HelloWorld**

完成環境設定後，就可以來寫程式測試看看，由於ESP32的語法幾乎與Arduino UNO相同 ，因此這裡就先用HelloWorld先做個簡單練習。

首先在Setup()中輸入Serial.begin(115200); 
此為宣告序列傳輸鮑率是115200（Baud），接著在Loop()中輸入Serial.println(“Hello World!”); 
及delay(1000);，代表每1000ms（=1 second）就會在序列視窗印出Hello World!。完整程式如下圖。

![https://makerpro.cc/wp-content/uploads/2020/06/22.png](https://makerpro.cc/wp-content/uploads/2020/06/22.png)

接著我們將程式上傳到ESP32，點選左上的→符號，先會跳出一個存檔視窗，我們先按取消略過存檔，然後等候下方訊息列出現連線訊息時：
Connecting……____……___……

長按ESP32主板上右下的IO0按鈕（有些會標示為BOOT），直到出現上傳開始再放開IO0，此按鈕為工作模式切換鈕，上傳程式時都需要按這個按鈕將ESP32的「工作模式」轉換成「下載模式」，不過有些ESP32已經取消這個機制，稱為一鍵下載（或一鍵燒錄）。

![https://makerpro.cc/wp-content/uploads/2020/06/23.png](https://makerpro.cc/wp-content/uploads/2020/06/23.png)

程式更新中，會出現程式上傳的%數，提示使用者程式上傳進度。

![https://makerpro.cc/wp-content/uploads/2020/06/24.png](https://makerpro.cc/wp-content/uploads/2020/06/24.png)

上傳完畢則會出現Hard resetting via RTS pin…，意思是利用左側的RST按鈕重開機，讓ESP32重新開機來執行程式，不過一般按RST這個步驟是可以省略。

![https://makerpro.cc/wp-content/uploads/2020/06/25.png](https://makerpro.cc/wp-content/uploads/2020/06/25.png)

完成HelloWorld程式上傳後，點選右上角的放大鏡圖示開啟序列視窗，即可看到一秒一次的「HelloWorld!」出現。這裡要注意的是序列視窗的baud率必須與Serial.begin的數字相同，才有辦法顯示，否則可能會空白，或是亂碼。

![https://makerpro.cc/wp-content/uploads/2020/06/26.png](https://makerpro.cc/wp-content/uploads/2020/06/26.png)

經由上述的說明，ESP32確實可以由Arduino IDE進行開發，而且語法、感測器都相同，非常建議立即無痛移轉到ESP32陣營，大量的WiFi及藍牙專案等著您慢慢開發，由於篇幅有限，後續的WiFi及藍牙應用，將於下一期再詳述，敬啟期待。

![https://makerpro.cc/wp-content/uploads/2020/06/27.png](https://makerpro.cc/wp-content/uploads/2020/06/27.png)