# javascript中的setter、getter

javascript中的setter、getter是平時接觸比較少的方法，其本身也並不是標準方法，只在非ie瀏覽器裡支援（ie核心也許有其他方法可以做到呢？暫時不知其解），但是加以利用可以做許多事情，比如：

**1、對資料的訪問限制：**

a.value是對value變數的getter方法呼叫，如果在getter方法實現中丟擲異常，可以阻止對value變數的訪問

**2、對dom變數進行監聽：**

window.name是一個跨域非常好用的dom屬性（大名鼎鼎，詳見百度），如果覆蓋window.name的setter實現則可以實現跨頁面的記憶體非同步通訊

**3、自己發揮想象力，能做的事情好多滴**

以下皆轉： 首先，我們先來快速瞭解什麼是Getters和Setters，以及它們為什麼很有用。然後，我們來看看現在都有哪些平臺支援Gettets和Setters。

**Getters和Setters**

Getters和Setters使你可以快速獲取或設定一個物件的資料。一般來說，一個物件擁有兩個方法，分別用於獲取和設定某個值，比如：

```

{
getValue: function(){
return this._value;
},
setValue: function(val){
this._value = val;
}
}
```

用這種方式寫JavaScript的一個明顯的好處是：你可以用它來隱藏那些不想讓外界直接訪問的屬性。最終的程式碼看起來就像下面這樣（用閉包儲存新建立的Filed物件的value）：

```
function Field(val){
var value = val;
this.getValue = function(){
return value;
};
this.setValue = function(val){
value = val;
};
}
```

於是我們可以這樣使用：

```
var field = new Field("test");
field.value
// => undefined
field.setValue("test2")
field.getValue()
// => "test2"
```

我們來模擬上例中的 “隱藏的value屬性”，我們的程式碼就像這樣：

```
function Field(val){
var value = val;
this.__defineGetter__("value", function(){
return value;
});
this.__defineSetter__("value", function(val){
value = val;
});
}
```

但是呢，你不喜歡這樣寫，而傾向在物件的prototype中定義getters和setters（私有變數寫在哪並不重要），我們可以用另一種語法。

```
function Field(val){
this.value = val;
}
Field.prototype = {
get value(){
return this._value;
},
set value(val){
this._value = val;
}
};
```

這種語法看起來很不可思議，但是使用過一段時間之後，接受它也很容易。

接下來是另一個例子，它允許外界獲取一個username陣列，但是卻不能獲取原始的，隱藏的user物件。

```
function Site(users){
this.__defineGetter__("users", function(){
// JS 1.6 Array map()
return users.map(function(user){
return user.name;
});
};
}
```

**記住以下幾點：**

一個物件內，每個變數只能有一個getter或setter。（因此value可以有一個getter和一個setter，但是value絕沒有兩個getters） 刪除getter或setter的唯一方法是：delete object[name]。delete可以刪除一些常見的屬性，getters和setters。 如果使用__defineGetter__或__defineSetter__，它會重寫之前定義的相同名稱的getter或setter，甚至是屬性(property)。

**平臺**

支援的瀏覽器有：

Firefox Safari 3  Opera 9.5

javascript中的setter、getter是平時接觸比較少的方法，其本身也並不是標準方法，只在非ie瀏覽器裡支援（ie核心也許有其他方法可以做到呢？暫時不知其解），但是加以利用可以做許多事情，比如：

**1、對資料的訪問限制：**

a.value是對value變數的getter方法呼叫，如果在getter方法實現中丟擲異常，可以阻止對value變數的訪問

**2、對dom變數進行監聽：**

window.name是一個跨域非常好用的dom屬性（大名鼎鼎，詳見百度），如果覆蓋window.name的setter實現則可以實現跨頁面的記憶體非同步通訊

**3、自己發揮想象力，能做的事情好多滴**

以下皆轉： 首先，我們先來快速瞭解什麼是Getters和Setters，以及它們為什麼很有用。然後，我們來看看現在都有哪些平臺支援Gettets和Setters。

**Getters和Setters**

Getters和Setters使你可以快速獲取或設定一個物件的資料。一般來說，一個物件擁有兩個方法，分別用於獲取和設定某個值，比如：

```

{
getValue: function(){
return this._value;
},
setValue: function(val){
this._value = val;
}
}
```

用這種方式寫JavaScript的一個明顯的好處是：你可以用它來隱藏那些不想讓外界直接訪問的屬性。最終的程式碼看起來就像下面這樣（用閉包儲存新建立的Filed物件的value）：

```
function Field(val){
var value = val;
this.getValue = function(){
return value;
};
this.setValue = function(val){
value = val;
};
}
```

於是我們可以這樣使用：

```
var field = new Field("test");
field.value
// => undefined
field.setValue("test2")
field.getValue()
// => "test2"
```

我們來模擬上例中的 “隱藏的value屬性”，我們的程式碼就像這樣：

```
function Field(val){
var value = val;
this.__defineGetter__("value", function(){
return value;
});
this.__defineSetter__("value", function(val){
value = val;
});
}
```

但是呢，你不喜歡這樣寫，而傾向在物件的prototype中定義getters和setters（私有變數寫在哪並不重要），我們可以用另一種語法。

```
function Field(val){
this.value = val;
}
Field.prototype = {
get value(){
return this._value;
},
set value(val){
this._value = val;
}
};
```

這種語法看起來很不可思議，但是使用過一段時間之後，接受它也很容易。

接下來是另一個例子，它允許外界獲取一個username陣列，但是卻不能獲取原始的，隱藏的user物件。

```
function Site(users){
this.__defineGetter__("users", function(){
// JS 1.6 Array map()
return users.map(function(user){
return user.name;
});
};
}
```

**記住以下幾點：**

一個物件內，每個變數只能有一個getter或setter。（因此value可以有一個getter和一個setter，但是value絕沒有兩個getters） 刪除getter或setter的唯一方法是：delete object[name]。delete可以刪除一些常見的屬性，getters和setters。 如果使用__defineGetter__或__defineSetter__，它會重寫之前定義的相同名稱的getter或setter，甚至是屬性(property)。

**平臺**

支援的瀏覽器有：

Firefox Safari 3  Opera 9.5

javascript中的setter、getter是平時接觸比較少的方法，其本身也並不是標準方法，只在非ie瀏覽器裡支援（ie核心也許有其他方法可以做到呢？暫時不知其解），但是加以利用可以做許多事情，比如：

**1、對資料的訪問限制：**

a.value是對value變數的getter方法呼叫，如果在getter方法實現中丟擲異常，可以阻止對value變數的訪問

**2、對dom變數進行監聽：**

window.name是一個跨域非常好用的dom屬性（大名鼎鼎，詳見百度），如果覆蓋window.name的setter實現則可以實現跨頁面的記憶體非同步通訊

**3、自己發揮想象力，能做的事情好多滴**

以下皆轉： 首先，我們先來快速瞭解什麼是Getters和Setters，以及它們為什麼很有用。然後，我們來看看現在都有哪些平臺支援Gettets和Setters。

**Getters和Setters**

Getters和Setters使你可以快速獲取或設定一個物件的資料。一般來說，一個物件擁有兩個方法，分別用於獲取和設定某個值，比如：

```

{
getValue: function(){
return this._value;
},
setValue: function(val){
this._value = val;
}
}
```

用這種方式寫JavaScript的一個明顯的好處是：你可以用它來隱藏那些不想讓外界直接訪問的屬性。最終的程式碼看起來就像下面這樣（用閉包儲存新建立的Filed物件的value）：

```
function Field(val){
var value = val;
this.getValue = function(){
return value;
};
this.setValue = function(val){
value = val;
};
}
```

於是我們可以這樣使用：

```
var field = new Field("test");
field.value
// => undefined
field.setValue("test2")
field.getValue()
// => "test2"
```

我們來模擬上例中的 “隱藏的value屬性”，我們的程式碼就像這樣：

```
function Field(val){
var value = val;
this.__defineGetter__("value", function(){
return value;
});
this.__defineSetter__("value", function(val){
value = val;
});
}
```

但是呢，你不喜歡這樣寫，而傾向在物件的prototype中定義getters和setters（私有變數寫在哪並不重要），我們可以用另一種語法。

```
function Field(val){
this.value = val;
}
Field.prototype = {
get value(){
return this._value;
},
set value(val){
this._value = val;
}
};
```

這種語法看起來很不可思議，但是使用過一段時間之後，接受它也很容易。

接下來是另一個例子，它允許外界獲取一個username陣列，但是卻不能獲取原始的，隱藏的user物件。

```
function Site(users){
this.__defineGetter__("users", function(){
// JS 1.6 Array map()
return users.map(function(user){
return user.name;
});
};
}
```

**記住以下幾點：**

一個物件內，每個變數只能有一個getter或setter。（因此value可以有一個getter和一個setter，但是value絕沒有兩個getters） 刪除getter或setter的唯一方法是：delete object[name]。delete可以刪除一些常見的屬性，getters和setters。 如果使用__defineGetter__或__defineSetter__，它會重寫之前定義的相同名稱的getter或setter，甚至是屬性(property)。

**平臺**

支援的瀏覽器有：

Firefox Safari 3  Opera 9.5