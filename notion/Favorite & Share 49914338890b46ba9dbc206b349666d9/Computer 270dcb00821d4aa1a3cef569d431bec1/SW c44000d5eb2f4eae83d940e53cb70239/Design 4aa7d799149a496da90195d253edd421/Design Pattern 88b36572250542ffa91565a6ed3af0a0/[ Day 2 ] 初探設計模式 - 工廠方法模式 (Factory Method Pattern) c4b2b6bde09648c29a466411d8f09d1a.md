# [ Day 2 ] 初探設計模式 - 工廠方法模式 (Factory Method Pattern)

### **工廠模式**

今天要介紹的工廠模式，其實概念非常的簡單，在其中主要的角色只有兩個`商品`和`工廠`，

> 真的只有這麼簡單嗎？其實有一些隱藏在背後的東西...
> 

當我們在使用工廠模式時，你跟工廠說`你想要的那種規格的商品`，而工廠負責製造`你想要的那種規格的商品`，當中可能需要某些`組裝或是特殊步驟`，但是作為消費者`你不知道這些組裝方式和步驟`，你還是可以買到你想要的東西。

### **定義**

> 工廠方法模式( Factory Method )，定義一個用於建立物品的介面，讓子類決定實體化哪一個類別。工廠方法使一個類別的實例化延遲到其子類別。-- 大話設計模式 p.105
> 

### **UML**

工廠方法模式類別之間的關係像是下面這樣

![https://ithelp.ithome.com.tw/upload/images/20181113/20112528fb3BbVITVH.png](https://ithelp.ithome.com.tw/upload/images/20181113/20112528fb3BbVITVH.png)

- Creator：創造者經由FactoryMethod創造產品
- Product：被創造的產品類別

舉個例子來說吧！

假設我們去速食店~~麥當勞~~買`無鹽的薯條`

首先我們要有一個商品和工廠的介面...

> 用java來當範例
> 

```
public interface Product {
//敘述自己是什麼商品public void describe();
}

```

```
public interface Factory {
//工廠返回商品public Product getProduct();
}

```

> 接下來實現薯條
> 

```
public class FrenchFries implements Product{

//預設有鹽巴的
    String state = "有鹽巴";
//預設的建構protected FrenchFries(){}
//帶入狀態的建構protected FrenchFries(String state){
        this.state = state;
    }

    @Override
    public void describe() {
        System.out.println("我是"+ state +"薯條");
    }
}

```

> 和薯條工廠
> 

```
public class FrenchFriesFactory implements Factory {

//返回一般的薯條@Override
    public Product getProduct() {
        return new FrenchFries();
    }

//返回我們想要的狀態的薯條..public Product getProduct(String state) {
        return new FrenchFries(state);
    }
}

```

> 嘗試調用薯條工廠做出顧客想要的薯條
> 

```
        Factory friesFac = new FrenchFriesFactory();
        Product fries = friesFac.getProduct();
        Product myfries = ((FrenchFriesFactory) friesFac).getProduct("無鹽的");

        fries.describe();//我是有鹽巴薯條
        myfries.describe();//我是無鹽的薯條
```

> 成功做出顧客想要的薯條
> 

藉由工廠模式，我們可以在調用的時候才決定我們想要的物品狀態，在商品中加入大中小包等等的參數，我們可以決定要哪種份量的商品，甚至可以決定我們要幾根薯條，用方法或是各種方式把物件的創造包裝起來，工廠模式的實現方式很多，但工廠有個重點`會返回我們想要的商品`，掌握這個重點碰到類似的創建模式相信都可以很快掌握喔！