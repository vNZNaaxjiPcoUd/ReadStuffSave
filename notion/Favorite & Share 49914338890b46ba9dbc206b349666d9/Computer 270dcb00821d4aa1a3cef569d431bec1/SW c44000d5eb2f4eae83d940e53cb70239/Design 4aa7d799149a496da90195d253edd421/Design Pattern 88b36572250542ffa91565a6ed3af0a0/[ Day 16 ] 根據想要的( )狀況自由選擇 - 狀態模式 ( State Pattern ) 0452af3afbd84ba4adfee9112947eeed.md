# [ Day 16 ] 根據想要的(?)狀況自由選擇 - 狀態模式 ( State Pattern )

昨天介紹了外觀模式，在外觀模式(Facade)中可以整理出一個`整潔的介面`(類別)，或是可以把外觀模式當作重構的起點。在狀態模式中，則是固定的運算或動作，在不同的狀態之下會改變，所以將改變後各個狀態的動作封裝起來，客戶端只要改變狀態，即可針對不同的狀態作出正確的行為。

### **定義**

> 狀態模式 ( State ) ，當一個物件的內在狀態改變時允許改變其行為，這個物件看起來像是改變了其類別。-- 大話設計模式 p.239
> 

```
將行為用一個介面封裝起來，針對不同的狀態去改變其行為。

```

### **使用的場景**

- 當一個物件在`狀態改變的同時行為也改變`。
- 在特殊狀況下，行為會不同而需要單獨定義時。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181030/20112528QSYu7jH8Mc.png](https://ithelp.ithome.com.tw/upload/images/20181030/20112528QSYu7jH8Mc.png)

- Context：包裝起來執行環境。
- State ：封裝各個行為的介面，將不同狀態中的行為獨立出來。
- State1、State2：針對各個狀態對應行為的實作。

在執行環境( Context )中，只需要改變狀態，而不需要管對應各個狀態時行為的不同。

### **實作**

假設我們儲存的資料是公制，但是要根據顯示的設定切換顯示公制和英制的數值、以及儲存的數值···

> 狀態的interface
> 

```
public abstract class State {

//    顯示的數值abstract public String tempToDisplay(Double temperture);
    abstract public String vibToDisplay(Double vibration);
//    儲存的數值abstract public String tempToSave(Double temperture);
    abstract public String vibToSave(Double vibration);

//    精準到小數點下兩位public static String twoDecPlaces(Double value){
        return String.format("%.2f",value);
    }

    public static String saveForm(Double value){
        return String.format("%f",value);
    }

}

```

> 公制的State
> 

```
public class Metric extends State {

    @Override
    public String tempToDisplay(Double temperture) {
        System.out.println("顯示公制");
        return twoDecPlaces(temperture);
    }

    @Override
    public String vibToDisplay(Double vibration) {
        System.out.println("顯示公制");
        return twoDecPlaces(vibration);
    }

    @Override
    public String tempToSave(Double temperture) {
        System.out.println("儲存公制");
        return saveForm(temperture);
    }

    @Override
    public String vibToSave(Double vibration) {
        System.out.println("儲存公制");
        return saveForm(vibration);
    }
}

```

> 英制的State
> 

```
public class British extends State {
//    英制資料儲存成公制@Override
    public String tempToDisplay(Double temperture) {
        System.out.println("顯示英制");
        return twoDecPlaces(temperture * 9 / 5 + 32);
    }

    @Override
    public String vibToDisplay(Double vibration) {
        System.out.println("顯示英制");
        return twoDecPlaces(vibration * 25.4);
    }

//    公制資料顯示成英制@Override
    public String tempToSave(Double temperture) {
        System.out.println("儲存英制");
        return saveForm((temperture - 32) * 5 / 9);
    }

    @Override
    public String vibToSave(Double vibration) {
        System.out.println("儲存英制");
        return saveForm(vibration/25.4);
    }
}

```

> 選擇是哪一種狀態的環境 (Context)
> 

```
public class MetricSystem {

    private State state;

    public void setState(final State state) {
        this.state = state;
    }

    public void tempView(Double temp){
        System.out.println(state.tempToDisplay(temp));
    }

    public void vibView(Double vib){
        System.out.println(state.vibToDisplay(vib));
    }

    public void tempSave(Double temp){
        System.out.println(state.tempToSave(temp));
    }

    public void vibSave(Double vib){
        System.out.println(state.vibToSave(vib));
    }

}

```

### **測試一下**

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        MetricSystem metricSystem = new MetricSystem();
        metricSystem.setState(new Metric());

        metricSystem.tempView(50d);
        metricSystem.vibView(10d);
        metricSystem.tempSave(50d);
        metricSystem.vibSave(10d);

        metricSystem.setState(new British());

        metricSystem.tempView(50d);
        metricSystem.vibView(10d);
        metricSystem.tempSave(50d);
        metricSystem.vibSave(10d);

    }
}

```

> 測試結果
> 

```
顯示公制
50.00
顯示公制
10.00
儲存公制
50.000000
儲存公制
10.000000
顯示英制
122.00
顯示英制
254.00
儲存英制
10.000000
儲存英制
0.393701

```