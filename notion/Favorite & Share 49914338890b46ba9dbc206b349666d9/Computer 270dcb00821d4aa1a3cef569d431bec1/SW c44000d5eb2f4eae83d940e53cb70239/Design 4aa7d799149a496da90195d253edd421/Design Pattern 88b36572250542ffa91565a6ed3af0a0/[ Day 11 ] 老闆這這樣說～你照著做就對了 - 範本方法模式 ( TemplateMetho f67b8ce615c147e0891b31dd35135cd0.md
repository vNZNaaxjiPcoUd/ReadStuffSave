# [ Day 11 ] 老闆這這樣說～你照著做就對了 - 範本方法模式 ( TemplateMethod Pattern )

### **定義**

> In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses.[1] It lets one redefine certain steps of an algorithm without changing the algorithm's structure.[2] The template method is one of the twenty-three well-known patterns described in the "Gang of Four" book Design Patterns.-- wikipedia Template method pattern
> 

翻譯一下：

在軟體工程中，範本方法模式(template method pattern)是屬於行為模式的一種（ [Behavioral pattern](https://en.wikipedia.org/wiki/Behavioral_pattern) ），它定義了在某些演算法下的程式骨架，把某些行為或定義推遲到子類別實現，所以可以很簡單的在不改變程式基礎骨架的狀況下，繼承其範本方法，拓展不同的行為方式。這是在 "**Gang of Four**"的書籍 ***Design Patterns*** 所敘述的其中一個模式。

![https://ithelp.ithome.com.tw/upload/images/20181025/20112528w5ONL8pF3W.png](https://ithelp.ithome.com.tw/upload/images/20181025/20112528w5ONL8pF3W.png)

範本模式運用很廣泛，所以在很多語言中都有abstract類別，所以在程式碼中的實現也很容易。

試著實現範本方法模式...

> 老闆嘴巴說要做東西。
> 

```
public abstract class BossMethod {

//老闆有老闆的想法private String bossThink(){
        return "我覺得呢，這個東西應該要這樣做這樣做。 ： ";
    }
//老闆說你們這個不好重新做private String bossRedo(){
        return "你們這個跟我想做得不一樣重新做。";
    }

    abstract String UI_Design();

    abstract String systemAnalysis();

    abstract String systemDesign();

    abstract String programming();

    abstract String test();

    public void completeSoftware(){

        System.out.println(
                bossThink() + UI_Design() + "\n" +
                bossThink() + systemAnalysis() + "\n" +
                bossThink() + systemDesign() + "\n" +
                bossThink() + programming() + "\n" +
                bossThink() + test()
        );

    }

    public void redoSoftware(){
        System.out.println(bossRedo());
        completeSoftware();
    }

}

```

> 經理人去找人做出來...
> 

```
public class SoftwareManager extends BossMethod {
    @Override
    String UI_Design() {
        System.out.println("找一個UI Design做");
        return "UI成果";
    }

    @Override
    String systemAnalysis() {
        System.out.println("找一個軟體分析師做");
        return "軟體分析成果";
    }

    @Override
    String systemDesign() {
        System.out.println("找一個系統設計師做");
        return "系統設計成果";
    }

    @Override
    String programming() {
        System.out.println("找一個軟體工程師做");
        return "程式成果";
    }

    @Override
    String test() {
        System.out.println("找一個測試工程師做");
        return "測試成果";
    }
}

```

> 測試一下
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){
        SoftwareManager softwareManager = new SoftwareManager();

        softwareManager.completeSoftware();

        softwareManager.redoSoftware();
    }
}

```

> 測試成果
> 

```
找一個UI Design做
找一個軟體分析師做
找一個系統設計師做
找一個軟體工程師做
找一個測試工程師做
我覺得呢，這個東西應該要這樣做這樣做。 ： UI成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 軟體分析成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 系統設計成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 程式成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 測試成果
你們這個跟我想做得不一樣重新做。
找一個UI Design做
找一個軟體分析師做
找一個系統設計師做
找一個軟體工程師做
找一個測試工程師做
我覺得呢，這個東西應該要這樣做這樣做。 ： UI成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 軟體分析成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 系統設計成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 程式成果
我覺得呢，這個東西應該要這樣做這樣做。 ： 測試成果

```

老闆負責想要做啥～實際實行交給經理人找人做ＸＤ