<script setup lang="ts">
const painPoints = [
  {
    icon: 'pi pi-users',
    title: '排程與備料脫鉤',
    desc: 'HMLV 工廠的典型挑戰：排程部門專注產能分配，但物料需求計畫、安全庫存、採購跟催缺乏系統化管理，導致工單與物料到位時間無法同步。',
    metric: '組織流程缺口',
    severity: 'error',
  },
  {
    icon: 'pi pi-calculator',
    title: 'MRP 展料瓶頸',
    desc: '當 BOM 層數多、Lead Time 維護不完整時，傳統 ERP 的 MRP 模組難以即時產出準確的淨需求。計畫人員轉而依賴 Excel，系統形同虛設。',
    metric: 'ERP 效能不足',
    severity: 'error',
  },
  {
    icon: 'pi pi-stop-circle',
    title: '產能利用率偏低',
    desc: '300+ 台 CNC（官網數據），產能充足但利用率受多重因素影響：缺料等待、頻繁換線、人員調度失衡、現場對排程變更的適應成本。全局優化需要同時處理設備、人力和物料三個維度。',
    metric: '設備 + 人力調度',
    severity: 'warn',
  },
  {
    icon: 'pi pi-box',
    title: 'SKU 複雜度極高',
    desc: '加工超過 10 萬種零組件（官網數據），84,240 個自動倉儲儲位。以此規模推估，每日出貨品項種類龐大，人工管控已超過負荷極限。',
    metric: '100K+ SKU',
    severity: 'warn',
  },
  {
    icon: 'pi pi-tablet',
    title: '現場數位落差',
    desc: '製造業數位轉型的經典困境：資深職人熟悉產品但不擅操作系統，入出站報工準確率低；年輕人員會用系統但缺乏產品判讀經驗，形成惡性循環。',
    metric: '人機介面瓶頸',
    severity: 'warn',
  },
  {
    icon: 'pi pi-qrcode',
    title: '報工自動化需求',
    desc: '當報工依賴人工 key-in，資料延遲和錯誤率會隨 SKU 數量放大。RFID/條碼掃描 + AOI 視覺辨識可以取代手動報工，讓系統數據即時且準確。',
    metric: '自動化取代人工',
    severity: 'info',
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
      <p class="section-desc">根據金器工業官網公開資訊，針對 HMLV 高混合低量製造場景推導的典型挑戰</p>
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
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-4);
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .pain-grid {
    grid-template-columns: repeat(2, 1fr);
  }
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

.pain-card--info {
  border-left: 3px solid var(--status-info);
}

.pain-card--info .pain-card__icon {
  background: rgba(59, 130, 246, 0.15);
  color: var(--status-info);
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
