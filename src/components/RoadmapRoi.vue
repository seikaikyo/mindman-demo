<script setup lang="ts">
import { ref, computed } from 'vue'
import InputNumber from 'primevue/inputnumber'

// Roadmap phases
const phases = [
  {
    phase: 'Phase 1',
    period: '第 1-3 月',
    title: '主數據校準',
    color: '#3b82f6',
    tasks: ['BOM 準確率盤點與修正', 'Lead Time 校準', '安全庫存水位設定（A 類優先）', 'ERP MRP 參數調校'],
    kpi: 'BOM 準確率 > 95%',
  },
  {
    phase: 'Phase 2',
    period: '第 4-6 月',
    title: 'MRP 連動上線',
    color: '#8b5cf6',
    tasks: ['MRP 自動展料 + 淨需求計算', '採購建議自動產出', '缺料預警機制', '計畫與備料協作 SOP'],
    kpi: '缺料率 < 8%',
  },
  {
    phase: 'Phase 3',
    period: '第 7-12 月',
    title: 'AI 加值',
    color: '#22c55e',
    tasks: ['需求預測 AI（庫存降 38%）', '動態安全庫存', '供應商風險預警', 'AI 排程最佳化'],
    kpi: '稼動率 > 85%',
  },
]

// ROI calculator
const shortage = ref(15)
const utilization = ref(65)
const inventoryDays = ref(45)

// Assume annual revenue ~NT$2B based on company scale
const annualRevenue = 2_000_000_000

const roiResults = computed(() => {
  const shortageImprovement = (shortage.value - 3) / 100
  const utilizationGain = (85 - utilization.value) / 100
  const inventoryReduction = (inventoryDays.value - 28) / inventoryDays.value

  const savingsFromShortage = annualRevenue * shortageImprovement * 0.02
  const savingsFromUtilization = annualRevenue * utilizationGain * 0.03
  const savingsFromInventory = annualRevenue * 0.15 * inventoryReduction * 0.1

  const total = Math.max(0, savingsFromShortage + savingsFromUtilization + savingsFromInventory)

  return {
    shortageSaving: Math.round(savingsFromShortage / 10000),
    utilizationSaving: Math.round(savingsFromUtilization / 10000),
    inventorySaving: Math.round(savingsFromInventory / 10000),
    total: Math.round(total / 10000),
    newShortage: Math.max(1, 3),
    newUtilization: Math.min(92, 85),
    newInventoryDays: 28,
  }
})
</script>

<template>
  <section class="roadmap section-fade">
    <div class="section-header">
      <span class="section-number">04</span>
      <h2 class="section-title">導入藍圖 + ROI 試算</h2>
      <p class="section-desc">三階段漸進導入，每階段有明確 KPI 指標</p>
    </div>

    <!-- Roadmap Timeline -->
    <div class="timeline">
      <div v-for="p in phases" :key="p.phase" class="phase-card">
        <div class="phase-header" :style="{ borderColor: p.color }">
          <span class="phase-badge" :style="{ background: p.color }">{{ p.phase }}</span>
          <span class="phase-period">{{ p.period }}</span>
        </div>
        <h3 class="phase-title">{{ p.title }}</h3>
        <ul class="phase-tasks">
          <li v-for="task in p.tasks" :key="task">{{ task }}</li>
        </ul>
        <div class="phase-kpi">
          <i class="pi pi-chart-line" />
          {{ p.kpi }}
        </div>
      </div>
    </div>

    <!-- ROI Calculator -->
    <div class="roi-calc">
      <h3 class="roi-title">
        <i class="pi pi-calculator" />
        ROI 快速試算
      </h3>
      <p class="roi-desc">調整金器目前的指標，即時計算改善效益（年化估算）</p>

      <div class="roi-inputs">
        <div class="roi-input-group">
          <label>目前缺料率 (%)</label>
          <InputNumber v-model="shortage" :min="0" :max="50" suffix="%" showButtons />
          <span class="roi-after">改善後: {{ roiResults.newShortage }}%</span>
        </div>
        <div class="roi-input-group">
          <label>目前稼動率 (%)</label>
          <InputNumber v-model="utilization" :min="30" :max="95" suffix="%" showButtons />
          <span class="roi-after">改善後: {{ roiResults.newUtilization }}%</span>
        </div>
        <div class="roi-input-group">
          <label>庫存週轉天數</label>
          <InputNumber v-model="inventoryDays" :min="10" :max="90" suffix=" 天" showButtons />
          <span class="roi-after">改善後: {{ roiResults.newInventoryDays }} 天</span>
        </div>
      </div>

      <div class="roi-results">
        <div class="roi-item">
          <span class="roi-item__label">缺料率改善</span>
          <span class="roi-item__value">{{ roiResults.shortageSaving.toLocaleString() }} 萬/年</span>
        </div>
        <div class="roi-item">
          <span class="roi-item__label">稼動率提升</span>
          <span class="roi-item__value">{{ roiResults.utilizationSaving.toLocaleString() }} 萬/年</span>
        </div>
        <div class="roi-item">
          <span class="roi-item__label">庫存成本降低</span>
          <span class="roi-item__value">{{ roiResults.inventorySaving.toLocaleString() }} 萬/年</span>
        </div>
        <div class="roi-total">
          <span class="roi-total__label">預估年省</span>
          <span class="roi-total__value">NT$ {{ roiResults.total.toLocaleString() }} 萬</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roadmap {
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
}

/* Timeline */
.timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-4);
  max-width: 1000px;
  margin: 0 auto var(--sp-12);
}

.phase-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  transition: all var(--transition);
}

.phase-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  margin-bottom: var(--sp-3);
  padding-bottom: var(--sp-3);
  border-bottom: 2px solid;
}

.phase-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px var(--sp-2);
  border-radius: var(--radius-sm);
  color: white;
}

.phase-period {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.phase-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--sp-3);
}

.phase-tasks {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--sp-4);
}

.phase-tasks li {
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding: var(--sp-1) 0;
  position: relative;
  padding-left: var(--sp-4);
}

.phase-tasks li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-muted);
}

.phase-kpi {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--status-ok);
  padding: var(--sp-2) var(--sp-3);
  background: rgba(34, 197, 94, 0.1);
  border-radius: var(--radius-sm);
}

/* ROI Calculator */
.roi-calc {
  max-width: 700px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
}

.roi-title {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  margin-bottom: var(--sp-1);
}

.roi-title i { color: var(--brand); }

.roi-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: var(--sp-6);
}

.roi-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-4);
  margin-bottom: var(--sp-6);
}

.roi-input-group {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.roi-input-group label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.roi-after {
  font-size: 0.72rem;
  color: var(--status-ok);
  font-weight: 600;
}

.roi-results {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  padding-top: var(--sp-4);
  border-top: 1px solid var(--border);
}

.roi-item {
  display: flex;
  justify-content: space-between;
  padding: var(--sp-2) 0;
  font-size: 0.85rem;
}

.roi-item__label { color: var(--text-secondary); }
.roi-item__value { font-weight: 600; color: var(--text-primary); font-variant-numeric: tabular-nums; }

.roi-total {
  display: flex;
  justify-content: space-between;
  padding: var(--sp-3) var(--sp-4);
  background: var(--brand-glow);
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: var(--radius-md);
  margin-top: var(--sp-2);
}

.roi-total__label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
}

.roi-total__value {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--brand);
  font-variant-numeric: tabular-nums;
}

@media (max-width: 1024px) {
  .timeline {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .roadmap {
    padding: var(--sp-8) var(--sp-4);
  }

  .roi-inputs {
    grid-template-columns: 1fr;
  }

  .roi-calc {
    padding: var(--sp-4);
  }
}
</style>
