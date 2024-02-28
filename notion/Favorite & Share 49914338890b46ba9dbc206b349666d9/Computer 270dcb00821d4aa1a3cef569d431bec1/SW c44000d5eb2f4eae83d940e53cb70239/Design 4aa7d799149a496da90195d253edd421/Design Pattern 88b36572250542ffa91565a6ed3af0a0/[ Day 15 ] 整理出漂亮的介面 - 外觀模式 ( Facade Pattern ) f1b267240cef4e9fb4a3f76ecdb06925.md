# [ Day 15 ] 整理出漂亮的介面 - 外觀模式 ( Facade Pattern )

### **定義**

> 外觀模式(Facade)，為子系統中的一組介面提供一個一致的介面，此模式定義了一個高階介面，這個介面使得這一子系統更加容易使用。-- 大話設計模式 p.160
> 

我覺得這是一個相對而言實踐比較容易的模式，是一種`封裝的應用`，將各種系統和類別等等雜亂或是困難的函數式封裝起來，成為一個`容易使用和理解的介面`，Client端只要調用此一介面就可以實踐想要的功能，而不用理會背後的邏輯。

### **使用情境與場景**

- 當同一類的方法散亂在各個不同的子系統或是類別中，從中使用相對複雜，並且程式碼會難以維護時。
    
    > 透過封裝其他的類別和系統簡化所看到的介面。
    > 
- 通用的介面或是功能（例如：輸入或是輸出驗證）。
- 可以當作一個重構過程的起點(?)。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181029/20112528NteGp12xG0.png](https://ithelp.ithome.com.tw/upload/images/20181029/20112528NteGp12xG0.png)

- Facade為封裝用的介面。
- 在SubSystem Classes的虛線矩形是被封裝的複雜的系統。

從UML圖中可以看到各個子系統和類別之間組成相對複雜，但是客戶端(Client)只要統一從Facade這個介面，就可以不用管背後的邏輯。

### **實作**

> 複雜的系統和方法
> 

```
public class SubClassOne {
    public void MethodOne(){
        System.out.println(1);
    }
}

public class SubClassTwo {
    public void MethodTwo(){
        System.out.println(2);
    }
}

public class SubClassThree {
    public void MethodThree(){
        System.out.println(3);
    }
}

public class ClassOne {
    public void MethodFour(){
        System.out.println(4);
    }
}

```

> Facade Class
> 

```
public class Facade {

    private SubClassOne one;
    private SubClassTwo two;
    private SubClassThree three;
    private ClassOne four;

    public Facade(){
        one = new SubClassOne();
        two = new SubClassTwo();
        three = new SubClassThree();
        four = new ClassOne();
    }

    public void MethodA(){
        four.MethodFour();
        one.MethodOne();
    }

    public void MethodB(){
        two.MethodTwo();
        three.MethodThree();
    }

}

```

> Test
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        Facade facade = new Facade();

        System.out.println("MethodA : ");
        facade.MethodA();

        System.out.println("MethodB : ");
        facade.MethodB();

    }
}

```

> 結果
> 

```
MethodA :
4
1
MethodB :
2
3

```

關於外觀模式是一個讓使用這些程式碼和系統的人，可以有一個清楚的介面來使用，算是一種整理性的模式。