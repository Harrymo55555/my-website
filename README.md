# 寶福諾品牌官網

繁體中文品牌展示與全球渠道合作網站。原生 HTML、CSS、JavaScript，無第三方執行依賴。

## 預覽及建置

使用 Node.js 18 或更新版本：

```sh
npm run dev
npm run build
npm run preview
```

開啟 http://127.0.0.1:4173 。`dist/` 為可部署的純靜態網站。

## 修改內容

- `index.html`：繁體中文文案、電話、電郵及頁面結構。
- `styles.css`：黑金色系、版面及手機適配。
- `script.js`：手機選單、渠道專屬合作電郵、複製電郵。
- `assets/`：品牌提供的 Logo、產品視覺與草本意象。
- 修改電話或電郵時，需同步核對 `index.html` 與 `script.js`。

聯絡電話：+86 15626293906。電郵：15626293906@163.com。
電郵按鈕會開啟訪客的電郵程式，不會在網站直接提交資料。

## 內容來源與待確認事項

資料來源為使用者指定：

- https://baofunuo-zhonghua-shenbao.vercel.app/ ：Logo、產品圖、草本意象、包裝規格。
- https://grt.com.hk/#brands ：中華腎寶協作研發背景。

資產保留參考站原始圖片，未改寫包裝。草本圖片作品牌意象用途，不以圖片推定正式配方。
60 粒規格依現有包裝資料；完整標籤、配方、正式製造及認證文件仍待提供。
頁面只陳述公開協作研發關係，未將香港貴仁堂的公司註冊、商標或認證直接作為寶福諾資質。
公司法定主體、正式地址及招商政策待使用者後續修改，本版不公佈未確定的起訂量、收益承諾或區域獨家政策。

## GitHub Pages 託管

公開倉庫：https://github.com/Harrymo55555/my-website

網站地址：https://harrymo55555.github.io/my-website/

GitHub Pages 使用 `main` 分支的根目錄作為發佈來源。根目錄中的 `.nojekyll` 關閉 Jekyll 處理，HTML、CSS、JavaScript 與圖片均以靜態檔案提供。

修改並提交 `index.html`、`styles.css`、`script.js` 或 `assets/` 後，GitHub Pages 會重新部署。圖片及樣式均使用相對路徑，支援 `/my-website/` 子路徑。

本地資料庫文件不屬於網站發佈內容，不包含在公開倉庫中。任何訪問令牌或私人憑證都不應加入倉庫。
