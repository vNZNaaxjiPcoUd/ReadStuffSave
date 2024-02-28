# JavaScript 簡介

## 

### ∗ JavaScript 命令稿 (Script)：

### ▸ 一系列的指令，讓電腦能一步一步的依照指示執行

### ▸ 每一行指令 (Statement) 以分號 (;) 結尾

### ▸ 再次檢視 add-content.js

```
var today = new Date();
var hourNow = today.getHours();
var greeting;

alert('第一個 JavaScript 程式');

if (hourNow > 18) {
  greeting = '晚安';
}
else if (hourNow > 12) {
  greeting = '午安';
}
else if (hourNow > 0) {
  greeting = '早安';
}
else {
  greeting = '歡迎';
}

document.write('<h3>' + greeting + '</h3>');

```

### ✶ 藍色字：結束處有分號的指令

### ✶ 綠色字：決定是否要執行該區塊程式

### ✶ 紅色大括號：程式碼區塊 (Code block) 的開始及結束位置，結束大括號後面不需要分號。 將許多相關的指令集合在區塊中，有助於程式的可閱讀性

## (2) 註解

### ∗ 註解 (Comment)

### ▸ 在程式中撰寫說明文字可讓程式更易於了解，註解並非程式，因此電腦不會執行

### ▸ 多行註解 (Multi-line comment)：包含在 /* 與 */ 之間， 可跨多行，大多用來說明整段程式的意義

### ▸ 單行註解 (Single-line comment)：跟隨在 // 之後的文字直到行末，不跨行， 大多用來說明某程式片段

### ▸ 以 add-content.js 為例：所加入的紅色字為多行註解，綠色字為單行註解

```
/* add-content.js

   依據目前時間來顯示不同的致意文字

   作者：張三
   最後修改：2018/2/24
*/

var today = new Date();
...

// 依據目前時間來顯示適當的致意文字
if (hourNow > 18) {
  greeting = '晚安';
}
...

document.write('<h3>' + greeting + '</h3>');

```

## (3) 變數

### ∗ 變數 (Variable) 與宣告 (Declaration)

### ▸ 變數代表一項資料的名稱，例如：numPages 是一個變數，變數值記錄「頁數」

### ▸ 變數宣告包括產生該變數並指定名稱，格式如下：

### var <varName>;

### ✶ 例如：var numPages;

### ▸ JavaScript 屬直譯式語言(Interpreted language)，變數可以不必宣告。但未經宣告的變數還是需要先設值然後才能讀取，否則會出現 <varName> is not defined 錯誤訊息

### ▸ 使用嚴格模式：在檔案第一行加入 'use strict'; 則變數必須先宣告才能使用

### ∗ 變數的設值 (Assigning a value)

### ▸ 設定一個變數的值，格式如下：

### <varName> = <value>;

### ✶ 例如：numPages = 100;

### ▸ 等號稱為設值運算子 (Assignment operator)

### ▸ 也可以在宣告變數時，一併設值，格式如下：

### var <varName> = <value>;

### ✶ 例如：var numPages = 100;

### ∗ 基本資料型態 (Basic data type)

### ▸ 字串 (String) 資料型態：一連串的字元 (Characters)，例如：

### studentName = '張三';

### ▸ 數值 (Numeric) 資料型態：整數 (Integer)、浮點數 (Floating point number)，例如：

### numBookings = 60;

### interestRate = 0.02;

### ▸ 布林 (Boolean) 資料型態：只有真 (true) 與假 (false) 兩個值，例如：

### rentPaid = true;

### rentPaid = false;

### ∗ 字串變數

### ▸ 宣告並設定字串變數，例如

### var deptName = '資訊管理系';

### ▸ 更改變數值：設定為其他值

### deptName = '資訊工程系';

### ▸ 練習：

### ✶ 建立第 2 章的目錄架構：

```
javaScript/
   ...
   ch2/
      css/
      img/
      js/

```

### ✶ 下載 [assets2.zip](http://yltang.net/static/tutorial/javascript/assets2.zip)， 解壓縮後將 ch2.css 置於 ch2/css/ 目錄中， 其餘影像均置於 ch2/img/ 目錄中

### ✶ 建立 ch2/string-variable.html：

```
<!doctype html>
<html>
<head>
<title>Variables</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/ch2.css">
</head>
<body>
<h1></h1>
<div id="content">
  <div id="title">您好 <span id="name">我們的好朋友</span>!</div>
  <div id="note">歡迎蒞臨...</div>
</div>
<script src="js/string-variable.js"></script>
</body>
</html>

```

### ✶ 建立 ch2/js/string-variable.js：

```
var username = '親愛的顧客';
var message = '歡迎看看我們最新推出的系列';

var elem = document.getElementById('name');
elem.textContent = username;
var note = document.getElementById('note');
note.textContent = message;

```

### # 利用 document.getElementById(...) 擷取特定 id 的 HTML 元素

### # 利用 .textContent = ... 方法來設定元素的文字內容

### # 可在瀏覽器頁面按下 F12 開啟 DevTools 視窗：Elements 頁籤包含 HTML 與 CSS 內容，Console 頁籤可觀察 console.log() 執行結果與程式錯誤訊息

### ▸ 單引號或雙引號

### ✶ JavaScript 的字串可使用單引號 (') 或雙引號 (") 包含，但單引號較簡單、較常用，此外，HTML 習慣使用雙引號，因此 JavaScript 使用單引號更能區隔

### ✶ 字串本身有單引號或雙引號，則可分別使用雙引號或單引號包含，例如：

```
message = 'The book called "Learning JavaScript" is my favorite.';
message = "It's popular to use JavaScript to create effects in a web page.";

```

### ▸ 連接字串

### ✶ 使用加號連接字串，例如：

```
var username = 'Mark';
console.log('謝謝您, ' + username + '先生/小姐!');

```

### ▸ 練習：

### ✶ 建立 ch2/string-with-quotes.html (類似 string-variable.html)：

```
...
<body>
<h1></h1>
<div id="content">
  <div id="title">特價</div>
  <div id="note">請註冊以收到最適合您的折扣</div>
</div>
<script src="js/string-with-quotes.js"></script>
...

```

### ✶ 建立 ch2/js/string-with-quotes.js：

```
var title = '特殊顧客的特殊價格';
var message = '<a href="sale.html">75折！</a>';

var elTitle = document.getElementById('title');
elTitle.textContent = title;
var note = document.getElementById('note');
note.innerHTML = message;

```

### # 利用 getElementById(...) 找到元素，並利用.textContent = ... 設定文字內容

### # innerHTML：加入 HTML code (.textContent 僅能設定文字，不能設定 HTML code)

### ∗ 數值變數

### ▸ 設定數值變數，例如：

### var numBookings = 22;

### ▸ 練習：

### ✶ 建立 ch2/numeric-variable.html (類似 string-variable.html)：

```
...
<body>
<h1></h1>
<div id="content">
  <h2></h2>
  <p>售價： 每個字 $50</p>
  <div id="cost"></div>
  <img src="img/preview.jpg" alt="Sign">
</div>
<script src="js/numeric-variable.js"></script>
...

```

### ✶ 建立 ch2/js/numeric-variable.js：

```
var price = 50;
var quantity = 14;
var total = price * quantity;

var elem = document.getElementById('cost');
elem.textContent = '小計：$' + total;

```

### # 宣告並設定三個變數的值：price, quantity, total

### # 利用 document.getElementById('cost') 擷取 id 為 cost 的 HTML 元素，即 <div id="cost"></div>

### # 利用 .textContent = ... 方法來設定元素的文字內容

### # JavaScript 語言中，字串與數值相加時，會先將數值轉為字串，然後再連結兩個字串 (稍後於「變數的資料型態」進一步說明)

### ∗ 布林變數

### ▸ 設定布林變數，例如

### var acceptCreditCards = true;

### ∗ 宣告變數的方式

### ▸ 宣告並同時設值，例如：

```
var price = 5;
var quantity = 14;
var total = price*quantity;

```

### ▸ 一次宣告多個變數：

```
var price, quantity, total;
price = 5;
quantity = 14;
total = price*quantity;

```

### ▸ 一次宣告多個變數並同時設值：

```
var price=5, quantity=14;
var total = price*quantity;

```

### ∗ 變數的命名原則：變數名稱

### ▸ 必須以英文字母、錢號 ($)、或底線 (_) 開始

### ▸ 可包含英文字母、數字、錢號、或底線

### ▸ 不能使用關鍵字 (Keywords) 或保留字 (Reserved)，如下：

[Untitled Database](JavaScript%20%E7%B0%A1%E4%BB%8B%20f330b700ad0542e69138abd5fd26de02/Untitled%20Database%2057b1887931a345548c06f2913ac794b2.csv)

### ▸ 英文字母大小寫不同 (Case-sensitive)，例如：score 與 Score 是不同的

### ▸ 應使用有意義的變數名稱，例如：姓 lastName

### ▸ 使用駝峰式命名法(Camel-style)：第一個英文字的第一個字母小寫，之後的英文字的第一個字母大寫，例如：numBookings, className

## (4) 變數的資料型態

### ∗ 資料型態 (Data types)

### ▸ 說明變數所儲存資料的型態 (整數、浮點數、字串、布林、物件、...)

### ∗ 靜態型別與動態型別程式語言

### ▸ 靜態型別 (Static typing)：變數要先宣告，宣告時需要指定變數的資料型態，且該型態不會改變，例如：Java, C, ...

### ✶ 例如 Java 語言：

```
int x;
x = 'abcd';   // Compile error

```

### ▸ 動態型別 (Dynamic typing)：變數不需要先宣告，變數的資料型態隨時可改變，例如：JavaScript, Python, PHP, ...

### ✶ 例如 JavaScript：

```
x = 3;
x = 'abcd';   // OK

```

### ▸ 變數與記憶體

### ✶ 靜態型別語言的變數與記憶體是位置的關係，每個變數有固定的儲存空間，在宣告時決定，因此資料型態無法改變，例如：

```
int width = 20;
int height = 30;

```

### 

![http://yltang.net/static/tutorial/img/javascript/java.png](http://yltang.net/static/tutorial/img/javascript/java.png)

### ✶ 動態型別語言，變數與記憶體是指標的關係，每個變數會參考 (Reference) 記憶體裡的一個值，例如：

```
var width = 20;
var height = 30;

```

### 

![http://yltang.net/static/tutorial/img/javascript/javaScript.png](http://yltang.net/static/tutorial/img/javascript/javaScript.png)

### ▸ 強型別與弱型別

### ✶ 強型別 (Strong typing)：運算子期待變數應有資料型別，若使用其他型別會造成錯誤，例如 Java：

```
int x;
x = 20 + 'abcd';  // Compile error

```

### ✶ 弱型別 (Weak typing)：運算子期待變數應有資料型別，若使用其他型別可能不會造成錯誤，例如 JavaScript：

```
x = 20 + 'abcd';  // x: '20abcd'

```

### ▸ 型態強迫轉換(Type coercion)

### ✶ 如果我們使用了 JavaScript 並不期待的資料型態，JavaScript 會嘗試解決型態問題，而不是直接發生發佈錯誤訊息， 亦即 JavaScript 會在幕後進行資料型態轉換，稱為型態強迫轉換 (Type coercion)，例如：if ('1' > 0)， 字串 '1' 會轉換為數值 1 然後進行比較，最後得到真值

### ▸ 作業 1

## (5) 陣列

### ∗ 陣列 (Array)

### ▸ 用來儲存彼此相關的一串資料

### ∗ 不使用陣列：

```
var city0 = '台北市';
var city1 = '新北市';
var city2 = '台中市';
var city3 = '台南市';
var city4 = '高雄市';

```

### ∗ 使用陣列 (以方括號包含)：

### var cities = ['台北市', '新北市', '台中市', '台南市', '高雄市'];

### 或 var cities = new Array('台北市', '新北市', '台中市', '台南市', '高雄市');

### ▸ 以 var <arrayName> = [...]; 方式建立陣列稱為 *Array literal* (依字面建立陣列)

### ▸ 以 var <arrayName> = new Array(...); 方式建立陣列稱為 *Array constructor* (依建構子建立陣列)

### ▸ 陣列變數名稱大多使用複數

### ▸ 陣列元素索引 (Index) 從 0 開始

### ▸ 陣列元素可以有不同的資料型態

### var mixedData = [26, '學生', 2, '教師'];

### ∗ 增加或修改陣列元素

### ▸ 建立 ch2/pets.html：

```
<!doctype html>
<html>
<head>
<title>Pets</title>
<meta charset="utf-8">
</head>
<body>

<script src="js/pets.js"></script>
</body>
</html>

```

### ▸ 建立 ch2/js/pets.js，並輸入以下各段落之陣列練習內容：

```
var pets = [];    // 宣告一個空陣列
pets[2] = '蜥蜴';
pets[3] = '蛇';
console.log(pets[0]);    // 未定義：undefined
console.log(pets[2]);    // 蜥蜴

```

### ▸ 增加元素：

```
pets[4] = '狗';    // 原先元素僅有 4 個，增加第 5 個

```

### ▸ 修改已存在之元素：

```
pets[3] = '貓';    // 修改第 4 個元素

```

### ▸ 設定未定義之元素：

```
pets[0] = '鳥';    // 設定未定義之第 0 個元素
pets[1] = '魚';    // 設定未定義之第 1 個元素

```

### ∗ 在陣列頭尾增加或刪除元素

### ▸ 刪除第一個元素：shift()

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.shift();
console.log(pets);    //  魚,蜥蜴,蛇,狗

```

### ▸ 在陣列開頭增加元素：unshift()

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.unshift('兔子');
console.log(pets);    // 兔子,鳥,魚,蜥蜴,蛇,狗
pets.unshift('烏龜', '布丁鼠');
console.log(pets);    // 烏龜,布丁鼠,兔子,鳥,魚,蜥蜴,蛇,狗

```

### ▸ 刪除最後一個元素：pop()

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
var pet = pets.pop();
console.log(pets);    // 鳥,魚,蜥蜴,蛇
console.log(pet);    // 狗

```

### ▸ 在陣列結尾增加元素：push()

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.push('兔子');
pets.push('烏龜', '布丁鼠');
console.log(pets);    // 鳥,魚,蜥蜴,蛇,狗,兔子,烏龜,布丁鼠

```

### ∗ 在陣列中插入或刪除元素

### ▸ 在陣列中插入一個或多個元素 (「拼接」)： splice(<startIndex>, <numElemToRemove>, <elements>)

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.splice(2, 0, '烏龜');    // 在位置 2 刪除 0 個元素 ，插入'烏龜'
console.log(pets)     // 鳥,魚,烏龜,蜥蜴,蛇,狗

```

### ▸ 在陣列中刪除某元素：splice(<startIndex>, <numElemToRemove>)

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.splice(2, 1);
console.log(pets)     // 鳥,魚,蛇,狗
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.splice(2, 2);
console.log(pets)     // 鳥,魚,狗

```

### ▸ 在陣列中同時刪除及插入元素

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
pets.splice(1, 2, '貓', '鴨');  // 在位置1刪除2個元素，插入'貓', '鴨'
console.log(pets)     // 鳥,貓,鴨,蛇,狗

```

### ∗ 串接兩個陣列：concat()

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
var morePets = ['烏龜', '布丁鼠'];
var allPets = pets.concat(morePets);
console.log(allPets);    //  鳥,魚,蜥蜴,蛇,狗,烏龜,布丁鼠

```

### ∗ 陣列切片：slice(<startIndex>, <endIndexPlusOne>)

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
var somePets = pets.slice(1, 3)
console.log(somePets);    // 魚, 蜥蜴

```

### ∗ 陣列長度：.length

```
var pets = ['鳥', '魚', '蜥蜴', '蛇', '狗'];
console.log(pets.length);

```

### ∗ 練習

### ▸ 建立 ch2/array-literal.html (類似 string-variable.html)：

```
...
<body>
<h1></h1>
<div id="content">
  <div class="message">顏色: <span id="colors">找不到您選擇的顏色，請再試一次...</span></div>
</div>
<script src="js/array-literal.js"></script>
...

```

### ▸ 建立 ch2/js/array-literal.js：

```
var colors = ['白', '黑', '客製'];

var el = document.getElementById('colors');
el.textContent = colors[0];

```

### ▸ 建立 ch2/array-constructor.html (類似 array-literal.js)：

```
...

<script src="js/array-constructor.js"></script>
...

```

### ▸ 建立 ch2/js/array-constructor.js：

```
var colors = new Array('黑', '白', '客製');

var el = document.getElementById('colors');
el.textContent = colors[0];

```

### ▸ 作業 2

## (6) 表示式

### ∗ 表示式 (Expression)：計算後可以得到一個結果值

### ▸ 大致可分為兩種表示式：

### ✶ 為單一變數設值的表示式，例如：

### var color = 'blue';

### ✶ 多個值經過計算後回覆單一值，例如：

### var area = 30*20;

### ∗ 運算子 (Operator)

### ▸ 表示式裡會透過運算子來進行計算

### ▸ 常見的運算子：

### ✶ 設值運算子 (Assignment operator)：設定一個變數值，以等號 (=) 表示，例如：

### color = 'blue';

### ✶ 算術運算子 (Arithmetic operator)：進行算術運算，例如：

[Untitled Database](JavaScript%20%E7%B0%A1%E4%BB%8B%20f330b700ad0542e69138abd5fd26de02/Untitled%20Database%2070c835940ccc4e869668caccbb633d74.csv)

### ✶ 字串運算子 (String operator)，進行字串連接 (Concatenation)，以加號 (+) 表示，例如：

```
var firstName = 'Ivy ';
var lastName = 'Stone';
var fullName = firstName + lastName;    // --> 'Ivy Stone'

```

### # 文字字串與數字相加，JavaScript會自動將數字改為文字：

```
var cost1 = 70;
var cost2 = '90';
var cost = cost1 + cost2;   // --> '7090'

```

### # 對字串進行算術運算會得到非數字之值(NaN, not a number)，例如：

```
var unitPrice = 'senventy';
var quantity = 'three';
var price = quantity * unitPrice;   // --> NaN
console.log(price);

```

### ∗ 練習

### ▸ 建立 ch2/arithmetic-operator.html (類似 string-variable.html)：

```
...
<body>
<h1></h1>
<div id="content">
  <div class="message number">Subtotal: $<span id="subtotal"></span></div>
  <div class="message number">Shipping: $<span id="shipping"></span></div>
  <div class="message number">Total: $<span id="total"> </span></div>
</div>
<script src="js/arithmetic-operator.js"></script>
...

```

### ▸ 建立 ch2/js/arithmetic-operator.js：

```
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);
var total = subtotal + shipping;

var el = document.getElementById('subtotal');
el.textContent = subtotal;
var el = document.getElementById('shipping');
el.textContent = shipping;
var el = document.getElementById('total');
el.textContent = total;

```

### ▸ 在 ch2/css/ch2.css 裡已有

```
.number {
  text-align: left;
}

```

### ∗ 練習

### ▸ 建立 ch2/string-operator.html (類似 string-variable.html)：

```
...
<body>
<h1></h1>
<div id="content">
  <div id="greeting" class="message">嗨，<span id="name">好朋友</span>!</div>
</div>
<script src="js/string-operator.js"></script>
...

```

### ▸ 建立 ch2/js/string-operator.js：

```
var greeting = '您好，';
var name = '張先生';

var welcomeMessage = greeting + name + '!';
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

```