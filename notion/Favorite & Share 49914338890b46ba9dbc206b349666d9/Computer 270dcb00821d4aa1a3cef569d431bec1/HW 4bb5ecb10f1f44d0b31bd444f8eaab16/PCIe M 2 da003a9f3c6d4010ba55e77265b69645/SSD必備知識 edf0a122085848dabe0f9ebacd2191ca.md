# SSD必備知識

從早些年的低容量高單價，SSD 在這幾年的價格逐漸下滑，儲存規格亦逐年提昇，已經到大多數人都能接受的地步，說是到了採購的甜蜜點亦不為過，不管是尋求極致的效能表現，或是文書遊戲的基本需求，都能夠找到適合級別的產品，

然而 SSD 演化至今，介面的種類逐漸變得複雜，不像傳統 HDD 一樣，只需要單一的 SATA 介面就能搞定。如果在購物網站上輸入「SSD」查詢，除了熟悉的2.5吋規格外，甚至還會出現介面卡形式以及長得像口香糖般的長條狀SSD，如果不是經常關注儲存產品發展的使用者，很可能會因此混淆，到底該選擇哪一種 SSD 規格比較適合？以及自己的系統能否完全發揮 SSD 的高速優勢，透過這篇專題一次告訴你。

## **認識SSD的四大介面**

在目前消費端的 SSD 儲存市場上，總共存在有4種介面規格的產品，分別是 SATA、mSATA、PCIe 與M.2，但就市場的佔有率來說，還是以 SATA 及M.2為主流，但就傳輸速度來說，其實並非M.2介面就一定優於 SATA 介面，還得依據其所支援的標準而定。

### **SATA與mSATA**

SATA 應該是大多數人最為熟悉的介面，由以前的 IDE/PATA 介面發展而來，且一直都是電腦系統中專門用於連接硬碟、光碟機等設備的傳輸介面，現行普遍採用的 SATA 6Gb/s 規格（或稱 SATA III），自2009年頒布以來已將近10年，因此採用此介面的 SSD 的數量也是最多的，其後雖然也有支援更高傳輸速度的 SATA Express及 U.2介面的推出，但支援的產品實在太少。而 mSATA 可算是 SATA 的衍生介面，其主要差異在於採用嵌入式設計，縮減了安裝的尺寸，因此通常在筆電上比較常見。mSATA 在傳輸速率上並無特別升級之處，同樣為6Gb/s，對於傳統機械式硬碟來說，SATA 的6Gb/s 頻寬足矣，然而對於講求高速的 SSD 來說，6Gb/s 反而成為了一種限制，乃致於 SATA 規格的 SSD 極速，天生就無法突破600MB/s 的門檻，也因此 mSATA SSD 的地位不上不下，除了舊型筆電之外，有逐漸淘汰的趨勢。

### **從PCIe到M.2**

既然 SATA 的頻寬無法滿足SSD，就得另尋解決之道，可分別以 PCIe 和M.2作代表，PCIe 介面的發展沿襲自 AGP，原本是因應顯示卡而獨立出來的圖形加速介面，目前主流是 PCIe 3.0，頻寬則依通道數而有所不同，如x1、x4、x8、x16等等，以3.0版的規格來說，即使是最低的x1，其頻寬也將近有1000MB/s，比 SATA 自然是快上不少，所以廠商將 SSD 改由 PCIe 介面進行傳輸以求提高效率，也是可以理解的，但 PCIe SSD 同樣會面臨到體積的問題，一般筆電不可能有多餘空間容納下一張介面卡，所以 Intel 力推新一代的M.2介面，不但足以整合上述所有介面的優點，卻也同時讓它成為 SSD 有史以來最複雜的混合型介面。

[https://obs.line-scdn.net/0h4t_PnoMEa1tiKUA093sUDFh_aDRRRXhYBh86WCFHNW8aGCUFV04gbk58ZmMfHiwFC08iOUYvcGofHCleChgg/w644](https://obs.line-scdn.net/0h4t_PnoMEa1tiKUA093sUDFh_aDRRRXhYBh86WCFHNW8aGCUFV04gbk58ZmMfHiwFC08iOUYvcGofHCleChgg/w644)

隨著 SSD 硬體介面的差異，在主機板上安裝的位置亦有所不同，隨各家而異。（此處以技嘉 H370 AORUS GAMING 3 WIFI 主機板為例）

▲ 隨著 SSD 硬體介面的差異，在主機板上安裝的位置亦有所不同，隨各家而異。（此處以技嘉 H370 AORUS GAMING 3 WIFI 主機板為例）

[https://obs.line-scdn.net/0hBa7mG2DvHU4KFDYhn2ViGTBCHiE5eA5NbiJMTUl6Q3pyJVMQP3FVeyYSQypzJVoQY3JbKScXBn93IV9LYXJV/w644](https://obs.line-scdn.net/0hBa7mG2DvHU4KFDYhn2ViGTBCHiE5eA5NbiJMTUl6Q3pyJVMQP3FVeyYSQypzJVoQY3JbKScXBn93IV9LYXJV/w644)

四種 SSD 介面的比較

▲ 四種 SSD 介面的比較

## **變化多端的M.2規格**

M.2前身為 NGFF（Next Generation Form Factor），是由 Intel 所主推的一種全新介面規範，用以取代 mSATA，並首先導入到筆電平台，目的同樣是為了推動小型化系統的發展，不過 Intel 在制訂M.2介面的規範時，並未限制其所使用的訊號協定，僅定義了尺寸規格與工作電壓等項目，也因此M.2得以相容於多種介面訊號控制器，包括 SATA、PCIe、USB、音訊等等，對於廠商在設計產品時，可提供更高的自由度。

### **三種插槽形式及其變化**

然而這樣的高自由度與混合性，也讓M.2介面變得複雜許多，首先在插槽方面，M.2就區分為 Socket 1、Socket 2、Socket 3等3種形式，所對應的鍵位也有所不同，Socket 1主要針對無線網卡，對應的鍵位為 A Key，為避免混淆這裡就先略過不提。M.2 SSD 主要適用於 Socket 2、Socket 3這兩種插槽，Socket 2插槽可以支援走 SATA 及 PCIe x2通道的M.2 SSD，所對應的鍵位為 B Key，而 Socket 3插槽則支援走 PCIe x4通道的M.2 SSD，對應的鍵位為 M Key，兩種插槽因為防呆缺口的位置不一樣，所以無法混用，不過市面上有些 M.2 SSD 產品為了能同時兼容於兩種插槽，便把金手指的部分設計成 B+M Key 的形式，但是…能夠插得進去，不代表就能夠正常使用，因為某些主機板上的M.2插槽僅能支援 PCIe 通道，如果你插入 SATA 的M.2 SSD，那麼就會無法偵測到，除非廠商在設計時，就已經加入 SATA 及 PCIe 的控制器，使它能夠兼容於兩者，這部分各家不一，只能從主機板規格表上自行查詢。另外，如果是走 SATA 通道的M.2 SSD，那麼一樣會受到6Gb/s 頻寬的限制，在傳輸效能上等同於2.5吋的 SATA SSD。

### **SSD尺寸也有差異**

關於 M.2 SSD 你還會看到幾個數字，如2242、2260、2280等等，其實是代表 M.2 SSD 的尺寸大小，如2280就是寬22mm、長80mm，此外依照記憶體顆粒排列的不同，還會有單面及雙面的差別，不過多數設備廠商都會預留足夠的安裝空間，如果擔心也可再確認一下。

[https://obs.line-scdn.net/0ht-cYRQeJKwJeIABtyytUVWR2KG1tTDgBOhZ6AR1OdTYmEWVca0I2N3IgcTF2F2xcMBZjZnspMDMjFWkHNUM2/w644](https://obs.line-scdn.net/0ht-cYRQeJKwJeIABtyytUVWR2KG1tTDgBOhZ6AR1OdTYmEWVca0I2N3IgcTF2F2xcMBZjZnspMDMjFWkHNUM2/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

[https://obs.line-scdn.net/0h07AWLFwdbxh8LkR36fcQT0Z4bHdPQnwbGBg-Gz9AMSwEHyFGSUF0LVAmOShYFihGEhgmeVwtdCkBGy0dF050/w644](https://obs.line-scdn.net/0h07AWLFwdbxh8LkR36fcQT0Z4bHdPQnwbGBg-Gz9AMSwEHyFGSUF0LVAmOShYFihGEhgmeVwtdCkBGy0dF050/w644)

M.2 SSD 的金手指鍵位

▲ M.2 SSD 的金手指鍵位

[https://obs.line-scdn.net/0hJk8_AQubFUQFJj4rkFxqEz9wFis2SgZHYRBER0ZIS3B9F1saMEMPcSknSychFFIabEBTISImDnV4E1dBbkAP/w644](https://obs.line-scdn.net/0hJk8_AQubFUQFJj4rkFxqEz9wFis2SgZHYRBER0ZIS3B9F1saMEMPcSknSychFFIabEBTISImDnV4E1dBbkAP/w644)

M.2介面重點規格

▲ M.2介面重點規格

## **解放SSD傳輸能力的NVMe標準**

走 PCIe 通道的 SSD 產品，雖然價格比 SATA 的 SSD 要貴上一些，但也會隨著時間逐步調降，然而包括 PCIe 介面與M.2介面在內的 SSD，最近又有許多宣稱支援 NVMe 標準的新產品接連推出，平平都是走 PCIe 通道，有無 NVMe 到底差別在哪？

### **針對SSD最佳化的控制標準**

要講 NVMe 就得先從 AHCI 說起，AHCI（Advanced Host Controller Interface，進階主機控制器介面），是一種儲存裝置的傳輸控制標準，從 SATA 3Gb/s（SATA II）時代便開始普遍應用，而當初在訂定 AHCI 標準時，並未預料到有 SSD 的誕生，於是初期許多 SATA 和 PCIe 的消費型 SSD，也就直接採行此一標準，但由於 AHCI 標準並非針對 SSD 的特性所打造，所以 Intel 又另外製訂了新一代的 NVMe（Non-Volatile Memory Express）標準，並鎖定 PCIe 匯流排介面的 SSD 來進行最佳化，這也是你不會在SATA的SSD上看到支援 NVMe 標準的原因，畢竟 SATA 有著頻寬的先天限制。採用 NVMe 標準的 SSD，擁有較低的延遲以及更高的 IOPS 表現，甚至在功耗的需求上也比較低。目前 NVMe 標準正持續發展中，例如最新的 NVMe 1.3版就是去年推出的，目前市面上也有許多支援的產品，相信最快在明年，NVMe SSD 就會成為市場上的主流產品。

### **系統要求較高**

雖然 NVMe SSD 的效能高，但相對的，安裝的電腦平台也需具備一定水準，在軟體方面，Windows 8.1及Windows 10均有內建 NVMe 驅動程式，若是 Windows 7的話，則需要看各家是否有釋出驅動程式，如果要把 NVMe SSD 作為開機碟的話，標準就更嚴格了，依 Intel 官方說明文件，系統 BIOS 需要支援 UEFI 2.3.1版本以上，並將作業系統安裝到 GPT 分割區，才能夠正常開機，此外，較高階的 NVMe SSD 通常可支援到PCIe 3.0 x4通道，意味 CPU 的等級也不能太差，才有足夠的通道數供 PCIe 使用，新組裝的電腦比較無須擔憂這些問題，但如果是舊電腦的話，可能就需要確認一下平台的支援性了。

[https://obs.line-scdn.net/0hcnGFuIN5PEF6Pxcu4KlDFkBpPy5JUy9CHgltQjlRYnUCDnIfQAtzdFY7ayNeD3sfFAl2JFs5J3AHCn5EEgpz/w644](https://obs.line-scdn.net/0hcnGFuIN5PEF6Pxcu4KlDFkBpPy5JUy9CHgltQjlRYnUCDnIfQAtzdFY7ayNeD3sfFAl2JFs5J3AHCn5EEgpz/w644)

如果電腦中並沒有M.2規格插槽的話，也可透過轉接卡的方式來進行安裝。

▲ 如果電腦中並沒有M.2規格插槽的話，也可透過轉接卡的方式來進行安裝。

[https://obs.line-scdn.net/0hChgIe4BkHEdaMDcoz-1jEGBmHyhpXA9EPgZNRBleQnMiAVIZb18DcnY1F3B2B1sZNAZVJXg0B3YnBV5CMVAD/w644](https://obs.line-scdn.net/0hChgIe4BkHEdaMDcoz-1jEGBmHyhpXA9EPgZNRBleQnMiAVIZb18DcnY1F3B2B1sZNAZVJXg0B3YnBV5CMVAD/w644)

同樣是 PCIe SSD，支援 NVMe 標準的 SSD 的傳輸效能，硬是比 AHCI 標準高出一大截。

▲ 同樣是 PCIe SSD，支援 NVMe 標準的 SSD 的傳輸效能，硬是比 AHCI 標準高出一大截。

[https://obs.line-scdn.net/0hd4Ptyr_wOxttDRB095VETFdbOHReYSgYCTtqGC5jZS8VPHVFVzkjLkFdNntGbXxFA2NyeU8KICoQOHkeBTgj/w644](https://obs.line-scdn.net/0hd4Ptyr_wOxttDRB095VETFdbOHReYSgYCTtqGC5jZS8VPHVFVzkjLkFdNntGbXxFA2NyeU8KICoQOHkeBTgj/w644)

NVMe 與 AHCI 的特性比較

▲ NVMe 與 AHCI 的特性比較

下一頁為你介紹多款SSD！

## **Micron Crucial BX500：入門SSD的超值選擇**

[https://obs.line-scdn.net/0htdcvOoWhK0teDwAkxJFUHGRZKCRtYzhIOjl6SB1hdX8mPmUVZDtsfnJdInxya2wVMDlhL3IKMHojOmlONjps/w644](https://obs.line-scdn.net/0htdcvOoWhK0teDwAkxJFUHGRZKCRtYzhIOjl6SB1hdX8mPmUVZDtsfnJdInxya2wVMDlhL3IKMHojOmlONjps/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：SATA 6Gb/s■ 最大容量：480GB■ 讀取速度：540MB/s■ 寫入速度：500MB/s■ 保固：3年廠商資訊■捷元（代理） ■02-2795-6677 ■www.genuine.com.tw市場價格新台幣 約2,299元（480GB）
> 

2.5吋的 SATA SSD 雖理論速度比不上 PCIe，但在多數情況之下，速度體驗的差距，並沒有想像中那麼大，而且價格也相對便宜，消費門檻進一步降低，其市場在一時之間還不至於萎縮，像是美光在今年出推出主力的 MX500之後，近期再推出入門等級的 BX500，採塑膠外殼降低成本，搭載 SMI 主控及自家3D TLC 記憶體顆粒，共推出120GB、240GB及480GB等3種規格，寫入耐受度達40TB～120TB，除了讀寫速度表現不錯外，還支援多重資料完整性演算技術，可防止資料遺失，並透過動態寫入加速來提高寫入速度，並支援過熱保護，還隨附工具軟體協助使用者備份資料及監控 SSD 健康狀態。

## **HyperX Fury RGB：機殼裡最閃亮的一顆星**

[https://obs.line-scdn.net/0hHLnfEFEjF2NTHzwMybpoNGlJFAxgcwRgNylGYBBxSVcrLlk9aS5bVn8WTgAre1A9PXFRBHEeDFIuKlVmOy1b/w644](https://obs.line-scdn.net/0hHLnfEFEjF2NTHzwMybpoNGlJFAxgcwRgNylGYBBxSVcrLlk9aS5bVn8WTgAre1A9PXFRBHEeDFIuKlVmOy1b/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：SATA 6Gb/s■ 最大容量：960GB■ 讀取速度：550MB/s■ 寫入速度：480MB/s■ 保固：3年廠商資訊■金士頓科技 ■0800-666-200 ■www.hyperxgaming.com市場價格新台幣 約9499元（960GB）
> 

由於 SSD 的高速效能，早期不少產品皆以遊戲體驗訴求做為出發點，國內的金士頓科技更是早早就佔好位置，發展 HyperX 電競品牌，當時許多 SSD 都頗獲好評，而這款 Fury RGB 更是 HyperX 暌違已久的新血，除了採用 Marvell 88SS1074控制器，最大的特色就是加入了時下流行的 RGB 燈光，而且並非是寥寥數顆做點綴而已，Fury RGB SSD 足足安裝了75顆 LED 晶粒，並透過頂部外蓋設計來凸顯燈光效果，厚度及重量也因此提昇不少，此外還可透過菊鍊與其他 RGB 裝置進行燈光同步。共推出3種容量規格，耐寫量由低至高分別為 120TB、240TB、480TB，MTBF 均達到100萬小時。

## **Seagate BarraCuda SSD：消費級SSD再現，容量上探2TB**

[https://obs.line-scdn.net/0hLPP2rvehE39tSzgQ-BlsKFcdEBBeJwB8CX1CfC4lTUsVel0hWCxYSkFDTx9FeFQhBC1aHUlICE4QflF6BXpY/w644](https://obs.line-scdn.net/0hLPP2rvehE39tSzgQ-BlsKFcdEBBeJwB8CX1CfC4lTUsVel0hWCxYSkFDTx9FeFQhBC1aHUlICE4QflF6BXpY/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：SATA 6Gb/s■ 最大容量：2TB■ 讀取速度：560MB/s■ 寫入速度：540MB/s■ 保固：5年廠商資訊■台灣希捷科技 ■02-2514-2287 ■www.seagate.com/tw/zh/市場價格尚未開賣
> 

雖身為傳統硬碟大廠，其實 Seagate 在幾年前也推出過消費級600與600 Pro SSD，但主力一直都放在企業市場，直到今年才又推出新一代消費級，並冠上 BarraCuda 的名稱，從名稱上不難想像是結合了 Seagate 這兩年主打的守護者形象。BarraCuda 代表的就是效能、可靠性，是裝機的好選擇，雖然採用 SATA 6Gb/s 介面而非最新的 M.2 NVMe 規格，但容量最大達2TB，MTBF 亦達180 萬小時，以2TB版本來說，耐用性更達到1,067TBW，加上讀寫速度都在500MB/s 以上，即使是在 SATA SSD 產品當中，傳輸效能也是非常突出的，尤其國外價格更在萬元以下，是尋求高速、大容量款式 SSD 的好選擇。

## **Plextor M9Pe(Y)：獨家韌體技術，強化傳輸穩定性**

[https://obs.line-scdn.net/0hiHTBcjhwNmdpOx0I_D5JMFNtNQhaVyVkDQ1nZCpVaFMRCng5XFl6UkVra1dFCHE5B1VxB0QzLVYUDnRiAlh6/w644](https://obs.line-scdn.net/0hiHTBcjhwNmdpOx0I_D5JMFNtNQhaVyVkDQ1nZCpVaFMRCng5XFl6UkVra1dFCHE5B1VxB0QzLVYUDnRiAlh6/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：PCIe NVMe■ 最大容量：1TB■ 讀取速度：3,200MB/s■ 寫入速度：2,100MB/s■ 保固：5年廠商資訊■Plextor ■03-612-5203 ■www.plextor.com市場價格新台幣 約10,799元（1TB）
> 

Plextor 在年初推出的 M9Pe 系列SSD，包含 PCIe 及M.2兩種介面，其中 M.2又分為有散熱片的 M9Pe(G)及無散熱片的 M9Pe(GN)等兩種版本，無論是桌機、迷你電腦或是筆電的用戶，都能兼顧到安裝上的需求，而其中 PCIe 版本的 M9Pe(Y)，也是 Plextor 首度加入 RGB LED 的產品，所強調的自然也是電競的風格，此外記憶體顆粒採用 Toshiba 64層3D NAND Flash，控制器支援 PCIe 3.0 x4 NVMe 規格，最大循序讀取及寫入速度分別達到3,200MB/s 與2,100MB/s，加上整合了自家 TrueSpeed、Robust Data Hold-out Algorithm 先進資料延伸演算法等技術，確保 SSD 在長時間使用後依然能保持平穩的高性能。

## **Samsung 970 EVO：最高速的大容量NVMe SSD**

[https://obs.line-scdn.net/0hAcvZRT6NHkxLIzUj3llhG3F1HSN4Tw1PLxVPTwhNQHgzElASfkYEeWcgRnRhFVkSIkVYKW0lBX02FlxJIEUE/w644](https://obs.line-scdn.net/0hAcvZRT6NHkxLIzUj3llhG3F1HSN4Tw1PLxVPTwhNQHgzElASfkYEeWcgRnRhFVkSIkVYKW0lBX02FlxJIEUE/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：M.2 NVMe■ 容量：2TB■ 讀取速度：3,500MB/s■ 寫入速度：2,500MB/s■ 保固：5年廠商資訊■台灣三星電子 ■800-296-968 ■www.samsung.com/tw/市場價格新台幣 約20,999元（2TB）
> 

今年三星首度將旗下品牌記憶儲存相關產品引進台灣市場，讓國內使用者得以享用公司貨的保固政策，而三星身為全球最大記憶體製造商，其 SSD 從晶片到控制器，均擁有一套完備的解決方案，這款970 EVO SSD，即採用三星最新的 V-NAND 技術，使用與新增強的 Phoenix 控制器，採  PCIe Gen 3.0x4、NVMe 1.3介面，最大容量亦達到2TB，是專為從事影音製作、編輯或模擬等高工作量的技術用戶、遊戲玩家與專業人士所設計，搭配智能 TurboWrite 技術，2TB 版本最高讀取速度達到3,500MB/s，寫入亦達2500MB/s，傳輸效率比前一代還高出32％之多，2TB 版本的耐用性亦達1,200 TBW。

## **WD Black NVMe SSD：架構大幅更新，寫入效能卓越**

[https://obs.line-scdn.net/0hGLKRxdWaGGN2KzMM4w9nNEx9GwxFRwtgEh1JYDVFRlcOGlY9Q0tVVlorRFYMGV89GB1QDVEpA1ILHlpmHUpV/w644](https://obs.line-scdn.net/0hGLKRxdWaGGN2KzMM4w9nNEx9GwxFRwtgEh1JYDVFRlcOGlY9Q0tVVlorRFYMGV89GB1QDVEpA1ILHlpmHUpV/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：M.2 NVMe■ 最大容量：1TB■ 讀取速度：3,400MB/s■ 寫入速度：2,800MB/s■ 保固：5年廠商資訊■威騰電子 ■00801-147-186 ■www.wdc.com/zh-tw/市場價格新台幣 約9,550元（1TB）
> 

WD 今年所出的這款M.2黑標 SSD 是第二代產品，但由於外觀十分相像，採購時需特別留意 NVMe 字樣，由於第一代的效能未達預期，WD 對於新款黑標 SSD 可是下足了苦心，採用全新的垂直整合式 SSD 平台，主控晶片亦由M家改為自家設計的控制晶片，並移置於 PCB 板正中央，兼收傳輸與散熱之利，加上升級後的 nCache 3.0演算法，更進一步提高了傳輸速率，讀取速度最高來到了3,400MB/s，使其效能在市場上足以名列前茅。值得一提的是，WD Black NVMe SSD 在耐用度方面也大為提昇，1TB產品的耐用度達600TBW，500GB及250GB分別為300TBW 和200TBW，此外並提供5年的有限保固。

## **Toshiba XG6：導入96層3D NAND堆疊技術**

[https://obs.line-scdn.net/0hsgOSsZsvLEhyKgcn5zZTH0h8LydBRj9LFhx9SzFEcnwKG2IWR0kwfV4rdXpXSmsWHERrKVEiN3kPH25NGU4w/w644](https://obs.line-scdn.net/0hsgOSsZsvLEhyKgcn5zZTH0h8LydBRj9LFhx9SzFEcnwKG2IWR0kwfV4rdXpXSmsWHERrKVEiN3kPH25NGU4w/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：M.2 NVMe■ 最大容量：1TB■ 讀取速度：3,180MB/s■ 寫入速度：2,960MB/s■ 保固：5年 廠商資訊■台灣東芝記憶體 ■02-2508-9909 ■business.toshiba-memory.com市場價格請洽廠商
> 

為了提高快閃記憶體容量，廠商開發出利用堆疊的方式來增加儲存密度，這就是3D NAND Flash，隨著技術發展，所堆疊的單元層數也越來越高，目前市場多以32層與64層為主，不過90層以上將是接下來的競爭重點，作為全球第二大 NAND 晶片的生產商東芝記憶體，當然責無旁貸，在近期發表搭載96層3D TLC 快閃記憶體的XG6 SSD，成為市場領頭羊之一。XG6採用PCIe 3.0 x4 通道與 NVMe 1.3a標準，除了循序讀取可達到3,000MB/s 以上，循序寫入速度亦能突破3,000MB/s，加上 MTTF 達150萬小時，表現非常亮眼，截稿前雖然台灣上市日期未定，但相信很快就能市面上買到了。

## **XPG SX6000 Pro：搭載Realtek主控的電競SSD**

[https://obs.line-scdn.net/0h93TJt6ZGZhxpM01z_MUZS1NlZXNaX3UfDQU3HypdOCgRAihCXAUpKUVjOClGBSFCBwUvckk0fS0UBiQZAl0p/w644](https://obs.line-scdn.net/0h93TJt6ZGZhxpM01z_MUZS1NlZXNaX3UfDQU3HypdOCgRAihCXAUpKUVjOClGBSFCBwUvckk0fS0UBiQZAl0p/w644)

電腦升級SSD必備知識－ 搞懂規格再出手，提昇效能不必愁

> 
> 

> 規格■ 介面：M.2 NVMe■ 最大容量：1TB■ 讀取速度：2,100MB/s■ 寫入速度：1,500MB/s■ 保固：5年 廠商資訊■威剛科技 ■0800-309-309 ■http://www.xpg.com/tw/市場價格請洽廠商
> 

由威剛所發展出的 XPG 電競品牌，旗下產品當然還是以儲存類為主，已經陸續推出不少電競專用的 SSD 及記憶體系列，近期推出的 SX6000 Pro，可算是之前 SX6000系列 SSD 的升級版，支援的 NVMe 版本從1.2升級1.3，比較特別的是使用了Realtek最新的 RTS5763DL 主控晶片，搭配64層3D TLC NAND Flash，支援 HMB（Host Memory Buffer）與 SLC Caching 技術，並透過 LDPC 錯誤校正機制，確保資料傳輸的準確度，此外即使是大容量的款式，亦採用單面的設計，厚度更薄，適於輕薄筆電，減少安裝相容度問題，MTBF 更達到了200萬小時。截稿時 SX6000 Pro 雖尚未開賣，但預估也是走相對平價的路線。

# **SSD必備知識**