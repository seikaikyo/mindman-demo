<script setup lang="ts">
const stats = [
  { value: '600+', label: '員工規模', icon: 'pi pi-users' },
  { value: '90+', label: '外銷國家', icon: 'pi pi-globe' },
  { value: '100K+', label: '零件種類', icon: 'pi pi-cog' },
  { value: '80K+', label: '倉儲儲位', icon: 'pi pi-warehouse' },
  { value: '300+', label: 'CNC 設備', icon: 'pi pi-wrench' },
  { value: '16', label: '服務產業', icon: 'pi pi-sitemap' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__glow" />
    <div class="hero__badge">DashAI Case Study</div>
    <h1 class="hero__title">
      <span class="hero__company">空壓元件製造商</span>
      <br />
      智慧製造解決方案
    </h1>
    <p class="hero__subtitle">
      針對 HMLV 高混合低量的空壓自動化元件工廠<br class="hide-desktop" />
      搭配 AI 驅動的生產排程與物料管控
    </p>
    <div class="hero__stats">
      <div v-for="s in stats" :key="s.label" class="stat">
        <i :class="s.icon" class="stat__icon" />
        <span class="stat__value">{{ s.value }}</span>
        <span class="stat__label">{{ s.label }}</span>
      </div>
    </div>
    <p class="hero__source">模擬情境：以台灣某空壓元件龍頭廠的公開規模為基礎</p>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 80px var(--sp-6) var(--sp-12);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(0, 91, 172, 0.25) 0%, rgba(0, 200, 255, 0.08) 40%, transparent 70%);
  pointer-events: none;
}

.hero__badge {
  position: relative;
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brand);
  background: rgba(0, 200, 255, 0.08);
  border: 1px solid rgba(0, 200, 255, 0.25);
  border-radius: 100px;
  padding: 6px 20px;
  margin-bottom: var(--sp-8);
  backdrop-filter: blur(4px);
}

.hero__title {
  position: relative;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: var(--sp-4);
  letter-spacing: -0.02em;
}

.hero__company {
  background: linear-gradient(135deg, var(--brand) 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  position: relative;
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto var(--sp-8);
  line-height: 1.7;
}

.hide-desktop { display: none; }

.hero__stats {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--sp-3);
  max-width: 780px;
  margin: 0 auto var(--sp-6);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: var(--sp-4) var(--sp-2);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
}

.stat:hover {
  border-color: var(--brand);
  box-shadow: 0 0 16px rgba(0, 200, 255, 0.1);
  transform: translateY(-2px);
}

.stat__icon {
  font-size: 0.9rem;
  color: var(--brand);
  margin-bottom: 2px;
}

.stat__value {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.stat__label {
  font-size: 0.68rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.hero__source {
  position: relative;
  font-size: 0.65rem;
  color: var(--text-muted);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .hero {
    padding: var(--sp-12) var(--sp-4) var(--sp-8);
  }

  .hero__title {
    font-size: 2rem;
  }

  .hide-desktop { display: inline; }

  .hero__stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .stat__value {
    font-size: 1.1rem;
  }
}
</style>
