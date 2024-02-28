# Markdown - 易編易讀，優雅的寫文吧！

Markdown 是一種輕量級標記式語言， 它有純文字標記的特性，讓**編寫的可讀性**提高，這是在以前很多電子郵件中就已經有的寫法，而目前也有很多網站都使用 Markdown 來撰寫說明文件或是在論壇上發表文章與發送訊息。常見網站例如：GitHub、wordpress、Slack、FB Messenger、IT 邦幫忙文章發表等等。

### **Markdown 優點**

- 相較 HTML 之下，不會夾雜很多不必要的標籤，讓可讀性提高。
- 不需要像程式碼一樣縮排。

### **Markdown 缺點**

- 若使用在像 wordpress 的網站時，要調整一些樣式變化是不太方便的。
- 需習慣 Markdown 的編輯方式。

關於 Markdown 的語法這邊就不一一介紹，以下為兩個了解 Markdown 語法的網站，第一個是寫完 Markdown 即時顯示出來的網站，但要注意這個網站並沒有儲存的功能，所以一但重新整理後就沒有紀錄了，第二個直接將寫好的 HTML 內容轉換為 Markdown 語法。

- 即時編譯 Markdown 語法所顯示的版面
    - [http://markdownlivepreview.com/](http://markdownlivepreview.com/)
- 將 HTML 語法轉為 Markdown
    - [https://domchristie.github.io/turndown/](https://domchristie.github.io/turndown/)

上面有提到有許多網站都可以使用 Markdown 語法，但在每個網站可以接受的 Markdown 的語法都不太一樣，我們就挑幾個來聊聊。

### **GitHub**

有使用過 GitHub 都一定有看過 README.md，而 md 表示的意思其實就是 Markdown ，所以如果在開發時會使用 README.md 的人，就一起來看看在 README.md 上如何用 Markdown 撰寫吧！這邊介紹幾個常用的語法:

### **字體**

字體樣式是使用在一般文字中加強文字重要性，或是表示標題，粗體通常會用在一段文字中，強調某些字是這個語句中的重點，而標題字會依照字體大小來表示出這個標題的主要性，使用標題字的 Markdown 語法要特別注意 # 號越少標題越大，也就代表標題的重要性越高。

粗體

```
**bold**
```

標題字

```
# This is an <h1> tag

```

次標題字

```
## This is an <h2> tag
```

小標題字

```
###### This is an <h6> tag
```

顯示畫面

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449FkQfya1mSy.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449FkQfya1mSy.png)

### **列表**

在同一個主題之下要一一列出內容時，我們常用列表來表示，例如：討論專案中需要哪些功能，或是說明要修改的內容有哪些。

```
* Item 1
* Item 2
  * Item 2a
  * Item 2b

```

顯示畫面

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449md514Ufmx0.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449md514Ufmx0.png)

### **CheckBox**

CheckBox 常用在確認事情是否完成，在使用 Checkbox 要注意，中括號中的 x 就代表這個項目是被打勾的，它並不會主動紀錄勾選過的內容，所以使用時要確認勾選過的內容是否有增加 ｘ，避免混亂。

```
- [x] This is a complete item
- [ ] This is an incomplete item

```

顯示畫面

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449uMfOyixLZN.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449uMfOyixLZN.png)

### **區塊**

區塊分為小區塊跟大區塊，通常用於一段相關內容的撰寫，一小段文字或是註釋都可能會用小區塊來表示，而篇幅較大又不希望與一般段落內容混在一起的文字，就會使用大區塊來包覆。

小區塊語法：

```
`Format one word or one line`

```

大區塊語法：

```
    code (4 spaces indent)

```

顯示結果：

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449lfuce6o0ey.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449lfuce6o0ey.png)

### **程式碼**

在GitHub 上，提到程式碼是極為常見的事情，如果以純文字來貼程式碼，大概會被罵翻吧！除了格式不一致很難閱讀以外，也無法用顏色來區分程式碼內容，閱讀上真的是極為不容易，所以在 GitHub 上了解如何使用 Markdown 語法來呈現高亮程式碼介面是相當重要且實用的。語法也相當簡單，只要使用三個反引號加上語言簡稱就可以了，來看看範例吧！

高亮程式碼顯示語法 （前後三個反引號 *``` *+ 語言)

```
    ```js
    這邊是程式碼
    ```

```

顯示結果：

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449uGTiuFfQA3.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449uGTiuFfQA3.png)

### **圖片**

在撰寫文件時，也會加上一些圖片來搭配文字的說明，畢竟文字還是比較抽象的，而圖片可以讓人直接看到畫面並理解要表達的東西為何，在 README.md 中加入圖片也是相當簡單的，請看範例！

插入圖片語法

```
![GITHUB]( 圖片網址 "圖片名稱")

```

顯示結果：

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449qSjpocm8yx.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449qSjpocm8yx.png)

### **階層式區塊**

階層式區塊在表現結構或功能關係上是相當好用的呈現形式

階層式區塊語法：

```
> Quote one sentences
>>Quote two sentences
>>Quote two sentences
>>>Quote three sentences

```

顯示結果：

![https://ithelp.ithome.com.tw/upload/images/20181021/201114499qQoeCIOyH.png](https://ithelp.ithome.com.tw/upload/images/20181021/201114499qQoeCIOyH.png)

更多詳細內容可以參考：[https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)

在GitHub 上除了 README.md 可以使用 Markdown 語法來制定書寫格式以外，大家常用的 Issue 也是可以使用的哦！Issue 是專案中讓大家討論專案內容及技術交流的空間，你可以在 Issue 提出對於專案的疑問，也可以紀錄待修改的內容，甚至可以交付工作並指定同在專案中的對象。而撰寫 Issue 的時候，要呈現清楚的文章架構，就要靠 Markdown 語法來讓內容的可讀性提高，也讓團隊的開發效率或是專案的完整度更高。

### **Slack**

Slack 是一套適合團隊溝通的通訊軟體，有別於其他的通訊軟體，以下列出幾點 Slack 的優點：

1. 可以在同一個大群組裡開小群組或是私人的群組：你可以依照不同的需求開設討論頻道，如果是公開頻道則群組內的人都可以接受到資訊，也可以選擇特定幾位對象來參加私人群組，以上各種的群組仍是在一個大群組之下分流，也就是基於這個類群而延伸出來的小群，這樣的方式就可以避免一次創出太多不同群組而搞混。
2. 互動性高，干擾性低： Slack 也有各種表情符號可以發送，甚至可以針對一則訊息給予反應，而這個反應會顯示在訊息下方一角，相較於 Line 這點實在好用很多，舉例來說：老闆發了一則任務，以 Line 來說，如果每個人都已讀後都回覆一個貼圖或文字表示自己收到，那這則任務訊息很快地就被刷上去了，多人時容易造成漏收訊息，而 Slack 針對訊息做的反應會被整理在這則訊息的下方，如下圖：
    
    ![https://ithelp.ithome.com.tw/upload/images/20181021/20111449qP8LyJCRrA.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449qP8LyJCRrA.png)
    

而第 3 點也是最重要的一點，Slack 在傳送訊息上可以使用 markdown 語法來變換訊息的格式，使訊息更方便閱讀，以下為在 Slack 上常用的 Markdown 語法：

粗體：

```
*your text*

```

斜體：

```
_your text_

```

刪除線：

```
~your text~

```

階層：

```
>Quote one sentence
>>> Quote multiple sentences

```

小區塊：

```
`Format one word or one line*`

```

大區塊：

```
    ```
    Format blocks of text
    ```

```

對照圖

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449kDoJMB7Lex.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449kDoJMB7Lex.png)

更詳細的內容可以看這篇：[https://get.slack.help/hc/en-us/articles/202288908-Format-your-messages](https://get.slack.help/hc/en-us/articles/202288908-Format-your-messages)

懂得利用 Markdown 的格式來發送訊息有多重要呢？這邊就展示一個例子！如果同一個人發送小明說和小花說，沒有使用區塊分隔（圖片上半部）則兩則訊息的段落就變得不清楚，但如果兩則訊息都使用了大區塊來區分，在閱讀上就會清楚很多

如果你有在使用 Slack，一定要了解一下 Markdown 呀！

### **Facebook Messenger**

除了 Slack 這套通訊軟體以外，大家熟悉的 Facebook 聊天工具 Messenger 在傳送訊息時也可以使用 markdown 語法來改變訊息樣式，常用的語法介紹如下：

粗體

```
*your text*

```

斜體

```
_your text_

```

刪除線

```
~your text~

```

小區塊

```
`Format one word or one line`

```

大區塊

```
    ```
    Format blocks of text
    ```

```

顯示畫面

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449RfpsQma6NA.png](https://ithelp.ithome.com.tw/upload/images/20181021/20111449RfpsQma6NA.png)

要在 Messenger 使用 Markdown 語法來改變訊息格式有一點需要注意，行動裝置版本的 Messenger 是不會改變訊息格式的，會直接連帶將符號一起傳送（如下圖），只有電腦網頁版（上圖）才會顯示出改變，而上一個介紹的 Slack 則沒有這個問題，不論是電腦網頁版或是手機版都可以顯示出不同的文字格式。

![https://ithelp.ithome.com.tw/upload/images/20181021/20111449e63YG63dyk.jpg](https://ithelp.ithome.com.tw/upload/images/20181021/20111449e63YG63dyk.jpg)

以上簡單介紹幾個例子，Markdown 因為易讀易寫的原則已經廣大的被使用，了解 Markdown 的語法可以在撰寫文件上，用簡單的方式寫出易讀性高的文章，不論是用在團隊開發溝通的文件，還是發佈給大家看的內容，都可以統一且美觀的呈現。