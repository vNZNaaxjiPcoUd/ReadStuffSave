# this 是 JQuery 物件還是 Javascript DOM 物件

this 是 JQuery 物件還是 Javascript DOM 物件 (還是 String / Number ...) 時，亂接 .value / .val() / .substr()...之類的當然就掛了

例如

```

$("input").each(function(){
  //這裡面的 this 是什麼?
});
```

這裡的 this 不是 JQuery 物件 ，而是 input 的 DOM 物件，

想要用 JQuery 的方法只要 $(this) 就會轉換成 JQuery 的物件就行了

```

$("input").each(function(){
  this.value; //正確，因為 this 是 DOM 的物件，擁有 value 這個屬性
  $(this).val();  //正確，因為 $(this) 是 JQuery 的物件，可使用 val()
});
```

----------------

寫到結尾想到一個傻傻分不清楚的情況，

```
var text1 = '指定值';   //正確
document.getElementById('demo1').value = '指定值';  //正確
//我猜大概是被理解成 String = String 之類的

```

但不要寫成

```

$("#demo1").val() = '指定值';  //這不正確阿!! 而且不會報錯誤
```

這不是同理可證...而且等號不是萬能的 Orz

實際上的確是可執行，但無法達到修改 value 的目的，JQuery 指定 value 的方式是

```

$("#demo1").val('指定值'); //這才是正確的寫法

```

總之要把 Javascript 的 DOM 物件跟 JQuery 物件搞清楚，可以少繞很多路、少找很多Bug！