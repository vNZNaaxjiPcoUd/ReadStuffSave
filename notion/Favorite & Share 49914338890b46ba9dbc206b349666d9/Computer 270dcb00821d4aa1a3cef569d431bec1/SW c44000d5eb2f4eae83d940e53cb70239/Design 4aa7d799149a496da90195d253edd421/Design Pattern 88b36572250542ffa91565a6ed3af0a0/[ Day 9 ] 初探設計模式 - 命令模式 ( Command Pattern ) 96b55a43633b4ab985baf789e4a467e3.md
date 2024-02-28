# [ Day 9 ] 初探設計模式 - 命令模式 ( Command Pattern )

### **命令模式**

命令模式(Command Pattern)有三個主要角色，`Invoker`、`ICommand`和`Receiver`，是將對行爲進行封裝的典型模式，將命令的`命令接收(請求操作者)`跟`執行命令(實際操作者)`之間切分開來。

幾乎所有的類別都可以套用命令模式，但是只有在需要某些特殊功能，如`記錄操作步驟`、`取消上次命令`的時候，比較適合用命令模式。

> 命令模式有幾個優點：它能較容易的設計一個命令序列。在需要的狀況下，可以較容易的將命令記入日誌。允許接收請求的一方決定是否要否決請求。可以容易的實現對請求的取消和重做。由於加進新的具體命令類別不影響其他類別，因此增加新的具體命令類別很容易。最後、最大的優點是將請求的物件和執行的物件分開。-- 大話設計模式 p.355
> 

![https://ithelp.ithome.com.tw/upload/images/20181023/20112528462JLh3GNy.png](https://ithelp.ithome.com.tw/upload/images/20181023/20112528462JLh3GNy.png)

> 試著將控制燈光用命令模式實作。
> 

```
public class Light {
//Receiver可以是任何的類public void turnOn(){
        System.out.println("打開燈");
    }

    public void turnOff(){
        System.out.println("關燈");
    }

    public void brighter(){
        System.out.println("亮度提高");
    }

    public void darker(){
        System.out.println("亮度降低");
    }

}

```

> 對燈光控制的Command介面
> 

```
public abstract class Command {

    Light light;

    public Command(Light light){
        this.light = light;
    }

    public abstract void execute();
}

```

> 燈光底下的Command
> 

```
public class TurnOn extends  Command {
    public TurnOn(Light light) {
        super(light);
    }

    @Override
    public void execute() {
        light.turnOn();
    }
}

public class TurnOff extends Command {

    public TurnOff(Light light) {
        super(light);
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}

public class Brighter extends Command{
    public Brighter(Light light) {
        super(light);
    }

    @Override
    public void execute() {
        light.brighter();
    }
}

public class Darker extends Command {
    public Darker(Light light) {
        super(light);
    }

    @Override
    public void execute() {
        light.darker();
    }

}

```

> 燈光的遙控器，可以儲存commands。
> 

```
public class Invoker {

    private List<Command> commandList = new ArrayList<>();

    public void addCommand(Command command) {
        commandList.add(command);
    }

    public void execute(){
        for (Command command :
                commandList) {
            command.execute();
        }
    }

}

```

> 測試一下
> 

```
public class Test {

    @org.junit.jupiter.api.Test
    public void test(){

        Light light = new Light();

        Command turnOn = new TurnOn(light);
        Command brighter = new Brighter(light);
        Command darker = new Darker(light);

        Invoker invoker = new Invoker();

        invoker.addCommand(turnOn);
        invoker.addCommand(brighter);
        invoker.addCommand(brighter);
        invoker.addCommand(brighter);
        invoker.addCommand(darker);

        invoker.execute();

    }

}

```

> 測試結果
> 

```
打開燈
亮度提高
亮度提高
亮度提高
亮度降低

```

實作 - 2

試著實現魔術方塊的Command模式 ⋯

> 對Tetris Game的操作
> 

```
public class Tetris {

    public Tetris(){
    }

    public void trunLeft(){
        System.out.println("向左轉");
    }

    public void turnRight(){
        System.out.println("向右轉");
    }

    public void straightDown(){
        System.out.println("直接下降");
    }

}

```

> 魔術方塊的Command介面
> 

```
public abstract class ICommandTetris {

//    抽象的命令protected Tetris tetris;

    public ICommandTetris(Tetris tetris) {
        this.tetris = tetris;
    }

    public abstract void execute();

}

```

> 三種對魔術方塊的操作
> 

```
public class TurnLeft extends ICommandTetris {

    public TurnLeft(Tetris tetris) {
        super(tetris);
    }

    @Override
    public void execute() {
        tetris.trunLeft();
    }
}

public class TurnRight extends ICommandTetris{

    public TurnRight(Tetris tetris) {
        super(tetris);
    }

    @Override
    public void execute() {
        tetris.turnRight();
    }
}

public class StraightDown extends ICommandTetris
{
    public StraightDown(Tetris tetris) {
        super(tetris);
    }

    @Override
    public void execute() {
        tetris.straightDown();
    }
}

```

> 遊戲的操縱者
> 

```
public class Invoker {

    ICommandTetris command;

    public Invoker(ICommandTetris command){
        this.command = command;
    }

    public void setCommand(ICommandTetris command){
        this.command = command;
    }

    public void invoke(){
        command.execute();
    }

}

```

> 測試一下
> 

```
public class Test {

    @org.junit.jupiter.api.Test
    public void test(){

        Tetris tetris = new Tetris();
        ICommandTetris commandLeft = new TurnLeft(tetris);
        ICommandTetris commandRight = new TurnRight(tetris);
        ICommandTetris commandDown= new StraightDown(tetris);

        Invoker invoker = new Invoker(commandLeft);

        invoker.invoke();

        invoker.setCommand(commandRight);

        invoker.invoke();

        invoker.setCommand(commandDown);

        invoker.invoke();

    }

}

```

> 測試結果
> 

```
向左轉
向右轉
直接下降

```

命令模式實現起來沒有很困難，幾乎所有的類別都可以套用命令模式，但是無謂的套用只會增加類別的數量。所以在有適合使用命令模式的需求，到那時再重構就好。