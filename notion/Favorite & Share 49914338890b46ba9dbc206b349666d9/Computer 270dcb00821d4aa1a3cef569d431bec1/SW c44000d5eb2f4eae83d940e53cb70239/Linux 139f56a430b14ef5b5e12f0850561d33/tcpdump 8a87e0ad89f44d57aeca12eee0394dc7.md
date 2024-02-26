# tcpdump

TCPdump

ping
dump -i eth0_3 icmp
tcpdump -i bcmsw -w /tmp/pppoe.cap -s 1500

抓 dns 封包
tcpdump -i eth0 -nt udp port 53
tcpdump -i eth0 -nt port domain

參數說明

- i : 指定要抓取封包的 interface
若要抓的封包是在 interface ⼀起來後就⽴即出現
可以⽤ -i any 的⽅式抓封包
any 代表抓所有 interface 封包
這樣就不會漏抓
icmp6 : 只抓取 icmpv6 的封包
ip6 : 只抓取 ipv6 的封包
ip6 host 2001:b021::1234 : 只抓取 2001:b021::1234 IPv6 address 封包
ip6[40]=128 : 抓取 IPv6 echo request (128) 封包
40 是設定 ICMPv6 Type 的地⽅
ip6[40]=134 : 抓取 RA 封包
and : 輸⼊多個條件 , 例如 ip6[40]=129 and ip6 host 2001:b021::1234
會抓取 2001:b021::1234 IPv6 的 echo reply 封包
udp : 只抓取 udp 的封包
tcp : 只抓取 tcp 的封包
icmp : 只抓取 icmp 的封包
port 67 : 抓取 port = 67 的封包 , 例如 dhcp
抓 dhcpv6 封包 , tcpdump -i wwan0 -n port 546 or port 547
-w : 將抓取的封包存成檔案
-C : 指定儲存的檔案最⼤ size , 單位 1000000 bytes
-C : 1 代表 1000000 bytes , 2 代表 2000000 bytes , 以此類推
-C : 超過最⼤ size 會另存⼀個檔案
-W : 限制儲存的檔案數 , 和 -C ⼀起使⽤
-e : 印出 layer 2 的訊息 , 例如 MAC、Type
-n : 不要將 ip 轉換成 domain name , 這樣可以加快顯⽰封包的速度
-t : 不要印出時間
-v , -vv : 顯⽰更多訊息
Ctrl + c 結束 tcpdump 後會顯⽰抓取的狀況
4 packets captured
4 packets received by filter
0 packets dropped by kernel
若有被 kernel drop 的情形發⽣ , 加上 -n 看看是否可以改善
更多詳細使⽤⽅式請查詢 man tcpdump