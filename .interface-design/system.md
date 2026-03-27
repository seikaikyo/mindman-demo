# MindMan Demo - Design System

> 從現有程式碼萃取，所有 UI 開發必須遵循本規範。

## 色彩

### 背景層

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg-base` | #080c12 | 頁面背景（最深） |
| `--bg-elevated` | #0e1420 | 提升層 |
| `--bg-surface` | #141c2b | 表面 |
| `--bg-card` | #1a2436 | 卡片背景 |

### 文字

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-primary` | #e4e8f0 | 主要文字 |
| `--text-secondary` | #94a0b8 | 次要文字 |
| `--text-muted` | #6b7590 | 淡化文字 |

### 品牌色

| Token | 值 | 用途 |
|-------|-----|------|
| `--brand` | #00c8ff | 品牌色（工業青） |
| `--brand-dim` | #0098c8 | Hover |
| `--industry-blue` | #005bac | 工業藍 |

### 狀態色

| Token | 值 | 用途 |
|-------|-----|------|
| `--status-ok` | #22c55e | 成功 |
| `--status-warn` | #f59e0b | 警告 |
| `--status-error` | #ef4444 | 錯誤 |
| `--status-info` | #3b82f6 | 資訊 |

### 邊框

| Token | 值 |
|-------|-----|
| `--border` | #1e2a3e |
| `--border-hover` | #2a3a52 |

---

## 間距

4px 基數：

| Token | 值 |
|-------|-----|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-6` | 24px |
| `--sp-8` | 32px |
| `--sp-12` | 48px |
| `--sp-16` | 64px |

---

## 字型

```css
font-family: 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;
```

粗細: 400, 600, 700, 800

---

## 圓角

| Token | 值 | 用途 |
|-------|-----|------|
| `--radius-sm` | 4px | 小元素 |
| `--radius-md` | 8px | 卡片 |
| `--radius-lg` | 12px | 大元件 |
| `--radius-xl` | 16px | 保留 |

---

## 動畫

- 標準過渡: `200ms ease`
- Section fade-in: Intersection Observer 滾動觸發

---

## 元件模式

### PrimeVue
- 主題: Aura preset
- 單頁捲動式，無路由
- 6 個 section 元件依序排列

---

## 響應式

- Grid 從 6 欄 → 3 欄（手機）
- 與 smart-factory-demo 共用深色工業風格

---

## 備註

此專案與 smart-factory-demo 共用相同的設計語言（深色工業風、工業青品牌色），
色彩 token 名稱完全一致，可互相參照。
