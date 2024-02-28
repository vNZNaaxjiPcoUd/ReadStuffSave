# [ Day 25 ] 每個人關心的點都不同 - 訪問者模式 (Visitor Pattern)

### **定義**

> 訪問者模式( Visitor )，表示一個作用於某物件結構中的各元素之操作。它使你可以再不改變各元素之類別的前提之下，定義作用於這些元素的新操作。-- Design Pattern by GoF [大話設計模式 p.434]
> 

### **使用情境和狀況**

- 元素的個數是固定時(穩定的資料結構)。
    
    > 缺點是資料結構(元素)的增加變得更為困難了。
    > 
- 將處理和資料結構兩者分離開來。
- 增加操作就等於是增加新的Visitor。

訪問者模式是*GoF Design Pattern*中最複雜的一種模式，使用頻率不高，在大部分的狀況之下不需要使用這個模式。在資料結構穩定(甚至固定)時才適合使用，如果任意使用反而會造成(資料結構)擴充困難的結果。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181108/20112528v39nucSntn.png](https://ithelp.ithome.com.tw/upload/images/20181108/20112528v39nucSntn.png)

- ObjectStructure：能枚舉他的元素，提供給Visitor訪問的介面。
- Element：以訪問者為參數的Accept操作。
- Visitor：為每一個具體的元素(Element)類別宣告一個Visit操作。
- ConcreteVisitor：需要對每一個元素實作具體的Visit行為。
- ConcreteElement：需要時做Accept方法，通常是指接受存取的方法的實作。

如果需要頻繁的修改Visitor介面的話，代表不適合用Visitor模式(資料結構不穩定)。因為訪問者模式的結構跟概念都比較複雜所以使用的頻率不高，

### **實作**

男女生早上都要看一下天氣、但是關心的點不同···

> 天氣介面
> 

```
public abstract class Weather {

    double temperture;

    double airQuality;

    public Weather(){
        temperture = Math.random() * 30;
        airQuality = Math.random() * 300;
    }

    public abstract void accept(Visit visit);

}

```

> 溫度(Element)
> 

```
public class Temperture extends Weather {

    public Temperture() {
        super();
    }

    public String getTempGraph(){
        return "溫度趨勢圖";
    }

    @Override
    public void accept(Visit visit) {
        visit.visit(this);
    }
}

```

> 空氣品質
> 

```
public class AirQuality extends Weather {
    public AirQuality() {
        super();
    }

    public String getAirQGraph(){
        return "空氣品質趨勢圖";
    }

    @Override
    public void accept(Visit visit) {
        visit.visit(this);
    }
}

```

Visit介面

```
public interface Visit {

    public void visit(AirQuality airQuality);

    public void visit(Temperture temperture);

}

```

> 男生
> 

```
public class Man implements Visit {
    @Override
    public void visit(AirQuality airQuality) {
        System.out.println("稍微看一下空氣品質：" + airQuality.airQuality);
    }

    @Override
    public void visit(Temperture temperture) {
//假設男生比較關心溫度
        System.out.println("關心一下：" + temperture.getTempGraph());
    }
}

```

> 女生
> 

```
public class Woman implements Visit {
    @Override
    public void visit(AirQuality airQuality) {
//女生比較關心空氣品質
        System.out.println("關心一下：" + airQuality.getAirQGraph());
    }

    @Override
    public void visit(Temperture temperture) {
        System.out.println("稍微看一下溫度：" + temperture.temperture);
    }
}

```

測試一下

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        Temperture temperture = new Temperture();

        AirQuality airQuality = new AirQuality();

        Visit man = new Man();
        Visit woman = new Woman();

        System.out.println("----- 男生 -----");
        man.visit(temperture);
        man.visit(airQuality);

        System.out.println("----- 女生 -----");
        woman.visit(temperture);
        woman.visit(airQuality);
    }
}

```

> 結果
> 

```
----- 男生 -----
關心一下：溫度趨勢圖
稍微看一下空氣品質：10.423593168132017
----- 女生 -----
稍微看一下溫度：23.635010525627337
關心一下：空氣品質趨勢圖

```