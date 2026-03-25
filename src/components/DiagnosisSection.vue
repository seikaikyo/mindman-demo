<script setup lang="ts">
const painPoints = [
  {
    icon: 'pi pi-users',
    title: '無物控職能',
    desc: '10 個生管負責排程，但沒有人系統性地管物料需求、安全庫存和採購跟催。排了工單，料卻沒到位。',
    metric: '10 生管 / 0 物控',
    severity: 'error',
  },
  {
    icon: 'pi pi-calculator',
    title: 'MRP 失靈',
    desc: '鼎新 ERP 的 MRP 模組跟不上 HMLV 節奏。BOM 層數多、Lead Time 沒維護，展料結果不準，生管改用 Excel 手動排。',
    metric: '鼎新 ERP 瓶頸',
    severity: 'error',
  },
  {
    icon: 'pi pi-stop-circle',
    title: '產線 idle',
    desc: '300+ 台 CNC 和多條組裝線，有產能卻跑不起來。缺料等待 + 換線頻繁 + 排程沒有全局最佳化。',
    metric: '多條線空轉',
    severity: 'warn',
  },
  {
    icon: 'pi pi-box',
    title: 'SKU 爆量',
    desc: '10 萬種零件、84,240 個儲位、每天 1,000 種不重複品項出貨。靠人工 Excel 追料根本追不完。',
    metric: '100K+ SKU',
    severity: 'warn',
  },
]
</script>

<template>
  <section class="diagnosis section-fade">
    <div class="section-header">
      <h2 class="section-title">
        <i class="pi pi-search" />
        現況診斷
      </h2>
      <p class="section-desc">根據金器工業公開資訊與面談內容，識別四大核心痛點</p>
    </div>
    <div class="pain-grid">
      <div
        v-for="p in painPoints"
        :key="p.title"
        class="pain-card"
        :class="`pain-card--${p.severity}`"
      >
        <div class="pain-card__icon">
          <i :class="p.icon" />
        </div>
        <div class="pain-card__content">
          <div class="pain-card__head">
            <h3>{{ p.title }}</h3>
            <span class="pain-card__metric">{{ p.metric }}</span>
          </div>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diagnosis {
  padding: var(--sp-12) var(--sp-6);
}

.section-header {
  text-align: center;
  margin-bottom: var(--sp-8);
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
  margin-bottom: var(--sp-2);
}

.section-title i {
  color: var(--brand);
}

.section-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.pain-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-4);
  max-width: 960px;
  margin: 0 auto;
}

.pain-card {
  display: flex;
  gap: var(--sp-4);
  padding: var(--sp-6);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
}

.pain-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.pain-card--error {
  border-left: 3px solid var(--status-error);
}

.pain-card--warn {
  border-left: 3px solid var(--status-warn);
}

.pain-card__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.pain-card--error .pain-card__icon {
  background: rgba(239, 68, 68, 0.15);
  color: var(--status-error);
}

.pain-card--warn .pain-card__icon {
  background: rgba(245, 158, 11, 0.15);
  color: var(--status-warn);
}

.pain-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  margin-bottom: var(--sp-2);
}

.pain-card__head h3 {
  font-size: 1rem;
  font-weight: 700;
}

.pain-card__metric {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px var(--sp-2);
  border-radius: var(--radius-sm);
  white-space: nowrap;
  background: var(--bg-surface);
  color: var(--text-secondary);
}

.pain-card__content p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .diagnosis {
    padding: var(--sp-8) var(--sp-4);
  }

  .pain-grid {
    grid-template-columns: 1fr;
  }

  .pain-card {
    padding: var(--sp-4);
  }
}
</style>
