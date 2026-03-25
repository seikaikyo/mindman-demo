<script setup lang="ts">
import { ref, watch } from 'vue'
import Select from 'primevue/select'
import Tag from 'primevue/tag'
import ProgressSpinner from 'primevue/progressspinner'
import { API_BASE } from '../composables/useApi'

const FACTORY_URL = 'https://factory.dashai.dev'

interface TraceStage {
  stage: string
  status: string
  items: Record<string, unknown>[]
}

const orders = ref<{ label: string; value: number }[]>([])
const selectedOrder = ref<number | null>(null)
const traceData = ref<TraceStage[]>([])
const loading = ref(false)
const error = ref('')

const stageLabels: Record<string, string> = {
  order: '接單管理',
  planning: '生產計畫',
  procurement: '採購進料',
  warehouse: '倉儲物流',
  production: '製造執行',
  quality: '品質管控',
  packing: '包裝作業',
  shipping: '出貨運輸',
  service: '售後服務',
}

const stageColors: Record<string, string> = {
  order: '#3b82f6',
  planning: '#8b5cf6',
  procurement: '#06b6d4',
  warehouse: '#10b981',
  production: '#f59e0b',
  quality: '#ef4444',
  packing: '#ec4899',
  shipping: '#6366f1',
  service: '#14b8a6',
}

async function fetchOrders() {
  try {
    const res = await fetch(`${API_BASE}/api/v1/order/sales-orders/?limit=50`)
    if (!res.ok) return
    const json = await res.json()
    orders.value = json.data.map((o: Record<string, unknown>) => ({
      label: `${o.so_number} - ${o.customer_name}`,
      value: o.id,
    }))
    if (orders.value.length && !selectedOrder.value) {
      selectedOrder.value = orders.value[0].value
    }
  } catch { /* skip */ }
}

async function fetchTrace(id: number) {
  loading.value = true
  traceData.value = []
  error.value = ''
  try {
    const res = await fetch(`${API_BASE}/api/v1/dashboard/trace/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    traceData.value = json.data.stages
  } catch {
    error.value = '追蹤資料載入失敗'
  }
  loading.value = false
}

watch(selectedOrder, (id) => {
  if (id) fetchTrace(id)
})

fetchOrders()

function statusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
  const map: Record<string, 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'> = {
    confirmed: 'info', shipped: 'success', draft: 'secondary',
    in_production: 'warn', completed: 'success', closed: 'contrast',
    in_progress: 'warn', created: 'secondary', released: 'info',
    delivered: 'success', in_transit: 'warn', pending: 'secondary',
    issue: 'danger', passed: 'success', active: 'warn', none: 'secondary',
    open: 'danger', investigating: 'warn',
  }
  return map[status] || 'info'
}

const statusLabels: Record<string, string> = {
  confirmed: '已確認', shipped: '已出貨', draft: '草稿',
  in_production: '生產中', completed: '完成', closed: '結案',
  in_progress: '進行中', created: '已建立', released: '已發放',
  delivered: '已交付', in_transit: '運送中', pending: '待處理',
  issue: '異常', passed: '通過', active: '進行中', none: '尚無',
  open: '開立', investigating: '調查中',
}
</script>

<template>
  <section class="trace section-fade">
    <div class="section-header">
      <h2 class="section-title">
        <i class="pi pi-map" />
        訂單全程追蹤
      </h2>
      <p class="section-desc">
        從接單到出貨，9 個階段即時可視化。不論日出貨品項數量多寡，每張訂單都能全程追蹤。
        <a :href="`${FACTORY_URL}/tv/tracking`" target="_blank" rel="noopener" class="warroom-link">
          <i class="pi pi-external-link" /> 開啟 War Room 全螢幕版
        </a>
      </p>
    </div>

    <div class="trace-panel">
      <div class="trace-controls">
        <label>選擇訂單</label>
        <Select
          v-model="selectedOrder"
          :options="orders"
          optionLabel="label"
          optionValue="value"
          placeholder="選擇訂單..."
          class="trace-select"
          filter
        />
      </div>

      <div v-if="loading" class="trace-loading">
        <ProgressSpinner style="width: 2rem; height: 2rem;" />
      </div>

      <div v-else-if="error" class="trace-error">
        <i class="pi pi-exclamation-circle" />
        {{ error }}
      </div>

      <div v-else-if="traceData.length" class="trace-timeline">
        <div
          v-for="(stage, idx) in traceData"
          :key="stage.stage"
          class="trace-node"
        >
          <div class="node-indicator">
            <div
              class="node-dot"
              :style="{ backgroundColor: stageColors[stage.stage] || 'var(--text-muted)' }"
            >
              <i v-if="stage.status === 'completed' || stage.status === 'shipped' || stage.status === 'delivered' || stage.status === 'passed'" class="pi pi-check" style="font-size: 0.55rem; color: white" />
            </div>
            <div v-if="idx < traceData.length - 1" class="node-line" />
          </div>
          <div class="node-content">
            <div class="node-header">
              <span class="node-stage-name">{{ stageLabels[stage.stage] || stage.stage }}</span>
              <Tag :value="statusLabels[stage.status] || stage.status" :severity="statusSeverity(stage.status)" />
            </div>
            <div class="node-detail">
              <span v-if="stage.items.length" class="node-count">{{ stage.items.length }} 筆紀錄</span>
              <span v-else class="node-empty">-</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!selectedOrder" class="trace-hint">
        選擇一張訂單，查看從接單到出貨的完整追蹤
      </div>
    </div>
  </section>
</template>

<style scoped>
.trace {
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

.warroom-link {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  margin-left: var(--sp-2);
  font-weight: 600;
  font-size: 0.8rem;
}

.trace-panel {
  max-width: 700px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp-6);
  box-shadow: var(--shadow-card);
}

.trace-controls {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);
}

.trace-controls label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
}

.trace-select {
  flex: 1;
  min-width: 0;
}

.trace-loading {
  display: flex;
  justify-content: center;
  padding: var(--sp-8);
}

.trace-error {
  text-align: center;
  padding: var(--sp-6);
  color: var(--status-error);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
}

.trace-timeline {
  display: flex;
  flex-direction: column;
}

.trace-node {
  display: flex;
  gap: var(--sp-3);
  padding: var(--sp-1) var(--sp-2);
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}

.trace-node:hover {
  background: rgba(255, 255, 255, 0.03);
}

.node-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  flex-shrink: 0;
}

.node-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-line {
  width: 2px;
  flex: 1;
  background: var(--border);
  min-height: 16px;
}

.node-content {
  flex: 1;
  padding-bottom: var(--sp-3);
}

.node-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
}

.node-stage-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
}

.node-detail { margin-top: 2px; }

.node-count {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.node-empty {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.trace-hint {
  text-align: center;
  padding: var(--sp-8);
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .trace {
    padding: var(--sp-8) var(--sp-4);
  }

  .trace-panel {
    padding: var(--sp-4);
  }

  .trace-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .warroom-link {
    display: flex;
    margin-left: 0;
    margin-top: var(--sp-2);
    justify-content: center;
  }
}
</style>
