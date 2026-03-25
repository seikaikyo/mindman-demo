<script setup lang="ts">
const stats = [
  { value: '1979', label: '成立年份' },
  { value: '600+', label: '員工人數' },
  { value: '97', label: '行銷國家' },
  { value: '100K+', label: '零件種類' },
  { value: '84,240', label: '倉儲儲位' },
  { value: '1,000+', label: '日出貨品項' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__badge">MINDMAN x DashAI</div>
    <h1 class="hero__title">
      <span class="hero__company">金器工業</span>
      <br />
      智慧物控解決方案
    </h1>
    <p class="hero__subtitle">
      為 HMLV 高混合低量製造場景設計 / 搭配 AI 驅動的生產排程與物料管控
    </p>
    <div class="hero__stats">
      <div v-for="s in stats" :key="s.label" class="stat">
        <span class="stat__value">{{ s.value }}</span>
        <span class="stat__label">{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: var(--sp-16) var(--sp-6) var(--sp-12);
  background: linear-gradient(180deg, rgba(0, 91, 172, 0.15) 0%, transparent 100%);
  border-bottom: 1px solid var(--border);
}

.hero__badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--brand);
  background: var(--brand-glow);
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: 100px;
  padding: var(--sp-1) var(--sp-4);
  margin-bottom: var(--sp-6);
}

.hero__title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--sp-4);
}

.hero__company {
  color: var(--brand);
}

.hero__subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--sp-8);
  line-height: 1.6;
}

.hero__stats {
  display: flex;
  justify-content: center;
  gap: var(--sp-6);
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 80px;
}

.stat__value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
}

.stat__label {
  font-size: 0.72rem;
  color: var(--text-muted);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .hero {
    padding: var(--sp-12) var(--sp-4) var(--sp-8);
  }

  .hero__title {
    font-size: 1.8rem;
  }

  .hero__subtitle {
    font-size: 0.9rem;
  }

  .hero__stats {
    gap: var(--sp-4);
  }

  .stat__value {
    font-size: 1.2rem;
  }
}
</style>
