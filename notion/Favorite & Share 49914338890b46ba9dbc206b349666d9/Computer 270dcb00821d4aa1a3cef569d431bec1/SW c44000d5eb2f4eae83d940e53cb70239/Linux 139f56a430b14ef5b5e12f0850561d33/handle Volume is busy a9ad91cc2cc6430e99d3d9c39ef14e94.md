# handle Volume is busy

Volume is busy
(unmount）USB 隨身碟時，若出現 Volume is busy 的訊該如何解決。

在 Linux 系統上，當 USB 隨身碟使用完要準備拔除的時候，都要先進行卸載（unmount）的動作，而有時候在執行卸載動作時，會出現「Volume is busy」的訊息，無法順利卸載 USB 隨身碟。

Volume is busy

以下介紹該如何處理這樣的狀況。
查詢使用掛載路徑的行程

通常出現無法順利卸載 USB 隨身碟的狀況，都是因為系統上還有某個行程正在使用該 USB 隨身碟，我們可以利用 fuser 指令查詢是哪個行程正在使用它：

# 查詢使用掛載路徑的行程

fuser -m /media/seal/TS8G

/media/seal/TS8G:     3567

知道行程的 PID 之後，再用 ps 查出行程的指令名稱：

# 以 PID 查詢行程的指令

ps -xq 3567

PID TTY      STAT   TIME COMMAND
3567 tty2     Sl+    0:28 nautilus-desktop

查出來的結果顯示目前正在使用 USB 隨身碟的就是 nautilus-desktop 這個程式。
強制中止使用隨身碟的行程

若是想要強制中止使用 USB 隨身碟的行程，可以使用 kill 指令，並指定要強制中止的 PID：

# 強制中止指定行程

kill -9 3567

或是使用 fuser 配合 -k 參數，強制中止正在使用指定掛載位置的行程：

# 中止正在使用指定位置的行程

fuser -m -v -i -k /media/seal/TS8G

執行之後它會詢問是否要強制中止指定的行程，選擇 y 即可將正在使用 USB 隨身碟的行程砍掉。

[https://blog.gtwang.org/linux/linux-unmount-usb-drive-volume-is-busy-solution/](https://blog.gtwang.org/linux/linux-unmount-usb-drive-volume-is-busy-solution/)