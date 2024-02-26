# [ Day 8 ] 初探設計模式 - 觀察者模式 ( Observer Pattern )

昨天我們介紹了裝飾模式，裝飾模式可以`解決屬性或是類別過多`的問題，將`元件、裝飾`和`組合的邏輯`分離開來，因此我們能`根據狀況動態的獲得`想要的結果。今天介紹的是觀察者模式(Observer Pattern)，觀察者模式有兩個角色，`觀察者`和`被觀察者`(也有說法是`主題`和`訂閱者`)，出於某些狀況，在`被觀察者改變時觀察者需要知道狀態`。這是一種使用率非常高的模式，在GUI系統中經常被使用，也有許多對於觀察者模式的擴展與實現，知名的「[ReactiveX](http://reactivex.io/)」就實現了觀察者模式的程式設計思想。

定義：觀察者模式是一種`一對多的依賴關係`，當物件的`狀態改變`，所有依賴於它的物件都會`得到通知並被自動更新`。

> The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.-- from Design Pattern: Observer and Podcasts
> 

看了七天的設計模式，對於UML圖越來越清楚了，稍微比較熟悉後覺得這是一個很好的表達設計模式結構的方式。所以這次試著將UML圖畫出來...

![https://ithelp.ithome.com.tw/upload/images/20181023/20112528E2P8dfMVqg.png](https://ithelp.ithome.com.tw/upload/images/20181023/20112528E2P8dfMVqg.png)

試著實現觀察者模式。

> 假設有學生訂閱了廣播，每一段時間會換節目。
> 

觀察者和被觀察者的介面...

```
public interface IObserverable {
    public void add(IObserver observer);
    public void remove(IObserver observer);
    public void notifyObservers();
}

public interface IObserver {
    public void update();
}

```

> 實體的廣播
> 

```
import java.util.ArrayList;
import java.util.List;

public class PodcastA implements IObserverable {

    List<IObserver> list = new ArrayList<>();

//節目名稱
    String name = "英文廣播";

    @Override
    public void add(IObserver observer) {
        list.add(observer);
    }

    @Override
    public void remove(IObserver observer) {
        list.remove(observer);
    }

    public String getName() {
        return this.name;
    }

    @Override
    public void notifyObservers() {

        for (IObserver o: list) {
            o.update();
        }
    }

}

```

> 實體的學生
> 

```
public class Student implements IObserver {

    IObserverable observerable;

    public Student(IObserverable observerable){
        this.observerable = observerable;
    }

    @Override
    public void update() {
        System.out.println("聽了" + observerable.getName());
    }

}

```

> 稍微測試一下...
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){
        IObserverable podcast = new PodcastA();
        IObserver student = new Student(podcast);
        podcast.add(student);

//預設節目是英文廣播
        podcast.notifyObservers();

//節目變為今年流行歌
        ((PodcastA) podcast).name = "今年流行歌";

        podcast.notifyObservers();
    }
}

```

> 結果
> 

```
聽了英文廣播
聽了今年流行歌

```

> 現在很多程式設計思想有用觀察者模式的概念，對於GUI(畫面)相關的很適合用這種模式，也有一些概念是用資料流的方式處理，很多實現和拓展後，這是一個被廣泛應用的模式。
>