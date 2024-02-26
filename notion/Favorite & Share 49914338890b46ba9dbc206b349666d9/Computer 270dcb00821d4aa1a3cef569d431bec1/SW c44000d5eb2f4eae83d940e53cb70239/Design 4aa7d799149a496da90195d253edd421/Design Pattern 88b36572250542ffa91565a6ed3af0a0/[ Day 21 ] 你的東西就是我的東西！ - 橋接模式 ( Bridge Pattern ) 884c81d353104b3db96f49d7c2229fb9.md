# [ Day 21 ] 你的東西就是我的東西！ - 橋接模式 ( Bridge Pattern )

### **定義**

> 橋接模式( Bridge )，將抽象部分與它的實現部分分離，使它們都可以獨立地變化。-- 大話設計模式 p.335
> 

### **使用的情境與狀況**

- A+B才是一個完整的物件，但是A和B又分別有各種不同的實現時。
- 這種方式可以很輕鬆地組合出每個自己想要的狀況(或是產品)，而不用針對每個狀況去寫一個特例。

> 想想A與B個有十種，太可怕了···這樣總共就要寫100種特例了！
> 
- 最大化系統的成果(1+1>2)。

因為繼承會限制靈活度，父類別的變化也會影響到子類別的變化，所以橋接模式（跟組合模式···等等其他模式）試著解決這個問題時有遵守一個原則「`多用組合、少用繼承`」。也就是盡量使用組合（聚合）來代替類別繼承，這樣可以提高自由度，並且在各個類別的種類增加時，用少量的程式碼組合出系統所需要的所有種類的表示。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181104/20112528rjeQnMVPsK.png](https://ithelp.ithome.com.tw/upload/images/20181104/20112528rjeQnMVPsK.png)

- Abstraction：內部含有Implementor集合，並且有他自己的實踐類別(Concrete Abstraction···)。
- Implementor：有自己的實踐類別 (Concrete ImplementorA···)。

### **實作**

假想一個頁面需要呈現各種不同商品，但是頁面上又需要有不同的頁面，例如只呈現簡單資訊的頁面和詳細資訊的頁面，要把這些不同的資訊串接起來···

> 定義頁面的Super Class
> 

```
public abstract class View {

    Resources resources;

    public void setResources(Resources resources){
        this.resources = resources;
    }

//    定義畫面如何擺放public abstract void show();

}

```

> 定義來源的介面
> 

```
public interface Resources {

    public void photo();

    public void snippet();

    public void describe();

}

```

書本和包包來源

> 書本：
> 

```
public class Book implements Resources {
    @Override
    public void photo() {
        System.out.println("書本的照片");
    }

    @Override
    public void snippet() {
        System.out.println("書本的簡短說明");
    }

    @Override
    public void describe() {
        System.out.println("書本詳細說明");
    }
}

```

> 包包：
> 

```
public class Bag implements Resources {
    @Override
    public void photo() {
        System.out.println("包包的照片");
    }

    @Override
    public void snippet() {
        System.out.println("包包的簡短說明");
    }

    @Override
    public void describe() {
        System.out.println("包包詳細說明");
    }
}

```

小資訊的頁面根所有資訊的頁面

> 小資訊
> 

```
public class FewView extends View{
    @Override
    public void show() {
        resources.photo();
        resources.snippet();
    }
}

```

> 所有資訊
> 

```
public class FullView extends View {
    @Override
    public void show() {
        resources.photo();
        resources.describe();
    }
}

```

測試一下

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        FewView fewView = new FewView();
        System.out.println("---- 簡單包包說明 ----");
        fewView.setResources(new Bag());
        fewView.show();
        System.out.println("---- 簡單書本說明 ----");
        fewView.setResources(new Book());
        fewView.show();

        FullView fullView = new FullView();
        System.out.println("---- 詳細包包說明 ----");
        fullView.setResources(new Bag());
        fullView.show();
        System.out.println("---- 詳細書本說明 ----");
        fullView.setResources(new Book());
        fullView.show();

    }
}

```

> 測試結果
> 

```
---- 簡單包包說明 ----
包包的照片
包包的簡短說明
---- 簡單書本說明 ----
書本的照片
書本的簡短說明
---- 詳細包包說明 ----
包包的照片
包包詳細說明
---- 詳細書本說明 ----
書本的照片
書本詳細說明

```