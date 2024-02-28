# [ Day 23 ] 幫我跟那個誰喬一下 - 仲介者模式 ( Mediator Pattern )

GoF 四人幫所出的書Design Pattern中共有二十三種設計模式，隨著時間一天一天的過去，每天每寫一種Pattern素材就少了一種，來到今天正好第23天了，其中定義出還沒介紹的模式也剩下不多了。

### **定義**

> 仲介者模式(Mediator)用一個仲介物件來封裝一系列的物件互動。仲介者使個物件不需要顯式地互相參考，從而使其耦合鬆散，而且可以獨立地改變它們之間的互動。-- 大話設計模式 p.378
> 

### **使用情境和狀況**

- 類別之間有大量的聯繫關係時。
- 將網狀的結構重新分離成星狀的結構。
- 引用關係複雜，類別之間關係混亂難以重用··，可以通過一個中間類別來封裝多個類別中的行為。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181106/20112528EHc7Y2wepG.png](https://ithelp.ithome.com.tw/upload/images/20181106/20112528EHc7Y2wepG.png)

- Mediator：仲介者(中間人)的介面，中介者是各個同事的溝通橋樑。
- Colleague：加盟者(同事?)的介面。

> 看越多越覺得各種pattern很像啊～
> 

這次仲介者模式的UML圖跟Bridge Pattern有一個差別，各個Concrete Mediator需要知道每個Concrete Colleague是誰(這樣仲介才有辦法轉送資訊啊)。

同樣轉送資訊的模式有Adapter、Bridge、Mediator等這些(結構型)模式，通常會根據需求選擇，使用相對簡單易懂的模式。結構型模式意思是要把結構從比較複雜變成簡單易懂(容易修改擴展)，如果為了模式而實作模式那反而可能會造成程式複雜化呢！

### **實作**

小程序員做不來要請老闆幫忙

> 公司的介面
> 

```
public interface Company {

    public void addMember(CoWorker coWorker);

    public void introduce(CoWorker coWorker);

    public void workHard();

    public void giveWork(CoWorker coWorker);

}

```

> 員工的介面
> 

```
public abstract class CoWorker {

    String name;

    Boss boss;

    public CoWorker(String name){
        this.name = name;
    }

    public abstract void work();

}

```

> 公司下面的老闆
> 

```
import java.util.ArrayList;
import java.util.List;

public class Boss implements Company{

    List<CoWorker> coWorkers;

    public Boss(){
        coWorkers = new ArrayList<>();
    }

    @Override
    public void addMember(CoWorker coWorker){
        coWorkers.add(coWorker);
        coWorker.boss = this;
    }

    @Override
    public void introduce(CoWorker coWorker) {
        System.out.println("Boss:跟大家介紹這位是" + coWorker.name);
    }

    @Override
    public void workHard() {
        for (CoWorker c: coWorkers
             ) {
            System.out.println("Boss:" + c.name + "認真點做啊！");
        }
    }

    @Override
    public void giveWork(CoWorker coWorker) {
        System.out.println("Boss:" + coWorker.name + "這個幫忙一下。");
    }
}

```

> PM
> 

```
public class PM extends CoWorker {

    public PM(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(this.name + "做PM工作");
    }

    public void bossHelp(CoWorker coWorker){
        this.boss.giveWork(coWorker);
    }

}

```

> Programmer
> 

```
public class Programmer extends CoWorker {
    public Programmer(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(this.name + "寫程式");
    }
}

```

測試一下

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

//        無名的Boss
        Boss boss = new Boss();

//        各個員工
        PM wei = new PM("小偉");
        Programmer bad = new Programmer("小惡");
        Programmer good = new Programmer("阿仁");

//        把員工加入Boss下面管理
        boss.addMember(wei);
        boss.addMember(bad);
        boss.addMember(good);

//        Boss介紹新來的小惡
        boss.introduce(bad);

//        阿仁自己工作
        good.work();

//        boss請大家專心工作
        boss.workHard();

//        小惡自己做不來//        PM請老闆幫忙
        wei.bossHelp(bad);

    }
}

```

結果

```
Boss:跟大家介紹這位是小惡
阿仁寫程式
Boss:小偉認真點做啊！
Boss:小惡認真點做啊！
Boss:阿仁認真點做啊！
Boss:小惡這個幫忙一下。

```