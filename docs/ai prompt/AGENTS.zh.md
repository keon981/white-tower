# 概要

1. 所有回應必須使用繁體中文，除非特定術語或工具名稱要求使用原始語言。
2. 代碼註釋必須使用英文。
3. 如果使用者使用其他語言輸入，除非另有明確要求，否則請將回覆翻譯為繁體中文。
4. 始終遵循使用者所需的工具和開發環境。

## 技術堆疊
- React
- Vite
- VItest
- TypeScript
- Tailwind CSS
- Shadcn UI

## 通用程式碼風格和格式
- 遵循 Airbnb 程式碼格式風格指南。
- 所有程式碼和文件均使用英文。
- 每個文件匯出一次。

## TypeScript 最佳實踐
- 所有程式碼均使用 TypeScript；優先使用 `interfaces` 而非 `types`。
- 避免使用 `any`；使用明確類型和映射。
- 使用具有 TypeScript interfaces 的函數式元件(functional components )。
- 在 TypeScript 中啟用 strict mode，以提高類型安全性。
- 始終聲明每個變數和函數（參數和返回值）的類型。

## 命名約定
- 類別使用大駝峰命名法 (UpperCamelCase)。
- 變數、函數和方法使用小駝峰命名法 (lowerCamelCase)。
- 檔案和目錄名稱使用短橫線命名法 (kebab-case)。
- React 元件檔名使用大駝峰命名法 (UpperCamelCase)（例如，UserCard.tsx，而不是 user-card.tsx）。
- React 自訂 hooks 檔案名稱使用小駝峰命名法 (lowerCamelCase)（例如，useFetch.ts，而不是 use-fetch.tsx）。
-  environment variables 使用大寫字母。
- 使用帶有助動詞的描述性變數名稱（例如，isLoading、hasError）。
- 請盡可能選擇語意化的 HTML Tag，而不是 div 和 span。例如，使用 <ul> 來表示列表，使用 <article> 和 <section> 來劃分頁面和內容，使用 <b>、<i>、<strong> 和 <em> 來強調單字。

## 專案結構和架構
- Structure files: exported component, libs, utils, pages, hooks, routers, types.

```
src
├── components          # Shared React components
├── hooks               # Custom React hooks
├── layouts
├── pages
├── router
├── styles
├── types               # TypeScript types
├── utils               # Helper functions
└── lib                 # Shared libraries
```

## 函數和邏輯
- 保持函數簡短且用途單一（少於 20 行）。
- 使用 functional 和 declarative 程式設計模式；避免使用 classes。
- 優先使用迭代和模組化，而不是程式碼重複。
- 透過以下方式避免程式碼區塊深度嵌套：
    - 使用早期返回。
    - 將邏輯提取到工具函數中。
    - 使用高階函數（map、filter、reduce）來簡化邏輯。
- 使用預設參數值，而不是 null/undefined 檢查。
- 對純函數使用「function」關鍵字。

## 資料處理
- 避免過度使用原始型別；將資料封裝在複合型別中。
- 避免將驗證功能放在函數內部，而是使用具有內部驗證功能的類別。
- 資料優先考慮不可變性：
    - 對不可變屬性使用 `readonly` 屬性。
    - 對不變的字面量使用 `as const` 屬性。

## 資料取得與表單
- 優先以 packages 當中的套件為主，如果為新專案，則以下面三條為主：
    - 使用 TanStack Query (react-query) 進行前端資料擷取。
    - 使用 React Hook Form 進行表單處理。
    - 使用 Zod 進行驗證。

## 樣式和 UI
- 使用 Tailwind CSS 進行樣式設定。
- 使用 Shadcn UI 進行元件處理。

## 狀態管理與邏輯
- 必要時使用 React Context 管理全域狀態
- 在 useEffect hooks 中實現適當的清理

## 測試
- 單元測試請使用 Vitest，無需解釋設定步驟。至少提供 3 個測試用例，包括邊緣用例。
- 為實用程式和元件編寫單元測試


## Git
- 使用 PR 回覆時，描述必須簡潔，並遵循 Angular 團隊提交規範，主題長度 **不得超過 35 個字元** 。所有 PR 描述必須使用英文，且 PR 的評論應在必要時解釋如何進行程式碼重構，以簡化程式碼。
- 要求採用以下格式：<type>: <subject>，其中主題長度不得超過 35 個字元。
- 如果被要求「清理程式碼」或重構，請以更簡潔、更易於維護的方式重寫程式碼，並在 PR 訊息中解釋重構的原因。

## <type> 描述符選項包括：

1. feat：新功能
2. fix：錯誤修復
3. docs：僅文檔更改
4. style：不影響程式碼意義的變更（格式、空格）
5. refactor：既不是錯誤修復也不是功能的程式碼更改
6. perf：程式碼效能改進
7. test：新增或修改測試
8. chore：建置流程或輔助工具更改

分支命名必須遵循「<type>/<component_name>/<feature_name>」格式。如果沒有指定組件，則省略中間部分。

類型前綴包括：
1. feat 或 feature：新功能開發
2. bugfix 或 bug：修復錯誤
3. hotfix：立即修復生產環境
4. test 或 experiment：實驗分支或測試分支
5. release：版本發布分支
6. merge：用於解決衝突的臨時分支
7. modify：調整或最佳化
8. refactor：程式碼重構

## Documentation

- 維護清晰的 README 文件，其中包含設定說明
    - README 文件需要記錄 API 交互和數據流
- 除非用於複雜邏輯，否則程式碼不要包含註釋
- 文件許可權要求