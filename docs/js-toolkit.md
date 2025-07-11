# 各種 JS 開發工具整理

## 語法支援度查詢

* [Can I use](http://caniuse.com/)  前端
* [node.js ES2015 support](http://node.green/) 後端


## Chrome 擴充工具
如果希望能在開發上獲得更好的檢查工具，可透過在網頁上加裝擴充工具。
* [HTML5 Outliner ](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=zh-TW) - 檢視網站架構
* [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=zh-TW) - 查詢網站字體
* [JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) - 可針對 json 格式進行格式化，將資料以樹狀結構來呈現，讓開發者一目瞭然
* [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) - 同上
* [Full Page Screen Capture](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl) - 網頁截圖工具，可以進行完整的網頁頁面擷取
* [Wappalyzer 分析工具](https://www.wappalyzer.com/apps/) - 了解網站使用哪些技術與工具
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) - 是一款由 facebook 開發的 chrome 偵錯工具，透過這個工具可以看到 React 元件的結構，我們還可以直接編輯或是查看元件的 props / state ，讓整個開發流程更順利。

## Build Tools 構建工具
能自動對代碼執行檢驗、轉換、壓縮等功能的工具

### Module Bundler(模組打包與編譯工具)
* [vite](https://vitejs.dev/)
* [webpack](https://webpack.js.org/)
* [gulp](https://gulpjs.com/)
* [Parcel.js](https://parceljs.org/)

### Package Managers(套件管理)
* [NPM 官網](https://www.npmjs.com/) - 由 Node.js 官方提供的工具，所以當你安裝了 Node.js，你會發現你也可以執行 npm 相關的指令。
* [nvm](https://github.com/nvm-sh/nvm) -  Node Version Manager 的縮寫，主要功能就可以快速切換 Node.js 版本：
    1. 維護多個不同時期所開發專案
    2. 編譯老舊專案
* [yarn](https://yarnpkg.com/) - Facebook 所開發的前端工具，是 Node.js 的套件管理，算是 npm 的替代品，優點是速度較快。
* [pnpm](https://pnpm.io/zh-TW/) - 最新一代的套件管理工具，它標榜著效能比 npm 與 yarn 還要快上許多
    * 安裝指令 `npm install -g pnpm`


### 套件比較工具
- [npm trends](https://npmtrends.com/)
- [State of JavaScript](https://stateofjs.com/zh-Hant/)，每年從20,000 多名開發人員中獲取調查資料，以確定JavaScript 目前和未來的趨勢。


### 環境變數
+ [env-cmd](https://www.npmjs.com/package/env-cmd) - 將變量分組到環境文件( .env) 中並將它們傳遞到腳本。
+ [react-dotenv](https://www.npmjs.com/package/react-dotenv?activeTab=readme)

## 操作 DOM

+ [jquery](https://jquery.com/) - ([issue 筆記](https://github.com/keon981/white-tower/issues/2?issue=keon981%7Cwhite-tower%7C33))


## Linter (語法規範)
* [ESLint](https://eslint.org/) 提供語法檢查的功能，會檢查出專案中有可能會出錯、語法不正確的地方，也能夠按照個人或團隊的需要設定專屬的 coding style（編碼風格），避免每個人因為自身習慣，打出來的程式都長得不太一樣。[教學](https://www.casper.tw/tool/2017/11/09/coding-style/)
    * [vscode英文插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [vscode中文插件](https://marketplace.visualstudio.com/items?itemName=maggie.eslint-rules-zh-plugin)
* [Prettier](https://prettier.io/)
* Oxlint


## Frameworks

### Frontend
* [React](https://reactjs.org/)
* [Svelte](https://svelte.dev/)
* [Solid](https://www.solidjs.com/)
* [Qwik](https://qwik.builder.io/)
* [Riot](https://riot.js.org/)
* [Stencil](https://stenciljs.com/)

### Backend
* [Express](https://expressjs.com/)

### Fullstack
> #### React
  - [Next.js](https://nextjs.org/):  構建於 Node.js 之上的React框架，同時支援 SSR 與 SSG 兩種方法，不需要很多的設定就可以讓網站同時有這兩種功能。
  - Remix: 最新版本是 [React Router v7](https://reactrouter.com/start/framework/installation)的框架模式，它使 React Router 的使用和部署更加便利。
> #### Svelte
  - [Sapper](https://sapper.svelte.dev/)
  - [SvelteKit](https://kit.svelte.dev/)
> #### Solid
  - [SolidStart](https://start.solidjs.com/)
- **Qwik**
  - [QwikCity](https://qwik.builder.io/qwikcity/)

### Test

* [Vitest](https://cn.vitest.dev/): 單元測試框架之一，是一個用來執行 JavaScript 測試的框架（JavaScript Test Framework），又稱 test runner，它讓開發者能夠執行測試、撰寫斷言，提供的 API 像是 expect、describe、test、toBe、toEqual 等等。
* [Jest](https://jestjs.io/): 單元測試框架之一，是一個用來執行 JavaScript 測試的框架（JavaScript Test Framework），又稱 test runner，它讓開發者能夠執行測試、撰寫斷言，提供的 API 像是 expect、describe、test、toBe、toEqual 等等。
* [Cypress](https://www.cypress.io/): 端對端測試工具
* [WebdriverIO](https://cn.vitest.dev/guide/comparisons): 端對端測試工具 & 測試web component 

## Libraries

套件其實就是一個形容詞，形容非原生的、其他人開放的原始碼。它們更多的價值是提供便於調用的程式碼，但除了這些再沒有規範層面的影子，因此更傾向於把它們歸類到功能型的套件或函式庫。
套件不是一定需要的，每個人都有習慣的環境套件，找到符合自己的套件才是真正屬於自己的環境，可以想像成它是一個零件，可以一個一個慢慢地拼湊出完整的機器。
**對專案的幫助:**
- 能夠快速評估專案功能的可行性
- 可以更準確預估每個功能的完成時間
- 節省大量自己重頭寫功能的時間
- 你可以更專心地維護自己寫的程式邏輯
- 避免專案主程式肥大

### CSS


> #### CSS 框架 (CSS Frameworks)
這類框架提供了一整套預先設計好的 UI 元件（如按鈕、表單、卡片），讓開發者可以快速套用，專注於功能而非從零打造視覺。
* [Bootstrap](https://getbootstrap.com/)：最知名的前端框架之一，提供了豐富的元件和強大的網格系統，並透過 JavaScript 插件增強互動性。
* [Pure.css](https://purecss.io/): 由 Yahoo 出品的老牌 CSS 框架，以其極致輕量（壓縮後僅 3.5KB）和模組化著稱。架構簡單小巧，外型清新，非常適合學習 CSS 的架構與模組化方法。
* [UIKit](https://getuikit.com/)：一個輕量級、模組化的前端框架，用於開發快速而強大的 Web 介面。
* [NES.css](https://github.com/nostalgic-css/NES.css)：NES/FC 遊戲機風格（8-bit 像素風）的 CSS 框架，充滿復古趣味。
* [Paper CSS](https://www.getpapercss.com/)：模擬手繪紙張風格的元件庫，外觀獨特。


> #### 實用優先 CSS (Utility-First Frameworks)
與傳統框架不同，這類框架不提供預設的元件樣式，而是提供大量原子化的、功能單一的 CSS 類別，讓開發者直接在 HTML 中組合出任何想要的設計，擁有極高的客製化彈性。

* [Tailwind CSS](https://tailwindcss.com/)：最主流的工具類優先 CSS 框架，透過組合預定義類別來快速建立複雜佈局和自訂樣式，而無需撰寫傳統的 CSS。它擁有優秀的文檔和活躍的社群。
  * [Tailwind Gradient Background Generator](https://gradienty.codes/tailwind-gradient-background)：使用 Tailwind CSS 完成的漸層模板。
  * [awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss): Tailwind CSS 的資源集合，包含範例、教學、工具和插件等。
* [Windi CSS](https://windicss.org/)：另一個工具類優先 CSS 框架，其核心理念與 Tailwind 類似，但 boasts faster build times and on-demand purging.

> #### CSS 預處理器與後處理器 (Pre-processors & Post-processors)

這些工具擴展了原生 CSS 的能力，提供了變數、函式、巢狀規則等功能，讓 CSS 的編寫與維護更加高效和模組化。

* [Sass](https://sass-lang.com/): 最成熟和功能最強大的 CSS 預處理器。
* [Less](http://lesscss.org/): 語法類似 Sass，同樣廣受歡迎的預處理器。
* [PostCSS](https://postcss.org/): 一個用 JavaScript 轉換 CSS 樣式的工具。它本身功能不多，但透過豐富的插件生態（如 Autoprefixer），可以實現語法轉換、自動加前綴、壓縮等後處理任務。


> #### CSS-in-JS
將 CSS 樣式直接寫在 JavaScript 元件中的技術，實現了樣式的元件化、作用域隔離和動態化。
* [styled-components](https://styled-components.com/)：允許直接在 JavaScript 程式碼中編寫 CSS，從而輕鬆建立僅限於各個元件的動態樣式。
  * 註：2025 年 3 月 18 日，styled-components 核心維護者宣布其進入維護模式，標誌著前端樣式方案的一個轉折點。
* [Emotion](https://emotion.sh/docs/introduction)：一個高效能的 CSS-in-JS 函式庫，為 React 元件的樣式提供了強大的 API，並支援多種語法。

> #### CSS 重置與標準化 (Reset & Normalize)
用於消除或統一不同瀏覽器之間預設樣式差異的基礎樣式表。
- [Eric Meyer's Reset CSS](https://meyerweb.com/eric/tools/css/reset/)：最早且最知名的 CSS Reset 方法之一，目標是將所有 HTML 元素的預設樣式（邊距、內距等）全部歸零。
- [Normalize.css](http://necolas.github.io/normalize.css/)：與 Reset 的「全部歸零」不同，它旨在「保留有用的預設值」，並修正瀏覽器之間的樣式不一致和 Bug。
- [A Modern CSS Reset](https://andy-bell.co.uk/a-more-modern-css-reset/)：基於現代 CSS 特性（如 `:where`、`box-sizing`）的更新版 Reset，提供更符合當下開發習慣的重置方案。

### React UI Components

> #### 完整 UI 元件庫 (Component Libraries)
這些函式庫提供了一整套帶有完整樣式和功能的 React 元件，旨在快速開發具有一致性視覺風格的應用程式，特別是中後台系統。
+ [Material UI (MUI)](https://mui.com/)：基於 Google Material Design 指導原則的 React UI 框架，是當下最流行的選擇之一。
+ [Ant Design](https://ant.design/index-cn)：螞蟻集團推出的企業級 UI 設計語言和 React 元件庫，廣泛用於中後台產品。
    + [Ant Motion](https://motion.ant.design/)：Ant Design 的動態效果設計規範與元件庫。
+ [Base Web](https://baseweb.design/)：由 Uber 開發和維護的 React 元件庫，注重可訪問性和主題化。
+ [Semi Design](https://semi.design/zh-CN/)：由抖音前端與 UED 團隊維護的現代化設計系統，易於客製化。
+ [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)：將 Bootstrap 元件用 React 重構，使其更符合 React 的開發模式。

> #### Headless Components

這種函式庫只提供元件的「行為、邏輯和狀態管理」，完全不提供任何樣式。開發者可以完全掌控元件的視覺外觀，將這些無頭元件與任何 CSS 方案（如 Tailwind CSS 或 styled-components）結合，打造高度客製化的設計系統。

+ [Radix UI](https://www.radix-ui.com/)：一個輕量級、專注於可訪問性（a11y）、鍵盤互動和標準化的無頭元件庫。
+ [Headless UI](https://headlessui.com/) 是由現在非常熱門的 Tailwindcss 團隊來開發的，他們的目的就是希望 Tailwindcss 使用者能夠在使用元件庫的同時，還能夠繼續沿用相同的樣式寫法，與 Tailwind CSS 無縫協作。
+ [Chakra UI](https://github.com/chakra-ui/chakra-ui)：一個簡單、模組化且高度可訪問的 UI 元件庫。它提供了良好的預設樣式，同時也極易客製化，兼具了完整元件庫和 Headless UI 的優點。
  + 雖然官方並沒有明確表示 Chakra UI 是 Headless 元件庫，但 Chakra UI 提供的基礎樣式確實比較單調，但他也一樣能夠完全客製化調整元件的所有樣式，因此也可以視為 Headless 元件庫。
  + ==特別強調 accessibility （無障礙、網頁親和力 ... ）== ，也就是說這個元件庫是考慮到了各種不同使用網站的情境，對於一些公部門的案子對這部分有比較高要求的話，這會是一個好選擇。
+ [Horizon UI](https://horizon-ui.com/)：基於 **Chakra UI** 進行二次開發的元件庫，專為快速搭建美觀的後台管理儀表板（Admin Dashboard）而設計。
+ [TanStack Table](https://tanstack.com/table)：用於建立強大表格和資料網格的無頭 UI 工具。
+ [NextUI](https://nextui.org/)：一個建立在 **Tailwind CSS** 和 **React Aria** (一個 Headless UI 庫) 之上的 React UI 庫。它提供美觀的預設樣式，但底層是 Headless 的，因此客製化非常靈活。
+ [ChatUI](https://chatui.io/components/card)：專為對話式 UI 設計的 UI 語言和 React 函式庫。
+ [React Aria](https://react-spectrum.adobe.com/react-aria/)：由 Adobe 團隊打造的無頭 UI 函式庫，提供一系列 React Hooks 來處理複雜的元件行為、可訪問性與國際化，讓開發者可以專注於打造獨特的視覺風格。

> #### 可複製貼上的元件集 (Copy-paste Components)

與傳統的 npm 安裝方式不同，這類工具讓使用者直接將元件的原始碼複製到自己的專案中。這給予了開發者對元件程式碼 100% 的控制權，可以隨意修改和擴展。
+ [Shadcn/ui](https://ui.shadcn.com/)：一個基於 **Radix UI** 和 **Tailwind CSS** 構建的可重用元件集。它不是一個元件庫，而是一系列你可以直接複製貼到應用中的元件。

> #### Utility-first Components

這些是為了解決特定 UI 問題而設計的單一用途元件或工具。

* [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize)：一個輕量級的 React 元件，能讓 `<textarea>` 根據使用者輸入的內容自動調整高度。
* Shuffle.js：一個用於實現響應式、可分類、可排序和可篩選的網格佈局（如 Masonry 瀑布流）的 JavaScript 函式庫。

> #### 圖表函式庫 (Charting Libraries)

將資料轉換為圖形（如長條圖、折線圖、圓餅圖）的工具。
* [D3.js](https://d3js.org/)：資料驅動文件（Data-Driven Documents），是資料視覺化的基礎和標準，提供強大的底層 API 來操作 SVG，自由度極高。
* [Recharts](https://recharts.org/en-US/)：基於 React 和 D3 建立的圖表庫，提供了聲明式的 React 元件，是在 React 中快速建立圖表的熱門選擇。
* [Chart.js](https://www.chartjs.org/docs/latest/)：一個簡單而靈活的 JavaScript 圖表庫，適合需要快速實現標準圖表的專案。
* [Highcharts](https://www.highcharts.com/)：一個功能強大且成熟的商業圖表庫，以其豐富的圖表類型和良好的互動性聞名。
* [Victory](https://formidable.com/open-source/victory/docs/)：由 Formidable 團隊開發的 React 和 React Native 圖表元件集合，以其組合性和易於客製化著稱。
* [C3.js](https://c3js.org/)：一個基於 D3.js 的可重用圖表庫，封裝了 D3 的複雜性，讓開發者能用更簡單的配置生成圖表。

> #### 資料匯出 (Data Export)
用於生成和處理電子表格檔案的工具。
* [SheetJS](https://docs.sheetjs.com/)：用於讀取、編輯和匯出多種電子表格格式（如 XLSX, XLS, CSV）的強大函式庫。
* [ExcelJS](https://github.com/exceljs/exceljs)：一個可以讀取、操作和寫入 Excel XLSX 和 CSV 檔案的函式庫，支援豐富的樣式和功能。

---

### Data Store

Data flow / data management / data stores / components state / data flow

* [Redux](https://redux.js.org/): JavaScript 應用程式的可預測狀態容器。
    - [Redux Toolkit](https://redux-toolkit.js.org/)
    - [redux-Saga 中文文档](https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html)：用於管理 Redux 應用非同步操作的中間件（又稱異步 action）。 redux-saga 透過建立 Sagas 將所有的非同步操作邏輯收集在一個地方集中處理，可以用來取代 redux-thunk 中間件。
    - [DvaJS](https://dvajs.com/guide/) ： redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。
* [Zustand](https://github.com/pmndrs/zustand)：提供了一種輕量級、直觀的狀態管理方式，適合那些追求簡潔和高效的 React 開發者。它的主要特點是易於上手，無需繁瑣的設定和模板，使得狀態管理更加靈活和直觀。
* [Jotai](https://jotai.org/) 強調原子化的狀態管理，通過將狀態分解為更小、更獨立的單位（原子），實現了更細緻和模塊化的狀態控制。這種方法不僅提升了狀態管理的可維護性，也增強了組件間狀態的可重用性。
* [XState](https://xstate.js.org/) 以有限狀態機（Finite State Machines）和狀態圖（Statecharts）為基礎，提供了一種結構化的狀態管理方法。它適合於需要精細管理狀態轉換和行為的複雜應用，使狀態的變化更可預測和容易理解。


---

### Hooks

- :gem: [usehooks-ts](https://usehooks-ts.com/)：是一個 React hooks 函式庫，用 Typescript 寫，易於使用。它提供了一組鉤子，使您能夠更快地建立 React 應用程式。這些鉤子是建立在 DRY（不要重複自己）原則上的。對於您可能需要的最常見用例，有一些掛鉤。
- [ahooks](https://github.com/alibaba/hooks/tree/master) - React Hooks Library 之一
- [awesome-react-hooks ](https://github.com/rehooks/awesome-react-hooks)- 包含文件、教學以及各地搜集的 hook 資源
- [react-use](https://github.com/streamich/react-use?tab=readme-ov-file): `npm i react-use`，React Hooks 的集合. 移植 [libreact](https://github.com/streamich/libreact).

---

### 表單狀態管理

+ [React Hook Form](https://react-hook-form.com/)：一個高效能、靈活且易於使用的 React 表單狀態管理與驗證函式庫，基於 Hooks 實現。

### 資料驗證

+ [Zod](https://zod.dev/)：一個以 TypeScript 優先的結構（Schema）聲明和驗證函式庫，常與 React Hook Form 搭配使用，用來定義表單資料的格式與規則。
+ [validator](https://github.com/validatorjs/validator.js)：一個輕量級的字串驗證函式庫，提供多樣的驗證方法（如 isEmail, isURL 等），不依賴任何框架。

---

### 資料請求與狀態管理 (Data Fetching & State Management)

> #### 請求函式庫 (Request Libraries)

專注於簡化發送 HTTP 請求的底層客戶端。

* [axios](https://github.com/axios/axios)：一個基於 Promise 的 HTTP 客戶端，可用於瀏覽器和 Node.js，功能豐富且廣受歡迎。
* [ky](https://github.com/sindresorhus/ky)：一個基於 `fetch` API 的輕量級 HTTP 客戶端，以其更優雅簡潔的 API 設計著稱。

> #### 伺服器狀態管理 (Server State Management)
不僅是發送請求，更重要的是管理來自伺服器的狀態，包含快取、重新驗證、同步等複雜邏輯。
* [TanStack Query (原 React Query)](https://tanstack.com/query/latest)：一個強大的非同步狀態管理庫，能讓你輕鬆地獲取、快取、同步和更新伺服器狀態，大幅簡化資料獲取邏輯。
* [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)：Redux Toolkit 內建的資料獲取和快取解決方案。它將 API 定義、請求、快取、狀態更新整合進 Redux 生態，適合已經在使用 Redux 的專案。

---

### 動畫與動態效果 (Animation & Motion)

這些函式庫和工具專注於為網頁帶來豐富的視覺動態效果，從簡單的 CSS 過渡到複雜的 JavaScript 動畫。

> #### 動畫引擎與核心庫 (Core Animation Libraries)

提供了強大的底層 API，用於創建複雜、高效能且可精確控制的動畫。

* [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)：業界標準的專業級 JavaScript 動畫庫，以其高效能、高相容性和豐富的功能（如時間軸控制）著稱。
    * [ScrollTrigger](https://greensock.com/scrolltrigger/)：GSAP 的官方插件，用於創建強大的滾動觸發動畫。
* [Framer Motion](https://motion.dev/)：一個為 React 設計的聲明式動畫庫，能輕鬆地為元件添加動畫和手勢互動。
* [React Spring](https://www.react-spring.dev/)：一個基於物理學的 React 動畫庫，可以創建更自然、流暢的 UI 動畫效果。
* [Anime.js](https://animejs.com/)：一個輕量級且功能強大的 JavaScript 動畫庫，API 靈活易用。
* [React Transition Group](https://github.com/reactjs/react-transition-group)：React 官方維護的庫，用於管理元件進入和離開 DOM 時的過渡狀態，是實現元件裝卸動畫的基礎。

> #### CSS 動畫與效果庫 (CSS Animation & Effects)
提供預設的 CSS class 或工具，用於快速實現動畫效果，無需或只需少量 JavaScript。
* [Animate.css](https://animate.style/)：一個即用型的跨瀏覽器 CSS 動畫庫，提供了大量預設動畫效果。
* [Hover.css](http://ianlunn.github.io/Hover/)：專注於提供多種 CSS 驅動的滑鼠懸停效果。
* [CSShake](https://elrumordelaluz.github.io/csshake/)：一個專門提供各種「晃動」效果的 CSS 庫。
* [Whirl](https://whirl.netlify.app/)：一個包含許多獨特 CSS 動畫的集合。
* [tailwindcss-motion](https://rombo.co/tailwind/)：一個為 Tailwind CSS 設計的動畫插件，提供了簡單的 class 來添加動畫。

> #### 動畫元件與特效集 (Animated Components & Effects Collections)

這些是預先製作好的、帶有精美動畫的 UI 元件或特效集合，通常可以「複製貼上」使用。

* [Magic UI](https://magicui.design/)：專為設計工程師打造的 UI 元件集，提供了豐富的預設樣式和精緻動畫，基於 Framer Motion 和 Tailwind CSS。
* [Animata](https://animata.design/)：一個開源的動畫、效果和互動集合，使用 Tailwind CSS 和 React 建立，可輕鬆複製貼上整合到專案中。
* [Eldora UI](https://www.eldoraui.site/)：一個以精緻動畫聞名的 React 元件庫。

> #### 滾動與視差效果 (Scroll & Parallax Effects)
* [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)：一個輕量級的庫，用於在元素滾動到可視區域時觸發動畫。
* [FullPage.js](https://alvarotrigo.com/fullPage/)：用於快速創建全螢幕滾動網站的熱門函式庫。
* [Rellax.js](https://dixonandmoe.com/rellax/)：一個輕量、高效的純 JavaScript 視差效果庫。

> #### 輪播與滑塊 (Carousels & Sliders)
* [Swiper](https://swiperjs.com/)：現代、強大且無需 jQuery 的觸控滑塊庫，功能極其豐富。
* [slick](http://kenwheeler.github.io/slick/)：一個功能齊全、響應式的輪播插件。
* [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)：一個支援觸控、響應式的 jQuery 輪播插件。

> #### 讀取與加載動畫 (Loading Animations)
* [Loading.io](https://loading.io/)：提供多種可客製化的讀取動畫（CSS, SVG, GIF）。
* [Load Awesome](https://github.danielcardoso.net/load-awesome/)：一系列純 CSS 實現的讀取動畫。
* [The Dots CSS Loaders Collection](https://css-loaders.com/dots/)：專門收集各種「點狀」風格的 CSS 讀取動畫。

> #### 特殊效果與工具 (Specialized Effects & Tools)
* [Lottie](https://airbnb.io/lottie/#/)：由 Airbnb 開發，用於解析 Adobe After Effects 動畫並在網頁和行動端原生渲染的函式庫。
    * [Lottiefiles](https://lottiefiles.com/web-player)：Lottie 動畫的巨大資源庫和測試工具。
* [vivus](https://maxwellito.github.io/vivus/)：一個可以讓 SVG 產生「描邊繪製」動畫效果的輕量級 JS 庫。
* [draggable.js](https://shopify.github.io/draggable/)：由 Shopify 開發，用於實現元素拖曳功能的函式庫。
* [Easing Wizard](https://easingwizard.com/)：一個 CSS `transition-timing-function` 的視覺化編輯器，幫助你創建自定義的緩動曲線。

---

### JavaScript 工具庫 (JavaScript Utilities)

提供常用的輔助函式，簡化資料處理、日期操作等常見任務，提升開發效率。

> #### 通用工具庫 (General Purpose)
+ [radash](https://radash-docs.vercel.app/docs/getting-started)：一個現代、零依賴、TypeScript-first 的工具庫，被視為 Lodash 的優秀替代品。
+ [es-toolkit](https://es-toolkit.slash.page/)：另一個輕量級、類型安全的 Lodash 替代方案。
+ [Lodash](https://lodash.com/)：曾經是前端專案必備的 JavaScript 實用工具庫，但隨著原生 JS 的發展，其部分功能可被取代。

> #### 日期與時間 (Date & Time)
+ [Moment.js](https://momentjs.com/)：一個功能強大的日期時間處理庫（註：官方已宣布進入維護模式，推薦使用 `date-fns` 或 `day.js` 等現代替代品）。

> #### Promise 擴充 (Promise Utilities)
> [`Promise.try`](https://github.com/tc39/proposal-promise-try)：一種更符合人體工學的方式來啟動一個 Promise 鏈，可以同時捕捉同步和非同步的錯誤。
* [p-try](https://www.npmjs.com/package/p-try)：`Promise.try` 的一個輕量級實現。

> #### 資料處理與格式轉換 (Data Handling & Formatting)
+ [Merge anything](https://github.com/mesqueeb/merge-anything)：一個功能強大的深度合併物件庫，具有完整的 TypeScript 支援。
+ [json2csv](https://github.com/coston/json-to-csv-export)：一個用於將 JSON 資料轉換為 CSV 並觸發下載的工具。

> #### ID 生成 (ID Generation)
+ [uuid](https://www.npmjs.com/package/uuid)：用於生成符合標準的通用唯一辨識碼（UUID）。

> #### 雜湊與加密 (Hashing & Cryptography)
* [hash-wasm](https://github.com/Daninet/hash-wasm)：一個基於 WebAssembly 的輕量級雜湊函式庫，提供了數十種常見的雜湊演算法。


---

### 瀏覽器 API 與儲存 (Browser APIs & Storage)

> #### 客戶端儲存與資料庫 (Client-side Storage & Databases)
這些工具封裝了瀏覽器的儲存 API（如 IndexedDB, localStorage），提供了更友善的介面來管理客戶端資料。
- [localForage](https://github.com/localForage/localForage)：一個 JavaScript 庫，透過非同步儲存（IndexedDB 或 WebSQL）和簡單的 `localStorage` 風格 API 來改善 Web 應用的離線體驗。
- [Dexie.js](https://dexie.org/)：一個強大的 IndexedDB 包裝庫，提供了更簡潔、強大的 API、優秀的錯誤處理和查詢能力。
- [RxDB](https://rxdb.info/)：一個為 JavaScript 應用設計的本地優先（Local First）、響應式（Reactive）的 NoSQL 資料庫。

> #### Web Workers
用於在背景執行緒中運行腳本，避免阻塞主執行緒，提升應用程式性能。
- [Comlink](https://github.com/GoogleChromeLabs/comlink)：由 Google Chrome Labs 開發，它封裝了 `postMessage`，讓 Web Worker 的使用像操作本地的非同步函式一樣簡單。
- [worker-loader](https://webpack.js.org/loaders/worker-loader/)：一個 Webpack loader，可以將一個獨立的腳本打包成 Web Worker。


---

### 應用功能與服務 (Application Features & Services)

這些工具用於實現特定的應用級功能，通常涉及與第三方服務的整合或複雜的 UI 互動。

> #### 國際化 (Internationalization - i18n)
- [react-i18next](https://react.i18next.com/)：基於 i18next 的強大國際化框架，是 React 生態中主流的解決方案。

> #### 身份驗證 (Authentication)
* [Google Auth Library](https://github.com/google/google-auth-library-nodejs)：Google 官方提供的用於處理 OAuth 2.0 和身份驗證的函式庫。
    * [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)：一個簡化在 React 應用中整合 Google 登入的社群套件。

> #### 畫布與白板工具 (Canvas & Whiteboard Tools)
* [tldraw](https://www.tldraw.com/)：一個功能強大、易於整合的開源白板函式庫。
* [Excalidraw](https://excalidraw.com/)：一個非常受歡迎的虛擬白板工具，用於繪製手繪風格的圖表。

> #### 漸進式網頁應用 (Progressive Web Apps - PWA)
* [Vite PWA](https://vite-pwa-org.netlify.app/)：一個為 Vite 生態系統設計的零配置 PWA 插件。


### 測試與開發工具 (Testing & Development Tools)

這些工具主要用於輔助開發、除錯和測試流程，它們通常不會被打包到最終的生產環境程式碼中，但對於提升開發效率和保障程式碼品質至關重要。

> #### 自動化測試框架與函式庫 (Automated Testing Frameworks & Libraries)

這些是前端測試的核心，用於撰寫可重複執行的測試案例，以確保元件和應用的行為符合預期。

* [Testing Library](https://testing-library.com/)：一個專注於「使用者行為」的測試函式庫家族，鼓勵開發者撰寫更健壯、更易維護的測試。其核心理念是測試你的應用程式，而不是測試實現細節。
    *   `@testing-library/dom`：Testing Library 的核心，提供操作和查詢 DOM 的基本工具。
    *   `@testing-library/react`：基於 DOM Testing Library，提供了渲染 React 元件和與之互動的專用 API。
    *   `@testing-library/user-event`：模擬真實使用者的互動（如打字、點擊、懸停），比底層的 `fireEvent` 更高階、更貼近實際使用場景。
    *   `@testing-library/jest-dom`：為 Jest 測試框架擴充了許多與 DOM 相關的斷言（matchers），例如 `toBeInTheDocument()`，讓測試語意更清晰。
* [jsdom](https://github.com/jsdom/jsdom)：一個在 Node.js 環境中用純 JavaScript 模擬眾多 Web 標準（包括 DOM、HTML、CSS）的函式庫。它為 Jest 等測試框架提供了一個模擬的瀏覽器環境，讓前端測試可以在沒有真實瀏覽器的情況下快速運行。

> #### API 測試與模擬 (API Testing & Mocking)

在前後端分離的開發模式中，這些工具讓我們能夠獨立於後端進行開發、測試和除錯。

* [Postman](https://www.postman.com/downloads/)：業界標準的 API 協作平台與測試工具。它提供了一個強大的圖形化介面，讓開發者可以輕鬆地發送各種 HTTP 請求（GET, POST 等）來測試和除錯 API，是後端開發與前端串接時的必備神器。
* [JSON Generatoｒ](https://json-generator.com/)：JSON 生成器，也產生模擬數據，但專門針對 JSON。它有點複雜，但它允許定制結果。
* [Mockaroo](https://www.mockaroo.com/)：產生模擬資料並以多種格式（JSON、CSV、XML 等）輸出。
* [NimbleText](https://nimbletext.com/live)：根據給定格式將行輸入轉換為特定輸出。
* [Mock Service Worker (MSW)](https://mswjs.io/)：一個革命性的 API 模擬庫，它使用 Service Worker API 在**網路層**攔截請求。這意味著你的應用程式程式碼完全不需要修改，就能無縫地與模擬 API 互動，無論是 REST API 還是 GraphQL 都支援。
* [JSON Server](https://github.com/typicode/json-server)：一個極其簡單快速的工具，讓你在 30 秒內用一個 JSON 檔案就搭建出一個功能完整的 RESTful API。非常適合快速原型開發和簡單的專案。
* [Faker.js](https://fakerjs.dev/)：一個強大的**假資料生成器**。它是上述模擬工具的最佳夥伴，可以幫你生成大量逼真的假資料（如姓名、地址、圖片、公司名稱等），讓你的模擬回應和測試資料庫看起來更真實、更有用。

> #### 開發與除錯輔助工具 (Development & Debugging Aids)

這些是獨立的應用程式或線上服務，用於輔助開發過程中的視覺化檢查和除錯。

* [Responsively App](https://responsively.app/)：一款專為前端開發設計的瀏覽器，可以將多個裝置的畫面並排顯示在一個視窗中，並同步所有互動（如滾動、點擊），極大地提升了開發響應式網頁的效率。
* [Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php)：一個簡單的線上工具，輸入網址後可以快速生成網站在不同裝置（桌面、筆電、平板、手機）上的預覽截圖。


# 參考來源：
* [Awesome React](https://github.com/enaqx/awesome-react)：也是一個蠻完整關於React生態系的主題列表整理
* [Awesome React Components](https://github.com/brillout/awesome-react-components#editable-data-grid--spreadsheet): 這個list整理了React components的資源
* [Awesome React Headless Components](https://github.com/jxom/awesome-react-headless-components)收集所有的 Headless 相關元件（不只UI庫），以下列出自己常用的。
* [Front End | JavaScript Fun | 前端工坊](https://www.javascript.fun/) - 收錄許多知名的網站工具、開發套件、網頁元件
* [Will 保哥各式 Web 前端開發工具整理](https://github.com/doggy8088/frontend-tools)
* [Warbler-FE | 前端導航](http://www.warblerfe.top/navigation)
* [前端工具箱](https://www.runjs.cool/)
* [菜鸟工具 - 不止于工具](https://c.runoob.com/)
* [CSS-Tricks](https://css-tricks.com/) → css技巧分享網站
* [前端工具百寶箱](https://ithelp.ithome.com.tw/users/20111449/ironman/1767)
* [夏木樂網頁設計資源彙整](https://simular.co/resources)
* [前端工具分享](https://paper.dropbox.com/doc/nbow1115-l04unvKbDBhtmRCBzTkeJ)
* [30天學習30套前端技術](https://ithelp.ithome.com.tw/users/20091292/ironman/1595)
* [前端武器庫](/@Chris/HkjqkTQbZ?type=view#%E5%89%8D%E7%AB%AF%E6%AD%A6%E5%99%A8%E5%BA%AB)
* [VSCode 的擴充工具 （陸續更新）](https://summer10920.github.io/2020/10-23/article-vscode/#%E6%93%B4%E5%85%85%E5%B7%A5%E5%85%B7-%EF%BC%88%E9%99%B8%E7%BA%8C%E6%9B%B4%E6%96%B0%EF%BC%89)
* [安裝延伸模組](https://hackmd.io/@ChenLi/Sy-FBjaxc#%E5%AE%89%E8%A3%9D%E5%BB%B6%E4%BC%B8%E6%A8%A1%E7%B5%84)
* [DeTools 工具 | 死神網路資源列表](https://tools.wingzero.tw/web/page/1)
* [工作第一位，提升前端技能的26個網站，走過路過不錯過](https://www.zhihu.com/question/519603140?utm_id=0)
* [2022 TheF2E 攻略資源](https://hackmd.io/@hexschool/rJ17ulEQj)
* [這次我們不跳過 IDE](https://ithelp.ithome.com.tw/users/20113462/ironman/2638)
* [awesome-javascript](https://github.com/sorrycc/awesome-javascript) - github上的「awesome」系列
* [前端开发必备文档（持续更新中...）](https://juejin.cn/post/7234917363194429477#heading-56)
* [每天一套件，工作沒煩惱 ](https://ithelp.ithome.com.tw/users/20129747/ironman/5293)
