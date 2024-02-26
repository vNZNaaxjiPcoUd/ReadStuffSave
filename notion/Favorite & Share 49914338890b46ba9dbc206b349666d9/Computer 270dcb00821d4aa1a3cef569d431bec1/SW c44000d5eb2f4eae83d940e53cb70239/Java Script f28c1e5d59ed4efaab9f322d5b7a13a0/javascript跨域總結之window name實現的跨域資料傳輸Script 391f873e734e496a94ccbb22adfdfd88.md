# javascript跨域總結之window.name實現的跨域資料傳輸Script

具體實現方法記錄如下

有三個頁面:

a.com/app.html:應用頁面。    a.com/proxy.html:代理檔案,一般是一個沒有任何內容的html檔案,需要和應用頁面在同一域下。    b.com/data.html:應用頁面需要獲取資料的頁面,可稱為資料頁面。

實現起來基本步驟如下:

在應用頁面(a.com/app.html)中建立一個iframe,把其src指向資料頁面(b.com/data.html)。    資料頁面會把資料附加到這個iframe的window.name上,data.html程式碼如下:

<script type="text/javascript"> window.name = 'I was there!'; // 
這裡是要傳輸的資料,大小一般為2M,IE和firefox下可以大至32M左右 // 資料格式可以自定義,如json、字串 
</script>

在應用頁面(a.com/app.html)中監聽iframe的onload事件,在此事件中設定這個iframe的src指向本地域的代理檔案(代理檔案和應用頁面在同一域下,所以可以相互通訊)。app.html部分程式碼如下:

<script type="text/javascript"> var state = 0, iframe = 
document.createElement('iframe'), loadfn = function() { if (state === 1)
 { var data = iframe.contentWindow.name; // 讀取資料 alert(data); //彈出'I was
 there!' } else if (state === 0) { state = 1; 
iframe.contentWindow.location = "http://a.com/proxy.html"; // 設定的代理檔案 } 
}; iframe.src = 'http://b.com/data.html'; if (iframe.attachEvent) { 
iframe.attachEvent('onload', loadfn); } else { iframe.onload = loadfn; }
 document.body.appendChild(iframe); </script>

獲取資料以後銷燬這個iframe,釋放記憶體;這也保證了安全(不被其他域frame js訪問)。

<script 
type="text/javascript"> iframe.contentWindow.document.write(''); 
iframe.contentWindow.close(); document.body.removeChild(iframe); 
</script>

總結起來即:iframe的src屬性由外域轉向本地域,跨域資料即由iframe的window.name從外域傳遞到本地域。這個就巧妙地繞過了瀏覽器的跨域訪問限制,但同時它又是安全操作。

[跨頁面通訊的各種姿勢](javascript%E8%B7%A8%E5%9F%9F%E7%B8%BD%E7%B5%90%E4%B9%8Bwindow%20name%E5%AF%A6%E7%8F%BE%E7%9A%84%E8%B7%A8%E5%9F%9F%E8%B3%87%E6%96%99%E5%82%B3%E8%BC%B8Script%20391f873e734e496a94ccbb22adfdfd88/%E8%B7%A8%E9%A0%81%E9%9D%A2%E9%80%9A%E8%A8%8A%E7%9A%84%E5%90%84%E7%A8%AE%E5%A7%BF%E5%8B%A2%20df253d2b65c244a09f43ab4fc70c9f41.md)

[Favorite & Share](../../../../Favorite%20&%20Share%2049914338890b46ba9dbc206b349666d9.md)