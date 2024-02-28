# Javascript 跟 JQuery 分不清楚

原因就在於 Javascript DOM 跟 JQuery 分不清楚，常問幾個問題：

1. 這個變數的型態是什麼? Javascript DOM 物件 (Object) ? JQuery 物件 (Object) ?
2. 呼叫後回傳值型態是什麼? String? Number ? Object ? 什麼型態的Object?
3. 這個 this 代表的是什麼?

JQuery 雖然是 Javascript 的延伸，但不代表方法 (function) 或屬性(attribute) 可以亂用

這也是為什麼儲存 JQuery 物件的變數常會多加一個錢字號，取名為 var $xxx

因為之後只要使用到 $xxx 可以一目了然這是 JQuery 的物件，不會跟 var xxx 搞混。