# [ Day 14 ] 設定一次一勞永逸～原形模式 ( Prototype Pattern )

### **定義**

> 原形模式其實就是從一個物件再建立另外一個可訂製的物件，而且不需要知道任何建立的細節。-- 大話設計模式 p.119
> 

### **使用時機在**

- 類別初始化需要消耗非常多的資源時（資料、硬體資源）。
- 創造複雜的物件或是類別初始化需要很繁瑣的準備或存取權限。
- 當一個物件需要提供給許多其他物件存取，而且其他物件會需要修改到前者裡面的數值時。

```
原形模式提供一個更為便利的方式來建造一個物件，由於是直接在記憶體中進行二進位資料的拷貝，比起使用建構式產生物件的方式效能好很多。在建構複雜的狀況下還可以簡化所需要的程式碼、提升程式碼的可讀性。

```

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181028/201125280QEfTTOn9P.png](https://ithelp.ithome.com.tw/upload/images/20181028/201125280QEfTTOn9P.png)

- Client為客戶端。
- Prototype是介面，包含一個clone的function，可由此函數式從一個物件建立另一個物件。
- 各類別在需要時都可以視狀況實踐Prototype這個介面。

```
很多語言都已經內建了prototype pattern的這一個介面（Java是Cloneable、C#叫做Prototype)，很多時候基礎的物件Object裡，也已經寫好了clone的方法，所以只要引用後實踐即可。
```

### **內建的複製(clone)這個方法有需要注意的地方**

因為呼叫方式有分成`傳值呼叫`和`傳址呼叫`，在物件內可能也包含其他的物件的狀況下，複製也會分成兩種：

- 淺複製
- 深複製

深複製代表，物件內的物件也需要呼叫clone方法來複製。（有時候根據案例不同，需要深入的層數的不一樣，根據狀況來決定如何實踐）

### **實作**

因為空氣品質很糟，我想要5000個感測器來監測空氣品質···其中初始設定除了ID要變來紀錄哪一台感測器其他幾乎一樣···

> Prototype
> 

```
public abstract class Prototype implements Cloneable {
    public Prototype clone() throws CloneNotSupportedException{
        return (Prototype) super.clone();
    }
}

```

> 感測器實作Prototype使複雜得設定能被複製···
> 

```
public class Sensor extends Prototype {

    private int ID;

    private String name;
    private String nickname;

    private String version;
    private String wifiID;
    private String wifiPass;

    private String data;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getWifiID() {
        return wifiID;
    }

    public void setWifiID(String wifiID) {
        this.wifiID = wifiID;
    }

    public String getWifiPass() {
        return wifiPass;
    }

    public void setWifiPass(String wifiPass) {
        this.wifiPass = wifiPass;
    }

    @Override
    public Prototype clone() throws CloneNotSupportedException {
        return (Sensor)super.clone();
    }

}

```

> Client端我總共要五千個感測器···
> 

```
import org.junit.jupiter.api.Assertions;

public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        Sensor[] sensors = new Sensor[5000];
        sensors[0] = new Sensor();
        sensors[0].setID(1);
        sensors[0].setName("Sensor第一版");
        sensors[0].setNickname("我的空氣探測器");
        sensors[0].setVersion("1.0.0");
        sensors[0].setWifiID("MYSENSORWIFIID1.0.0");
        sensors[0].setWifiPass("THISisWiFiPasssOuO");
        sensors[0].setData("None");

        for(int i = 1 ; i < 5000 ; i ++){
            try{
                sensors[i] = (Sensor)sensors[0].clone();
                sensors[i].setID(i+1);
            }catch (CloneNotSupportedException e){
                e.printStackTrace();
            }

        }

        for (int i = 0 ; i < 5000 ; i++) {
//            測試是否每個感測器ID如我們所想要的
            Assertions.assertEquals(i+1,sensors[i].getID());
        }

    }
}

```

成功的設定了五千個感測器的初始設定檔。