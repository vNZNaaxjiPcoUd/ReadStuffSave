# [ Day 3 ] 初探設計模式 - 策略模式 (Strategy Pattern)

### **策略模式**

定義`一系列的演算法`，並且把這些算法，`用介面封裝到有公共介面的策略類中`，使他們可以互相替換。

> 策略模式用策略的介面來替換在某個實體ˋ中的方法，可以經由替換不同的策略使得物件擁有不同的行為。經過策略的組合，我們得以獲得行為不同的物件。
> 

優點：

- 靈活的替換不同的行為（演算法）
- 策略拓展容易
- 避免使用很多if else

缺點：

- 必須自行決定要使用哪種策略
- 可能產生很多策略類

> 或許可以將這些行為不同的物件用工廠模式封裝起來，解決使用這些模式時需要先事先知道有哪些策略，並且需要自行決定使用哪些策略的問題。
> 

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181113/20112528roz59syPp5.png](https://ithelp.ithome.com.tw/upload/images/20181113/20112528roz59syPp5.png)

### **試著用程式碼實現 - 1**

假設我們要實現一個計算機的話...

> 先定義一個介面，用這個介面定義一系列演算法。
> 

```
public interface IStrategy {
    public int caculate(int a , int b);
}

```

> 將加減乘除等一系列的算法實現出來
> 

```
public class add implements IStrategy {
    @Override
    public int caculate(int a, int b) {
        return a + b;
    }
}

public class minus implements IStrategy {
    @Override
    public int caculate(int a, int b) {
        return a - b ;
    }
}

public class multyply implements IStrategy {
    @Override
    public int caculate(int a, int b) {
        return a * b;
    }
}

public class divide implements IStrategy {
    @Override
    public int caculate(int a, int b) {
        return a / b ;
    }
}

```

> 用一個類裝這個算法，並且用昨天講到簡單的工廠模式封裝一下
> 

```
public class Calculator {

    private int now = 0 ;

    private IStrategy strategy ;

//    策略模式public int execute(int a , int b){
        return strategy.caculate(a,b);
    }

    public void reset(){
        this.now = 0 ;
    }

//    簡單工廠模式public void setStrategy(DoType doType) {
        switch (doType){
            case ADD:
                this.strategy = new add();
                break;
            case MINUS:
               this.strategy = new minus();
                break;
            case DIVIDE:
                this.strategy = new divide();
                break;
            case MULTYPLY:
               this.strategy = new multyply();
                break;
        }
    }

    enum DoType{
        ADD , MINUS , DIVIDE , MULTYPLY
    }

}

```

實現了一個簡單的計算機，

當然只有加減乘除的計算機的演算法不太複雜，

但是現在如果要加入一個次方的演算法，

我們也能很簡單的實現它。

> 因為還有一些時間我們試著再實現一種
> 

### **試著用程式碼實現 - 2**

假設我們現在需要一個根據里程數幫忙計價的計算機

```
public interface IStrategy {
    public int calculate();
}

```

> Bus & MRT 的里程計價方式
> 

```
public class BusStrategy implements IStrategy {
    @Override
    public int calculate(int km) {

//        一段票15元//        十公里內一段票，超過十公里兩段票int count = 0 ;

        if( km <= 10 ){
            count = 1 ;
        }else if( km > 10){
            count = 2 ;
        }

        return count * 15 ;

    }
}

public class MRTStrategy implements IStrategy {
    @Override
    public int calculate(int km) {

//        小於十公里20元，超過每五公里五元int result = 0 ;

        if(km <= 0) return  result ;

        if(km <= 20) {
            result = 20 ;
        }

        if(km > 20){
            int count = (( km - 20 ) / 5 ) + 1 ;
            result = result + 5 * count ;
        }

        return result;

    }
}

```

> 依據里程數計價的計算機，只要選定你的移動方式（在這裡是MRT or Bus)，就可以根據移動方式來計算出需要的費用。
> 

```
public class PriceCalculator {
    IStrategy strategy;

    private PriceCalculator(){};

    public PriceCalculator(IStrategy strategy){
        this.strategy = strategy;
    }

    public void setStrategy(IStrategy strategy) {
        this.strategy = strategy;
    }

    public int calculate(int km){
        return this.calculate(km,strategy);
    }

    public int calculate(int km , IStrategy strategy){
        this.strategy = strategy;
        return strategy.calculate(km);
    }
}

```

今天的文章就先到這邊啦～範例有兩個，但是都很簡單的！大家有心也一定能夠掌握，我們雖然不比別人聰明，甚至起步比別人慢，但是只要有根性~~氣勢~~，相信這種**恆毅力**才是真正的寶藏，明天再繼續加油～