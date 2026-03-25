<script setup lang="ts">
const painPoints = [
  {
    icon: 'pi pi-users',
    title: '排程與備料脫鉤',
    desc: '排程部門專注產能分配，物料需求計畫、安全庫存、採購跟催缺乏系統化管理，工單與物料到位時間無法同步。',
    metric: '流程缺口',
    severity: 'error',
  },
  {
    icon: 'pi pi-calculator',
    title: 'MRP 展料瓶頸',
    desc: 'BOM 層數多、Lead Time 維護不完整，傳統 ERP 的 MRP 難以即時產出準確淨需求，計畫人員轉而依賴 Excel。',
    metric: 'ERP 瓶頸',
    severity: 'error',
  },
  {
    icon: 'pi pi-stop-circle',
    title: '產能利用率偏低',
    desc: '300+ 台 CNC 產能充足，但缺料等待、頻繁換線、人員調度失衡，實際稼動率未達理想水準。',
    metric: '多維度損失',
    severity: 'warn',
  },
  {
    icon: 'pi pi-box',
    title: 'SKU 複雜度極高',
    desc: '加工超過 10 萬種零組件，84,240 個自動倉儲儲位，日出貨品項龐大，人工管控超過負荷極限。',
    metric: '100K+ SKU',
    severity: 'warn',
  },
  {
    icon: 'pi pi-tablet',
    title: '現場數位落差',
    desc: '資深職人不擅操作系統，報工準確率低；年輕人員會用系統但不懂產品判讀，形成惡性循環。',
    metric: '人機斷層',
    severity: 'warn',
  },
  {
    icon: 'pi pi-qrcode',
    title: '報工自動化需求',
    desc: '人工 key-in 的資料延遲和錯誤率隨 SKU 放大。RFID 掃描 + AOI 辨識可取代手動報工，數據即時準確。',
    metric: '自動化解方',
    severity: 'info',
  },
]
</script>

<template>
  <section class="diagnosis section-fade">
    <div class="section-header">
      <span class="section-number">01</span>
      <h2 class="section-title">現況診斷</h2>
      <p class="section-desc">根據官網公開資訊，針對 HMLV 高混合低量製造場景推導的典型挑戰</p>
    </div>
    <div class="pain-grid">
      <div
        v-for="p in painPoints"
        :key="p.title"
        class="pain-card"
        :class="`pain-card--${p.severity}`"
      >
        <div class="pain-card__top">
          <div class="pain-card__icon">
            <i :class="p.icon" />
          </div>
          <span class="pain-card__metric">{{ p.metric }}</span>
        </div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diagnosis {
  padding: var(--sp-16) var(--sp-6);
}

.section-header {
  text-align: center;
  margin-bottom: var(--sp-8);
}

.section-number {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--brand);
  background: var(--brand-glow);
  border-radius: var(--radius-sm);
  padding: 2px 10px;
  margin-bottom: var(--sp-3);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: var(--sp-2);
}

.section-desc {
  color: var(--text-secondary);
  font-size: 0.88rem;
  max-width: 560px;
  margin: 0 auto;
}

.pain-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-4);
  max-width: 1060px;
  margin: 0 auto;
}

.pain-card {
  padding: var(--sp-6);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.pain-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.pain-card--error { border-top: 3px solid var(--status-error); }
.pain-card--warn { border-top: 3px solid var(--status-warn); }
.pain-card--info { border-top: 3px solid var(--status-info); }

.pain-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--sp-4);
}

.pain-card__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.pain-card--error .pain-card__icon { background: rgba(239, 68, 68, 0.12); color: var(--status-error); }
.pain-card--warn .pain-card__icon { background: rgba(245, 158, 11, 0.12); color: var(--status-warn); }
.pain-card--info .pain-card__icon { background: rgba(59, 130, 246, 0.12); color: var(--status-info); }

.pain-card__metric {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 100px;
  white-space: nowrap;
  background: var(--bg-surface);
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

.pain-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: var(--sp-2);
}

.pain-card p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

@media (max-width: 1024px) {
  .pain-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .diagnosis { padding: var(--sp-8) var(--sp-4); }
  .pain-grid { grid-template-columns: 1fr; }
  .pain-card { padding: var(--sp-4); }
  .section-title { font-size: 1.4rem; }
}
</style>
