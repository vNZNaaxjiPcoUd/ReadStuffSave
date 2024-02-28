# [VPN] L2TP over IPSec

## [[VPN] L2TP over IPSec](https://danielhuang030.pixnet.net/blog/post/268697168)

## Info

- L2TP 協定自身不提供加密與可靠性驗證的功能，可以和安全協定搭配使用，從而實現資料的加密傳輸。經常與 L2TP 協定搭配的加密協定是IPsec，當這兩個協定搭配使用時，通常合稱L2TP/IPsec

## Installation

```
git clone https://github.com/hwdsl2/docker-ipsec-vpn-server.git
cd docker-ipsec-vpn-server
```

```
sudo cp vpn.env.example vpn.env
sudo vi ~/docker-ipsec-vpn-server/vpn.env
```

```
# IPSec 的公鑰，建議字串長度長一點
VPN_IPSEC_PSK=PASS

# 預設使用者名稱
VPN_USER=tester

# 預設使用者密碼（明碼）
VPN_PASSWORD=aaaaaa

# 分配 L2TP 私人 IP 網段範圍
VPN_L2TP_NET=172.16.0.013
VPN_L2TP_LOCAL=172.16.0.1
VPN_L2TP_POOL=172.16.0.10-172.23.255.250

# 分配 XAUTH 私人 IP 網段範圍
VPN_XAUTH_NET=172.24.0.013
VPN_XAUTH_POOL=172.24.0.10-172.31.255.250

# 指定 DNS 位置
VPN_DNS_SRV1=XXX.XXX.XXX.XXX
VPN_DNS_SRV2=XXX.XXX.XXX.XXX
DNS_SRV1=XXX.XXX.XXX.XXX
DNS_SRV2=XXX.XXX.XXX.XXX
```

```
    - ./users/ppp:/etc/ppp
    - ./users/ipsec.d:/etc/ipsec.d
```

```
# 建議先不要背景執行，有錯誤可以比較容易發現
docker-compose up
```

- 網路上常見的安裝方式：
    - [Ubuntu 14.04: pptpd, openswan, xl2tpd](https://blog.toright.com/posts/5176/ubuntu-%E6%9E%B6%E8%A8%AD-l2tp-ipsec-vpn-server-mac-%E7%9B%B8%E5%AE%B9.html)
    - [Ubuntu 16.04: ppp, lsof, strongswan, xl2tpd](https://bill.tt/2017/01/14/Ubuntu-16-04-%E9%85%8D%E7%BD%AEL2TP-VPN-Server/)
- 二種方法我都試過，但是安裝的程式與設定也很多；不意外的又卡關了。這時候我又想起了 docker，果然網路上又有大大提供整合好的 docker images，測試使用 [hwdsl2/docker-ipsec-vpn-server](https://github.com/hwdsl2/docker-ipsec-vpn-server)
- docker 相關安裝請參考[之前的說明](http://blog.roodo.com/danielhuang030/archives/62144457.html)
- AWS 新增 Security groups，開啟 port UDP 1701, UDP 4500, UDP 500
- git clone project
- 複製並調整環境變數（其他變數請參考 [run.sh](https://github.com/hwdsl2/docker-ipsec-vpn-server/blob/master/run.sh)）
- ~/docker-ipsec-vpn-server/vpn.env
- 網段計算方式可以參考[這裡](http://www.ipaddressguide.com/cidr)
- volume 使用者設定檔目錄，在 volumes 區塊新增
- ~/docker-ipsec-vpn-server/docker-compose.yml
- 建立 docker container
- 如果沒有問題，應該會看到下面的畫面；包含 IP、公鑰、預設的使用者帳號與密碼
- 
    
    ![https://pic.pimg.tw/danielhuang030/1545966029-1852650191_n.jpg](https://pic.pimg.tw/danielhuang030/1545966029-1852650191_n.jpg)
    

## Setting

### 管理使用者

```
sudo vi ~/docker-ipsec-vpn-server/users/ppp/chap-secrets
```

```
# Secrets for authentication using CHAP
# client  server  secret  IP addresses
"tester" l2tpd "aaaaaa" *
"test2" l2tpd "aaaaaa" *
```

```
# $1$x2I2244y$mWuO1pmeYNwpdOqow5xbo.
openssl passwd -1 "aaaaaa"
```

```
sudo vi ~/docker-ipsec-vpn-server/users/ipsec.d/passwd
```

```
# Secrets for authentication using CHAP
# client  server  secret  IP addresses
tester:$1$x2I2244y$mWuO1pmeYNwpdOqow5xbo.:xauth-psk
test2:$1$x2I2244y$mWuO1pmeYNwpdOqow5xbo.:xauth-psk
```

- 修改 L2TP/IPsec 設定檔（明碼），新增使用者 test2
- ~/docker-ipsec-vpn-server/users/ppp/chap-secrets
- 修改 Cisco IPsec 設定檔（password），新增使用者 test2
- Password
- ~/docker-ipsec-vpn-server/users/ipsec.d/passwd
- 不需要重新啟動 IPSec，儲存後新帳號即可使用

### 管理使用者 in container

```
docker exec -it ipsec-vpn-server env TERM=xterm bash -l
```

```
apt-get update && apt-get -y install vim
```

- 進入 docker container
- 安裝編輯器 vim
- 修改設定檔
- 不需要重新啟動 IPSec，儲存後新帳號即可使用

### 修改 PSK 設定

```
%any  %any  : PSK "PASS"
```

- /etc/ipsec.secrets

### 修改 Private IP 設定

```
ip range = 172.16.0.10-172.31.255.250
local ip = 172.16.0.1
```

- /etc/xl2tpd/xl2tpd.conf

### 修改 DNS 設定

```
ms-dns XXX.XXX.XXX.XXX # 同一台主機可以設定為 local ip
```

- /etc/ppp/options.xl2tpd

### 重啟服務

```
sudo ipsec restart
sudo service xl2tpd restart
```

## Other

### Windows 10 連線發生錯誤

```
REG ADD HKLM\SYSTEM\CurrentControlSet\Services\PolicyAgent /v AssumeUDPEncapsulationContextOnSendRule /t REG_DWORD /d 0x2 /f
```

- **Q**: 如果連線發生錯誤，要特別[修改登錄檔](https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients.md#windows-error-809)，似乎跟路由器有關係
- **A**: 以系統管理員身分執行命令提示字元 cmd，輸入以下指令並執行

### 無法使用 VPN 指定 DNS

- **Q**: Windows 10 VPN 連線成功，但「自動取得DNS 伺服器位址」時卻沒有透過 VPN 指定的 DNS 解析網址，只有在指定DNS 伺服器位址後才會有效
- **A**: 網路連線 > VPN > 右鍵「內容」 > 分頁「網路功能」 > 網際網路通訊協定第 4 版 (TCP/IPv4) > 內容 > 進階 > 自動計量不勾選 > 輸入框設定值: 15

## Reference

- [wikipedia: 第二層隧道協定](https://zh.wikipedia.org/zh-tw/%E7%AC%AC%E4%BA%8C%E5%B1%82%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE)
- [Ubuntu 架設 L2TP IPSec VPN Server (Mac 相容)](https://blog.toright.com/posts/5176/ubuntu-%E6%9E%B6%E8%A8%AD-l2tp-ipsec-vpn-server-mac-%E7%9B%B8%E5%AE%B9.html)
- [Ubuntu 16.04 配置L2TP VPN Server](https://bill.tt/2017/01/14/Ubuntu-16-04-%E9%85%8D%E7%BD%AEL2TP-VPN-Server/)
- [IPsec VPN Server on Docker](https://github.com/hwdsl2/docker-ipsec-vpn-server)