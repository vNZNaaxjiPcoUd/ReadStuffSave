# [ Day 17 ] 簡單的Undo和Redo - 備忘錄模式 ( Memoto Pattern )

### **定義**

> 在不破壞封裝性的前提之下，捕獲一個物件的內部狀態，並在該物件之外保存這個狀態。這樣以後就可將該物件恢復到原先保存的狀態。-- 大話設計模式 p266
> 

永久性的資料會存在資料庫（硬碟中），而備忘錄模式是把某個物件的狀態存在記憶體中，以便未來可以反悔。

### **使用情境場景**

- 程式運行中需要暫時保存或回覆物件的狀態時(存在記憶體)。
- 整體資訊很多，但需要儲存的資訊相對少時(修剪成memoto)。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181031/20112528eb22ZZMAPr.png](https://ithelp.ithome.com.tw/upload/images/20181031/20112528eb22ZZMAPr.png)

- Memoto：負責儲存需要儲存的狀態的類。
- Originator：提供建立Memoto或是回復到某個Memoto的狀態的方法。
- CareTaker：負責保存備忘錄(memoto)的類別。

### **實作**

電腦一定時間會自我記憶一次哪些東西在使用···其他就可以休眠。

> Memoto類別存放現在電腦資訊
> 

```
public class ComputerMemoto {
    String system;
    String hardisk;
    String userDoc;
    String userApp;

    public ComputerMemoto(String system, String hardisk, String userDoc, String userApp) {
        this.system = system;
        this.hardisk = hardisk;
        this.userDoc = userDoc;
        this.userApp = userApp;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getHardisk() {
        return hardisk;
    }

    public void setHardisk(String hardisk) {
        this.hardisk = hardisk;
    }

    public String getUserDoc() {
        return userDoc;
    }

    public void setUserDoc(String userDoc) {
        this.userDoc = userDoc;
    }

    public String getUserApp() {
        return userApp;
    }

    public void setUserApp(String userApp) {
        this.userApp = userApp;
    }
}

```

> 產生備忘錄的類別
> 

```
public class ComputerOriginator {
    private String system = "macOS";
    private String hardisk = "ssd";
    private String userDoc = "desk";
    private String userApp = "pages,numbers...";

    public ComputerMemoto save(){
        return new ComputerMemoto(system,hardisk,userDoc,userApp);
    }

    public void restore(ComputerMemoto memoto){
        this.hardisk = memoto.getHardisk();
        this.system = memoto.getSystem();
        this.userApp = memoto.getUserApp();
        this.userDoc = memoto.getUserDoc();
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getHardisk() {
        return hardisk;
    }

    public void setHardisk(String hardisk) {
        this.hardisk = hardisk;
    }

    public String getUserDoc() {
        return userDoc;
    }

    public void setUserDoc(String userDoc) {
        this.userDoc = userDoc;
    }

    public String getUserApp() {
        return userApp;
    }

    public void setUserApp(String userApp) {
        this.userApp = userApp;
    }
}

```

> 存放這些資訊的類別
> 

```
import java.util.ArrayList;
import java.util.List;

public class ComputerCareTaker {

//    最多備份15筆private static final int MAX = 15;

    public List<ComputerMemoto> saves = new ArrayList<>();

//    獲取電腦資訊public ComputerMemoto getSave(int index){
        if(index > saves.size() - 1){
            index = saves.size() - 1 ;
        }

        return saves.get(index);
    }

    public void saveMemoto(ComputerMemoto memoto){
        if (saves.size() > MAX){
            saves.remove(0);
        }
        saves.add(memoto);
    }

}

```

> 測試一下
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        ComputerCareTaker careTaker = new ComputerCareTaker();
        ComputerOriginator originator = new ComputerOriginator();

        careTaker.saveMemoto(originator.save());

        System.out.println(careTaker.getSave(0).getSystem());

        originator.setSystem("windows");

        careTaker.saveMemoto(originator.save());

        System.out.println(careTaker.getSave(1).getSystem());

    }
}

```

結果

```
macOS
windows

```

備忘錄模式也常常看到，在編輯文件時的undo和redo就是備忘錄模式的應用！在CareTaker類別做一些修改（新增對應Undo、Redo的方法）可以就達到想要的效果