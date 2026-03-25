<script setup lang="ts">
const FACTORY_URL = 'https://factory.dashai.dev'

const solutions = [
  {
    need: 'BOM 核算加速',
    needIcon: 'pi pi-calculator',
    module: 'MRP 淨需求計算',
    moduleDesc: '自動展開 BOM、扣除庫存和在途量、產出採購建議，減輕人工核算負擔',
    ai: '需求預測 AI',
    aiDesc: '庫存降 38%、準確率 92%',
    link: `${FACTORY_URL}/flow/planning`,
    linkLabel: 'Production Planning',
  },
  {
    need: '排程效率提升',
    needIcon: 'pi pi-calendar',
    module: 'APS + Finite Scheduler',
    moduleDesc: '約束條件排程、產能負荷平衡、輔助派工決策',
    ai: 'AI 排程最佳化',
    aiDesc: '規劃時間 -94%、稼動率 +24%',
    link: `${FACTORY_URL}/tv/scheduling`,
    linkLabel: 'War Room Scheduling',
  },
  {
    need: '稼動率即時掌握',
    needIcon: 'pi pi-chart-line',
    module: 'MES 稼動監控',
    moduleDesc: '工單即時追蹤、OEE 監控、停機原因分析，數據化支撐決策',
    ai: '預測性維護',
    aiDesc: '停機 -75%、MTBF +233%',
    link: `${FACTORY_URL}/tv/equipment`,
    linkLabel: 'War Room Equipment',
  },
  {
    need: '庫存結構優化',
    needIcon: 'pi pi-warehouse',
    module: 'WMS + ABC 動態庫存',
    moduleDesc: '儲位管理、揀貨路徑優化。搭配 ABC 分類，在不斷料前提下降低庫存金額',
    ai: '庫存最佳化 AI',
    aiDesc: '持有成本 -35%、周轉 +75%',
    link: `${FACTORY_URL}/tv/warehouse`,
    linkLabel: 'War Room Warehouse',
  },
  {
    need: '供應商協作',
    needIcon: 'pi pi-truck',
    module: 'SRM + VMI',
    moduleDesc: '供應商評鑑、C 類物料自動補貨、交期追蹤，減少人工跟催',
    ai: '供應商風險預測',
    aiDesc: '提前 30 天預警、中斷 -75%',
    link: `${FACTORY_URL}/tv/supply`,
    linkLabel: 'War Room Supply',
  },
  {
    need: '訂單全程可視',
    needIcon: 'pi pi-eye',
    module: '訂單追蹤看板',
    moduleDesc: '從接單到出貨 9 階段即時可視化，工單、物料、品質、出貨狀態一目瞭然',
    ai: '',
    aiDesc: '',
    link: `${FACTORY_URL}/tv/tracking`,
    linkLabel: 'War Room Tracking',
  },
  {
    need: '現場報工簡化',
    needIcon: 'pi pi-qrcode',
    module: 'RFID + AOI 自動報工',
    moduleDesc: '條碼/RFID 刷掃取代手動 key-in，讓師傅專注產品、系統自動處理數據',
    ai: 'AOI 自動檢測',
    aiDesc: '檢出率 99.2%、產能 +300%',
    link: `${FACTORY_URL}/flow/quality/ai`,
    linkLabel: 'AOI AI Demo',
  },
]
</script>

<template>
  <section class="solutions section-fade">
    <div class="section-header">
      <span class="section-number">02</span>
      <h2 class="section-title">需求對應方案</h2>
      <p class="section-desc">每個需求都有對應的系統模組 + AI 加值，點擊查看 Live Demo</p>
    </div>
    <div class="solution-list">
      <div v-for="s in solutions" :key="s.need" class="solution-row">
        <div class="solution-need">
          <i :class="s.needIcon" />
          <span>{{ s.need }}</span>
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
  max-width: 480px;
  margin: 0 auto;
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

.solution-need {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--brand);
}

.solution-need i {
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

  .solution-need {
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
