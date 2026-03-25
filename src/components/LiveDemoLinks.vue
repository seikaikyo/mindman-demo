<script setup lang="ts">
import { ref, onMounted } from 'vue'

const FACTORY_URL = 'https://factory.dashai.dev'
const API_BASE = 'https://dashai-api.onrender.com/factory'

interface DemoCard {
  title: string
  desc: string
  solves: string
  icon: string
  link: string
  kpi?: { label: string; value: string }
}

const cards: DemoCard[] = [
  {
    title: '營運看板',
    desc: '即時工廠 KPI：交期達成率、稼動率、首次良率、營收',
    solves: '管理層缺乏全局視野',
    icon: 'pi pi-chart-line',
    link: `${FACTORY_URL}/`,
  },
  {
    title: '9 階段生產流',
    desc: '從接單到售後的 54 個子系統，每個都能 CRUD 操作',
    solves: '流程斷裂、資訊孤島',
    icon: 'pi pi-sitemap',
    link: `${FACTORY_URL}/flow`,
  },
  {
    title: 'War Room - 排程',
    desc: '產線排程甘特圖、負荷平衡、急單插單處理',
    solves: '排程缺乏全局優化',
    icon: 'pi pi-calendar',
    link: `${FACTORY_URL}/tv/scheduling`,
  },
  {
    title: 'War Room - 倉儲',
    desc: '庫存水位、揀貨效率、儲位利用率即時監控',
    solves: '84,240 儲位管不過來',
    icon: 'pi pi-warehouse',
    link: `${FACTORY_URL}/tv/warehouse`,
  },
  {
    title: 'War Room - 訂單追蹤',
    desc: '每張訂單的全程追蹤：工單、物料、品質、出貨',
    solves: '大量出貨品項缺乏可視化',
    icon: 'pi pi-map',
    link: `${FACTORY_URL}/tv/tracking`,
  },
  {
    title: 'AI 應用展示',
    desc: '15 個 AI 場景：需求預測、排程、維護、品檢、路線',
    solves: '人工決策效率低',
    icon: 'pi pi-sparkles',
    link: `${FACTORY_URL}/flow/planning/ai`,
  },
  {
    title: '投資評估器',
    desc: '按工廠類型、規模、預算自動推薦模組優先順序',
    solves: '數位轉型不知從何開始',
    icon: 'pi pi-wallet',
    link: `${FACTORY_URL}/investment`,
  },
  {
    title: 'BCM 衝擊模擬',
    desc: '6 種災難情境 + 跨部門連鎖影響 + RTO/RPO 分析',
    solves: '缺乏風險評估機制',
    icon: 'pi pi-shield',
    link: `${FACTORY_URL}/bia`,
  },
]

// Fetch live KPIs
const liveOtd = ref('--')
const liveOee = ref('--')

onMounted(async () => {
  try {
    const res = await fetch(`${API_BASE}/api/v1/dashboard/kpis`)
    if (res.ok) {
      const json = await res.json()
      const kpis = json.data
      if (kpis) {
        liveOtd.value = kpis.otd ? `${kpis.otd}%` : '--'
        liveOee.value = kpis.oee ? `${kpis.oee}%` : '--'
      }
    }
  } catch { /* skip */ }
})
</script>

<template>
  <section class="demos section-fade">
    <div class="section-header">
      <span class="section-number">05</span>
      <h2 class="section-title">Live 系統導覽</h2>
      <p class="section-desc">
        所有頁面都是即時運作的系統，點擊直接體驗
        <span v-if="liveOtd !== '--'" class="live-badge">
          <span class="live-dot" />
          LIVE | OTD {{ liveOtd }} | OEE {{ liveOee }}
        </span>
      </p>
    </div>

    <div class="demo-grid">
      <a
        v-for="card in cards"
        :key="card.title"
        :href="card.link"
        target="_blank"
        rel="noopener"
        class="demo-card"
      >
        <div class="demo-card__icon">
          <i :class="card.icon" />
        </div>
        <div class="demo-card__content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <div class="demo-card__solves">
            <i class="pi pi-check-circle" />
            {{ card.solves }}
          </div>
        </div>
        <i class="pi pi-external-link demo-card__arrow" />
      </a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>
        Built with Vue 3 + PrimeVue + FastAPI + Neon PostgreSQL
        <br />
        <span class="footer-sub">9 生產階段 / 54 子系統 / 15 AI 場景 / 三語系（中/英/日）</span>
      </p>
      <p class="footer-credit">
        DashAI -- Smart Factory Demo
        <br />
        <a href="https://factory.dashai.dev" target="_blank" rel="noopener">factory.dashai.dev</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.demos {
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

.live-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--status-ok);
  margin-left: var(--sp-2);
  padding: 2px var(--sp-2);
  background: rgba(34, 197, 94, 0.1);
  border-radius: var(--radius-sm);
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--status-ok);
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-4);
  max-width: 1000px;
  margin: 0 auto;
}

.demo-card {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-4);
  padding: var(--sp-4);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition);
}

.demo-card:hover {
  border-color: var(--brand);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
  text-decoration: none;
}

.demo-card__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--brand-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--brand);
  font-size: 1.1rem;
}

.demo-card__content {
  flex: 1;
  min-width: 0;
}

.demo-card__content h3 {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.demo-card__content p {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.demo-card__solves {
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  margin-top: var(--sp-2);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--status-ok);
}

.demo-card__arrow {
  color: var(--text-muted);
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: var(--sp-1);
}

/* Footer */
.footer {
  text-align: center;
  margin-top: var(--sp-12);
  padding-top: var(--sp-8);
  border-top: 1px solid var(--border);
}

.footer p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: var(--sp-4);
}

.footer-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.footer-credit {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .demos {
    padding: var(--sp-8) var(--sp-4);
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
