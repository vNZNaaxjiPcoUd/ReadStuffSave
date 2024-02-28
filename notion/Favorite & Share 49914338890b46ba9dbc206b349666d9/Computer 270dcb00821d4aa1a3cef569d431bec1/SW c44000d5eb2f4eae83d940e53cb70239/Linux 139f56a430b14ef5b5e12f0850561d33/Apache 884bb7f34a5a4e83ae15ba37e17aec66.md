# Apache

Apache
[http://lms.ctl.cyut.edu.tw/sysdata/53/20253/doc/bde3934073d34191/attach/1094276.htm](http://lms.ctl.cyut.edu.tw/sysdata/53/20253/doc/bde3934073d34191/attach/1094276.htm)

Apache Http Server

一. 特性

最有名的網站伺服器

不需收費的軟體

可以在Ms windows平台與Linux平台上執行

模組化的功能調整，支援動態載入模組

安裝容易, 可用命令列與圖形介面安裝

[http://www.apache.org](http://www.apache.org/)

二. 啟動與停止

若要啟動Apache，可執行以下指令：
/etc/init.d/apache2 start

若要停止Apache，可執行以下指令：
/etc/init.d/apache2 stop

當有設定改變, 若要重新啟動Apache，可執行以下指令：
/etc/init.d/apache2 restart

三. Apache伺服器目錄結構
當安裝完Apache後, 相關的檔案與目錄結構如下:
/usr/sbin

可執行檔

/etc/apache2/*

設定檔

/var/www
資料網頁的預設根目錄

/usr/lib/apache2/modules
模組檔案

/var/log/apache2/*

記錄檔

/etc/init.d/apache2
服務啟動檔案

/etc/run/apache2.pid
狀態檔

四. 測試Apache是否安裝完成
測試Apache是否安裝完成:

輸入http://127.0.0.1, 或http://主機的IP位址.
可以顯示網頁表示成功.�Y

Apache伺服器預設的相關設定:
�U使用者帳號:www-data(UID:33)

群組：www-data (GID:33)
�U資料網頁的預設根目錄與檔案：/var/www/index.html

設定練習:

建立一個網頁如http://127.0.0.1/test/test.html
1.試著改變/var/www/test資料夾的權限為700、744、755，

測試是否能夠正常連到http://127.0.0.1/test/test.html

2.試著改變檔案test.html的權限為700、744、755，

測試是否能夠正常連到http://127.0.0.1/test/test.html

五. Apache2伺服器設定檔
主要設定檔：/etc/apache2/apache2.conf
定義Apache伺服器的主要行為與環境變數

apache2.conf中可以引入(include)的其他設定檔, 如下說明：
/etc/apache2/envvars
Apache環境變數

/etc/apache2/httpd.conf
網頁伺服器的變數設定：逾時值、最大連線數等…

/etc/apache2/ports.conf
Apache監聽的IP位址與通訊埠(port)

/etc/apache2/sites-available/
可用虛擬主機的設定檔目錄

/etc/apache2/sites-enabled/
已啟用的虛擬主機的設定檔目錄

/etc/apache2/conf.d
使用者自訂的的設定檔

/etc/apache2/mods-available/
可用模組(module)的目錄

/etc/apache2/mods-enabled/
已啟用模組的目錄

六.啟動或關閉模組 (module)

如果要啟動模組，可以先在 mods-available 裡面寫好不同的模組設定檔。

當需要啟用這些模組時，再在mods-enabled目錄中建立 soft link 連接到 mods-available 來啟用。

察看可用模組(mods-available)設定檔：

cyut@ubuntu:~$ ls /etc/apache2/mods-available/
auth_dbm.load     deflate.load     ssl.conf            ssl.load
auth_ldap.load    expires.load     php5.conf           suexec.load
cache.load        ext_filter.load  php5.load           unique_id.load
‧‧‧(略)‧‧‧

察看啟用模組(mods-enabled)設定檔：

cyut@ubuntu:~$ ls -l /etc/apache2/mods-enabled/
...略...    cgi.load -> /etc/apache2/mods-available/cgi.load
...略...    php5.conf -> /etc/apache2/mods-available/php5.conf
...略...    php5.load -> /etc/apache2/mods-available/php5.load
...略...    userdir.conf -> /etc/apache2/mods-available/userdir.conf
...略...    userdir.load -> /etc/apache2/mods-available/userdir.load

如以上範例，我們可以看到 Apache2有很多模組可以使用。當啟用 PHP或其他模組時, 可以發現這些啟用的模組

只不過是個符號連結檔，這些檔案會連接到 mods-availabe 裡面，只要刪除這些連結檔，就會關閉模組的使用。

其中模組有 load 和 conf 兩個檔，前者是負責讀入該模組的函式庫，後者是該模組的設定檔，所以啟用或刪除時

要兩個都建立或刪除符號連結。

關閉 PHP 模組範例 (刪除符號連結法)：

rm /etc/apache2/mods-enabled/php5.load
rm /etc/apache2/mods-enabled/php5.conf
/etc/init.d/apache2 restart

啟用 PHP 模組範例 (建立符號連結法)：

ln -s /etc/apache2/mods-available/php5.load /etc/apache2/mods-enabled/php5.load
ln -s /etc/apache2/mods-available/php5.conf /etc/apache2/mods-enabled/php5.conf
/etc/init.d/apache2 restart

在 Ubuntu 裡面也有程式可以管理模組的啟動與關閉。

關閉 PHP 模組範例 ：

a2dismod php5
/etc/init.d/apache2 restart

啟用 PHP 模組範例 ：

a2enmod php5
/etc/init.d/apache2 restart

六.啟動或關閉虛擬主機 (sites)

Apache2 安裝好以後，系統裡面只有一個虛擬主機(站台)，也就是預設根目錄在 /var/www 的那個網站。

如果有需要, Apache2可以建立多個虛擬站台。

察看可用的站台：

cyut@ubuntu:~$  ls /etc/apache2/sites-available/
default

察看啟用的站台：

cyut@ubuntu:~$ ls -l /etc/apache2/sites-enabled/
...略...   000-default -> /etc/apache2/sites-available/default

如以上範例，我們看到符號連結和之前模組啟用與關閉一樣，

所以也可以直接建立或刪除符號連結，或者用工具程式進行啟用與關閉。

七.增加虛擬主機

虛擬主機(Virtual Host) 的定義是一台 Apache 主機可以處理超過一個 domain，

例如有兩個網址都同時對應到該主機 IP，而主機能依照網址不同給與不同的網頁。

所以用這種方式可以在同一台主機上架很多網站。

Client 和 Server 溝通時，在 HTTP 1.1 協定中規定 Client 要在表頭送出 Host

告訴 Server 是要連到哪一個主機，因此 Server 可以依據這個判定要送回的網頁是哪一個。

若要建立新的虛擬主機，首先要確定的是該網域已經設定好 DNS 紀錄，並將該紀錄指向主機的 IP。

以下假設新增的虛擬主機 之網址是 [www.cyut.org](http://www.cyut.org/)，而虛擬主機網頁放置的地方是 /home/cyut。

設定練習:

由於預設主機的設定檔 default 已經是很完整的架構，我們就直接用它來當範本稍微修改給虛擬主機用。

步驟一: 複製範本
cd /etc/apache2/sites-available
cp default cyut           # 這個 cyut 是自己設定的，可以自己命名

步驟二: 編輯這個新的設定檔。

新的虛擬主機 /etc/apache2/sites-enabled/cyut 設定檔如下：

# NameVirtualHost * # 這一行要註解起來

DocumentRoot /home/cyut            # 修改網頁放置的根目錄
ServerName [www.cyut.org](http://www.cyut.org/)             # 加入該虛擬主機所傾聽的網域
<Directory /home/cyut>             # 修改定義網頁權限的路徑
Options Indexes FollowSymLinks MultiViews
AllowOverride None
Order allow,deny
allow from all
</Directory>

簡單的說，只有要改 4 個地方，先註解掉 NameVirtuHost 後，再修改兩個和根目錄有關的路徑，

還有加入新設定 ServerName，其他的地方都可以不需要更動。

啟用新的虛擬主機站台：
a2ensite cyut
/etc/init.d/apache2 restart

關閉 cyut 站台範例：

a2dissite cyut
/etc/init.d/apache2 restart

八. apache2.conf 設定

這裡精選在 apache2.conf 裡面比較重要的設定。

# Apache Server 設定檔放置處

ServerRoot "/etc/apache2"

# Client 多久沒回應就 timeout，網路狀態不好可改大一點。

Timeout 300

# KeepAlive 為是否開啟連續請求的功能，當打開時每次 Client 端建立連線後，

# 可以要求數個檔案，而不必要重新建立連線。建議把它打開，會有比較好的效能。

KeepAlive On

# MaxKeepAliveRequests 是每次 Client 端建立連線後，可以要求最大的檔案數，

# 讀者設成 0 為不限制，或者可以把它設高一點，尤其是在網頁很複雜的時候，

# 效能會有明顯改善。通常設 100 到 300 之間已經很夠用啦！

MaxKeepAliveRequests 100

# KeepAliveTimeout 是當連續請求時，Clinet 端多久沒有在繼續請求就把他踢下線。

# 這個單位是秒鐘，不要開太大，不然資源可以會被這些不請求的 Client 端佔著。

KeepAliveTimeout 15

# StartServers 為 Apache2 啟動時，會啟用幾個 processes，讀者可以透過 ps -aux

# 來驗證。若您的網站流量很大，可以改大一點，但是若用量沒有那麼大，會浪費

# 系統資源，通常預設的 5 已經很夠用了。

# MinSpareServers 可閒置的最少 processes，通常都會設定的和 StartServers 一樣。

# MaxSpareServers 最大可閒置的 processes，若您的網站流量時大時小，那麼這個值

# 可以設大一點，避免人多的時候要開新的 processes，但是設太大會增加系統資源。

# MaxClients 最多可以有幾個客戶端連線，預設的 20 似乎有點少，可以視您網站的

# 規模改到 200 以上。但是預設不能超過 256，若要超過的話需要自己額外加上

# ServerLimit 的參數，定義最大可以有幾個 Client，這個值最大到 20000，若

# 還要在大的話就要修改原始碼的定義。

# MaxRequestsPerChild 每一個 processes 可以有多少個連線數要求。通常設成 0 為

# 不限制。

<IfModule prefork.c>
StartServers         5
MinSpareServers      5
MaxSpareServers     10

# ServerLimit 3000 # 若 MaxClient 要大於 256，需要有這一個參數。

MaxClients          20
MaxRequestsPerChild  0
</IfModule>

# 在設定檔內，還有其他 MPM 可以修改，如 worker 和 perchild 等，但這些在有

# PHP 的環境下不會使用到，所以讀者可以不要管他們。

# Apache2 Server 執行時所用的帳號和群組，若沒有特別的理由，可以不用更動。

User www-data
Group www-data

# 全域的錯誤紀錄檔放置處，個別虛擬主機的設定可以在 sites-available 另外指定。

ErrorLog /var/log/apache2/error.log

# 後面那些 AddCharset 是指可以支援的編碼，預設都設好了，不要改動。

#AddDefaultCharset	Big5
AddCharset utf-8       .utf8
AddCharset big5	       .big5 .b5

# 若沒有明確指定網頁檔名，Apache2 會依序以下順序來嘗試送給 client 端瀏覽器

DirectoryIndex index.html index.cgi [index.pl](http://index.pl/) index.php index.xhtml

操作練習:

試著在瀏覽器打入：[http://127.0.0.1/error這個不存在的連結，](http://127.0.0.1/error%E9%80%99%E5%80%8B%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E9%80%A3%E7%B5%90%EF%BC%8C)

檢視看看/var/log/apache2/error.log 的檔案內容有沒有改變？

九. 個別虛擬主機或網站的設定

在 apache2.conf 只作一些全域的設定，若要設定個別虛擬主機或網站的設定，

需要修改的地方就在 /etc/apache2/sites-available/ 裡面。

這裡介紹預設的網站 default 裡面的架構，其他額外增加的虛擬主機設定方式是一樣的。

預設網頁 /etc/apache2/sites-available/default 的設定檔如下：

NameVirtualHost *
<VirtualHost *>
ServerAdmin dbtsai@localhost        # 網頁管理者 E-Mail
DocumentRoot /var/www              # 網頁放置的根目錄

# Options 裡面可以有許多參數，以下將個別簡介。

# Indexes 當 Client 找不到 index.html 等首頁時，就列出該目錄底下

# 所有檔案。因此有一點危險性存在，通常是建議關閉。

# FollowSymLinks 讓您在該目錄底下可以讀取到符號連結到非網頁根目錄內的

# 檔案。例如現在根目錄是 /var/www，我們建立一個從

# /home/web 建立一個 soft link 到 /var/www/web 後，

# 若有開啟這個選項，才能讀取到 /var/www/web 的內容。

# MultiViews 提供同一個網址有多國語言的功能。原來是依照 Client 送來

# 的語言偏好 header 送回不同語言版本的網頁。例如 Google

# 就是採用這種方式達成同一網址有多國語言的功能。

# 

# AllowOverride 和 .htacces 有關。 .htaccess 可以在網頁目錄下取代全域的

# 網站設定，這樣的好處是可以讓一般使用者不用有 root 權限就可以修改

# 參數，使用彈性也會比較大。它可以設定的參數有以下幾個。

# AuthConfig 可以在 .htaccess 裡面設定網頁認證的功能

# Options 可以在 .htaccess 裡面重設 Options 選項

# All 以上所有功能都能在 .htaccess 被重設

# None 不使用 .htaccess 來重設變數

```
<Directory /var/www/>              # 定義該目錄的網頁權限
	Options Indexes FollowSymLinks MultiViews
	AllowOverride None
	Order allow,deny
	allow from all
</Directory>

```

# 設定 CGI 程式相關參數

```
ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
<Directory "/usr/lib/cgi-bin">
	AllowOverride None
	Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
	Order allow,deny
	Allow from all
</Directory>

```

# 錯誤紀錄檔放置的地方

```
ErrorLog /var/log/apache2/error.log

```

# 錯誤紀錄檔的紀錄層級，不同的設定會有不同的紀錄精細度。

```
LogLevel warn

```

# 瀏覽紀錄檔的放置處，裡面紀錄了 Client 端詳細資訊

```
CustomLog /var/log/apache2/access.log combined
ServerSignature On

```

</VirtualHost>

操作練習:

當 Client 找不到 index.html 等首頁時，就列出該目錄底下所有檔案。因此有危險性存在，建議關閉。

關閉方法如下:

找出下列設定, 在Index前面加上-號, 例如 -Index, 再重新啟動Apache即可。

Options Indexes FollowSymLinks MultiViews

接者進行測試, 重新連結網頁, 若找不到 index.html 等首頁時，就禁止看目錄內容了。

十. 啟用個人網頁

Apache2 把使用者個人網頁獨立到一個額外的模組和設定檔。

啟用個人網頁：
a2enmod userdir
/etc/init.d/apache2 restart

關閉個人網頁：
a2dismod userdir
/etc/init.d/apache2 restart

個人網頁的設定可以不需要修改, 相關參數如下。

個人網頁設定檔 /etc/apache2/mods-available/userdir.conf：
<IfModule mod_userdir.c>

# 在使用者家目錄底下的 public_html 為個人網頁目錄

```
    UserDir public_html

```

# 關閉 root 不能使用個人網頁

```
    UserDir disabled root

```

# 以下是預設的個人網頁目錄設定，若讀者要修改成不是放在 public_html 的話，

# 要同時修改 UserDir 和 以下的 Directory 裡面的目錄位置。

```
    <Directory /home/*/public_html>
            AllowOverride FileInfo AuthConfig Limit
            Options MultiViews Indexes SymLinksIfOwnerMatch IncludesNoExec
    </Directory>

```

</IfModule>

設定好了以後，一般使用者可以在自己家目錄底下建立 public_html 的目錄來存放網頁，

並且瀏覽器可以透過 [http://127.0.0.1/~UserName/](http://127.0.0.1/~UserName/) 來連到該使用者的個人網頁，其中 UserName 是使用者的帳號。

操作練習:

啟用UserDir的Apache模組，並試著建立一個網頁，能夠在以"[http://127.0.0.1/~帳號/](http://127.0.0.1/~%E5%B8%B3%E8%99%9F/)" 的網址連線。

apache webdav

[http://herb123456.pixnet.net/blog/post/1009884-【apache】webdav-相關設定](http://herb123456.pixnet.net/blog/post/1009884-%E3%80%90apache%E3%80%91webdav-%E7%9B%B8%E9%97%9C%E8%A8%AD%E5%AE%9A)