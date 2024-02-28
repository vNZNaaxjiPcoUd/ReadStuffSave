# arp & ping

List IP by shell
使用 ping 與 arp 指令快速清查區域網路的電腦與網路設備，建立 IP 位址與網路卡 MAC 卡號對應表。

對於網路管理者（網管）來說，掃描區域網路設備、取得所有電腦的 IP 位址與 MAC 卡號對應表是基本的技能，而且也是一項時常需要做的工作，如果剛好臨時遇到需要掃描 IP 與 MAC 卡號，手上又沒有適合的軟體時，就可以使用各種作業系統都有內建的 ping 與 arp 指令來處理，以下是使用教學以及範例指令稿。

ping 與 arp 指令

ping 與 arp 指令是一般的 Windows、Mac OS X 與 Linux 系統都會內建的指令，所以使用這種方法掃描網路，完全不需要安裝任軟體，只需要撰寫一個簡單的指令稿即可，對於網管來說相當方便而且實用。
Linux 系統

這是適用於 Linux 系統的 bash 指令稿，執行後可以掃描整個 Class C 區域網路的 IP 與 MAC 卡號對應表：

#!/bin/bash

# Ping 區域網路中所有的 IP 位址

for ip in 192.168.1.{1..254}; do

# 刪除舊的 arp 記錄

sudo arp -d $ip > /dev/null 2>&1

# 藉由 ping 取得新的 arp 資訊

ping -c 5 $ip > /dev/null 2>&1 &
done

# 等待所有背景的 Ping 結束

wait

# 輸出 ARP table

arp -n | grep -v incomplete

我們使用 bash 的 for 迴圈，配合背景子行程的方式同時 ping 所有的網路設備，這樣可以讓程式大幅加速，幾秒鐘就可以 ping 完整個 Class C 網路，關於這種平行化 bash 指令稿的撰寫方式，可以參考 Bash 平行執行背景子行程與 wait 的教學。

執行之後，輸出會類似這樣：

Address                  HWtype  HWaddress           Flags Mask            Iface
192.168.1.1              ether   10:7b:ef:12:4f:af   C                     wlan0
192.168.1.102            ether   74:23:44:23:d3:96   C                     wlan0
192.168.1.105            ether   28:e3:1f:50:b9:94   C                     wlan0

Mac OS X 系統

在 Mac OS X 中使用 ping 與 arp 的 bash 指令稿與 Linux 幾乎相同，只是在 arp 指令的參數有些差異：

#!/bin/bash

# Ping 區域網路中所有的 IP 位址

for ip in 140.110.99.{1..254}; do

# 刪除舊的 arp 記錄

sudo arp -d $ip > /dev/null 2>&1

# 藉由 ping 取得新的 arp 資訊

ping -c 5 $ip > /dev/null 2>&1 &
done

# 等待所有背景的 Ping 結束

wait

# 輸出 ARP table

arp -na | grep -v incomplete

輸出的格式有些不同：

? (192.168.1.4) at 70:28:8b:26:1b:ba on en1 ifscope [ethernet]
? (192.168.1.11) at 60:e3:27:14:a5:dc on en1 ifscope [ethernet]
? (192.168.1.12) at 84:c9:b2:78:cd:ee on en1 ifscope [ethernet]

Windows 系統

Windows 系統上使用 ping 與 arp 指令的方式比較不同，不過大原則是一樣的，都是用 ping 指令掃過一輪之後，執行 arp 指令輸出 arp table，請開啟命令提示字元，執行以下的指令。

首先刪除舊的 arp table，這一行需要用管理者權限執行：

arp -d

使用 for 迴圈將每一個 IP 位址都 ping 過一次：

for /L %i in (1,1,254) do ping 192.168.1.%i -n 1 -w 300 > NUL

執行 arp 指令，輸出 arp table：

arp -a | find "192.168" | find "動態"

命令提示字元
arping 指令

arping 是一個類似 ping 的小工具，可以對區域網路中的設備送出 arp 請求封包，用更低階的方式檢查網路連線狀況，這裡我們示範使用 arping 取得 IP 位址與網路卡 MAC 卡號對應表的作法。

arping 只適用於 Linux 與 Mac OS X，Windows 系統則要使用 cygwin 安裝。

在 Debian 系列的 Linux，可以使用 apt 安裝 apring 工具：

sudo apt-get install arping

使用 arping ping 特定的 IP 位址：

arping -I wlp3s0 -w 3 -f 192.168.1.1

ARPING 192.168.1.1 from 192.168.1.104 wlp3s0
Unicast reply from 192.168.1.1 [10:7B:EF:12:4F:AF]  2.749ms
Sent 1 probes (1 broadcast(s))
Received 1 response(s)

arping 輸出訊息中就有包含 IP 與 MAC 卡號的資訊，所以只要掃過每個 IP 位址，再用 grep 整理一下即可，以下是使用 arping 來 ping 整個區域網路所有 IP 位址的 bash 指令稿：

#!/bin/bash

# 用 arping 來 ping 區域網路中所有的 IP 位址

for ip in 192.168.1.{1..254}; do
arping -I wlp3s0 -w 3 -f $ip | grep reply &
done

# 等待所有背景的 arping 結束

wait

Unicast reply from 192.168.1.1 [10:7B:EF:12:4F:AF]  7.072ms
Unicast reply from 192.168.1.103 [74:23:44:23:D3:96]  179.119ms
Unicast reply from 192.168.1.102 [28:E3:1F:50:B9:94]  219.907ms

[https://blog.gtwang.org/linux/ping-and-arp-scan-ip-mac-address-script/](https://blog.gtwang.org/linux/ping-and-arp-scan-ip-mac-address-script/)

參考資料：[Linux.com](http://linux.com/)、PCNET、StackOverflow、Haoming