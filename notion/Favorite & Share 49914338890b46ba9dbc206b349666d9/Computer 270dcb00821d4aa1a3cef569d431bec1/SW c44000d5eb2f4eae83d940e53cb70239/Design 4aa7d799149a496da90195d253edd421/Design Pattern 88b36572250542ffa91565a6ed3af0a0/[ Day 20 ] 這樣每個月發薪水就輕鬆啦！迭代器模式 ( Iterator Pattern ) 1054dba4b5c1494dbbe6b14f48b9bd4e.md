# [ Day 20 ] 這樣每個月發薪水就輕鬆啦！迭代器模式 ( Iterator Pattern )

### **定義**

> 迭代器模式( Iterator )，提供一種方法依序存取一個聚合物件中各個元素，而又不暴露該物件的內部表示。-- 大話設計模式 p.295
> 

### **使用情境或狀況**

- 需要存取一個集合並且遍歷所有的元素時。
- 現在很多語言都已經有實作這個模式了(ex:foreach方法)。
- 某些資料庫(ex:sqlite)的讀取中也有這個模式的實踐。
- 又稱作指標(cursor)。

迭代器模式在現代的程式語言和應用中已經非常普遍，幾乎都已經擁有這個模式的實作了，所以大家對於如何使用已經非常熟悉，但對於實踐的方式就沒有這麼熟悉了，所以還是值得我們學習它背後的程式思維，引為借鏡期待可以舉一反三！

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181103/20112528HAVKD5ZQ0x.png](https://ithelp.ithome.com.tw/upload/images/20181103/20112528HAVKD5ZQ0x.png)

> 迭代器模式UML圖看起來複雜但是概念很簡單。
> 
- Aggregate：集合的抽象類別（也稱作Collection）。
- Concrete Aggregate：具體的集合，要可以從這裡得到迭代器(Iterator)。
- Iterator：各種迭代器的介面，有必須要實現的幾種方法。
- Concrete Iterator：具體的迭代器（可以用各種不同方式遍歷集合）。

為了不暴露集合(或是容器)內部的細節，並且減少集合所需擔負的功能，所以將迭代器獨立出來。

### **實作**

> 試著實作Iterator pattern 發公司員工薪水···
> 

Iterator 和 Aggregate 介面

```
public interface Iterator {
    public Object First();
    public Object Next();
    public boolean IsDone();
    public Object CurrentItem();
}

public interface Aggregate {

    public Iterator CreateIterator();

}

```

簡單的員工類別

```
public class Employee {

    String name;

    String title;

    public Employee(String name , String title){
        this.name = name;
        this.title = title;
    }

}

```

公司類別

```
import java.util.ArrayList;
import java.util.List;

public class CompanyA implements Aggregate {

    List<Employee> employees = new ArrayList<>();

    public CompanyA(){

//為了方便先預先放入員工
        employees.add(new Employee("小萱","業務"));
        employees.add(new Employee("小尉","工程師"));
        employees.add(new Employee("小陞","程序猿"));
        employees.add(new Employee("阿偉","專案管理"));
        employees.add(new Employee("小詩","吉祥物"));
        employees.add(new Employee("阿農","分析兼司機"));

    }

    @Override
    public Iterator CreateIterator() {
        return new CompanaAIterator(this);
    }
}

```

最重要的迭代器

```
public class CompanaAIterator implements Iterator {

    private CompanyA companyA;
    private int current = 0;

    public CompanaAIterator(CompanyA companyA){
        this.companyA = companyA;
    }

    @Override
    public Object First() {
        return companyA.employees.get(current);
    }

    @Override
    public Object Next() {
        Object ret = null;
        current++;
        if( current < companyA.employees.size()){
            ret = companyA.employees.get(current);
        }

        return ret;
    }

    @Override
    public boolean IsDone() {
        return current >= companyA.employees.size() ? true : false ;
    }

    @Override
    public Object CurrentItem() {
        return companyA.employees.get(current);
    }
}

```

做一下測試

```
public class Test {

    @org.junit.jupiter.api.Test
    public void test(){

        CompanyA companyA = new CompanyA();

        Iterator iterator = companyA.CreateIterator();

        while(!iterator.IsDone()){
            System.out.println( ((Employee)iterator.CurrentItem()).name + " : " +  ((Employee)iterator.CurrentItem()).title + " 發薪水囉～");
            iterator.Next();
        }

    }
}

```

> 結果
> 

```
小萱 : 業務 發薪水囉～
小尉 : 工程師 發薪水囉～
小陞 : 程序猿 發薪水囉～
阿偉 : 專案管理 發薪水囉～
小詩 : 吉祥物 發薪水囉～
阿農 : 分析兼司機 發薪水囉～

```

在現在程序語言中的迭代器函數式更多，但是基礎建設是一樣的～所以可以藉由這個基礎去做實踐喔！