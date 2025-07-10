# 程式碼編輯

## 應用程式

* [vscode](https://code.visualstudio.com/)

#### 線上版

* [CODEPEN](https://codepen.io/) →一個網站前端設計開發平台，針對網站前端代碼的一個工具，上面有各種效果的案例特效（炫技），可以在他們的demo 基礎上開發自己的前端設計。
* [JSBIN ](https://jsbin.com/?html,css,js,output)→輕量級在線編輯器網站
* [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html) →是一款專門使用在網頁上屬於開放原始碼的所見即所得文字編輯器
  * [教學文章：從安裝到使用心得](https://www.wfublog.com/2017/11/web-wysiwyg-text-editor-ckeditor.html)
  * [文章編輯器教學](https://www.cyberbiz.io/support/?p=21070)

## VSCode 擴充工具

### 系統輔助

* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - 針對指定的檔案與目錄產生簡易型 Web 伺服器並占用 port:5500，**存檔後即時更新網頁**，但不支援 PHP。
* 列印輸出程式碼
  * [Polacode 把程式碼轉存為圖片(可透明背景)](https://medium.com/itsems-frontend/vs-code-tool-polacdoe-code-to-image-3cf0a42f40d)
* [Chinese Lorem](https://marketplace.visualstudio.com/items?itemName=KevinYang.ctlorem) - vscode 預設的快速假文為輸入 lorem，這個是中文版的只要輸入 ctlorem 即可且用法相同。
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - 可以診斷程式語言，如果出現錯誤就會在程式碼右邊顯示相關錯誤提示。
* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - 可以幫助開發者在編寫代碼時，快速查看導入的模塊的大小和體積。

### HTML相關

* [Fake Image Snippet Collection](https://marketplace.visualstudio.com/items?itemName=yoyoys.fake-img-snippet-collection) - 可以快速提供線上範例圖片可指定長寬，適用 img/css/md 用途，輸入 `picsum`  亂數圖片 or `fakeimg` 假圖。
* [Encode Decode](https://marketplace.visualstudio.com/items?itemName=mitchdenny.ecdc) - 編譯轉換，支援的語法非常多，比較常用的就是將網頁特別符號轉換成 HTML Encode。啟用方式為呼叫命令欄位 F1 輸入 >Convert Selection 進行工作。
* [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) - 提供 HTML 的問題檢查，出現在問題視窗內，適合新手作為輔助調整。
* **圖片上傳**
  * [PicGo](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo) - 可快速將圖片上傳到指定免圖空間（需設定）並轉換成 MD 圖片語法，透過快速鍵 ctrl+alt+u/e/o進行觸發。
  * [vscode-imgur](https://marketplace.visualstudio.com/items?itemName=MaxfieldWalker.vscode-imgur) - 快速將剪貼簿的內容圖片上傳至 imgur（可指定到個人帳戶），較簡單就能使用透過 ctrl+alt+v 觸發。
* [Wrap with Abbreviation](https://docs.emmet.io/actions/wrap-with-abbreviation/)
  * [用縮寫換行（Wrap Individual Lines With Abbreviation）](https://www.iamtie.com/2020/12/WrapIndividualLinesWithAbbreviation.html)

#### CSS相關

* [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - 一款由Pranay Prakash開發的VS Code插件，它可以幫助開發者快速查看和編輯CSS樣式。
* [CSS Navigation](https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation)：按下 `F12`後，可以快速跳轉到css的地方
* [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - 使其支援 SASS 自動排版與自動化完成，以及擁有高亮度顯示效果。
* [SCSS Everywhere](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion) - 會自動搜索你 CSS 樣式表，當你輸入 class=””時，輸入時提示你可用存在的 Class 名。
* [Bootstrap 5 &amp; Font Awesome Snippets](https://marketplace.visualstudio.com/items?itemName=HansUXdev.bootstrap5-snippets) - BS 新手推薦，直接輸入關鍵字 `fa-`（或 `b5-`) 馬上給你 BS5 語法全世界，超好用。
* [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) - 提供 CSS 預處理器 stylus 的高亮與代碼提示工具。
* [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) - 提供 CSS 預處理器 Sass/Scss 的即時編譯結果之即時 Web Server，預設產生通訊埠為 4520。

#### JS相關

* [Code Runner ](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - 可以在VS Code中直接運行代碼，支持多種編程語言，包括Python、Java、C++、JavaScript等等。
* [vscode-fileheader](https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader) - 快速鍵 ctrl+ali+i 可產生於頁首/**/之作者註解，也能自訂化。
* [jQuery Code Snippets](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets) - JQ 新手推薦，直接輸入關鍵字 jq 馬上給你 jquery 語法全世界，超好用
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - JS 相關常用語法的簡碼工具，縮短編譯 JS 的生產時間。
* [StandardJS - JavaScript Standard Style (old version)](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard) - ESLint的vscode套件版本，提供語法檢查的功能，會檢查出專案中有可能會出錯、語法不正確的地方，也能夠按照個人或團隊的需要設定專屬的 coding style（編碼風格），避免每個人因為自身習慣，打出來的程式都長得不太一樣。[中文文件](https://github.com/standard/standard/blob/master/docs/README-zhtw.md)
* [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)（[配置prettier教學](https://blog.csdn.net/a1071626267/article/details/127537182?spm=1001.2101.3001.6650.10&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10-127537182-blog-126015272.235%5Ev29%5Epc_relevant_default_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10-127537182-blog-126015272.235%5Ev29%5Epc_relevant_default_base3)） - 會在儲存的時候自動格式化你的程式碼，並且會為 return 加上括號。然後在在 setting.json 中加入以下設定:
  ```json!
  "editor.formatOnSave": true,
  "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"}
  ```
* [vscode-random](https://marketplace.visualstudio.com/items?itemName=jrebocho.vscode-random)：能夠自動產生隨機數字和名稱。 對於建立虛擬資料（dummy data）非常有用。
  * 例如，希望隨機輸入國家名稱的情況，只要在指令面板選擇 `>Random: Country name`，即可自動隨機生成國家名稱，方便！
* [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)：能夠在 VSCode 發送 http request 的擴充功能，並且清楚顯示 request 結果。

#### 框架擴充

* React.js

  * [JS JSX Snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets) - 支援JS的JSX語法
  * [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - React的 Snippets，挑一個即可。 可以讓我們在進行React專案時，打幾個字，就能產生出一些固定的格式樣板，就不用再一個一個字慢慢打，非常方便！
    ![img](https://hackmd.io/_uploads/S1jc4zTN3.png)
  * [Typescript React Code Snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript) - 包含了使用Typescript 的React 代碼片段，語法同上
  * [React-Native/React/Redux snippets for es6/es7](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux) - React的 Snippets，挑一個即可。
  * [React/Redux/react-router Snippets](https://marketplace.visualstudio.com/items?itemName=discountry.react-redux-react-router-snippets) - React的 Snippets，挑一個即可。
  * [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) - React的 Snippets，挑一個即可。
* Next.js
  * [Next.Nav](https://www.next-nav.com/)，將nextjs專案結構的項目，在vscode裡面以圖形化方式顯現
 伺服器連線進行 Command 處理執行操作，但無法勝過 phpmyadmin。

#### GIT

* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 該插件增強了VS Code 中的Git，並從每個存儲庫中釋放隱藏數據。可以快速查看代碼的編寫者、輕鬆導航和探索Git 存儲庫、通過豐富的可視化效果和強大的比較命令獲取有效信息，以及執行更多操作，幫助我們更好地理解代碼。
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - 彌補 VS Code 的 GIT 圖形化工具，可以在VS Code中直觀地查看和管理Git倉庫的提交歷史和分支關係，對於分支的發展有很大的幫助。
* [ GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) - GitHub 的延伸工具。通過此擴展，您可以查看和管理 GitHub 拉取請求和問題。
* [git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)，該插件支持多種提交情況如： 🎉 init：項目初始化 ✨ feat:添加新特性 🐞 fix:修復BUG 🌈 style:修改樣式 🦄 refactor:代碼重構🎈 perf:優化相關 🧪 test:增加測試用例 🔧 build:依賴相關的內容 🐎 ci:ci配置相關 🐳 chore:改變構建流程↩ revert:回滾版本

#### 其他

> 可以讓VSCode 就能預覽所有格式的文件，輕鬆開關不佔用你的應用程式列。

* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - 加速撰寫 `Markdown`
* [Excel Viewer](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)
* [PDF Viewer](https://marketplace.visualstudio.com/items?itemName=analytic-signal.preview-pdf)
* [SVG Preview](https://marketplace.visualstudio.com/items?itemName=jock.svg)
* [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv):透過將 CSV 檔案內容上色，可以更清楚辨識每個元素屬於哪一列。

### 語法規範

+ ESLint [英文](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | [中文](https://marketplace.visualstudio.com/items?itemName=maggie.eslint-rules-zh-plugin)- 提供語法檢查的功能，會檢查出專案中有可能會出錯、語法不正確的地方，也能夠按照個人或團隊的需要設定專屬的 coding style（編碼風格），避免每個人因為自身習慣，打出來的程式都長得不太一樣。[教學](https://www.casper.tw/tool/2017/11/09/coding-style/)
