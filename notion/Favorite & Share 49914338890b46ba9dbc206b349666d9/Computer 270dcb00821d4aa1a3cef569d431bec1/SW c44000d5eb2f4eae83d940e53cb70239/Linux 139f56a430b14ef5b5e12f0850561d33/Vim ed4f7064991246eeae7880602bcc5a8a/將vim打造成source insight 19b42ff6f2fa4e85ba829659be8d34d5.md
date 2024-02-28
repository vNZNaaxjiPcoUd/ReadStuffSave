# 將vim打造成source insight

### 將vim打造成source insight發表於 July 12, 2016 12:48 AM (GMT+8)

vim是套在Linux上非常好用的編輯軟體，但在trace code的能力上卻比不上Windows上的source insight，但我們可以另外安裝套件，讓vim接近於source insight的使用方式

以下使用了ctags + cscope + taglist + nerdtree + srcexpl + trinity來達成此目標

## **ctags**

ctags可以在函式、變數之間自由進行切換，例如某主函式call了funca()，ctags可以直接跳到funca的函式裡面、也可使用在變數上

- **安裝**

第一步先安裝ctags

```
sudo apt-get install ctags
or
sudo apt-get install exuberant-ctags

```

- **使用**

進入程式目錄當中，若是多層的目錄則進到最上層的目錄，接著輸入

```
ctags -R

```

接著必須讓vim知道tags需要到哪裡找到，先用vim打開vimrc，之後把下面第二段的資訊加進去

```
vim ~/.vimrc
set tags=./tags,./TAGS,tags;~,TAGS;~

```

用vim進到.c .h檔之後移到函式或變數上即可使用快捷鍵找到該函式或變數的定義，也可跳回到使用此函式的地方

```
"跳至該函式或變數定義
Ctrl + ]
"跳回使用此函式或變數處
Ctrl + t

```

## **cscope**

cscope可以查詢函式或變數在哪些地方被使用過，或是函式當中使用了哪些函式

- **安裝**

第一步先安裝cscope

```
sudo apt-get install cscope

```

- **使用**

進入程式目錄當中，若是多層的目錄則進到最上層的目錄，接著輸入

```
cscope -Rbqk

```

參數說明如下

1. R : 將目錄及子目錄底下的所有文件都建立索引
2. b : 僅建立關聯數據庫，不導入使用者介面
3. q : 建立cscope.in.out和cscope.po.out，可增快搜尋速度
4. k : 不搜尋預設會include進來的函式(/usr/include)

進入vim的一般指令模式之後必須將cscope.out加入

```
:cs add cscope.out

```

為了避免每次使用都必須重複輸入，因此可將此段加入vimrc裡，讓vim自動執行，另外cscope的官方網站也提供了建議的vimrc設定[http://cscope.sourceforge.net/cscope_maps.vim](http://cscope.sourceforge.net/cscope_maps.vim)

我挑了部分較常使用的加入vimrc`vim ~/.vimrc`，將以下設定加入vimrc，另外建議自行將註解加入

```
set cscopetag
set csto=0

if filereadable("cscope.out")
   cs add cscope.out
elseif $CSCOPE_DB != ""
    cs add $CSCOPE_DB
endif
set cscopeverbose

nmap zs :cs find s <C-R>=expand("<cword>")<CR><CR>
nmap zg :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap zc :cs find c <C-R>=expand("<cword>")<CR><CR>
nmap zt :cs find t <C-R>=expand("<cword>")<CR><CR>
nmap ze :cs find e <C-R>=expand("<cword>")<CR><CR>
nmap zf :cs find f <C-R>=expand("<cfile>")<CR><CR>
nmap zi :cs find i ^<C-R>=expand("<cfile>")<CR>$<CR>
nmap zd :cs find d <C-R>=expand("<cword>")<CR><CR>

```

其中最後的nmap部分為快捷鍵，其中的第一行指的是可使用zs取代在vim裡輸入`:cs find s {name}`的指令，後面依此類拖官網給的設定檔快捷鍵為Ctrl+/+s的組合，不過我是用VIM7.4，對於三個以上的組合鍵似乎有使用上的問題，這部分還沒找到解決方式，因此就先用兩個的組合鍵

最後附上各指令的用途

1. :cs find s {name} : 找出C語言name的符號
2. :cs find g {name} : 找出name定義的地方
3. :cs find c {name} : 找出使用name的地方
4. :cs find t {name} : 找出name的字串
5. :cs find e {name} : 相當於egrep功能，但速度更佳
6. :cs find f {name} : 尋找檔案
7. :cs find i {name} : 尋找include此檔案的檔案
8. :cs find d {name} : 尋找name裡面使用到的函式

## **taglist**

taglist可在切出一區塊，顯示此檔案裡的macro，global variable，函式等資訊，且會隨著瀏覽到哪個地方便以不同顏色標示

- **安裝**

下載plugin file，下載地址如下，請自行選擇最新版本下載

[http://sourceforge.net/projects/vim-taglist/files/vim-taglist](http://sourceforge.net/projects/vim-taglist/files/vim-taglist)

將plugin/taglist.vim複製到~/.vim/plugin/，doc/taglist.txt複製到~/.vim/doc

- **使用**

可在~/.vimrc裡配置相關設定，其他配置選項請參考官網說明

```
nmap <F8> :TlistToggle<CR><CR>
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
set ut=100

```

1. nmap : 將F8設為開啟taglist的快捷鍵
2. Tlist_Show_One_File : 只顯示當下瀏覽檔案的func，不顯示之前瀏覽的檔案
3. Tlist_Exit_OnlyWindow : 如果taglist區塊是最後一個，則退出vim
4. ut=100 : taglist會標示目前在操作哪個function or variable，但更新速度很慢，這裡把更新速度設成100ms

## **nerdtree**

NERD tree可切出一區塊，顯示根目錄開始的檔案結構，且可由list直接跳到選取的檔案

- **安裝**

下載plugin file，下載地址如下，請自行選擇最新版本下載

[http://www.vim.org/scripts/script.php?script_id=1658](http://www.vim.org/scripts/script.php?script_id=1658)

將plugin/NERD_tree.vim複製到~/.vim/plugin/，doc/NERD_tree.txt複製到~/.vim/doc剩下的資料夾autoload, lib, nerdtree_plugin, syntax全部複製到~/.vim底下

- **使用**

可在~/.vimrc裡配置相關設定，其他配置選項請參考官網說明

```
nmap <F9> :NERDTreeFind<CR><CR>
let NERDTreeWinPos=1

```

1. nmap : 將F9設為開啟nerdtree的快捷鍵
2. NERDTreeWinPos : 將nerdtree區塊放在右邊

## **SrcExpl(Source Explorer)**

SrcExpl可以將當下function的定義顯示出來，或是將當下的變數宣告處顯示出來

- **安裝**

使用git下載plugin檔

```
git clonehttps://github.com/wesleyche/SrcExpl
```

將plugin/srcexpl.vim複製到~/.vim/plugin/，doc/srcexpl.txt複製到~/.vim/doc

- **使用**

官方網站有詳細介紹在.vimrc可用的設定，這裡只列出我有用到的設定

```
nmap <F10> :SrcExplToggle<CR>
let g:SrcExpl_pluginList = [
    \"__Tag_List__",
    \"_NERD_tree_"
    \
]

```

1. nmap : 將F10設為開啟srcexpl的快捷鍵
2. 若有安裝taglist or nerdtree則需輸入

## **trinity**

trinity用來整合taglist, nerdtree, srcexpl，使可以一鍵開啟三個plgin的功能

- **安裝**

使用git下載plugin檔

```
git clonehttps://github.com/wesleyche/Trinity
```

將plugin/trinity.vim複製到~/.vim/plugin/

- **使用**

接著設定vimrc

```
nmap <F7> :TrinityToggleAll

```

1. nmap : 將F7設為一次打開taglist, nerdtree, srcexpl的快捷鍵

一次打開之後，畫面如下

![https://ivan7645.github.io/images/trinity.png](https://ivan7645.github.io/images/trinity.png)

### 將vim打造成source insight發表於 July 12, 2016 12:48 AM (GMT+8) | [1 Comment](https://ivan7645.github.io/2016/07/12/vim_to_si/#comments)

vim是套在Linux上非常好用的編輯軟體，但在trace code的能力上卻比不上Windows上的source insight，但我們可以另外安裝套件，讓vim接近於source insight的使用方式

以下使用了ctags + cscope + taglist + nerdtree + srcexpl + trinity來達成此目標

## **ctags**

ctags可以在函式、變數之間自由進行切換，例如某主函式call了funca()，ctags可以直接跳到funca的函式裡面、也可使用在變數上

- **安裝**

第一步先安裝ctags

```
sudo apt-get install ctags
or
sudo apt-get install exuberant-ctags

```

- **使用**

進入程式目錄當中，若是多層的目錄則進到最上層的目錄，接著輸入

```
ctags -R

```

接著必須讓vim知道tags需要到哪裡找到，先用vim打開vimrc，之後把下面第二段的資訊加進去

```
vim ~/.vimrc
set tags=./tags,./TAGS,tags;~,TAGS;~

```

用vim進到.c .h檔之後移到函式或變數上即可使用快捷鍵找到該函式或變數的定義，也可跳回到使用此函式的地方

```
"跳至該函式或變數定義
Ctrl + ]
"跳回使用此函式或變數處
Ctrl + t

```

## **cscope**

cscope可以查詢函式或變數在哪些地方被使用過，或是函式當中使用了哪些函式

- **安裝**

第一步先安裝cscope

```
sudo apt-get install cscope

```

- **使用**

進入程式目錄當中，若是多層的目錄則進到最上層的目錄，接著輸入

```
cscope -Rbqk

```

參數說明如下

1. R : 將目錄及子目錄底下的所有文件都建立索引
2. b : 僅建立關聯數據庫，不導入使用者介面
3. q : 建立cscope.in.out和cscope.po.out，可增快搜尋速度
4. k : 不搜尋預設會include進來的函式(/usr/include)

進入vim的一般指令模式之後必須將cscope.out加入

```
:cs add cscope.out

```

為了避免每次使用都必須重複輸入，因此可將此段加入vimrc裡，讓vim自動執行，另外cscope的官方網站也提供了建議的vimrc設定[http://cscope.sourceforge.net/cscope_maps.vim](http://cscope.sourceforge.net/cscope_maps.vim)

我挑了部分較常使用的加入vimrc`vim ~/.vimrc`，將以下設定加入vimrc，另外建議自行將註解加入

```
set cscopetag
set csto=0

if filereadable("cscope.out")
   cs add cscope.out
elseif $CSCOPE_DB != ""
    cs add $CSCOPE_DB
endif
set cscopeverbose

nmap zs :cs find s <C-R>=expand("<cword>")<CR><CR>
nmap zg :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap zc :cs find c <C-R>=expand("<cword>")<CR><CR>
nmap zt :cs find t <C-R>=expand("<cword>")<CR><CR>
nmap ze :cs find e <C-R>=expand("<cword>")<CR><CR>
nmap zf :cs find f <C-R>=expand("<cfile>")<CR><CR>
nmap zi :cs find i ^<C-R>=expand("<cfile>")<CR>$<CR>
nmap zd :cs find d <C-R>=expand("<cword>")<CR><CR>

```

其中最後的nmap部分為快捷鍵，其中的第一行指的是可使用zs取代在vim裡輸入`:cs find s {name}`的指令，後面依此類拖官網給的設定檔快捷鍵為Ctrl+/+s的組合，不過我是用VIM7.4，對於三個以上的組合鍵似乎有使用上的問題，這部分還沒找到解決方式，因此就先用兩個的組合鍵

最後附上各指令的用途

1. :cs find s {name} : 找出C語言name的符號
2. :cs find g {name} : 找出name定義的地方
3. :cs find c {name} : 找出使用name的地方
4. :cs find t {name} : 找出name的字串
5. :cs find e {name} : 相當於egrep功能，但速度更佳
6. :cs find f {name} : 尋找檔案
7. :cs find i {name} : 尋找include此檔案的檔案
8. :cs find d {name} : 尋找name裡面使用到的函式

## **taglist**

taglist可在切出一區塊，顯示此檔案裡的macro，global variable，函式等資訊，且會隨著瀏覽到哪個地方便以不同顏色標示

- **安裝**

下載plugin file，下載地址如下，請自行選擇最新版本下載

[http://sourceforge.net/projects/vim-taglist/files/vim-taglist](http://sourceforge.net/projects/vim-taglist/files/vim-taglist)

將plugin/taglist.vim複製到~/.vim/plugin/，doc/taglist.txt複製到~/.vim/doc

- **使用**

可在~/.vimrc裡配置相關設定，其他配置選項請參考官網說明

```
nmap <F8> :TlistToggle<CR><CR>
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
set ut=100

```

1. nmap : 將F8設為開啟taglist的快捷鍵
2. Tlist_Show_One_File : 只顯示當下瀏覽檔案的func，不顯示之前瀏覽的檔案
3. Tlist_Exit_OnlyWindow : 如果taglist區塊是最後一個，則退出vim
4. ut=100 : taglist會標示目前在操作哪個function or variable，但更新速度很慢，這裡把更新速度設成100ms

## **nerdtree**

NERD tree可切出一區塊，顯示根目錄開始的檔案結構，且可由list直接跳到選取的檔案

- **安裝**

下載plugin file，下載地址如下，請自行選擇最新版本下載

[http://www.vim.org/scripts/script.php?script_id=1658](http://www.vim.org/scripts/script.php?script_id=1658)

將plugin/NERD_tree.vim複製到~/.vim/plugin/，doc/NERD_tree.txt複製到~/.vim/doc剩下的資料夾autoload, lib, nerdtree_plugin, syntax全部複製到~/.vim底下

- **使用**

可在~/.vimrc裡配置相關設定，其他配置選項請參考官網說明

```
nmap <F9> :NERDTreeFind<CR><CR>
let NERDTreeWinPos=1

```

1. nmap : 將F9設為開啟nerdtree的快捷鍵
2. NERDTreeWinPos : 將nerdtree區塊放在右邊

## **SrcExpl(Source Explorer)**

SrcExpl可以將當下function的定義顯示出來，或是將當下的變數宣告處顯示出來

- **安裝**

使用git下載plugin檔

```
git clonehttps://github.com/wesleyche/SrcExpl
```

將plugin/srcexpl.vim複製到~/.vim/plugin/，doc/srcexpl.txt複製到~/.vim/doc

- **使用**

官方網站有詳細介紹在.vimrc可用的設定，這裡只列出我有用到的設定

```
nmap <F10> :SrcExplToggle<CR>
let g:SrcExpl_pluginList = [
    \"__Tag_List__",
    \"_NERD_tree_"
    \
]

```

1. nmap : 將F10設為開啟srcexpl的快捷鍵
2. 若有安裝taglist or nerdtree則需輸入

## **trinity**

trinity用來整合taglist, nerdtree, srcexpl，使可以一鍵開啟三個plgin的功能

- **安裝**

使用git下載plugin檔

```
git clonehttps://github.com/wesleyche/Trinity
```

將plugin/trinity.vim複製到~/.vim/plugin/

- **使用**

接著設定vimrc

```
nmap <F7> :TrinityToggleAll

```

1. nmap : 將F7設為一次打開taglist, nerdtree, srcexpl的快捷鍵

一次打開之後，畫面如下

![https://ivan7645.github.io/images/trinity.png](https://ivan7645.github.io/images/trinity.png)