# [ Day 19 ] 一個是全部的部分～部分一個的集合 - 組合模式 ( Composite Pattern)

### **定義**

> 組合模式 ( Composite )，將物件組合成樹形結構以表示「 部分 - 整體 」的層次結構。組合模式使得用戶對單個物件和組合物件的使用具有一致性。[ DP ]-- 大話設計模式 p.278
> 

組合模式主要的角色是`元件介面`和界面如何運用，讓各個元件組合成樹狀的結構。

### **使用場景和狀況**

- 組織中某些部位、功能可能包含部分或著整體時。
- 使用者對整體或是單一物件可以使用同樣的function進行操作。
- 在組合模式中所有的物件都是整體的一部分，而整體是物件的集合。

> 思考組合模式、裝飾模式有什麼不同？
> 

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181102/20112528y9tmrJlZ5C.png](https://ithelp.ithome.com.tw/upload/images/20181102/20112528y9tmrJlZ5C.png)

- Component：作為組合的基礎介面(元件)。
- Leaf：不能添加其他元件(Single Component)。

> 由於Leaf不再添加其他元件，所以add跟remove方法沒有用，而好處是能夠統一使用的介面，所以不用再去判斷是Leaf或是Composite。
> 
- Composite：可以添加其他元件的元件(Collection of Components)。

### **實作**

> 公司和公司下的子公司和部門共同介面
> 

```
import java.util.ArrayList;
import java.util.List;

public abstract class Component {

    String name;

    List<Component> componentList = new ArrayList<>();

    public Component(String name){
        this.name = name;
    }

    public void add(Component component){
        componentList.add(component);
    }

    public void remove(Component component){
        componentList.remove(component);
    }

    public void display(int depth){

        for (int i = 0; i < depth ; i++) {
            System.out.print("-");
        }

        System.out.println(this.name );

        for (Component c: componentList ) {
            c.display(depth + 2);
        }
    }

    public void command(String command){

        System.out.println(this.name + " " + command);

        for (Component c: componentList
             ) {
            c.command(command);
        }

    }

}

```

> 可以有子元件的Composite和不能有的Leaf
> 

```
public class Composite extends Component {
    public Composite(String name) {
        super(name);
    }

}

public class Leaf extends Component {
    public Leaf(String name) {
        super(name);
    }

    @Override
    public void add(Component component) {
        System.out.println("Leaf cant add component");
    }

    @Override
    public void remove(Component component) {

        System.out.println("Leaf cant remove component");
    }

    @Override
    public void display(int depth) {
        super.display(depth);
    }
}

```

> Client做一下測試
> 

```
import org.junit.jupiter.api.Test;

public class Client {

    @Test
    public void test(){

        Component big = new Composite("大公司");

        Component mid1 = new Composite("子公司1");
        Component mid2 = new Composite("子公司2");

        Component small1 = new Leaf("部門1");
        Component small2 = new Leaf("部門2");
        Component small3 = new Leaf("部門3");
        Component small4 = new Leaf("部門4");

        big.add(mid1);
        big.add(mid2);

        mid1.add(small1);
        mid1.add(small2);

        mid2.add(small3);
        mid2.add(small4);

        Component small5 = new Leaf("部門5");

        small1.add(small5);

        System.out.println("------- 大公司 -------");
//        公司階層
        big.display(1 );
//        大老闆發命令所有人都會接收到
        big.command("開發快一點");

        System.out.println("------- 子公司 -------");

        mid2.display(1 );
//        子公司命令只有子公司下面的階層可以接收到
        mid2.command("大老闆說Q4要完成");

    }

}

```

> 測試結果
> 

```
Leafcantaddcomponent-------大公司 -------
-大公司---子公司1-----部門1-----部門2---子公司2-----部門3-----部門4大公司開發快一點子公司1開發快一點部門1開發快一點部門2開發快一點子公司2開發快一點部門3開發快一點部門4開發快一點-------子公司 -------
-子公司2---部門3---部門4子公司2大老闆說Q4要完成部門3大老闆說Q4要完成部門4大老闆說Q4要完成
```