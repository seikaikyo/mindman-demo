<script setup lang="ts">
const FACTORY_URL = 'https://factory.dashai.dev'

const solutions = [
  {
    pain: 'MRP 展料失靈',
    painIcon: 'pi pi-calculator',
    module: 'MRP 淨需求計算',
    moduleDesc: 'BOM 自動展開、扣除庫存和在途量、產出採購建議清單',
    ai: '需求預測 AI',
    aiDesc: '庫存降 38%、準確率 92%',
    link: `${FACTORY_URL}/flow/planning`,
    linkLabel: 'Production Planning',
  },
  {
    pain: '排程無全局優化',
    painIcon: 'pi pi-calendar',
    module: 'APS + Finite Scheduler',
    moduleDesc: '約束條件排程、產能負荷平衡、自動派工到最適產線',
    ai: 'AI 排程最佳化',
    aiDesc: '規劃時間 -94%、稼動率 +24%',
    link: `${FACTORY_URL}/tv/scheduling`,
    linkLabel: 'War Room Scheduling',
  },
  {
    pain: '產線 idle 空轉',
    painIcon: 'pi pi-stop-circle',
    module: 'MES 稼動監控',
    moduleDesc: '工單即時追蹤、OEE 監控、停機原因分析',
    ai: '預測性維護',
    aiDesc: '停機 -75%、MTBF +233%',
    link: `${FACTORY_URL}/tv/equipment`,
    linkLabel: 'War Room Equipment',
  },
  {
    pain: '84,240 儲位管理',
    painIcon: 'pi pi-warehouse',
    module: 'WMS + AS/RS',
    moduleDesc: '自動倉儲、儲位管理、揀貨路徑優化、準確率 99.9%',
    ai: '庫存最佳化 AI',
    aiDesc: '持有成本 -35%、周轉 +75%',
    link: `${FACTORY_URL}/tv/warehouse`,
    linkLabel: 'War Room Warehouse',
  },
  {
    pain: '供應商風險盲區',
    painIcon: 'pi pi-truck',
    module: 'SRM + VMI',
    moduleDesc: '供應商評鑑、自動補貨、交期追蹤、績效分析',
    ai: '供應商風險預測',
    aiDesc: '提前 30 天預警、中斷 -75%',
    link: `${FACTORY_URL}/tv/supply`,
    linkLabel: 'War Room Supply',
  },
  {
    pain: '出貨追蹤黑箱',
    painIcon: 'pi pi-eye-slash',
    module: '訂單全程追蹤',
    moduleDesc: '從訂單到出貨 9 階段即時可視化，每張訂單的工單、物料、品質、出貨一目瞭然',
    ai: '',
    aiDesc: '',
    link: `${FACTORY_URL}/tv/tracking`,
    linkLabel: 'War Room Tracking',
  },
]
</script>

<template>
  <section class="solutions section-fade">
    <div class="section-header">
      <h2 class="section-title">
        <i class="pi pi-arrows-h" />
        痛點對應方案
      </h2>
      <p class="section-desc">每個問題都有對應的系統模組 + AI 加值方案，點擊可查看 Live Demo</p>
    </div>
    <div class="solution-list">
      <div v-for="s in solutions" :key="s.pain" class="solution-row">
        <div class="solution-pain">
          <i :class="s.painIcon" />
          <span>{{ s.pain }}</span>
        </div>
        <div class="solution-arrow">
          <i class="pi pi-arrow-right" />
        </div>
        <div class="solution-module">
          <div class="solution-module__name">{{ s.module }}</div>
          <div class="solution-module__desc">{{ s.moduleDesc }}</div>
          <div v-if="s.ai" class="solution-module__ai">
            <i class="pi pi-sparkles" />
            <span class="ai-label">{{ s.ai }}</span>
            <span class="ai-metric">{{ s.aiDesc }}</span>
          </div>
        </div>
        <a :href="s.link" target="_blank" rel="noopener" class="solution-link">
          <i class="pi pi-external-link" />
          {{ s.linkLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions {
  padding: var(--sp-12) var(--sp-6);
  border-top: 1px solid var(--border);
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

.section-title i { color: var(--brand); }

.section-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.solution-list {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

.solution-row {
  display: grid;
  grid-template-columns: 180px 32px 1fr 160px;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-4);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
}

.solution-row:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-card);
}

.solution-pain {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--status-error);
}

.solution-pain i {
  font-size: 1rem;
}

.solution-arrow {
  display: flex;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.solution-module__name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--status-ok);
  margin-bottom: 2px;
}

.solution-module__desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.solution-module__ai {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  margin-top: var(--sp-2);
  font-size: 0.72rem;
  padding: var(--sp-1) var(--sp-2);
  background: rgba(139, 92, 246, 0.1);
  border-radius: var(--radius-sm);
  width: fit-content;
}

.solution-module__ai i {
  color: #a78bfa;
  font-size: 0.7rem;
}

.ai-label {
  font-weight: 600;
  color: #a78bfa;
}

.ai-metric {
  color: var(--text-muted);
}

.solution-link {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--brand);
  padding: var(--sp-2) var(--sp-3);
  border: 1px solid var(--brand);
  border-radius: var(--radius-sm);
  white-space: nowrap;
  text-decoration: none;
  transition: all var(--transition);
  justify-self: end;
}

.solution-link:hover {
  background: var(--brand-glow);
  text-decoration: none;
}

@media (max-width: 1024px) {
  .solution-row {
    grid-template-columns: 1fr;
    gap: var(--sp-2);
  }

  .solution-arrow { display: none; }

  .solution-pain {
    padding-bottom: var(--sp-2);
    border-bottom: 1px solid var(--border);
  }

  .solution-link {
    justify-self: start;
  }
}

@media (max-width: 768px) {
  .solutions {
    padding: var(--sp-8) var(--sp-4);
  }
}
</style>
