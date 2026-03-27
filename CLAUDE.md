# MindMan Demo

## 專案概述

MindMan HMLV 空壓元件智慧製造解決方案展示站，單頁捲動式簡報。
共用 dashai-api/factory 後端。

## 技術架構

| 層 | 技術 |
|-----|------|
| 框架 | Vue 3.5 + TypeScript 5.9 + Vite 8 |
| UI | PrimeVue 4.5 (Aura 主題) + PrimeIcons 7 |
| 部署 | Vercel |

## 目錄結構

```
src/
├── components/
│   ├── HeroSection.vue         # 公司數據展示
│   ├── DiagnosisSection.vue    # 痛點卡片
│   ├── SolutionMapping.vue     # 解決方案功能
│   ├── OrderTraceSection.vue   # 訂單追蹤 demo
│   ├── RoadmapRoi.vue          # 路線圖 + ROI 指標
│   └── LiveDemoLinks.vue       # Demo 連結按鈕
├── composables/
│   └── useApi.ts               # dashai-api/factory fetch 封裝
├── assets/                     # 靜態圖片
├── App.vue                     # 根元件（section fade-in 動畫）
├── main.ts                     # PrimeVue 初始化
└── style.css                   # Design tokens + 全域樣式
```

## 設計系統（style.css）

- 深色工業風主題（`--bg-base: #080c12`）
- 品牌色: `--brand: #00c8ff`（工業青）
- 間距 4px 基數（`--sp-1` ~ `--sp-16`）
- 字型: Noto Sans TC (400/600/700/800)
- Intersection Observer fade-in 動畫

## API 連線

- Base URL: `https://dashai-api.onrender.com/factory`（54 CRUD APIs）

## Vite 設定

- 開發 port: 5180 (strictPort)
- TypeScript strict mode

## 開發注意事項

- 單頁捲動式，無 Vue Router
- 無狀態管理（純 props 傳遞）
- `robots: noindex, nofollow`（展示用，不索引）
- 6 個元件共 ~1700 行，結構簡單
