# [ Day 7 ] 初探設計模式 - 裝飾模式(Decorator)

> 裝飾模式。
> 
- 裝飾模式的角色有`元件`和`裝飾`，`裝飾需要建構在被裝飾的元件上`。
- 是一種`繼承關係的替代方案`。
- 裝飾物不同但是元件的本質不變。

```
定義：動態的給一個類別添加額外的職責。就增加功能來說，裝飾模式相比產生子類別更為靈活。

```

定義引用於「[設計模式：Android原始碼解析與應用](https://www.books.com.tw/products/0010709953)」 page.430

### **UML**

類別圖提供在這裡

![https://ithelp.ithome.com.tw/upload/images/20181114/20112528fzlaKgAdOc.png](https://ithelp.ithome.com.tw/upload/images/20181114/20112528fzlaKgAdOc.png)

- Component：被裝飾的核心元件
- Decorator：裝飾核心的其他元件

### **實作**

> 假設一個餐廳有各種套餐，主餐、沙拉、飲料、甜點、湯..等，不同套餐的餐點不一樣，低消需要一杯飲料，
> 

我們試著用裝飾模式實現的話...

> 有一間餐廳
> 

```
public class Restaurant {

    private void minimumOrder(){
        System.out.println("一杯飲料");
    }

//低消是一杯飲料public void order(){
        minimumOrder();
    }

}

```

> 商業午餐除了飲料還有沙拉跟主餐
> 

```
public class BusinessLunch extends Restaurant {

    private Restaurant restaurant;

    public BusinessLunch(Restaurant restaurant){
        this.restaurant = restaurant;
    }

    private void salad(){
        System.out.println("一盤沙拉");
    }

    private void mainMeal(){
        System.out.println("一份主餐");
    }

    @Override
    public void order() {
        super.order();
        salad();
        mainMeal();
    }
}

```

> 簡餐多了湯品
> 

```
public class SimpleCombo extends BusinessLunch {

    public SimpleCombo(Restaurant restaurant) {
        super(restaurant);
    }

    private void soup(){
        System.out.println("一份湯品");
    }

    @Override
    public void order() {
        super.order();
        soup();
    }
}

```

> 全餐再多了甜點
> 

```
public class FullCombo extends SimpleCombo {

    public FullCombo(Restaurant restaurant) {
        super(restaurant);
    }

    private void sweet(){
        System.out.println("一份甜點");
    }

    @Override
    public void order() {
        super.order();
        sweet();
    }
}

```

> 測試一下
> 

```
   public void test(){

        Restaurant restaurant = new Restaurant();

        SimpleCombo simpleCombo = new SimpleCombo(restaurant);

        System.out.println("簡餐：");
        simpleCombo.order();

        BusinessLunch businessLunch = new BusinessLunch(restaurant);
        System.out.println("商業午餐：");
        businessLunch.order();

        FullCombo fullCombo = new FullCombo(restaurant);
        System.out.println("全餐：");
        fullCombo.order();

    }

```

> 結果：
> 

```
簡餐：
一杯飲料
一盤沙拉
一份主餐
一份湯品
商業午餐：
一杯飲料
一盤沙拉
一份主餐
全餐：
一杯飲料
一盤沙拉
一份主餐
一份湯品
一份甜點

```

實現出來後發覺有一點問題，問題點在於，Decorator Pattern其實是要為了`減少或替代繼承的使用`，因為如果套餐間有互相繼承的關係，會提高系統的耦合性。`系統設計的原則`需要透過某種方式`封裝可能的變化`，並且`減少類別之間的互相影響`（降低耦合度），如果未來新的套餐出了或是套餐的餐點改變了，只需要新增一個類別或是修改一個類別，可以很輕鬆的滿足需求。

所以接下來我們試著根據原則重新實現...。

> 將訂單當成元件另外餐點當成修飾者。訂單類別和餐點基礎類別...
> 

```
public class Order {
    public void show(){

    }
}

public class Item extends Order {
    protected Order order;

    public void decorate(Order order){
        this.order = order;
    }

    @Override
    public void show() {
        if(order!= null)
            order.show();
    }
}

```

> 各種餐點類別
> 

```
public class Drink extends Item {

    private void addDrink(){
        System.out.println("一份飲料");
    }

    @Override
    public void show() {
        super.show();
        addDrink();
    }
}

public class MainMeal extends Item {

    private void addMeal(){
        System.out.println("加一份主餐");
    }

    @Override
    public void show() {
        super.show();
        addMeal();
    }
}

public class Salad extends Item {

    private void addSalad(){
        System.out.println("一份沙拉");
    }

    @Override
    public void show() {
        super.show();
        addSalad();
    }
}

public class Soup extends Item {

    private void addSoup(){
        System.out.println("加一份湯品");
    }

    @Override
    public void show() {
        super.show();
        addSoup();
    }
}

```

> 測試一下
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){
        Order order = new Order();

        Drink drink = new Drink();
        MainMeal mainMeal = new MainMeal();
        Soup soup = new Soup();

        drink.decorate(order);
        mainMeal.decorate(drink);
        soup.decorate(mainMeal);

        soup.show();

    }
}

```

> 得到
> 

```
一份飲料
加一份主餐
加一份湯品

```

這時候如果要實現套餐，套餐內部可以用裝飾模式實現，自由度就大很多。

> 試著實現套餐
> 

```
public class Set extends Order {
    protected Order order;

    public void decorate(Order order){
        this.order = order;
    }

    @Override
    public void show() {
        if(order!= null)
            order.show();
    }
}

```

> 簡單套餐
> 

```
public class SimpleSet extends Set {

    private void addSet(){
        Salad salad = new Salad();
        MainMeal mainMeal = new MainMeal();
        Drink drink = new Drink();
        salad.decorate(order);
        mainMeal.decorate(salad);
        drink.decorate(mainMeal);
        this.order = drink;
    }

    @Override
    public void show() {
        addSet();
        super.show();
    }
}

```

> 稍微測試一下
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        SimpleSet simpleSet = new SimpleSet();
        simpleSet.show();

    }
}

```

> 得到
> 

```
一份沙拉
加一份主餐
一份飲料

```

下面一段引用於「[大話設計模式](https://www.tenlong.com.tw/products/9789866761799) 」page.82

```
裝飾模式可以把類別中的裝飾功能從類別中搬移去除，這樣可以簡化原有類別。也就是把類別中核心職責和裝飾功能區分開，並去除相關內別中重複的邏輯。

```

> 
>