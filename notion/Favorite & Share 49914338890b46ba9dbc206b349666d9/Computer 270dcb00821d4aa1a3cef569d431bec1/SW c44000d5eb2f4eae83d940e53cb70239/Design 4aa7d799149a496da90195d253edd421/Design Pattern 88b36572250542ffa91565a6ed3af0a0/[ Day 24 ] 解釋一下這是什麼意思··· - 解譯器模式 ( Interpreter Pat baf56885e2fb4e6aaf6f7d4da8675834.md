# [ Day 24 ] 解釋一下這是什麼意思··· - 解譯器模式 ( Interpreter Pattern)

### **定義**

> 解譯器模式(interpreter)，給定一個語言，定義它的語法的一種表示，並定義一個解釋器，這個解釋器使用該表示來解釋語言中的句子。-- Design Pattern by GoF [大話設計模式 p.407]
> 

### **使用情境和狀況**

- 特定的問題發生頻率很高的時候。
- 遊覽器是HTML、CSS、Javascript的解釋器(因此各家軟體解釋會不同)。
- 使用解釋器(interpreter)後容易改變或修改語法。
- Regular expression 運算式的解釋器。

> 當有一個語言需要解釋執行，並且你可以將該語言中的句子表示為一個抽象的語法樹的時候，可以使用解釋器模式。-- Design Pattern by GoF [大話設計模式 p.411]
> 

因此各個IDE、前處理器、語法分析、編譯器···等也是解譯器模式的應用。

### **UML**

![https://ithelp.ithome.com.tw/upload/images/20181107/20112528isfy7sQKeI.png](https://ithelp.ithome.com.tw/upload/images/20181107/20112528isfy7sQKeI.png)

- Context：解釋器(interpreter)之外的一些全域資訊，放在Context(執行環境)中。
- AbstractExpression：解釋器介面，作為使用者的一個共同端口(方便切換不同的解釋器)。
- NonterminalExpression：非終端解釋器。
- TerminalExpression：終端解釋器。

> 這個模式的UML圖非常像 Chain of Responsibility 以及 Composite···。
> 

### **實作**

用broser為例子實作看看這個模式(虛擬碼··· )。

> Context
> 

```
public class BrowserContext {

    private String text;

    public String browserText;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}

```

> AbstractExpression
> 

```
public abstract class AbstractExpression {

    abstract public void interpret(BrowserContext context);

}

```

> 另外兩種Concrete interpreter
> 

```
public class TerminalExprssion extends AbstractExpression {
    @Override
    public void interpret(BrowserContext context) {
        System.out.println("終端的解釋器");
    }
}

public class NonterminalExpression extends AbstractExpression{

    @Override
    public void interpret(BrowserContext context) {
        System.out.println("非終端的解釋器");
    }
}

```

> Client (Test)
> 

```
import org.junit.jupiter.api.Test;

public class Client {
    @Test
    public void test(){

        BrowserContext context = new BrowserContext();

//        先用語法分析器，將詞句分類，選擇要用哪種解釋器解釋。/**
         * 做了各種分類
         *///        兩種解釋器
        AbstractExpression nonterminal = new NonterminalExpression();
        AbstractExpression terminal = new TerminalExprssion();

/**
         *不同的詞句要對應到對的解釋器
         *///        終端的丟進終端解釋
        terminal.interpret(context);

//        非終端的丟進非終端解釋
        nonterminal.interpret(context);

    }
}

```

結果

```
終端的解釋器
非終端的解釋器

```