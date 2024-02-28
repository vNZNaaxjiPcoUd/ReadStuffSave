# [ Day 18 ] 共用程式碼和物件～享元模式 ( Flyweight Pattern )

昨天談了備忘錄模式，對於需要在記憶體中紀錄資訊，並且後悔的狀況，可以有一個很好的解決。今天介紹的輕量模式，在大量物件需要創建時，藉由分享的方式避免重複創建(將已創建的物件記錄起來、並在要使用的時候取出)，可以減少創建不必要的物件，達到所謂`輕量化`的結果。

### **定義**

> 享元模式( Flyweight )，運用共有技術有效的支援大量細粒度的物件。-- 大話設計模式 p393
> 

### **使用的場景或情況**

- 避免需要大量創建物件的狀況，使物件的使用更有效（可以減少記憶體的使用量）。
- 因為需要被分享所以Flyweight物件需要immutable。
- 需要共用程式碼或是共有一份實體，是物件池的一種實作。

有分為可以共享的資料和不能共享的資料，可以共享的資料稱為內部狀態，不能共享的資料稱為外部狀態。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181101/201125283SJnVhfd6y.png](https://ithelp.ithome.com.tw/upload/images/20181101/201125283SJnVhfd6y.png)

- Flyweigt Factory：工廠模式的應用，用來建立並管理Flyweight物件，如果物件不存在則建立，存在則返回已建立的物件，可以讓使用這個工廠建立的物件提供給大家共同分享使用。
- Flyweight：是一個介面，所有具體的Flyweight物件需要繼承這個介面。
- FlyweightOne & FlyweightTwo：具體的Flyweight物件。

### **實作**

macbook的產品有很多種，用享元模式(輕量模式)，同樣的macbook實體只實體化一次

> 共有資料
> 

```
public class Monitor {

    private final String monitor = "Retina Display";

    public String getMonitor() {
        return monitor;
    }
}

```

> 外部資料
> 

```
//ExtrinsicStatepublic class CustomSetting {

//儲存一些使用者設定的類別public static CustomSetting LOW = new CustomSetting("LOW");
    public static CustomSetting HIGH = new CustomSetting("HIGH");

    private String cpu;
    private int memory;
    private int storage;

    public CustomSetting(){}

    private CustomSetting(String set){

        switch (set){
            case "LOW":
//                一些低階設定
                cpu = "i5";
                memory = 8;
                storage = 256;
                break;
            case "HIGH":
//                一些高階設定
                cpu = "i7";
                memory = 16;
                storage = 512;
                break;
            default:
                break;

        }

    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public int getMemory() {
        return memory;
    }

    public void setMemory(int memory) {
        this.memory = memory;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    @Override
    public String toString() {
        return "CustomSetting = { " + "\n" +
                "cpu = " + this.getCpu() + "\n" +
                "memory = " + this.getMemory() + "\n" +
                "storage = " + this.getStorage() + "\n" +
                "}";
    }
}

```

> Macbook 類別
> 

```
public class Macbook extends Monitor{

    enum Spec {
        LOW ( CustomSetting.LOW ) , HIGH ( CustomSetting.HIGH );

        CustomSetting customSetting;
        Spec(CustomSetting customSetting){
            this.customSetting = customSetting;
        }

        public CustomSetting getCustomSetting() {
            return customSetting;
        }
    }

    private CustomSetting customSetting;

    public Macbook(Spec spec){
        this.customSetting = spec.getCustomSetting();
    }

    public Macbook(CustomSetting customSetting){
        this.customSetting = customSetting;
    }

    public void setCustomSetting(CustomSetting customSetting){
        this.customSetting = customSetting;
    }

    @Override
    public String toString() {
        return "CustomSetting = { " + "\n" +
                "cpu = " + customSetting.getCpu() + "\n" +
                "memory = " + customSetting.getMemory() + "\n" +
                "storage = " + customSetting.getStorage() + "\n" +
                "monitor = " + getMonitor() + "\n" +
                "}";
    }
}

```

> 享元模式的Macbook Factory
> 

```
import java.util.HashMap;

public class MacbookFactory {

    private HashMap<CustomSetting,Macbook> cache = new HashMap();

    public Macbook getCustomMacbook(CustomSetting key){

        if(cache.containsKey(key)){
            return cache.get(key);
        }

        Macbook macbook = new Macbook(key);

        cache.put(key,macbook);

        return macbook;

    }

    public Macbook getMacbook(Macbook.Spec spec){

        if(cache.containsKey(spec.getCustomSetting())){
            return cache.get(spec.getCustomSetting());
        }

        Macbook macbook = new Macbook(spec);

        cache.put(spec.getCustomSetting(),macbook);

        return macbook;
    }

}

```

> Test
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        MacbookFactory factory = new MacbookFactory();

        Macbook goodbook = factory.getMacbook(Macbook.Spec.HIGH);

        System.out.println(goodbook.toString());

        CustomSetting superSetting = new CustomSetting();

        superSetting.setCpu("i9");
        superSetting.setMemory(32);
        superSetting.setStorage(1024);

        Macbook superMacbook = factory.getCustomMacbook(superSetting);

        System.out.println(superMacbook.toString());

    }
}

```

> 結果
> 

```
CustomSetting = {
cpu = i7
memory = 16
storage = 512
monitor = Retina Display
}
CustomSetting = {
cpu = i9
memory = 32
storage = 1024
monitor = Retina Display
}

```