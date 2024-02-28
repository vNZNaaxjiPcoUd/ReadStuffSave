# Day02-網頁三兄弟：HTML、CSS、JavaScript

# **網頁架構**

在正式進入網頁教學之前先來簡單介紹一下構成網頁三大元素：

[HTML](https://zh.wikipedia.org/wiki/HTML)

、

[CSS](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)

、

[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)

![https://i.imgur.com/GIqgBgG.jpg](https://i.imgur.com/GIqgBgG.jpg)

由上圖可以發現 **HTML** 負責的就是把網頁的結構生出來，所以看起來都方方正正的不是那麼美觀，而 **CSS** 就是負責把外貌給顯示出來，讓網頁的外貌看起來美觀一些，最後 **JavaScript** 再負責去控制網頁裡面的內容以及使用者的操作行為。

# **HTML**

**HTML** 就是管理網頁的架構，一個好的網頁其 **HTML** 可以說是相當單純且具有易讀性，這種網頁不但方便前端工程師進行後續的維護外，也比較容易讓你的網頁增加曝光率讓搜尋引擎能把你的網頁擺在最前面，此種行為稱為 [SEO](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96)，而目前 **HTML** 已經發布到第五版同時也是目前最廣為使用的版本，因此大家常聽到的 **HTML5** 其實就是指第五版的 **HTML** 喔！

# **HTML 基本觀念**

**HTML** 內的 **元素(element)** 有兩個重要的基本觀念：巢狀結構以及 **屬性(attribute)**。

- **巢狀結構**
    
    **HTML** 內的 **element** 排序屬於巢狀結構，巢狀結構簡單來說就是一層一層的概念，舉例來說
    
    ```
    <div>
      <p>Hello World</p>
    </div>
    
    ```
    
    可以看到 `<p>` 這個 **element** 被 `<div>` 這個 **element** 包起來，代表 `<div>` 在 `<p>` 的上層，這邊會用兩個專有名詞來稱呼上下層之間的關係，上層稱為 **父元素** 下層稱為 **子元素** ，更多詳細的 **父元素** 以及 **子元素** 的觀念將會在明天的文章加以敘述。
    
- **Attribute**
    
    **Attribute** 簡單來說就是用來敘述 **element** 的相關性質，舉例來說
    
    ```
    <div class="txt" id="uniqueTxt">Hello World</div>
    <!-- placeholder為提示文字 --><input placeholder="請輸入文字" id="input" />
    <!-- href為超連結網址 --><a href="www.google.com.tw" class="link">Google</a>
    
    ```
    
    可以看到在 **element** 裡面寫了 `class` 、 `placeholder` 、 `href` 這些不是 **element** 的東西，這種附加在 **element** 上的東西就稱之為 **attribute** ，更多詳細的 **attributes** 可以參考這個[網站](https://www.w3schools.com/TAGS/ref_attributes.asp)，這邊就介紹每個 **element** 都可以用的 **global attributes** 。
    
    - **Global Attributes**
        
        回到剛剛的例子，我們可以發現 `class` 跟 `id` 這兩個 **attribute** 都出現在好幾個不同的 **element** 裡面，這些就是 **global attribute** ，至於 **global attribute** 的相關用途會在底下的 **CSS 基礎觀念** 加以敘述，這邊有一個重要的觀念要交代，一個 **element** 可以有無數個 `class` 可是只能有一個 `id`，這邊可以用一個簡單的方式來思考，一個人可以有很多種角色，但是只會有一個身分證字號，而 `class` 就是男生、學生，`id` 就是身分證字號。
        

# **CSS**

**CSS** 就是管理網頁的外貌，**CSS** 之於網頁如同化妝品之於人類，因此 **CSS** 相當考驗工程師的美感，像筆者就完全沒有美感不懂設計刻出來的網頁通常都奇醜無比XD

而目前 **CSS** 已經發布到第三版同時也是目前最廣為使用的版本，因此大家常聽到的 **CSS3** 其實就是指第三版的 **CSS** 喔！

# **CSS 基本觀念**

還記得上面提到的 **global attributes** 嗎？為什麼需要 **global attributes** 呢？這個就是為了讓 **CSS** 可以快速的幫這些 **element** 加上專屬的樣式，一般可以分成三種方式來替 **element** 加樣式。

- **style attribute(inline style)**
    
    這種是最直觀也最簡單的，也就是直接在 **element** 裡寫 **style**，這邊有個小小的觀念，其實 **CSS** 是有階級之分的，大家覺得在下面的圖片中這三個 `Hello World` 分別會變成什麼顏色呢？
    
    ![https://i.imgur.com/lDTuGoC.jpg](https://i.imgur.com/lDTuGoC.jpg)
    
    答案是綠色、藍色、紅色，所以可想而知 **CSS** 讀取的優先順序為： **inline style** > **id** > **class** 。
    
    ![https://i.imgur.com/2ydL8ce.jpg](https://i.imgur.com/2ydL8ce.jpg)
    
    難道沒有其他方法可以強制覆蓋 **element** 內的 **style** 嗎？答案是有的，只需要加上 `!important` 就可以了，像下圖這樣。
    
    ![https://i.imgur.com/RZQfjyn.jpg](https://i.imgur.com/RZQfjyn.jpg)
    
- **style tag(`<style>`)**
    
    這邊就是實作樣式的地方啦，這邊通常都會用 `class` 以及 `id` 來描述，在寫法上 `class` 會用 `.className` 而 `id` 會用 `#idName` 來區分。
    
- **link ref import css files**
    
    最後一種方法就是寫 **CSS** 檔來描述網頁內的各個樣式並利用 [link tag](https://www.w3schools.com/css/css_howto.asp) 來連結檔案。
    

# **JavaScript**

**JavaScript** 就是管理網頁的內容以及使用者的操作行為，因此 **JavaScript** 可以說是網頁最重要同時也是最難學的一個環節了，有一個程式語言叫做 **Java** 很多人都會誤以為這個程式語言跟 **JavaScript** 是一樣的東西，但他們兩個完全不一樣喔，所以不要被名字看起來很像就混淆了，而筆者也會花最多時間在寫有關 **JavaScript** 的文章上，讓讀者們可以真正了解網頁的世界。

# **JavaScript 基本觀念**

上面提到 **JavaScript** 的存在就是為了要控制網頁的內容，所以可以猜想到 **JavaScript** 最重要的概念就是要控制 **HTML** 中的各個 **element**，既然要控制 **element** 那勢必得提供相對應的 [Web API](https://developer.mozilla.org/zh-TW/docs/Web/API)，在剛剛的連結中可能會被裡面琳瑯滿目的 **API** 嚇到，這邊筆者建議看懂 [DOM API](https://developer.mozilla.org/zh-TW/docs/Web/API/Document) 即可，更詳細的 **API** 介紹會在下一篇文章加以敘述，講了這麼多好像都沒有真正提到如何寫 **JavaScript**，這邊跟 **CSS** 一樣有三種方法，而且三種方法都是一樣的道理喔！

- **Attribute**
    
    熟悉的 **attribute** 又來啦，相信聰明的你應該推想得知可以把 **JavaScript** 寫在 **HTML** 的 **element** 內了，沒錯的確是可以這樣不過比較少人用就是了，畢竟不會有人想真的寫一段落落長的程式碼綁在 **element** 中，比較正常的做法是在 **element** 內寫上 **onClick** 之類的 **attribute** 綁上 **function** 然後再到等等要講的 **script** 裡面去實作 **function** ，這裡你可能會有一個疑問： **click** 就 **click** 為啥還要多加一個 **on** 變成 **onClick** 呢？
    
    - **click**
        
        **click** 為 **事件(event)** ，事件非常的單純只負責通風報信，舉例來說當有個 **element** 被點擊，那這個 **element** 就被觸發了 **click** 這個 **event** ，他不用去管後續的動作只需要告知說我被點擊了而已。
        
    - **onClick**
        
        **onClick** 為處理事件的 **處理器(handler)** 所以會是一個 **function** 型態，舉例來說當一個 **element** 觸發 **click** 事件後會呼叫 **onClick** 來進行 **click** 後的動作。
        
    
    所以我們可以推斷先有 **event** 才會有 **handler** ，這也是為什麼在 **element** 上面會直接寫 **onClick** 而不是 **click** 的原因，那如果我偏偏不直接寫 **handler** 而要用 **event** 的方式撰寫要怎麼做呢？這時候就需要 `addEventListener()` 了。
    
    `addEventListener()` 簡單來說就是個替 **element** 監聽事件的監聽器，而 `addEventListener()` 一共有三個參數： **event** 、 **handler** 、 **boolean value** 。
    
    - **event**
        
        這個就不用再多做介紹了，就是擺上要監聽的事件名稱，更多詳細的事件名稱可以參考這個[網站](https://developer.mozilla.org/zh-TW/docs/Web/Events)。
        
    - **handler**
        
        這裡就是要寫上 **handler** ，負責去執行 **event** 的後續動作。
        
    - **boolean value**
        
        這裡牽扯到兩個很重要的事件流程，分別為 **事件冒泡(bubbling)** 以及 **事件捕獲(capture)** 。
        
        - **bubbling**
            
            從觸發事件的 **element** 開始，將事件往上傳遞直到 **document** 。
            
            ![http://www.java2s.com/Tutorials/JavascriptImage/eventBubble.png](http://www.java2s.com/Tutorials/JavascriptImage/eventBubble.png)
            
        - **catpure**
            
            從 **document** 開始逐漸往下找尋觸發事件的 **element** 。
            
            ![http://www.java2s.com/Book/JavaScriptImages/eventCapture.png](http://www.java2s.com/Book/JavaScriptImages/eventCapture.png)
            
        
        可以發現兩者的差別只有在於流程順序而已，在大部分的狀況下通常事件流程都不會有順序上的差別，只有在少部分的情況下就會有順序上的差別，可以參考這個[範例](https://codepen.io/Andy-Chen/pen/VEmPOO)。
        
- **script tag(`<script>`)**
    
    這邊就是實作 **JavaScript** 的地方啦，概念就跟 **CSS** 一樣。
    
- **script src import js files**
    
    跟 **CSS** 不同的地方是 [script tag](https://www.w3schools.com/tags/att_script_src.asp) 本身就可以連結 **js** 檔案，只需要加個 `src` 這個 **attribute** 就可以了，不像 **CSS** 還需要透過 `<link>` 來連結檔案。
    

# **總結小練習**

這裡筆者提供一個[小練習](https://codepen.io/Andy-Chen/pen/EdKQbb)方便讓讀者熟悉上述的各個觀念，[CodePen](https://codepen.io/) 是一個相當好用的網頁練習工具同時也是一個[所見即所得(wysiwyg)](https://zh.wikipedia.org/wiki/%E6%89%80%E8%A6%8B%E5%8D%B3%E6%89%80%E5%BE%97) 編輯器，不像 **w3school** 或 [JSFiddle](https://jsfiddle.net/) 在每次更改完程式碼還要按RUN重新跑一次，以這點來說真的非常方便很適合作為網頁練習工具，而且很多大神都會在上面發布自己所寫的版面提供給大家參考，未來筆者練習題也都會優先擺在 **CodePen** 上提供給讀者們使用。

# **參考資料**

這邊筆者提供一個以前在學習網頁時每天必逛的網頁 [w3school](https://www.w3schools.com/)，這個網站提供了網頁全部的基本知識，如果上述的觀念有哪些地方不是很理解都可以在此網站找到解答喔！