# [ Day 22 ] 這件事誰能作主！ - 責任鍊模式 ( Chain of Responsibility Pattern )

### **定義**

> 責任鍊模式( Chain of Responsibility )：使多個物件都有機會處理請求，從而避免請求的發送者和接收者之間的耦合關係。將這個物件連成一條鏈，並沿著這條鏈傳遞該請求，直到有一個物件處理它為止。[DP]-- 大話設計模式 p.363
> 

### **使用情境與狀況**

- 類別對於狀況判斷承擔太多的責任，造成未來新增或修改時必須違反`擴充開放、修改封閉`原則時。
- 發出請求的客戶端不用知道最終是誰處理。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181105/201125285E5jbzWT47.png](https://ithelp.ithome.com.tw/upload/images/20181105/201125285E5jbzWT47.png)

- 接收者(Handler)接受請求(Request)。
- 接收者可以設定複數的後繼者。

畫出UML圖之後發現責任練模式與`組合模式(Composite)`非常的相似，但表現出的行為有所不同。Composite包含的物件是Component，這使得組合模式中的元件可以自由的組合，而Handler中所包含的是一種叫做`Successor(後繼者)`的物件，但是同樣是其他的Handler。

### **關於責任鍊的行為**

Handler是請求的接收者，Handler接收到請求(Request)後假如可以處理則處理之，不能處理則將這個請求發送給後繼者。

### **實作**

公司大問題要給CEO處理，小問題經理就可以了···

> Handler類別，各個管理人的Superclass。
> 

```
public abstract class Handler {

    Handler successor;

    public void setSuccessor(Handler successor){
        this.successor = successor;
    }

    public abstract void handleRequest(Trouble trouble);
}

```

> 經理類別
> 

```
public class Manager extends Handler {

    public Manager(){
//        為了方便在這邊設定上級是誰//        可以轉換到客戶端設定
        setSuccessor(new CEO());
    }

    @Override
    public void handleRequest(Trouble trouble) {
        if(trouble.getCode() > 1000){
            successor.handleRequest(trouble);
        }else{

            System.out.println("Manager:" + trouble.getName() + "是小問題，不用擔心。" );
        }
    }
}

```

> CEO類別
> 

```
public class CEO extends Handler {
    @Override
    public void handleRequest(Trouble trouble) {
        System.out.println("CEO:" + trouble.getName() + "是誰搞的！叫他過來。");
    }
}

```

> 問題類別，有問題名稱跟大小
> 

```
public class Trouble {

    private String name;

    private int size;

    public Trouble(String name, int size) {
        this.name = name;
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public int getSize() {
        return size;
    }
}

```

測試一下

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        Handler manager = new Manager();

//        小問題
        Trouble smallTrouble = new Trouble("想加薪500", 500);

        manager.handleRequest(smallTrouble);

//        大問題
        Trouble bigTrouble = new Trouble("搞壞五十萬的機器",500000);

        manager.handleRequest(bigTrouble);

    }
}

```

> 結果
> 

```
Manager:想加薪500是小問題，不用擔心。
CEO:搞壞五十萬的機器是誰搞的！叫他過來。

```