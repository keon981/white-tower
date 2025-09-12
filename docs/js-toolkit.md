# JavaScript 開發工具集合

- [JavaScript 開發工具集合](#javascript-開發工具集合)
  - [開發工具](#開發工具)
    - [網頁符號](#網頁符號)
    - [線上工具](#線上工具)
    - [套件比較與趨勢](#套件比較與趨勢)
    - [Chrome 擴充工具](#chrome-擴充工具)
  - [框架與函式庫](#框架與函式庫)
    - [建構工具](#建構工具)
    - [Web Development Frameworks 框架](#web-development-frameworks-框架)
    - [React UI 元件庫](#react-ui-元件庫)
    - [狀態管理](#狀態管理)
    - [Hooks](#hooks)
    - [資料請求](#資料請求)
    - [表單與驗證](#表單與驗證)
    - [應用功能與服務 (Application Features \& Services)](#應用功能與服務-application-features--services)
    - [各式 JavaScript 輔助工具/函式庫](#各式-javascript-輔助工具函式庫)
    - [動畫與動態效果](#動畫與動態效果)
  - [CSS 生態系](#css-生態系)
    - [CSS 框架與工具](#css-框架與工具)
  - [測試框架與工具](#測試框架與工具)
    - [API 模擬與假資料](#api-模擬與假資料)
  - [資源](#資源)
    - [OpenData API](#opendata-api)
    - [參考來源](#參考來源)

## 開發工具

### 網頁符號

* [w3schools HTML Symbols](https://www.w3schools.com/html/html_symbols.asp)
* [Welcome to HTML Symbols](https://www.htmlsymbols.xyz/)

### 線上工具

- **語法支援度查詢**
  * [Can I use](http://caniuse.com/): 查詢前端 Web 技術的瀏覽器支援度。
  * [node.js ES2015 support](http://node.green/): 查詢 Node.js 對 ECMAScript 各版本特性的支援度。

* **響應式設計工具 (Responsive Design Tools)**
  * [Responsively App](https://responsively.app/): 一款專為前端開發設計的瀏覽器，可以將多個裝置的畫面並排顯示在一個視窗中，並同步所有互動（如滾動、點擊），極大地提升了開發響應式網頁的效率。
  * [Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php): 一個簡單的線上工具，輸入網址後可以快速生成網站在不同裝置（桌面、筆電、平板、手機）上的預覽截圖。
* **網頁測試工具**
  * [Testing Playground](https://testing-playground.com/): 一款簡單的線上網頁測試工具，支援多種瀏覽器的測試。

### 套件比較與趨勢

- [npm trends](https://npmtrends.com/): 比較 npm 套件的下載趨勢。
- [State of JavaScript](https://stateofjs.com/zh-Hant/)，年度 JavaScript 生態趨勢報告。

### Chrome 擴充工具

如果希望能在開發上獲得更好的檢查工具，可透過在網頁上加裝擴充工具。

* [HTML5 Outliner ](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=zh-TW): 檢視網站架構
* [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=zh-TW): 查詢網頁上使用的字體。
* [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh): 格式化並以樹狀結構呈現 JSON。
* [Full Page Screen Capture](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl): 網頁截圖工具，可以進行完整的網頁頁面擷取
* [Wappalyzer 分析工具](https://www.wappalyzer.com/apps/): 分析網站使用的技術棧。
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en): 是一款由 facebook 開發的 chrome 偵錯工具，透過這個工具可以看到 React 元件的結構，我們還可以直接編輯或是查看元件的 props / state ，讓整個開發流程更順利。

## 框架與函式庫

### 建構工具

能自動對代碼執行檢驗、轉換、壓縮等功能的工具

* **Module Bundler(模組打包與編譯工具)**
  * [Vite](https://vitejs.dev/): 新一代前端建構工具，利用原生 ES 模組提供極速的開發伺服器啟動和熱模組替換 (HMR)。
  * [Webpack](https://webpack.js.org/): 功能強大、生態豐富的模組打包工具，擁有高度的可配置性與大量的插件。
  * [Parcel](https://parceljs.org/): 零設定的網頁應用打包工具，提供開箱即用的開發體驗。
  * [worker-loader](https://webpack.js.org/loaders/worker-loader/): 一個 Webpack loader，可以將一個獨立的腳本打包成 Web Worker。
  * [Vite PWA](https://vite-pwa-org.netlify.app/): 一個為 Vite 生態系統設計的零配置 PWA 插件。
  * [Gulp](https://gulpjs.com/): 基於串流 (stream) 的自動化建構工具，用於處理重複性的開發任務。
* **Package Managers(套件管理)**
  * [npm](https://www.npmjs.com/): Node.js 官方套件管理器，隨 Node.js 安裝時內建。
  * [nvm](https://github.com/nvm-sh/nvm): Node.js 版本管理器，可用於快速切換與管理不同的 Node.js 版本。
  * [yarn](https://yarnpkg.com/): 快速、可靠且安全的套件管理器，為 npm 的替代方案之一。
  * [pnpm](https://pnpm.io/zh-TW/): 高效能、節省磁碟空間的套件管理器，解決了 npm/yarn 中重複依賴的問題。
  * [verdaccio](https://verdaccio.org/): 輕量級的私有 npm registry，可用於建立企業內部的套件倉庫、快取公共套件或測試套件發布。
* **Linter (語法規範)**
  * [ESLint](https://eslint.org/) 可插拔的 JavaScript linter，用於靜態分析程式碼以快速發現問題並統一團隊編碼風格。
  * [Prettier](https://prettier.io/): 自動化的程式碼格式化工具，支援多種語言，確保程式碼風格一致。
  * [Oxlint](https://oxc-project.github.io/docs/guide/linter.html): 一款用 Rust 編寫的高效能 JavaScript linter，速度極快。
* **環境變數**
  * [env-cmd](https://www.npmjs.com/package/env-cmd): 允許將環境變數分組到 `.env` 檔案中，並在執行腳本時載入它們。
  * [react-dotenv](https://www.npmjs.com/package/react-dotenv): 讓 React 應用能夠輕鬆讀取 `.env` 檔案中的環境變數。

### Web Development Frameworks 框架

* **Frontend**
  * [React](https://reactjs.org/): 用於建構使用者介面的 JavaScript 函式庫，以其元件化和虛擬 DOM 聞名。
  * [Svelte](https://svelte.dev/): 一個激進的新方法，它在建構階段將元件編譯成高效能的命令式程式碼。
  * [Solid](https://www.solidjs.com/): 具備現代框架功能的高效能宣告式框架，用於創建高效和反應式 Web 的 JavaScript 庫 介面。
  * [Qwik](https://qwik.builder.io/): 構建超高速 Web 的開創性框架 載入時間最短的應用程式，在 Web 性能。
  * [Riot.js](https://riot.js.org/): 簡單而優雅的元件化函式庫。
  * [Stencil](https://stenciljs.com/): 用於建構可重用、可擴展 Web Components 的工具鏈。
* **Backend**
  * [Express](https://expressjs.com/): 快速、極簡的 Node.js Web 應用框架。
* **Full Stack**
  * [Next.js](https://nextjs.org/): 一個 React 框架，非常適合構建伺服器端渲染和 靜態 Web 應用程式，提供優化的性能和 簡化的開發流程。
  * Remix: 是 Next.js 的最強大替代品之一，最新版本是 [React Router v7](https://reactrouter.com/start/framework/installation)的框架模式，尊重 Web 的運作方式。它並沒有試圖將所有內容抽象為框架的魔力; 相反，它建立在表單、緩存和 HTTP 請求等原生瀏覽器功能之上，併為您提供現代的 React 優先體驗。它也完全與平台無關。
  * [Svelte Kit](https://kit.svelte.dev/docs/introduction/): 基於 Svelte 的框架，專為高度開發而設計 高效的 Web 應用程式，優先考慮速度和易用性。
  * [Solid Start](https://start.solidjs.com/): 一個專注於卓越性能的 SolidJS 框架和一個 增強的開發人員體驗，簡化 Web 開發 過程。
  * [Qwik City](https://qwik.builder.io/qwikcity/): Qwik 的官方全端框架。
  * [Astro](https://astro.build/): 用於構建快速、以內容為中心的靜態 Web 框架 網站。它獨特地允許使用多個 UI 框架 如 React、Vue 或 Svelte，將它們渲染為靜態 HTML，以便 增強的頁面速度和用戶體驗。

### React UI 元件庫

* **UI 元件庫 (Component Libraries)**
  * [Material UI (MUI)](https://mui.com/): 基於 Google Material Design 指導原則的 React UI 框架，是當下最流行的選擇之一。
  * [Ant Design](https://ant.design/index-cn): 螞蟻集團推出的企業級 UI 設計語言和 React 元件庫，廣泛用於中後台產品。
    * [Ant Motion](https://motion.ant.design/): Ant Design 的動態效果設計規範與元件庫。
  * [Base Web](https://baseweb.design/): Uber 開發的可訪問性優先的元件庫。
  * [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap): 將 Bootstrap 元件用 React 重構，使其更符合 React 的開發模式。
* **無頭元件 (Headless Components)**
  * [Radix UI](https://www.radix-ui.com/): 專注於可訪問性的無頭元件庫，不提供樣式。
  * [Headless UI](https://headlessui.com/) 是由現在非常熱門的 Tailwindcss 團隊來開發的，與 Tailwind CSS 無縫整合的無頭元件。
  * [Chakra UI](https://github.com/chakra-ui/chakra-ui): 一個簡單、模組化且高度可訪問的 UI 元件庫。它提供了良好的預設樣式，同時也極易客製化，兼具了完整元件庫和 Headless UI 的優點。
    * 雖然官方並沒有明確表示 Chakra UI 是 Headless 元件庫，但 Chakra UI 提供的基礎樣式確實比較單調，但他也一樣能夠完全客製化調整元件的所有樣式，因此也可以視為 Headless 元件庫。
    * ==特別強調 accessibility== ，也就是說這個元件庫是考慮到了各種不同使用網站的情境，對於一些公部門的案子對這部分有比較高要求的話，這會是一個好選擇。
  * [Horizon UI](https://horizon-ui.com/): 基於 **Chakra UI** 進行二次開發的元件庫，專為快速搭建美觀的後台管理儀表板（Admin Dashboard）而設計。
  * [NextUI](https://nextui.org/):  基於 Tailwind CSS 和 React Aria 的 UI 庫。
  * [Horizon UI](https://horizon-ui.com/): 基於 Chakra UI 的後台儀表板。
  * [React Aria](https://react-spectrum.adobe.com/react-aria/): Adobe 打造的無頭 UI Hooks，專注於行為與可訪問性。
  * 🌟[Plate.js]: 是一個基於 Slate.js 的富文本編輯器框架，提供了豐富的插件和組件，可以快速構建出功能強大的編輯器。近期社群越來越多人使用，除了把各類編輯器細節都考量了，**甚至可以用很輕鬆的方式，整合 AI 功能到編輯器中**。不論是想在產品中加入富文本編輯器，或是想理解這種進階前端如何實作，都推薦可以去讀原始碼。
* **特定功能元件庫**
  * **資料顯示與輸入**
    * [TanStack Table](https://tanstack.com/table): 用於建立強大表格和資料網格的無頭 UI 工具。
    * [ChatUI](https://chatui.io/components/card):  對話式 UI 元件庫。
    * [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize): 一個輕量級的 React 元件，能讓 `<textarea>` 根據使用者輸入的內容自動調整高度。
    * [react-markdown](https://github.com/remarkjs/react-markdown): 將 Markdown 轉換為 React 元件的函式庫。
    * [llm-ui](https://llm-ui.com/docs/quick-start): 用於構建 LLM 應用程式的 UI 元件庫。
    * [Shuffle.js](https://vestride.github.io/Shuffle/): 響應式、可篩選的網格佈局函式庫。
  * **圖表函式庫 (Charting Libraries)**
    * [D3.js](https://d3js.org/): 資資料驅動文件的視覺化標準，提供強大的底層 API。
    * [C3.js](https://c3js.org/):  基於 D3.js 的可重用圖表庫，簡化了圖表生成。
    * [Recharts](https://recharts.org/en-US/):  基於 React 和 D3 的圖表庫，提供聲明式的 React 元件。
    * [Chart.js](https://www.chartjs.org/docs/latest/): 簡單靈活的 JavaScript 圖表庫。
    * [Highcharts](https://www.highcharts.com/): 功能強大且成熟的商業圖表庫。
    * [Victory](https://formidable.com/open-source/victory/docs/): 由 Formidable 團隊開發的 React 和 React Native 圖表元件集合，以其組合性和易於客製化著稱。
  * **資料匯出 (Data Export)**
    * [SheetJS](https://docs.sheetjs.com/): 用於讀取、編輯和匯出多種電子表格格式（如 XLSX, XLS, CSV）的強大函式庫。
    * [ExcelJS](https://github.com/exceljs/exceljs): 一個可以讀取、操作和寫入 Excel XLSX 和 CSV 檔案的函式庫，支援豐富的樣式和功能。
  * **畫布與白板**
    * [tldraw](https://www.tldraw.com/): 一個功能強大、易於整合的開源白板函式庫。
    * [Excalidraw](https://excalidraw.com/): 一個非常受歡迎的虛擬白板工具，用於繪製手繪風格的圖表。
* **shadcn cli registry**: 可隨時下載你想要的 component 或更新它們。
  * [shadcn/ui](https://ui.shadcn.com/): 一個基於 **Radix UI** 和 **Tailwind CSS** 構建的可重用元件集。它不是一個元件庫，而是一系列你可以直接複製貼到應用中的元件。
  * [shadcn.io](https://www.shadcn.io/): 精彩開源 shadcn/ui 元件的首選中心，是一個完全免費、社群驅動的註冊中心，匯集了與 shadcn/ui，100% 免費、開源、MIT 授權。
  * [NextGen JavaScript shadcn/ui]: 探索精選的 shadcn/ui 元件、模板、區塊、UI 元件庫、主題和工具。
  * **動畫元件與特效集 (Animated Components & Effects):**
    * [Magic UI](https://magicui.design/): 專為設計工程師打造的 UI 元件集，提供了豐富的預設樣式和精緻動畫，基於 Framer Motion 和 Tailwind CSS。
    * [Animata](https://animata.design/): 一個開源的動畫、效果和互動集合，使用 Tailwind CSS 和 React 建立，可輕鬆複製貼上整合到專案中。
    * [Eldora UI](https://www.eldoraui.site/): 一個以精緻動畫聞名的 React 元件庫。:
    * [Animate UI](https://animate-ui.com/): 是用 Tailwind 和 Motion 寫的 component library

### 狀態管理

* [Zustand](https://github.com/pmndrs/zustand): 提供了一種輕量級、直觀的狀態管理方式，適合那些追求簡潔和高效的 React 開發者。它的主要特點是易於上手，無需繁瑣的設定和模板，使得狀態管理更加靈活和直觀。
* [Redux](https://redux.js.org/): JavaScript 應用程式的可預測狀態容器。
  * [Redux Toolkit](https://redux-toolkit.js.org/): Redux 官方推薦的工具集，簡化 Redux 開發。
  * [Redux-Saga](https://redux-saga.js.org/): 用於管理 Redux 非同步操作的中介軟體。
  * [DvaJS](https://dvajs.com/): 基於 Redux 和 Redux-Saga 的數據流方案。
* [Jotai](https://jotai.org/) 強調原子化的狀態管理，通過將狀態分解為更小、更獨立的單位（原子），實現了更細緻和模塊化的狀態控制。這種方法不僅提升了狀態管理的可維護性，也增強了組件間狀態的可重用性。
* [XState](https://xstate.js.org/) 以有限狀態機（Finite State Machines）和狀態圖（Statecharts）為基礎，提供了一種結構化的狀態管理方法。它適合於需要精細管理狀態轉換和行為的複雜應用，使狀態的變化更可預測和容易理解。

### Hooks

* 💎 [usehooks-ts](https://usehooks-ts.com/): 是一個 React hooks 函式庫，用 Typescript 寫，易於使用。它提供了一組鉤子，使您能夠更快地建立 React 應用程式。這些鉤子是建立在 DRY（不要重複自己）原則上的。對於您可能需要的最常見用例，有一些掛鉤。
* [ahooks](https://github.com/alibaba/hooks/tree/master): React Hooks Library 之一
* [awesome-react-hooks ](https://github.com/rehooks/awesome-react-hooks)- 包含文件、教學以及各地搜集的 hook 資源
* [react-use](https://github.com/streamich/react-use?tab=readme-ov-file): React Hooks 的集合. 移植 [libreact](https://github.com/streamich/libreact).

### 資料請求

* **請求函式庫 (Request Libraries)**
  * [axios](https://github.com/axios/axios): 基於 Promise 的 HTTP 客戶端，可用於瀏覽器和 Node.js，功能豐富且廣受歡迎。
  * [ky](https://github.com/sindresorhus/ky): 基於 `fetch` API 的輕量級 HTTP 客戶端，以其更優雅簡潔的 API 設計著稱。
* **伺服器狀態管理 (Server State Management)**
  * [TanStack Query (React Query)](https://tanstack.com/query/): 強大的非同步狀態管理庫，處理獲取、快取、同步伺服器狀態。
  * [RTK Query](https://redux-toolkit.js.org/rtk-query/overview): Redux Toolkit 內建的資料獲取和快取解決方案。

### 表單與驗證

* **表單狀態管理**
  * [React Hook Form](https://react-hook-form.com/): 高效能、靈活且易於使用的 React 表單管理庫。
* **資料驗證**
  * [Zod](https://zod.dev/): 一個以 TypeScript 優先的結構（Schema）聲明和驗證函式庫，常與 React Hook Form 搭配使用，用來定義表單資料的格式與規則。
  * [validator](https://github.com/validatorjs/validator.js): 一個輕量級的字串驗證函式庫，提供多樣的驗證方法（如 isEmail, isURL 等），不依賴任何框架。

### 應用功能與服務 (Application Features & Services)

* **國際化 (Internationalization - i18n)**
  * [react-i18next](https://react.i18next.com/): 基於 i18next 的強大國際化框架，是 React 生態中主流的解決方案。
* **身份驗證 (Authentication)**
  * [Google Auth Library](https://github.com/google/google-auth-library-nodejs): Google 官方提供的用於處理 OAuth 2.0 和身份驗證的函式庫。
    * [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google): 一個簡化在 React 應用中整合 Google 登入的社群套件。

### 各式 JavaScript 輔助工具/函式庫

提供常用的輔助函式，簡化資料處理、日期操作等常見任務，提升開發效率。

* **通用**
  * [Lodash](https://lodash.com/): 曾經是前端專案必備的 JavaScript 實用工具庫，但隨著原生 JS 的發展，其部分功能可被取代。
    * [lodash-es](https://www.npmjs.com/package/lodash-es): 是lodash 的 ES6 模組化的版本，體積小。
  * [es-toolkit](https://es-toolkit.slash.page/): 另一個輕量級、類型安全的 Lodash 替代方案。
  * [radash](https://radash-docs.vercel.app/docs/getting-started): 一個現代、零依賴、TypeScript-first 的工具庫，被視為 Lodash 的優秀替代品。
* **DOM 操作**
  * [jQuery](https://jquery.com/): 經典的 DOM 操作函式庫，簡化了 HTML 文件遍歷、事件處理、動畫和 Ajax。
* **日期與時間 (Date & Time)**
  * [Moment.js](https://momentjs.com/): 一個功能強大的日期時間處理庫（註：官方已宣布進入維護模式)
  * [date-fns](https://date-fns.org/)
  * day.js
* **Promise 擴充 (Promise Utilities)**
  * [`Promise.try`](https://github.com/tc39/proposal-promise-try): 一種更符合人體工學的方式來啟動一個 Promise 鏈，可以同時捕捉同步和非同步的錯誤。
  * [p-try](https://www.npmjs.com/package/p-try): `Promise.try` 的一個輕量級實現。
* **資料處理與格式轉換 (Data Handling & Formatting)**
  * [Merge anything](https://github.com/mesqueeb/merge-anything): 一個功能強大的深度合併物件庫，具有完整的 TypeScript 支援。
  * [json2csv](https://github.com/coston/json-to-csv-export): 一個用於將 JSON 資料轉換為 CSV 並觸發下載的工具。
* **ID 生成 (ID Generation)**
  * [uuid](https://www.npmjs.com/package/uuid): 用於生成符合標準的通用唯一辨識碼（UUID）。
* **雜湊與加密 (Hashing & Cryptography)**
  * [hash-wasm](https://github.com/Daninet/hash-wasm): 一個基於 WebAssembly 的輕量級雜湊函式庫，提供了數十種常見的雜湊演算法。
* **客戶端儲存 (Client-side Storage)**
  * [localForage](https://github.com/localForage/localForage): 一個 JavaScript 庫，透過非同步儲存（IndexedDB 或 WebSQL）和簡單的 `localStorage` 風格 API 來改善 Web 應用的離線體驗。
  * [Dexie.js](https://dexie.org/): 一個強大的 IndexedDB 包裝庫，提供了更簡潔、強大的 API、優秀的錯誤處理和查詢能力。
  * [RxDB](https://rxdb.info/): 一個為 JavaScript 應用設計的本地優先（Local First）、響應式（Reactive）的 NoSQL 資料庫。
* **Web Workers**
  * [Comlink](https://github.com/GoogleChromeLabs/comlink): 由 Google Chrome Labs 開發，它封裝了 `postMessage`，讓 Web Worker 的使用像操作本地的非同步函式一樣簡單。
* **應用功能與服務**
  * [@ffmpeg/ffmpeg](https://ffmpegwasm.netlify.app/docs/overview): 在瀏覽器中使用 FFmpeg 進行影片/音訊編碼與轉檔

### 動畫與動態效果

這些函式庫和工具專注於為網頁帶來豐富的視覺動態效果，從簡單的 CSS 過渡到複雜的 JavaScript 動畫。

* **動畫核心庫 (Core Animation Libraries):**
  * [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/): 專業級 JavaScript 動畫平台，以高效能和精確控制著稱。
  * [Framer Motion](https://motion.dev/): 一個為 React 設計的聲明式動畫庫，能輕鬆地為元件添加動畫和手勢互動。
  * [React Spring](https://www.react-spring.dev/): 一個基於物理學的 React 動畫庫，可以創建更自然、流暢的 UI 動畫效果。
  * [Anime.js](https://animejs.com/): 一個輕量級且功能強大的 JavaScript 動畫庫，API 靈活易用。
  * [React Transition Group](https://github.com/reactjs/react-transition-group): React 官方維護的庫， 管理元件進入和離開 DOM 時的過渡動畫。
* **CSS 動畫庫 (CSS Animation Libraries):**
  * [Animate.css](https://animate.style/): 即用型的 CSS 動畫庫，提供大量預設效果。
  * [Hover.css](http://ianlunn.github.io/Hover/): 專注於 CSS 懸停效果的集合。
  * [CSShake](https://elrumordelaluz.github.io/csshake/): 各種「晃動」效果的 CSS 庫。
  * [Whirl](https://whirl.netlify.app/): 純 CSS 載入動畫集合。
  * [tailwindcss-motion](https://www.tailwindcss-motion.com/): 為 Tailwind CSS 設計的動畫插件。
* **滾動與視差效果 (Scroll & Parallax Effects)**
  * [ScrollTrigger](https://greensock.com/scrolltrigger/): GSAP 的官方插件，用於創建強大的滾動觸發動畫。
  * [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/): 輕量級的滾動觸發動畫庫。
  * [FullPage.js](https://alvarotrigo.com/fullPage/): 用於快速創建全螢幕滾動網站的熱門函式庫。
  * [Rellax.js](https://dixonandmoe.com/rellax/): 輕量級的純 JavaScript 視差效果庫。
* **輪播與滑塊 (Carousels & Sliders)**
  * [Swiper](https://swiperjs.com/): 現代、強大且無需 jQuery 的觸控滑塊庫。
  * [slick](http://kenwheeler.github.io/slick/): 一個功能齊全、響應式的輪播插件。
  * [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/): 支援觸控、響應式的 jQuery 輪播插件。
* **讀取與加載動畫 (Loading Animations)**
  * [Loading.io](https://loading.io/): 提供多種可客製化的讀取動畫（CSS, SVG, GIF）。
  * [Load Awesome](https://github.danielcardoso.net/load-awesome/): 一系列純 CSS 實現的讀取動畫。
  * [The Dots CSS Loaders Collection](https://css-loaders.com/dots/): 專門收集各種「點狀」風格的 CSS 讀取動畫。
* **特殊效果與工具 (Specialized Effects & Tools)**
  * [Lottie](https://airbnb.io/lottie/#/): 由 Airbnb 開發，用於解析 Adobe After Effects 動畫並在網頁和行動端原生渲染的函式庫。
    * [Lottiefiles](https://lottiefiles.com/web-player): Lottie 動畫的巨大資源庫和測試工具。
  * [vivus](https://maxwellito.github.io/vivus/): 一個可以讓 SVG 產生「描邊繪製」動畫效果的輕量級 JS 庫。
  * [draggable.js](https://shopify.github.io/draggable/): 由 Shopify 開發，用於實現元素拖曳功能的函式庫。
  * [Easing Wizard](https://easingwizard.com/): CSS `transition-timing-function` 的視覺化編輯器。

## CSS 生態系

### CSS 框架與工具

* **CSS 框架 (CSS Frameworks)**
  * [Bootstrap](https://getbootstrap.com/): 最知名的前端框架之一，提供豐富的預設元件。
  * [Pure.css](https://purecss.io/): 由 Yahoo 出品的老牌 CSS 框架，以其極致輕量和模組化著稱。架構簡單小巧，外型清新，非常適合學習 CSS 的架構與模組化方法。
  * [UIKit](https://getuikit.com/): 一個輕量級、模組化的前端框架，用於開發快速而強大的 Web 介面。
  * [NES.css](https://github.com/nostalgic-css/NES.css): NES/FC 遊戲機風格的 CSS 框架，充滿復古趣味。
  * [Paper CSS](https://www.getpapercss.com/): 手繪紙張風格的 CSS 庫。
* **實用優先 CSS (Utility-First Frameworks)**
  * [Tailwind CSS](https://tailwindcss.com/): 高度可客製化的實用優先 CSS 框架，透過組合 class 來建構設計。
    * [Tailwind Gradient Background Generator](https://gradienty.codes/tailwind-gradient-background): 使用 Tailwind CSS 完成的漸層模板。
    * [awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss): Tailwind CSS 的資源集合，包含範例、教學、工具和插件等。
* **CSS 預處理器與後處理器 (Pre-processors & Post-processors)**
  * [Sass](https://sass-lang.com/): 成熟強大的 CSS 擴充語言，提供變數、巢狀規則、mixin 等功能。
  * [Less](http://lesscss.org/): 動態樣式表語言，擴充了 CSS 的功能。
  * [PostCSS](https://postcss.org/): 一個用 JavaScript 轉換 CSS 樣式的工具。它本身功能不多，但透過豐富的插件生態（如 Autoprefixer），可以實現語法轉換、自動加前綴、壓縮等後處理任務。
* **CSS-in-JS**
  * [styled-components](https://styled-components.com/):  在 JavaScript 中撰寫 CSS 的函式庫，實現元件級的樣式封裝。
    * 註：2025 年 3 月 18 日，styled-components 核心維護者宣布其進入維護模式，標誌著前端樣式方案的一個轉折點。
  * [Emotion](https://emotion.sh/): 高效能的 CSS-in-JS 函式庫，提供多種樣式撰寫方式。
* **基底樣式/樣板**
  * [Meyer&#39;s Reset](https://meyerweb.com/eric/tools/css/reset/): 經典的 CSS Reset，旨在移除所有瀏覽器預設樣式。
  * [Normalize.css](http://necolas.github.io/normalize.css/): 保留有用的預設值，並修正瀏覽器之間的樣式不一致。
  * [A Modern CSS Reset](https://andy-bell.co.uk/a-more-modern-css-reset/): 基於現代 CSS 特性的重置方案。

## 測試框架與工具

* **單元測試**
  * **測試框架 (Test Runners)**
    * [Vitest](https://cn.vitest.dev/):  Vite 提供快速的單元測試框架，而 Playwright 是 非常適合跨多個瀏覽器進行端到端測試。
    * [Jest](https://jestjs.io/): 功能全面的 JavaScript 單元測試框架，由 Facebook 維護。
  * **測試函式庫 (Testing Libraries)**
    * [Testing Library](https://testing-library.com/): 專注於「使用者行為」的測試函式庫，鼓勵開發者撰寫更健壯、更易維護的測試。其核心理念是**測試你的應用程式，而不是測試實現細節**。
    * [jsdom](https://github.com/jsdom/jsdom):  Node.js 中用純 JavaScript 模擬眾多 Web 標準的函式庫。
* **端對端測試 (E2E，End-to-End Testing)**
  * [Cypress](https://www.cypress.io/): 現代化的端對端測試工具，提供完整的測試體驗。
  * [WebdriverIO](https://cn.vitest.dev/guide/comparisons): 可擴展的瀏覽器和行動端自動化測試框架。

### API 模擬與假資料

在前後端分離的開發模式中，這些工具讓我們能夠獨立於後端進行開發、測試和除錯。

* **API 模擬**
  * [Postman](https://www.postman.com/downloads/): 業界標準的 API 協作平台與測試工具。它提供了一個強大的圖形化介面，讓開發者可以輕鬆地發送各種 HTTP 請求（GET, POST 等）來測試和除錯 API，是後端開發與前端串接時的必備神器。
  * [Mock Service Worker (MSW)](https://mswjs.io/): 在網路層攔截請求的 API 模擬庫，這意味著程式碼完全不需要修改，就能無縫地與模擬 API 互動，無論是 REST API 還是 GraphQL 都支援。
  * [JSON Server](https://github.com/typicode/json-server): 快速搭建功能完整的 RESTful API 原型。
* **假資料**
  * [Faker.js](https://fakerjs.dev/): 可以生成大量逼真的假資料（姓名、地址、圖片等）。
  * [JSON Generatoｒ](https://json-generator.com/): 客製化 JSON 模擬資料。
  * [Mockaroo](https://www.mockaroo.com/): 產生模擬資料並以多種格式（JSON、CSV、XML 等）輸出。
  * [NimbleText](https://nimbletext.com/live): 根據給定格式將行輸入轉換為特定輸出。
* **假字產生器**
  * [中文假字產生器](https://textgen.cqd.tw/)
  * [Lorem Ipsum](https://www.lipsum.com/) 英文假字
* **假圖產生器**
  * [fakeimg](https://fakeimg.pl/)
  * [Lorem Picsum](https://picsum.photos/)
  * [placekitten](http://placekitten.com/)  貓奴專用假圖
  * [lorem.space](https://lorem.space/)  包括電影、遊戲、專輯、書籍等封面，大頭照、鞋子、手錶、家俱等

## 資源

### OpenData API

> 不管是寫程式的新手、老手，在做專案的時候，常常需要資料，這時候需要去找有趣、夠酷、免費的 API 來用！

* [Try Public APIs for free](https://github.com/public-apis/public-apis): 由一群社群成員以及 APILayer 的工作人員精心維護。它包含來自眾多領域的大量公共 API，您可以將其用於自己的產品。您可以將其視為多年來由社群精心管理的 API 寶庫。
* [政府資料開放平臺](https://data.gov.tw/): 為台灣政府各機關於職權範圍內取得或做成，且依法得公開之各類電子資料，包含文字、數據、圖片、影像、聲音、詮釋資料(metadata)等
* [公共運輸整合資訊流通服務平台 (PTX)](https://ptx.transportdata.tw/PTX/)
* [全球即時匯率API](https://tw.rter.info/howto_currencyapi.php)
* [氣象開放資料平臺](https://opendata.cwb.gov.tw/index)
* [Joke API](https://sv443.net/jokeapi/v2/): 笑話&語言，免費的API網站，可透過query讓此API隨機產生笑話、語言等，只有輸出格式需選擇json。
* [OpenWeatherMap](http://openweathermap.org/): 天氣，提供各種不同天氣資訊，從當下天氣狀況到每段時間的天氣預測都有。
* [leaflet ](https://leafletjs.com/): 地圖，一款輕量化的程式庫，其主要使用於地圖的繪製，也提供許多方法可使用，用法也相當的簡單，讓我們繪製地圖更加地容易
* [PokéAPI](https://pokeapi.co/): 串接寶可夢精靈 API ，可以撈到大量神奇寶貝資訊（動作、類型、能力）
* [GIPHY](https://developers.giphy.com/):  是世界上最大的 GIF 資料庫，可以撈到一大堆梗圖，方便你開發有趣的 side project（需要 API 密鑰）
* [{JSON} Placeholder](https://jsonplaceholder.typicode.com/): 快速撈一些 json 假資料，方便開發時有資料可以快速測試
* [SWAPI](https://swapi.dev/): 電影「星際大戰」API，擁有大量行星、宇宙飛船、車輛、電影和物種的數據～
* [NASA](https://api.nasa.gov/): 提供大量來自 NASA 的真實數據，包括 NASA 好奇號、機遇號和精神號探測器在火星上收集的圖像數據。需要 API 密鑰
* [Unsplash](https://unsplash.com/developers): 由大量攝影師上傳照片的優質圖片資料庫，開發網站首頁、串接漂亮照片的必備 API 網站。需要 API 密鑰
* [dev.to](https://developers.forem.com/api) 是國外一個開發者討論區，在上面寫文章的話，可以透過 API 把文章撈出來！
* [Breaking Bad](https://breakingbadapi.com/documentation): Netflix 神劇，《絕命毒師》的的 API。它可以讓你拿到劇中名言、人物、集數、各式死亡資訊
* [Random Data](https://random-data-api.com/documentation): 想發揮創意並在專案中使用各種奇怪資料嗎？也許是一款隨機獲得啤酒或電腦的遊戲？試試看隨機資料 API 吧～
* [Rest Countries](https://restcountries.com/#rest-countries):  讓您可以通過 RESTful API 拿到有關各個國家/地區的大量豐富資訊～
* [Rick and Morty](https://rickandmortyapi.com/documentation): 很受工程師歡迎！這個 API 可以讓你按劇集、角色、地點進行查詢～！

### 參考來源

* [Awesome React](https://github.com/enaqx/awesome-react): 也是一個蠻完整關於React生態系的主題列表整理
* [Awesome React Components](https://github.com/brillout/awesome-react-components#editable-data-grid--spreadsheet): 這個list整理了React components的資源
* [Awesome React Headless Components](https://github.com/jxom/awesome-react-headless-components)收集所有的 Headless 相關元件（不只UI庫），以下列出自己常用的。
* [Front End | JavaScript Fun | 前端工坊](https://www.javascript.fun/): 收錄許多知名的網站工具、開發套件、網頁元件
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
* [awesome-javascript](https://github.com/sorrycc/awesome-javascript): github上的「awesome」系列
* [前端开发必备文档（持续更新中...）](https://juejin.cn/post/7234917363194429477#heading-56)
* [每天一套件，工作沒煩惱 ](https://ithelp.ithome.com.tw/users/20129747/ironman/5293)
