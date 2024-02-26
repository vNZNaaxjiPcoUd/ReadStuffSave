# [ Day 13 ] 自己不會沒關係～找一個代理人幫忙處理 - 代理模式 ( Proxy Pattern )

### **定義**

> 代理模式(Proxy)，為其他物件提供一種代理以控制對這個物件的存取。-- 大話設計模式 p.95
> 

### **使用的時機是在**

- 存取權利需要控制時。
- 在存取時需要提供其他的功能時。

應用非常廣泛，也被稱作`委任模式`，我們最常接觸的就是代理上網了，請律師幫忙打官司也是代理的一種，買房子幫忙斡旋也是，在現實生活中的應用也很普遍呢！

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181027/20112528yvIG5prb1m.png](https://ithelp.ithome.com.tw/upload/images/20181027/20112528yvIG5prb1m.png)

- Client 代表客戶端。
- Subject是抽象主題。
- RealSubjuct是真實的主題類別。
- Proxy是代理類別。

代理和真實的主題都實做了抽象主題類別，在代理中有一個真實主題來作轉換。(是不是跟Adapter很像？，但差別是Adapter中的Adaptee並沒有實作Target)。

### **實作**

假設我們要買房子找一個房仲幫忙我們處理各種瑣事。

> 買房子的介面
> 

```
public interface IBuyHouse {

//    找適合的房子public void findHouse();

//    跟屋主說太貴public void priceTooHigh();

//    屋主防禦價錢public void defendPrice();

//    成交後，簡化從付訂金到交屋的過程。public void finish();

}

```

> 實際想買房子的人是我們
> 

```
public class LittleEngineer implements IBuyHouse {
    @Override
    public void findHouse() {
//        小小工程師想找在民生社區的房子
        System.out.println("民生社區機能特好！當然找那邊的房子！");
    }

    @Override
    public void priceTooHigh() {
//        價錢實在太貴
        System.out.println("現在台灣薪水那麼低，屋主開那麼高賣不掉啦！");
    }

    @Override
    public void defendPrice() {
//        屋主反擊說價錢已經很便宜
        System.out.println("未來人口越來越少，我們也是自住而已！打我五折吧！");
    }

    @Override
    public void finish() {
//        沒想到屋主同意買到了
        System.out.println("辛苦還房貸幾十年");
    }
}

```

> 幫忙代理的房仲從中協調
> 

```
public class EstateAgent implements IBuyHouse {

    private IBuyHouse iBuyHouse;

    public EstateAgent(IBuyHouse iBuyHouse){
        this.iBuyHouse = iBuyHouse;
    }

    @Override
    public void findHouse() {
        iBuyHouse.findHouse();
        System.out.println("#房仲幫忙找房子");
    }

    @Override
    public void priceTooHigh() {
        iBuyHouse.priceTooHigh();
        System.out.println("#房仲幫忙喬價錢");
    }

    @Override
    public void defendPrice() {
        iBuyHouse.defendPrice();
        System.out.println("#房仲強力喬價錢");
    }

    @Override
    public void finish() {
        System.out.println("#成交的話房仲幫忙付訂、簽約、用印、完稅、交屋");
        iBuyHouse.finish();
    }
}

```

> Client使用方式 (Test)
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){
        IBuyHouse littleEngineer = new LittleEngineer();

        IBuyHouse estateAgent = new EstateAgent(littleEngineer);

        estateAgent.findHouse();
        estateAgent.priceTooHigh();
        estateAgent.defendPrice();
        estateAgent.finish();

    }
}

```

> 呈現結果
> 

```
民生社區機能特好！當然找那邊的房子！
#房仲幫忙找房子
現在台灣薪水那麼低，屋主開那麼高賣不掉啦！
#房仲幫忙喬價錢
未來人口越來越少，我們也是自住而已！打我五折吧！
#房仲強力喬價錢
#成交的話房仲幫忙付訂、簽約、用印、完稅、交屋
辛苦還房貸幾十年

```

成功使用Proxy pattern，找到一個代理人來幫忙我們處理買房子會遇到的找房子、與屋主溝通，和各種麻煩瑣事。