# [ Day 10 ] 隨著自己想要的客製化 - 建造者模式 ( Builder Pattern)

### **前言**

> 隨時對自己說：一定辦得到，我相信我可以，因為還沒發揮100%呢！最近在趕公司案子，每天還有一篇的鐵人賽文章，其實還是有時間兼顧娛樂，昨天去看了電影 A Star Is Born (一個巨星的誕生) ，裡面對於劇本的改編(70年代 ~2018)很細膩，轉場唱歌時也沒有突兀的感覺，裡面的純愛情節在現代的電影和劇本當中很少見了，我覺得是一部很棒的電影！有機會大家可以去看看XD
> 

### **Builder模式的定義**

> The Builder is a design pattern designed to provide a flexible solution to various object creation problems in object-oriented programming. The intent of the Builder design pattern is to separate the construction of a complex object from its representation. It is one of the Gang of Four design patterns.-- from Wiki
> 

> 試著翻譯一下...
> 

建築者模式是設計來提供一個有彈性解決方案，用OOP的方式來解決一個不同(複雜)物件的創造。目的是為了要分離一個複雜物品的建造和表示建造的方式。

一個物品在建造完成的過程中，需要組成需要設定過多的元件，或裝配過程是有順序的，可以在一一設定完所需要的元件後再產生我們所需要的物件。主要的角色有`建造者`、`指揮者`和`產品`，指揮者控制建造的過程，並且可以用來區隔用戶和建造過程的關聯性。

![https://ithelp.ithome.com.tw/upload/images/20181024/20112528PhfQoo1N4v.png](https://ithelp.ithome.com.tw/upload/images/20181024/20112528PhfQoo1N4v.png)

試著實現建造者模式...

> 建構MacBook Pro 是一個複雜的過程，元件非常多，有各種規格可以客製化，也有分高規格跟低規格版，我們試著用builder pattern實現建造的過程。
> 

> Macbook這個產品
> 

```
public class MacbookPro {

    private Processor processor;
    private Memory memory;
    private Storage storage;
    private Graphics graphics;
    private Keyboard keyboard;

    MacbookPro(){}

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public void setMemory(Memory memory) {
        this.memory = memory;
    }

    public void setStorage(Storage storage) {
        this.storage = storage;
    }

    public void setGraphics(Graphics graphics) {
        this.graphics = graphics;
    }

    public void setKeyboard(Keyboard keyboard) {
        this.keyboard = keyboard;
    }

    public Processor getProcessor() {
        return processor;
    }

    public Memory getMemory() {
        return memory;
    }

    public Storage getStorage() {
        return storage;
    }

    public Graphics getGraphics() {
        return graphics;
    }

    public Keyboard getKeyboard() {
        return keyboard;
    }

    @Override
    public String toString() {
        return "{ Macbook : " + "\n" +
                "Processor : " + this.getProcessor().name + "\n" +
                "Memory size : " + this.getMemory().size + "GB" + "\n" +
                "Graphics : " + this.getGraphics().name + "\n" +
                "Storage size : " + this.getStorage().size + "GB" +"\n" +
                "Keyboard language : "+ this.getKeyboard().language +
                " }";
    }

    public static class Processor{
        String name;
        Processor(String name){
            this.name = name;
        }
    }

    public static class Memory{
        int size;
        Memory(int size){
            this.size = size;
        }
    }

    public static class Graphics{
        String name;
        Graphics(String name){
            this.name = name;
        }
    }

    public static class Storage{

        int size;

        Storage(int size){
            this.size = size;
        }

    }
    public static class Keyboard{

        String language;

        Keyboard(String language){
            this.language = language;
        }

    }

}

```

> MacbookBuilder介面類別
> 

```
ublic abstract class MacbookProBuilder {

    protected MacbookPro macbookPro;

    MacbookProBuilder(){
        macbookPro = new MacbookPro();
    }

    abstract MacbookProBuilder buildCPU(MacbookPro.Processor processor);

    abstract MacbookProBuilder buildMemory(MacbookPro.Memory size);

    abstract MacbookProBuilder buildGraphics(MacbookPro.Graphics name);

    abstract MacbookProBuilder buildStorage(MacbookPro.Storage size);

    abstract MacbookProBuilder buildKeyboard(MacbookPro.Keyboard language);

    MacbookPro build(){
        return macbookPro;
    }

}

```

> 實際的Builder
> 

```
blic class MacbookPro_2018 extends MacbookProBuilder {
    @Override
    MacbookPro build() {
        return super.build();
    }

    MacbookPro_2018() {
        super();
    }

    @Override
    MacbookProBuilder buildCPU(MacbookPro.Processor processor) {
        this.macbookPro.setProcessor(processor);
        return this;
    }

    @Override
    MacbookProBuilder buildMemory(MacbookPro.Memory size) {
        this.macbookPro.setMemory(size);
        return this;
    }

    @Override
    MacbookProBuilder buildGraphics(MacbookPro.Graphics name) {
        this.macbookPro.setGraphics(name);
        return this;
    }

    @Override
    MacbookProBuilder buildStorage(MacbookPro.Storage size) {
        this.macbookPro.setStorage(size);
        return this;
    }

    @Override
    MacbookProBuilder buildKeyboard(MacbookPro.Keyboard language) {
        this.macbookPro.setKeyboard(language);
        return this;
    }
}

```

> 賣macbook的經銷商，只有兩種固定規格的macbook
> 

```
public class MacBookSeller {

    private MacbookProBuilder macbookProBuilder;

    MacBookSeller(MacbookProBuilder macbookProBuilder){

        this.macbookProBuilder = macbookProBuilder;
    }

    public MacbookPro lowSpec(){
        return macbookProBuilder
                .buildCPU(new MacbookPro.Processor("2.2GHz 6 核心第八代 Intel Core i7 處理器"))
                .buildMemory(new MacbookPro.Memory(16))
                .buildGraphics(new MacbookPro.Graphics("Radeon Pro 555X 配備 4GB GDDR5 記憶體"))
                .buildStorage(new MacbookPro.Storage(256))
                .buildKeyboard(new MacbookPro.Keyboard("中文注音"))
                .build();
    }

    public MacbookPro highSpec(){
        return macbookProBuilder
                .buildCPU(new MacbookPro.Processor("2.6GHz 6 核心第八代 Intel Core i7 處理器"))
                .buildMemory(new MacbookPro.Memory(16))
                .buildGraphics(new MacbookPro.Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
                .buildStorage(new MacbookPro.Storage(512))
                .buildKeyboard(new MacbookPro.Keyboard("中文注音"))
                .build();
    }

}

```

> 測試一下
> 

```
public class Test {
    @org.junit.jupiter.api.Test
    public void test(){

        MacbookPro_2018 macbookPro_2018 = new MacbookPro_2018();

        MacBookSeller macBookSeller = new MacBookSeller(macbookPro_2018);

//經銷商的固定規格
        MacbookPro myMacbook= macBookSeller.lowSpec();

        System.out.println(myMacbook.toString());

//想要夢想中的macbook pro需要自己訂製
        MacbookPro dreamMacbook = macbookPro_2018
                .buildCPU(new MacbookPro.Processor("2.9GHz 6 核心第八代 Intel Core i9 處理器"))
                .buildMemory(new MacbookPro.Memory(32))
                .buildStorage(new MacbookPro.Storage(4096))
                .buildKeyboard(new MacbookPro.Keyboard("英文"))
                .buildGraphics(new MacbookPro.Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
                .build();

        System.out.println(dreamMacbook.toString());

    }
}

```

> 結果
> 

```
{ Macbook :
Processor : 2.2GHz 6 核心第八代 Intel Core i7 處理器
Memory size : 16GB
Graphics : Radeon Pro 555X 配備 4GB GDDR5 記憶體
Storage size : 256GB
Keyboard language : 中文注音 }
{ Macbook :
Processor : 2.9GHz 6 核心第八代 Intel Core i9 處理器
Memory size : 32GB
Graphics : Radeon Pro 560X 配備 4GB GDDR5 記憶體
Storage size : 4096GB
Keyboard language : 英文 }

```

> 
>