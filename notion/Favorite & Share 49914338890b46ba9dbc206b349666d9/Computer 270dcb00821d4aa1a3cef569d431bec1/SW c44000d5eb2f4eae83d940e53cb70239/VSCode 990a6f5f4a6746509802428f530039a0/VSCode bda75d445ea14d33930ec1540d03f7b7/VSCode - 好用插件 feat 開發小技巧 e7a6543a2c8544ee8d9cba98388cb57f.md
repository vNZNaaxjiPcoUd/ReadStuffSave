# VSCode - 好用插件 feat. 開發小技巧

VSCode 吸引人的原因除了本身內建的功能相當多，VSCode 能夠安裝的插件也是又多又好用又方便呀～使用插件可以更有品質或是更快速的進行開發，前一篇為大家介紹的是內建的功能，內建功能包含的範圍是比較基礎的，而在規模更大或是更完整的開發上會需要使用的功能就更多元，根據選擇的技術或是專案的要求都會有所不同，而要滿足這些需求，就必須要了解有哪些實用的插件可以更有效率且更快速的輔助開發，這邊就來介紹幾個好用的插件吧！

# **VSCode 好用插件**

### **ESLint - 提升程式碼品質 ( 之後會有一篇介紹 ESLint 的文章 )**

- [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### **prettier - 格式化工具**

- 快速格式化整個 Javascript 和 CSS 文檔
- [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- widows: ctrl + shift + F / mac: alt + shift + F 自動調整樣式

### **Live Sass Compiler**

- [https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- 點一下下方的 Watch Sass：

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449nLFKQOxjUa.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449nLFKQOxjUa.png)

就會開始幫你編譯，接著檔案中就會多了 style.css 跟 style.css.map 囉！

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449NLOIgSe7Yy.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449NLOIgSe7Yy.png)

在編譯的時候，如果有錯誤也會顯示提示，包含行數與錯誤的內容是什麼。

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449Mg8RKDc1ow.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449Mg8RKDc1ow.png)

有些人會希望產生的 css 檔案另外放在 css 的資料夾，這時候可以到 vscode 裡的工作區更改設定。Live Sass Compiler 更改設定的文件：[https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md)將語法貼入工作區設定就可以了

```
"liveSassCompile.settings.formats":[
// This is Default.
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/css"
    },
// You can add more
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/css"
    },
]

```

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449QEm9kj6N7u.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449QEm9kj6N7u.png)

如果專案中有些外部載入的 scss 不想被編譯，也可以透過這種方式設定，內容就指定到不編譯的資料夾即可。

```
"liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
]

```

### **Live server**

- [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 點一下下方的 Go Live，就會開啟 server

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449s0eweHVkCf.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449s0eweHVkCf.png)

開啟後會自動顯示網頁，在 VSCode 也可以看到是開啟哪一個 port，所以如果找不到或是不小心關掉它自動幫你開啟的網頁，只要在這個 Live server 沒有被關閉的情況之下，也可以直接在網址中輸入 localhost:5500/檔案名稱。

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449CE8OlcXA3t.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449CE8OlcXA3t.png)

開啟 Live server 的畫面

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449WEfGYzGeWE.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449WEfGYzGeWE.png)

### **GitLens**

- [https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- 如下圖，安裝 GitLens 後，左方會出現 GitLens 的 icon，點一下就會出現這個檔案的所有 Git 紀錄：
    - 查看目前的專案變更的檔案以及歷史紀錄
    - Branchs：查看專案中有哪些分支，以及每個分支的歷史紀錄
    - Remotes：查看遠端協同的內容
    - Stashes：查看工作區被儲藏的內容
    - Tags：查看所有標籤紀錄，所有分支上新增過的標籤都可以看到

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449DMxsAfMHHQ.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449DMxsAfMHHQ.png)

安裝 GitLens 就可以在 VSCode 中直接查看這個檔案的所有 Git 紀錄，點一下 Remote 的 Commit 紀錄，也會顯示每一次的修改記錄與檔案比較。

# **同場加映 > 前端開發小技巧 - Emmet 常用語法大全**

之所以特別介紹 Emmet 是因為使用 Emmet 可以加速開發，由系統自動產生標籤，一方面是可以減少手動輸入的時間，也可以避免輸入時的錯誤。先附上完整的文件：[https://docs.emmet.io/cheat-sheet/](https://docs.emmet.io/cheat-sheet/)公式：

1. `! > tab`
2. `標籤名稱.class名稱*數量>要包覆的標籤1+要包覆的標籤2`

例如：

```
div.test*2>p+img
```

然後按下 tab，很快速的就會生成一段所需的標籤：

![https://ithelp.ithome.com.tw/upload/images/20181018/20111449QiRhUoxpE1.png](https://ithelp.ithome.com.tw/upload/images/20181018/20111449QiRhUoxpE1.png)

只要記住每個屬性所要加上的符號為何，就可以超快速的進行開發且不怕手誤！

要使用 Emmet 要特別注意，一開始開啟檔案時要先將檔案儲存為 HTML 檔案，也要注意編輯器的語言模式是不是有正確的讀取為 HTML，才可以正確啟用 Emmet。

有時後我們會利用 javascript 來新增 HTML 樣板至 HTML 檔案中，但 VSCode 的預設在 javascript 檔案中是無法使用 Emmet，因此我們要更改設定，在 VSCode 的 setting.json 中加上這一段，就可以在 javascript 檔案中使用 Emmet。

```
"emmet.includeLanguages": {
  "javascript": "html"
}

```

VS Code 擁有很多的高質量插件，這讓它在編輯器界越來越受歡迎。使用這些插件可以讓專案開發變得質感更高速度也更快，除了上面介紹的插件以外，VSCode 還有非常多插件提供使用，大家還有推薦什麼插件呢？歡迎來分享！