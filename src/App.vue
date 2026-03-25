<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import DiagnosisSection from './components/DiagnosisSection.vue'
import SolutionMapping from './components/SolutionMapping.vue'
import OrderTraceSection from './components/OrderTraceSection.vue'
import RoadmapRoi from './components/RoadmapRoi.vue'
import LiveDemoLinks from './components/LiveDemoLinks.vue'

// Fade-in on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.section-fade').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="app">
    <HeroSection />
    <DiagnosisSection />
    <SolutionMapping />
    <OrderTraceSection />
    <RoadmapRoi />
    <LiveDemoLinks />
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
