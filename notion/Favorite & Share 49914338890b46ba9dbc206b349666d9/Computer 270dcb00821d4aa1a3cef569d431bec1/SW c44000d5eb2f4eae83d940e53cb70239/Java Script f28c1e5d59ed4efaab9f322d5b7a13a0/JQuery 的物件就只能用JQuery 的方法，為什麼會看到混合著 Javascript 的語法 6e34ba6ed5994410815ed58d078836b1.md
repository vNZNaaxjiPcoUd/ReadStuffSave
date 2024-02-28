# JQuery 的物件就只能用JQuery 的方法，為什麼會看到混合著 Javascript 的語法?

JQuery 的物件就只能用JQuery 的方法，為什麼會看到混合著 Javascript 的語法?

例如切割字串的 substr()

```
document.getElementById('demo1').value.substr(0,1);  //正確
$("#demo1").val().substr(0,1);  //正確
```

以上都可以正常運作，又是為什麼呢?

**這是第二個問題  .val() 及 .value 回傳的資料型態是什麼?**

答案都是 String 而不是 Object ，String 當然能使用 substr()

千萬不要只看 $ 開頭就誤以為一直是 JQuery 的物件，經過每一層的 **.** 運算後回傳，資料型態有可能會被改變。

就像 ((1+2)+5)+6 這條算式，最後與 6 相加的數字是什麼?

逐步慢慢加上去，1 + 2 變成 3 ，3 再與 5 相加，最後變成 8 + 6，因此與 6 相加的數字是 8 ，而不是 1