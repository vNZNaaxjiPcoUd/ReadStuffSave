[快速認識基礎的 Swift 吧。](https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E8%B3%87%E5%B7%A5%E7%B3%BB%E5%90%8C%E5%AD%B8-%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E7%9A%84%E5%9F%BA%E7%A4%8E-swift-%E8%AA%9E%E6%B3%95-59229f07d6fa)
======

* 宣告 constant(常數)
    
* 宣告 variable(變數)
    
* type annotation(宣告常數變數時加上型別)
    
* string interpolation(字串置換)
    
* 呼叫 function
    
* 以型別( ) 產生 instance(實體)
    
* 加入 framework(函式庫)
    
* call method(呼叫方法)
    
* 存取 property(屬性)
    
* 存取 type property
    
* 呼叫 type method
    
* 定義 function
    
* 定義 class(類別)
    
* 定義 struct
    
* if else
    
* array(陣列)
    
* for in 迴圈
    
* while 迴圈
    
* switch
    
* 定義 enum
    
* dictionary(字典)
    
* 可有可無的 Optional
    
* initializer(初始化函式)
    
* 定義 type property & type method
    

**宣告 constant(常數)**
===================

使用 let 宣告常數。型別可省略，因為可由內容自動推理型別。

範例

    let

常數 girlFriend 儲存女朋友的名字小龍女，girlFriend 的型別自動推理為字串(String)。跟小龍女談戀愛超棒的，希望她能永遠當我們的女朋友，永遠不會變。

**宣告 variable(變數)**
===================

使用 var 宣告變數。

範例

    var

變數 height 儲存彼得潘的身高 179.5，height 的型別自動推理為浮點數(Double)。彼得潘希望自己未來還能長高，height 還能改變，有天能夠變成 180。

**type annotation(宣告常數變數時加上型別)**
================================

宣告常數變數時額外加上型別名字，語法為冒號加上型別名字。

範例

    let

String 是字串，Double & Float 是浮點數，Int 是整數，Bool 可存 true 或 false。

**string interpolation(字串置換)**
==============================

在 `""`裡用 `**\( )**` 包含變數(常數)， `**\( )**`將被置換成變數(常數)的內容。

範例

    var

intro 將儲存字串`"我是名字是彼得潘，今年18歲，星座是最棒的水瓶座，身高179.5公分"`。

**呼叫 function**
===============

function 名加 ( )，( ) 裡可傳入參數。

範例

    print

( ) 裡可傳入多個參數，參數間以逗號分隔，有些參數前會保留參數名。以下我們用 3 個參數的 print 說明。

 ![](https://miro.medium.com/v2/resize:fit:875/1*WaoD-Xp-EDOCK8I0cIb8rA.png) 

範例

    print

程式將印出 `**我最愛的動物有🐨、🐧、🦊……**` **。**第一個參數是列印的內容，型別 `Any…` 表示可傳入任何東西，`…` 表示可傳入多個要列印的內容。當有多個要列印的內容時，第二個參數 separator 是它們之間的分隔字串，第三個參數 terminator 將成為結尾的字串。

**以型別( ) 產生 instance(實體)**
==========================

使用型別( ) 可產生實體(東西)。

範例

    let

使用 Int( ) 產生整數，傳入 2.7，得到數字 3。

    let

使用 String( ) 產生字串，傳入參數 `"Love You "` & `3000`，得到的字串是 3000 個 Love You 。

 ![](https://miro.medium.com/v2/resize:fit:875/1*LFOYXbiIaV8iKVDAplukzg.png) 

**加入 framework(函式庫)**
=====================

import 加函式庫名字。

範例

    import

加入函式庫 AVFoundation，AVFoundation 定義跟影音播放相關的功能。

**call method(呼叫方法)**
=====================

變數常數的名字 \+ . \+ function 名 + (參數)。

範例

    var

 ![](https://miro.medium.com/v2/resize:fit:875/1*PzdBoUHBqDQB5QLO_bCJJA.png) 

呼叫字串的 function append，在 `peter` 後增加字串`是真男人`，bestManName 變成`"peter是真男人"`。

**存取 property(屬性)**
===================

變數常數的名字 \+ . \+ 屬性名。

範例

    var

 ![](https://miro.medium.com/v2/resize:fit:875/1*1W6AxyUBOa_9BX2ojnDnfw.png) 

讀取字串的 property count，取得字串的字數。由於 bestManName 是 peter，bestManName.count 將得到 5。

**存取 type property**
====================

型別名 \+ . \+ 屬性名。

範例

    Double

結果

 ![](https://miro.medium.com/v2/resize:fit:728/1*mhJMyurzv-sIEyvLByAviQ.png) 

**呼叫 type method**
==================

型別名 \+ . \+ function 名 + (參數)。

範例

    let

產生 1 ~ 6 之間的隨機整數。

**定義 function**
===============

func + 名稱 + ( )，( ) 裡可包含參數，宣告參數的格式為參數名 + : + 參數型別。

範例

    func

印出`原來Peter是我最想留住的幸運，原來我們和Hook曾經靠得那麼近`。

當 function 會回傳資料時，必須在 ( ) 後加上 `-> 回傳型別`，然後以 `return` 回傳資料。

範例

    func

message 的內容為`"原來Peter是我最想留住的幸運，原來我們和Hook曾經靠得那麼近"`。

補充: function 參數的外部名 & 內部名(argument label & parameter name)

**Swift function 參數的外部名 & 內部名(argument label & parameter name)**
----------------------------------------------------------------

### 呼叫 function 包含參數名的好處

medium.com

**定義 class(類別)**
================

class + 類別名 + { }，{ } 裡可包含 property & method，property 以變數常數宣告，method 以 function 定義。

範例

    class

類別可以繼承，以下例子 `class SuperBaby: Baby` 表示 SuperBaby 繼承 Baby，SuperBaby 將擁有 Baby 的 property & method。

    class

**定義 struct**
=============

struct 的語法和功能跟 class 類似。主要差別在 class 是 reference type，struct 是 value type。

範例

    struct

補充: Swift 的 value type 和 reference type

**Swift 的 value type 和 reference type**
---------------------------------------

### 在 Swift 裡，型別分成 value type 和 reference type。struct，enum 和 tuple 是 value type，而 class，function 和 closure 則是 reference…

medium.com

**if else**
===========

if 後必須接 Bool 型別的資料判斷條件是否成立。

範例

    func

印出`"你是我的傳說"`。

**array(陣列)**
=============

可包含多筆資料，以 \[ \] 包含 array 的內容，array 型別的寫法為 \[成員型別名\]。

範例

    let

印出`我最愛的3個男人，第一名是劉德華`。在 \[ \] 傳入數字可存取 array 的成員，數字從 0 開始，因此 idols\[0\] 是第一筆資料，idols\[1\] 是第二筆資料。從 array 的 property count 可取得成員的數量。

**for in 迴圈**
=============

in 後可接數字範圍，迴圈跑的次數將依據數字範圍裡有幾個數字。範圍有 `…` 和 `..<` 兩種表示法，比方 `1…10` 表示 1 到 10，`1..<10` 表示 1~9，不包含 10。

範例

    var

迴圈會跑 9 次，sum 為 2加3一路加到 10 的總和。

in 後也可以接陣列，迴圈跑的次數將依據 array 裡有幾個成員。

範例

    let

印出 array names 裡每個成員的名字。迴圈會跑 4 次，第一次時 name 是 peter，第二次時 name 是 wendy。

**while 迴圈**
============

範例

    var

sum 將等於 30( 5+10+15)。

**switch**
==========

switch 後可接任何型別的資料，當 case 條件成立時，執行完 case 裡的程式後將離開 switch 的 { }，不需要加 break。

範例

    func

印出`Peter 是真男人`。

**定義 enum**
===========

適合表達清單的成員。

範例

    enum

補充: enum 的詳細說明。

**Swift 表達清單成員的 enum(enumeration)**
-----------------------------------

### Swift 主要有三種發明型別的方法，class、struct 和 enum。class 和 struct 相似，定義著型別的屬性和方法，enum 則適合表達清單的成員，幫助我們以更容易理解記憶的名稱增加程式的可讀性和安全性。

medium.com

**dictionary(字典)**
==================

以 key & value 的方式儲存資料，方便之後用 key 找資料。以 \[ \] 包含 dictionary 的內容，dictionary 型別的寫法為 \[key 的型別名: value 的型別名\]。

範例

    var

在 \[ \] 傳入 key 可查詢對應的 value，因此 `lifeNumberDic["生命靈數3"]` 會得到`創意`。

**可有可無的 Optional**
==================

當變數常數宣告為 optional 時，表示它可以不存東西，使用到問號與驚嘆號的語法。相關說明可參考以下連結。

**Swift的問號與驚嘆號：可有可無的 Optional**
-------------------------------

### 可有可無的 Optional 是 Swift 裡一個非常特別的角色。你看它號稱可有可無，我們卻還要認識他，就知道他多特別了。有了它，不管何種型別的變數或常數，都可以沒有任何內容，也就是無值的狀態。至於這有什麼好呢…

www.appcoda.com.tw

**initializer(初始化函式)**
======================

我們可以 init 定義初始化函式，生成實體時將呼叫初始化函式設定屬性的內容。

範例

    class

在 Baby 裡定義三種 init，產生 Baby 時可選擇不同的 init，傳入不同的參數。

 ![](https://miro.medium.com/v2/resize:fit:875/1*y6r-haWIa_YnmHA5-HNYmA.png) 

**定義 type property & type method**
==================================

以 static 定義可從型別存取的 type property & type method。

範例

    class

**Swift 的進階語法和其它參考連結**
======================

以上大概就是 Swift 比較基礎的部分。覺得意猶未盡，開始慢慢喜歡 Swift 了嗎？想再深入了解它，學習 closure，extension，protocol，generic 等進階技術 ? 沒問題，它的一切秘密都藏在 Apple 的網站 The Swift Programming Language，等著你挖掘 ~。
