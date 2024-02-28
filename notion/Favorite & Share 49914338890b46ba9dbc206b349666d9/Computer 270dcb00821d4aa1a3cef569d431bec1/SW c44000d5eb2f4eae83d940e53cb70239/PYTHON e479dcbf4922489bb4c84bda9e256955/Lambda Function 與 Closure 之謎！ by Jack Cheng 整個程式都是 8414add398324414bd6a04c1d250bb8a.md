# Lambda Function 與 Closure 之謎！ | by Jack Cheng | 整個程式都是我的咖啡館 | Medium

[https://medium.com/citycoddee/python%E9%80%B2%E9%9A%8E%E6%8A%80%E5%B7%A7-4-lambda-function-%E8%88%87-closure-%E4%B9%8B%E8%AC%8E-7a385a35e1d8](https://medium.com/citycoddee/python%E9%80%B2%E9%9A%8E%E6%8A%80%E5%B7%A7-4-lambda-function-%E8%88%87-closure-%E4%B9%8B%E8%AC%8E-7a385a35e1d8)

![1*070rDSwXIV-bCXLhDXyVfQ.jpeg](Lambda%20Function%20%E8%88%87%20Closure%20%E4%B9%8B%E8%AC%8E%EF%BC%81%20by%20Jack%20Cheng%20%E6%95%B4%E5%80%8B%E7%A8%8B%E5%BC%8F%E9%83%BD%E6%98%AF%208414add398324414bd6a04c1d250bb8a/1070rDSwXIV-bCXLhDXyVfQ.jpeg)

*「Lambda 和 closure 是程式語言必學的概念！」*

難易度：★★★☆☆

實用度：★★☆☆☆

by pixabay.com

# 【導言】

緣於上一篇【*[文章Python進階技巧 (3) — 神奇又美好的 Decorator ，嗷嗚！](https://medium.com/citycoddee/python%E9%80%B2%E9%9A%8E%E6%8A%80%E5%B7%A7-3-%E7%A5%9E%E5%A5%87%E5%8F%88%E7%BE%8E%E5%A5%BD%E7%9A%84-decorator-%E5%97%B7%E5%97%9A-6559edc87bc0)*】中提到在建構 Decorator 時，會使用到 closure （閉包）的概念，又一般教學都會將 lambda function 和 closure 一起講解，所以這裡也是不免俗的擺在一起解說！

**學習的邏輯是，先了解「什麼是 closure」，再學習「什麼是 lambda function」最後再回歸「因為 lambda function 有部份的缺陷所以才需要 closure」。**

另外強調一下，這篇與其說是 Python 的教學文，不如說是程式語言的概念詞講解。lambda function 和 closure 這兩個詞是在多數語言上都有的，並不是 Python 或是少數語言特有的，所以這篇文章除了範例 code 外，許多概念性的講解都是可以「大致」套用在其他語言上的！

# 【本文章節】

- 壹、什麼是 Closure 和 captured variable ?!
- 貳、Captured variables 為什麼好像不能被assign ?
- 參、如何 assign captured variables ?
- 肆、Captured variables 的獨立性
- 伍、什麼是 lambda function ?!
- 陸、Lambda function 使用時機
- 柒、Lambda function 與 closure 的關係 ?!

# 【開發環境與建議先備知識】

**OS** *Ubuntu 16.04*

**Python** *3.6*

**Required Knowledge**

- First Class Function (一級函數)
- 熟悉 Python scope 以及 life cycle

# **【壹、什麼是 closure 和 captured variable ?!】**

大家請先看一段範例 code：

[https://gist.github.com/JackInTaiwan/ef655b7d62890cf2a4bd7cda051d6f07](https://gist.github.com/JackInTaiwan/ef655b7d62890cf2a4bd7cda051d6f07)

由上面的例子可以看到，function `dog()` 裡面還包了一個 `profile()` 的 function，到目前為止都只是普通的結構，與 closure 沒有關係。在主程式段裡我們先 call `dog()` function，此時會 return `profile()` function。（還記得在上一篇文章[【Python進階技巧 (3) — 神奇又美好的 Decorator ，嗷嗚！】](https://medium.com/citycoddee/python%E9%80%B2%E9%9A%8E%E6%8A%80%E5%B7%A7-3-%E7%A5%9E%E5%A5%87%E5%8F%88%E7%BE%8E%E5%A5%BD%E7%9A%84-decorator-%E5%97%B7%E5%97%9A-6559edc87bc0) 中已經提過 ”First-class Function” 的概念，function 是可以被當作參數傳遞的。）

重點來了，在一般認知當中，function 中的 variable 其 life cycle（生命週期）會隨著 function 執行完而消滅。但在例子中，variable `height` 明明是在 function `dog()` 的 scope 裡，理論上在 12 行 call 完 `dog()` 後就要消失，怎麼會在 13行 call `dog_profile()` (也就是 call `profile()` 啦)時，還能夠找到 variable `height` 呢？！原因是出在 return function`profile` 時，function `profile` 偷偷 capture 住 variable 了，也就是把原本屬於別人上一層的變數偷渡到自己的 function scope ，而**被捕捉的 variable 就是 captured variable！而帶有 captured variable 的 function 我們就稱為 closure (function)！**

**以上就是所謂的 closure ！有「把別人（上一層）的 variable 偷渡關進自己的 function scope」的意思！**

# 【貳、Captured variables 為什麼好像不能被assign ?】

對於在一個 closure 中的 captured variable，我們已經在上面的例子看到能夠讀取其值，但若想要 assign 一個值給 captured variable，直覺上我們會這樣做：

[https://gist.github.com/JackInTaiwan/c76bbb3e8f0be6fddfc273efebc131ea](https://gist.github.com/JackInTaiwan/c76bbb3e8f0be6fddfc273efebc131ea)

**我們會很直覺的以為可以隨意操作 captured variable，但是會噴出掃興的 `UnboundLocalError` !**

這裡的原因有點細，要稍微注意一下。

首先，我們要知道這並不是說在 closure 裡面完全找不到命名為 `height` 的 variable 記憶體，而是該命名的記憶體位置已經分配好，但值尚未被 assign 進去，竟然就被取值了。如果是完全找不到命名為 `height` 的 variable 記憶體，應該是噴 `NameError: name 'height' is not defined` 才對。

接下來就要知道`UnboundLocalError` 出現的原因了。先瞥除 closure 和 captured variable 不管，一般使用 `global` 宣告 global variable 時，如果在某個 function 中同樣命名的變數要被 assign 一個值時，其實也會噴一樣的 `UnboundLocalError` 。舉例來說：

[https://gist.github.com/JackInTaiwan/02f94193fe615a8bd099440e3bcfb591](https://gist.github.com/JackInTaiwan/02f94193fe615a8bd099440e3bcfb591)

原因是這樣的：**在 function scope 裡，variable 如果要被 assign 的話，Python 會自動將 variable 定為 local variable，所以在 `x = x + 1` 的右邊的 `x` 因為被 function scope 判定為 local variable 了，而 local variable 裡又找不到命名為 `x` 的變數所以會找不到！**

所以同樣的邏輯套用在 captured variable上，也是因為 function scope 定 variable 為 local variable 而不是 captured variable，所以才會找不到！

**所以自始至終，都不是「captured variable 不能被 assign 值」而是「這樣的寫法根本沒有操作到 captured variable」喔！這是很常被誤解的事情，要釐清原因！**

# 【參、如何 assign captured variables ?】

那要怎麼在 function 中 assign 值給 variable 呢？！如果有明白上面解說的話，應該可以很輕易的想到，「那我們就不要操作 local variable 直接操作 captured variable 呀！」沒錯，這就是在 Python 中唯一的辦法，以下給範例：

[https://gist.github.com/JackInTaiwan/553a37cdb65e567b96daeb86e243ecd0](https://gist.github.com/JackInTaiwan/553a37cdb65e567b96daeb86e243ecd0)

**作法就是：加入第5行的 `nonlocal` 去宣告我們 variable `height` 的 scope 就可以去 access 到並進行任意操作了！**因為 captured variable 在 Python 中既不是 `local` 也不是 `global` 所以只能用 `nonlocal` 去 access 喔！

# 【肆、Captured variables 的獨立性】

另外要注意，被 closure 關進的 variable，是獨立的，僅依賴該 function scope，因此對這個 function 裡的 captured variable 做操作，是不會影響其他 function 裡的 captured variable 喔！以下給個簡單範例，展示一下：

[https://gist.github.com/JackInTaiwan/10e098c60f884f6760ad899c52381a69](https://gist.github.com/JackInTaiwan/10e098c60f884f6760ad899c52381a69)

舉一隅要能反三隅，上面的範例用了兩層的 closure 來增加一咪咪困難度。

不過重點還是要展示「captured variables 的獨立性」。有沒有注意到**儘管 `dog_1_grow_up` closure 裡的 captured variable `height` 已經被操作加到 `43` ，對於另一個 closure `dog_2_grow_up` 而言，裡面的 captured variable `height` 是彼此獨立不相干的！**

如果敏銳一點的人應該不難發現，這樣的概念是不是超級無敵像 class 的概念呢？！每一個 return 出的 function 都是 instance，captured variables 就像是裡頭的 instance variable。

**沒錯！closure 確實可以拿來做很像 class 的事情，不過這並不常在 Python 中被這樣使用，但像是在 Javascript 中就是這樣被使用的！**

Javascript 是 Prototype-based（基於原型）的，因此本身沒有提供真正的 class，所以是利用 closure 的方式去實作像是 class 的東西！更多的說明可以參考別人撰寫的【[認識 Lambda/Closure（1）從 JavaScript 的函式物件談起 << 前情](http://www.codedata.com.tw/java/understanding-lambda-closure-1-from-javascript-function-1)】中對 Javascript 的 closure 解說。

# 【伍、什麼是 lambda function ?!】

Closure 學到這裡告一個段落，此時就你可能會想「阿這個用在哪裡？」回答這個問題之前，必須先引入一個新概念 lambda function（匿名函式）。

什麼是 lambda function ? 以下給一段範例 code ：

[https://gist.github.com/JackInTaiwan/f677122bd5fcccbeeec0efd379de9147](https://gist.github.com/JackInTaiwan/f677122bd5fcccbeeec0efd379de9147)

範例中第一段展示了如何建立 lambda function， `lambda` 後放入參數，而冒號 `:` 後面則接想要 return 的值。範例中第二段展示了將建立好的 lambda function 以一個 variable 存起來，之後再 call function。

沒錯，我想你已經發現（還是其實沒有Q）範例中第二段的 `add` 最後發揮的效果其實就跟我們平常用的 `def add(x)` （範例中第三段）是一樣的！！！

**lambda function 可以視為所有任意函數的最小單位，所有函數不管參數有幾個，總是可以拆成一個又一個 recursive lambda functions，而這也是多數程式語言中 lambda function 最基礎的概念。**以下給出一個用 recursive lambda functions 實作一個普通 function 效果的例子：

[https://gist.github.com/JackInTaiwan/f7c094de3b6c37b43c3ccf02e8756e89](https://gist.github.com/JackInTaiwan/f7c094de3b6c37b43c3ccf02e8756e89)

不過因為 Python 的設計關係，Python 已經支援兩個參數以上的 lambda function了，不需要寫的這麼複雜。最初程式語言中的 lambda function 是被設計強制只能吃進一個參數，不過後期許多語言都已經加強支援多參數的 lambda function 了。

# 【陸、Lambda function 使用時機】

那麼這邊就有人會問，阿原本寫 function 的方式為什麼要寫成 lambda?

這就要提一下 lambda function 使用的時機，我個人整理出下列兩種最常見的可能：

- **使用頻率過少，節省記憶體**：這個 function 只出現一次或少數次數，有失去宣告為一個 function 的「可重複使用性」之疑慮，採用隨用隨扔的 lambda function。此外有一說是可以節省記憶體空間，但這部份我採保留態度。
- **命名困難或不必要：**這個 function 出現次數偏少，且難以命名，不必要命名，或是命名會干擾整個命名空間和規則。
- **炫耀自己可以在一行內把邏輯寫完：**顧名思義。

「使用頻率過少」這個應該大家都知道，至於什麼是「命名困難或不必要」，乍聽很難理解，不過這其實大家都常常使用到，最經典的例子就是function `max()` ，以下展示一下例子：

[https://gist.github.com/JackInTaiwan/211f2cb0df1c7b51c59e6747ffdcdad1](https://gist.github.com/JackInTaiwan/211f2cb0df1c7b51c59e6747ffdcdad1)

例子中利用每個 tuple element 中特定 index 作為 sort 大小的依據，這是一個很常見的用法，當中就使用了 lambda function 之回傳作為 argument “key” 的參數。很明顯，儘管這個 lambda function 很常被使用，使用頻率滿高，許多人也不會把它獨立寫成一個 normal function，這就是我所謂的「命名困難或不必要」。

當然是否要寫成 lambda function 是端看當下的情況還有 developer 與 team 的開發習慣，在此就不多加著墨。

# 【柒、Lambda function 與 closure 的關係 ?!】

為了解釋為何會有 closure 的設計，因此在上面先解說了什麼是 lambda function。行至此處，應該已經不難發現，lambda function 會遇到最大的問題就是如果過程中某個計算結果是很消耗資源，重新計算是非常枉然的，但是 lambda function 又不能儲存當中計算過程的結果。於是就有 closure 的設計出現啦！

**Closure 的出現，讓 lambda function 可以捕捉已經做過的計算結果，這樣既可以達到在必要時刻使用 lambda function 又可以儲存某些重要計算結果！**

# 【結語】

這篇文章和以往的文章取向非常不一樣，就像本文一開頭的【導論】中就有提到，**這是一篇「程式語言的概念講解」，而不是介紹 Python 中什麼好用的技巧或工具。**

這篇的消化必須建立在你對程式語言有一定的了解，對於 life cycle、scope 等概念就沒有加解釋，而且也是建立在有其他程式語言學習經驗（像是 Java、Javascript、Golang 等等），這樣比較有機會可以感受 lambda function 和 closure 在程式語言扮演的重要性與運用，像是： Java 原先沒有 first-class function 但是可以藉由 lambda function 來實作相似的功能等等。

因為 Python 的設計關係，lambda function 和 closure 使用性與重要性除了一些常用的地方外，並沒有那麼大的影響，所以這篇就只能當作是打點程式語言的小基礎囉！

# 【飯後餐點】

特別感謝阿玉（[Jade Chen](https://medium.com/@chenbingjyue)）校稿斧正本文章。

本文中的所有範例 code 都可以參閱 [github source code](https://github.com/JackInTaiwan/python-advanced-tutorial/tree/master/advanced_4_closure)。

最後附上一些延伸相關資料。

如果你也喜歡我們的文章，幫我們動動手部肌肉，按下掌聲Clap，讓我們有動力繼續煮下一頓料理！