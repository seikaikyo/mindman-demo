<script setup lang="ts">
const painPoints = [
  {
    icon: 'pi pi-sync',
    title: '排程與備料協作',
    desc: '隨著 SKU 數量持續成長，排程與物料到位的同步需要更即時的系統支援，減輕人工協調的負擔。',
    metric: '效率提升',
    severity: 'info',
  },
  {
    icon: 'pi pi-calculator',
    title: 'MRP 精算輔助',
    desc: 'BOM 層數多、品項持續擴增，系統化的 MRP 展料能協助團隊更快產出準確淨需求，減少人工核算時間。',
    metric: '速度加倍',
    severity: 'info',
  },
  {
    icon: 'pi pi-chart-line',
    title: '稼動率持續提升',
    desc: '300+ 台 CNC 的排程組合複雜度極高。系統輔助全局排程，幫助現場減少換線等待，提高整體設備利用率。',
    metric: '產能最大化',
    severity: 'ok',
  },
  {
    icon: 'pi pi-box',
    title: '庫存結構優化',
    desc: '數萬個儲位的管理已有穩固基礎。進一步導入 ABC 分類與動態安全庫存，可在不斷料前提下釋放資金。',
    metric: '資金活化',
    severity: 'ok',
  },
  {
    icon: 'pi pi-tablet',
    title: '現場報工簡化',
    desc: '資深職人的經驗是最大資產。透過條碼/RFID 簡化入出站操作，讓師傅專注在產品，系統自動處理數據。',
    metric: '人機協作',
    severity: 'info',
  },
  {
    icon: 'pi pi-eye',
    title: '即時可視化',
    desc: '將分散在各系統的生產數據整合到統一看板，讓管理層和現場都能即時掌握進度，減少溝通來回。',
    metric: '資訊透明',
    severity: 'ok',
  },
]
</script>

<template>
  <section class="diagnosis section-fade">
    <div class="section-header">
      <span class="section-number">01</span>
      <h2 class="section-title">系統可協助的面向</h2>
      <p class="section-desc">針對空壓元件 HMLV 製造場景，智慧系統可從以下面向協助團隊提升效率</p>
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
.pain-card--ok { border-top: 3px solid var(--status-ok); }

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
.pain-card--ok .pain-card__icon { background: rgba(34, 197, 94, 0.12); color: var(--status-ok); }

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
