# 用Arduino IDE 程式來測試 ESP32 WiFi 和各個腳位的功能

[Ray 的 Arduino 教學 - ESP32 WiFi](https://sites.google.com/view/rayarduino/esp32-wifi)

## 簡介

### 

**ESP32 結合了 WiFi 和藍牙 (Bluetooth Low Energy) 無線操控的功能。本專題用Arduino IDE 程式來測試 ESP32 WiFi 的功能，並用一個 LED 來確認板子上腳位的位置。**

[https://lh6.googleusercontent.com/lb9nm0-iUbJNh2d1eX-U5Tu8krx7s1nXIh3B8at1OlHb5ML9pX1hDsmkY2IeD30kAAQEbTECO7jfuorEX3BjKrAln4kGgRW8IrIJMeTDQXs8wdyuelIL5z19X7ozzewFbg=w1280](https://lh6.googleusercontent.com/lb9nm0-iUbJNh2d1eX-U5Tu8krx7s1nXIh3B8at1OlHb5ML9pX1hDsmkY2IeD30kAAQEbTECO7jfuorEX3BjKrAln4kGgRW8IrIJMeTDQXs8wdyuelIL5z19X7ozzewFbg=w1280)

### 

### ESP32 依其功能的需要，已經開發了很多不同的板子。本專題使用的是 ESP32S。但不同的板子之間只要有標示 ESP-WROOM-32 晶片，應該就可以操作本網頁上各個測試的步驟。

### 

### ESP32 有一個 3.3 V 伏特的穩壓器，可控制進入板子的電壓為 3.3 伏特。另外ESP32 也具有 CP2102 晶片，可以不經過 FTDI ，直接用電腦程式化。

### 

### 板子上有 ENABLE 和 BOOT 兩個按鈕。按下 ENABLE，ESP32 重新開機。當您按住 BOOT 按鈕，ESP32 重新開機並處於接受被程式化的狀態。

### 

**ESP32S 各個腳位的功能，如下圖所示：(本圖摘自 RandomNerdTutorials.com)**

[https://lh6.googleusercontent.com/klK0bvWwknqPLk89ToGX2EJ3_HxZxJPQ0NFmlcohKITYIhBYi_VV8MhijY-oeFW4OVGkJWYQXQuBrrN0VEGODEClmfTNaNrdrIgn9d2vO4AfVYRWnJEWZMkEVgAhtPUqRg=w1280](https://lh6.googleusercontent.com/klK0bvWwknqPLk89ToGX2EJ3_HxZxJPQ0NFmlcohKITYIhBYi_VV8MhijY-oeFW4OVGkJWYQXQuBrrN0VEGODEClmfTNaNrdrIgn9d2vO4AfVYRWnJEWZMkEVgAhtPUqRg=w1280)

## 

## 安裝 ESP 32 板子在 Arduino IDE 裡面：

### 

### 步驟一：確認你電腦裡面 Arduino 是最新版本。較舊的 Arduino 版本，無法安裝 ESP32 開發板。

### 

### 步驟二：打開電腦 Arduino 。點選工具 > 開發板 ＞ 開發板管理員。輸入 ESP32。螢幕出現 "ESP32 by Espressif Systems ..."，選擇最新版本，並按安裝。

### 

### 步驟三：將 ESP32 USB插入電腦內。點選 Arduino 工具 ＞ 開發版 ＞ ESP32 Arduino ＞ DOIT ESP32 DEVKIT V1。若您的開發版不是 ESP32S，此步驟請選擇相對應您板子的選項。

### 

**步驟四：點選 Arduino 工具 ＞ 序列埠。勾選出現的 COM port。如果序列埠一直停在 COM Port not found/not available，請再等一會兒，電腦會自己找到 Arduino 軟體系統內的 driver 並安裝。要是一直沒有出現 COM port，表示你電腦裡面沒有 CP2102 driver。可以 Google “CP2102 driver download”，或至 [Silicon Labs 網站](https://www.google.com/url?q=https%3A%2F%2Fwww.silabs.com%2Fdevelopers%2Fusb-to-uart-bridge-vcp-drivers&sa=D&sntz=1&usg=AFQjCNEdlkkNsG-Ni9omtgVNmaYbk6aDLQ) 下載。另外一個可能的原因是: 你的USB傳輸線，只有充電的功能，沒有資料傳輸的功能。換一條有資料傳輸功能的USB傳輸線即可。**

## 

## 讓 ESP32 掃描一下，您所處環境的 WiFi:

### 

### 確認上個步驟，已將 ESP32 板子安裝在 Arduino IDE 裡面。用 USB 傳輸線，連接 ESP 32 到你的電腦。確認 COM Port 已經連上。

### 

### 點選 Arduino 檔案 ＞ 範例 ＞WiFi ＞WiFiScan 。螢幕上會出現程式 WiFiScan。點選 Arduino 上傳按鈕，Arduino 會先編譯程式並自動上傳程式到 ESP32 板子上。(如 WiFiScan 程式找不到，可複製貼上下方程式於 Arduino 內。)

### 

### 如果程式上傳失敗，出現訊息 “Failed to connect to ESP32...”，這表示你的 ESP32 不處於可以被上傳指令的模式。此時只要按住板子上的 BOOT 按鈕，再點 Arduino 上傳鈕，當編譯訊息出現 “Connecting...” 的時候，再放開 BOOT 按鈕。如此，應可成功上傳程式。

### 

### 待程式上傳成功後，打開 Arduino 序列埠螢幕，調整 baud rate 為 115200。再按一下板子上的 ENABLE 按鈕，應該從序列埠螢幕上，就可以看到 ESP32 掃描到的附近 WiFi 網路。

### 

**WiFiScan 程式及操作 YouTube 影片:**

## 

## 結合 ESP32 和一個 LED ，用 Arduino IDE 程式讓 LED 閃爍。

### 

### 材料: ESP32S 開發版，330 歐姆電阻， LED，麵包版，電線。

### 

### 如下方接線圖。LED 長腳接 ESP32 的 GPIO 23。LED 短腳接一個 330 歐姆的電阻，電阻另一端接 Arduino GND。 不同的板子，其接腳 (pinout) 不同。確認在你的板子上 GPIO 23 是哪一根 pin。以本專題 ESP32S 為例，GPIO 23 在右邊第一根。

### 

### 上傳程式前，確認你的 Arduino 開發板是否正確，COM Port是否接上。本專題開發版是 "DOIT ESP32 DEVKIT V1"。按下 Arduino 上傳程式鈕後，再按住 ESP32 BOOT 鈕。待程式編驛訊息出現 "Connecting..." 後，再鬆開 BOOT 鈕。如此可讓程式順利上傳到 ESP 32。

### 

**程式上傳成功後，就可看到 LED 每一秒鐘閃爍一次。**

[https://lh3.googleusercontent.com/Na7nJGPIl275q_QGPiMJraIv6FeMq1-Mbt2CJbLt7qMXHntCj9mi9P0gtQ9UNQxK5qQW6aVT17gJCZm5lesKGqKCDrTtPV-H5VI3mZijzDrPsXqV-sbjFZt-AsHAzunsuA=w1280](https://lh3.googleusercontent.com/Na7nJGPIl275q_QGPiMJraIv6FeMq1-Mbt2CJbLt7qMXHntCj9mi9P0gtQ9UNQxK5qQW6aVT17gJCZm5lesKGqKCDrTtPV-H5VI3mZijzDrPsXqV-sbjFZt-AsHAzunsuA=w1280)

### 

**LED 閃爍 接線圖及程式**

## 

## 創客點子

### 

### 用 LED 或蜂鳴器 (buzzer)， 試試 ESP32 上的其他GPIO 腳位。