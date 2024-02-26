# micropython REPL

[| ESP32 教學 | MicroPython | micropython REPL | 104 | JIMI陪你玩ROBOT](https://jimirobot.tw/esp32-micropython-tutorial-micropython-repl-104/)

知道 MicroPython 跟我們一般用 C/C++ 
開發嵌入式程式使用上最大的不同是什麼嗎？除了一樣用我們所熟悉的 python 語法撰寫，同時也提供了 REPL(Read Evaluate 
Print Loop) 模式與開發者互動，簡單說就是一個互動式文字界面讓你直接寫 code 在上面，直接回饋程式的內容，不用再經過 
compiler 層層關卡到硬體上才能得知結果，今天這篇就是帶各位朋友了解 MicroPython REPL 的操作與應用。

- ** 快速跳轉 ***

• [1. MicroPython REPL](https://jimirobot.tw/esp32-micropython-tutorial-micropython-repl-104/#1_MicroPython_REPL)
• [2. REPL 基本操作](https://jimirobot.tw/esp32-micropython-tutorial-micropython-repl-104/#2_REPL_%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C)
    ◦ [$ Ctrl+E 快速示範](https://jimirobot.tw/esp32-micropython-tutorial-micropython-repl-104/#$_Ctrl+E_%E5%BF%AB%E9%80%9F%E7%A4%BA%E7%AF%84)
• [3. 總結](https://jimirobot.tw/esp32-micropython-tutorial-micropython-repl-104/#3_%E7%B8%BD%E7%B5%90)

## 1. MicroPython REPL

我們已經在上篇([103 燒錄 MicroPython 韌體](https://jimirobot.tw/esp32-micropython-tutorial-burn-binfile-103/))將對應的韌體燒錄到
 ESP32 硬體平台，只要將 USB 一端接板端，一端連接電腦，開啟電腦的終端機軟體後，就可以開始使用。我們下面用 MobaXterm 
這套終端機軟體來做示範，各位朋友也可以採用像 putty 或 teraterm 等，設定都是類似的。

⇓ 開啟軟體 mobaXterm 軟體，點擊 session，設定新連接方式。

![https://jimirobot.com.tw/image/esp32/104/ps_m1.jpg](https://jimirobot.com.tw/image/esp32/104/ps_m1.jpg)

⇓ 設定為 Serial 連接，指定好 COMx(為 ESP32 連接的編號)，BaudRate 為115200，按下 OK。

![https://jimirobot.com.tw/image/esp32/104/ps_m2.jpg](https://jimirobot.com.tw/image/esp32/104/ps_m2.jpg)

⇓ 就可以看到一連串的開機程序後，熟悉的 Python 命令提示符號就會出現。

![https://jimirobot.com.tw/image/esp32/104/ps_m3.jpg](https://jimirobot.com.tw/image/esp32/104/ps_m3.jpg)

micropython repl

## 2. REPL 基本操作

MicroPython 的 REPL 跟電腦版 python 的類似，有興趣的可以打入 help() 了解一下，這邊我們先來了解一下幾個基本的操作方式：

- Ctrl+D : 將系統 Soft-Restart，也就是軟體重開機。
- Ctrl+C : 中斷目前執行的程式，在我們撰寫程式與測試時很好用。
- Ctrl+E : 進入 Code Paste 模式。 如果要測試一小段的 Code，JIMI哥通常會採用這樣的方式測試，就不用一行一行打字，下面來簡單快速示範。

### $ Ctrl+E 快速示範

⇓ 在 >>> 的提示字元下，按下 Ctrl+E，進入 Code Paste 模式。

![https://jimirobot.com.tw/image/esp32/104/ps_ce1.jpg](https://jimirobot.com.tw/image/esp32/104/ps_ce1.jpg)

⇓ 接著用 notepad 類的軟體打開你剛剛撰寫的 python code (這邊是用 notepad++ 這套軟體)，全選程式碼並複製。

![https://jimirobot.com.tw/image/esp32/104/ps_ce2.jpg](https://jimirobot.com.tw/image/esp32/104/ps_ce2.jpg)

⇓ 接著回到 MobaXterm 的工具，按下滑鼠右鍵，選擇OK貼上。

![https://jimirobot.com.tw/image/esp32/104/ps_ce3.jpg](https://jimirobot.com.tw/image/esp32/104/ps_ce3.jpg)

⇓ 此時就會看到 paste 模式下，程式碼就會依序的貼上，確認 code 文字無誤後，在此模式按下 Ctrl+D，就可以離開，並看到實際執行的結果。

![https://jimirobot.com.tw/image/esp32/104/ps_ce4.jpg](https://jimirobot.com.tw/image/esp32/104/ps_ce4.jpg)

⇓ 在程式執行期間，按下 Ctrl+C 就可以中斷程式，回到 Normal REPL 命令提示下。

![https://jimirobot.com.tw/image/esp32/104/ps_ce5.jpg](https://jimirobot.com.tw/image/esp32/104/ps_ce5.jpg)

有興趣想要練習看看的朋友，可以複製下段程式碼試試，此段程式碼是利用
 ESP32 的 GPIO32 讀取類比值，並透過 IF 判斷是否大於 0.8v，決定 GPIO2 的 LED 燈亮或熄滅，因為 
nodemcu-32s 的硬體板 GPIO32 預設只接到排針，GPIO2 是連接到 
LED，所以可以直接複製來進行練習(當然也可以接上一個可變電阻線路實測)，範例程式碼如下：

`from machine import ADC,Pin
import time
adc0=ADC(Pin(32))
adc0.atten(ADC.ATTN_11DB)  
led0=Pin(2,Pin.OUT)     
try:
    while 1:
        adc_val=(adc0.read()/4095*3.3)
        if adc_val>0.8:
            led0.value(0)
        else:
            led0.value(1)
        print('{}v'.format(adc_val))
        time.sleep(0.5)
except Exception as e:
    print(e)`

## 3. 總結

REPL 模式是我們在使用 MicroPython 
這樣的語言開發時，必備的基本操作技巧，建議大家一定要熟悉，當然除了用 Serial 的方式連接 REPL 外，其實還有一種方式叫 
WebREPL，也就是可以透過 wifi 的方式來操作 python 程式，有興趣的朋友可以到下面網址 [https://github.com/micropython/webrepl](https://github.com/micropython/webrepl) 來安裝到自己的電腦平台上實現，JIMI哥自己比較常用的方式還是透過 USB 接線模式來進行開發，大家可以選擇自己慣用的模式即可，這篇就先講到這裡囉！