# [ Day 4 ]初探設計模式 - 關於那些更基本的事情...系統架構(System Architecture)

### **前言**

> 前兩天介紹了設計模式中的工廠模式和策略模式，這兩個模式算是相對應用比較廣泛和簡單的模式，或許在每個語言或案例的實現方式會有些許的不一樣，但是其基本的概念是一樣的，所以今天我想討論一下關於設計模式他們的基礎概念，這種軟體思維可能是比設計模式本身還要重要的，可能未來設計模式被淘汰了，但是在系統和軟體的建構上有一些一體適用的原則，今天我想要討論一下這些。
> 

### **所謂的系統到底是什麼？**

1. 系統是為了實現某些功能
2. 系統功能複雜時需要由概念整理
3. 將概念轉換為系統架構
4. 根據架構進行模組化
5. 模組要用程式碼(~~磚塊~~)堆砌而成

設計模式很像是某些模組或是模塊，在封裝、繼承、多形...等...這些基本的程式碼特性上，堆砌成可以達成某些特定功能的模組，因爲每種語言的特性不同，實現的方式以及難度和效果也會不一樣，所以對於實現功能以及概念來說，設計模式遵守了某些基本的原則，這些原則是比較不會根據語言改變的。

### **物件導向的五大原則**

> 下面內容引用wiki中的SOLID (物件導向設計)第一小段。
> 

> 在 程序設計領域， SOLID（單一功能、開閉原則、里氏替換、接口隔離以及依賴反轉）是由羅伯特·C·馬丁在21世紀早期[1] 引入的記憶術首字母縮略字[2][3]，指代了物件導向編程和物件導向設計的五個基本原則。
> 

詳細的內容可以參考wiki的內容，另外也有聽說六大原則的說法，除了五大原則之外，還加入了**[得墨忒耳定律**（**Law of Demeter**，縮寫**LoD**）](https://zh.wikipedia.org/wiki/%E5%BE%97%E5%A2%A8%E5%BF%92%E8%80%B3%E5%AE%9A%E5%BE%8B)。

```
但是我覺得看了那麼多原則沒有實際寫出程式碼或是實作還是很難有感覺...也就是其實學習的程度沒有深入到真正的會這些知識（看了十次概念不如實作一次有感覺），大概有一點概念就可以進入到實作，可能體會會更多！

```

### **關於系統架構與設計模式**

參考[《系統架構》讀書筆記：架構到底是什麼？](https://mp.weixin.qq.com/s/fPcpxnstXQ5KowDkBWu5fA)的內容（簡體）

> 當組合起來可以做到更多功能，才是系統存在的意義。而設計模式則是為了實現某些架構的小模塊。
> 

```
如果一個系統的功能等於其部件的功能之和，
那這個系統就沒有存在的意義，
只有在這個系統組合時能湧現出新的功能，
那才算是組成了一個系統。

```

> 根據前文對於系統的定義，重新寫一個各種元件組合的系統，並且套用前面介紹過的模式...
> 

### **假設我想要一家飲料店...**

> 可以設定甜度冰塊的飲料
> 

```
public abstract class Drink {
    SugarType sugar;
    IceType ice;

    private Drink(){}

    public Drink(SugarType sugar, IceType ice) {
        this.sugar = sugar;
        this.ice = ice;
    }

    public SugarType getSugar() {
        return sugar;
    }

    public void setSugar(SugarType sugar) {
        this.sugar = sugar;
    }

    public IceType getIce() {
        return ice;
    }

    public void setIce(IceType ice) {
        this.ice = ice;
    }

    enum SugarType{
        REGULAR,LESS,HALF,QUARTER,FREE
    }

    enum IceType{
        REGULAR,EASY,FREE,HOT
    }

}

```

> 有茶跟咖啡兩種
> 

```
public class Tea extends Drink {

    TeaType teaType;

    public Tea(SugarType sugar, IceType ice) {
        super(sugar, ice);
    }

    public void setTeaType(TeaType teaType) {
        this.teaType = teaType;
    }

    public TeaType getTeaType() {
        return teaType;
    }

    enum TeaType{
        LEMON,OOLONG,GINGER,HONEY
    }
}

public class Coffee extends Drink {

    private CoffeeType coffeeType;

    public Coffee(SugarType sugar, IceType ice) {
        super(sugar, ice);
    }

    public CoffeeType getCoffeeType() {
        return coffeeType;
    }

    public void setCoffeeType(CoffeeType coffeeType) {
        this.coffeeType = coffeeType;
    }

    enum CoffeeType{
        LATTE,MOCHA,WHITE,BLUE_MOUNTAIN,AMERICANO,ESPRESSO
    }
}

```

> 飲料店可以點飲料
> 

```
public class DrinkShop {

    public Drink order(String drink,Drink.SugarType sugarType, Drink.IceType iceType){
        drink.toLowerCase();
        switch (drink){
            case "coffee":
                return new Coffee(sugarType,iceType);
            case "tea":
                return new Tea(sugarType,iceType);
            default:
                return null;
        }
    }

}

```

> 需要一個店員幫忙點餐...
> 

```
public class Client {
    @Test
    public void test(){
        DrinkShop drinkShop = new DrinkShop();

//點一杯烏龍茶
        Tea tea = (Tea)drinkShop.order("Tea", Drink.SugarType.FREE, Drink.IceType.EASY);
        tea.setTeaType(Tea.TeaType.OOLONG);

//點一杯美式
        Coffee coffee = (Coffee)drinkShop.order("coffee", Drink.SugarType.QUARTER,Drink.IceType.HOT);
        coffee.setCoffeeType(Coffee.CoffeeType.AMERICANO);
    }
}

```

糖度跟冰塊總共有20種組合，

咖啡有六種，茶有四種，

經過組合店員可以做出120種咖啡和80種茶。