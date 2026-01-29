<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VPagination } from 'v-paginate-pretty'
import 'v-paginate-pretty/dist/style.css'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // Check if system prefers dark mode or set to light by default
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  // We keep it light by default as requested, but we could sync with system if needed
})
</script>

<template>
  <div class="app-wrapper" :class="{ 'is-dark': isDark }">
    <div class="header">
      <h1>Vue 3 Pagination Gallery</h1>
      <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to light' : 'Switch to dark'">
        <span v-if="isDark">☀️ Light Mode</span>
        <span v-else>🌙 Dark Mode</span>
      </button>
    </div>
    
    <div class="demo-container">
      <!-- Default Theme -->
      <section class="theme-section">
        <h2>Professional Default</h2>
        <VPagination
          :total-items="100"
          :items-per-page="10"
          theme="default"
        />
        <p class="status-text">Clean, reliable, and accessible.</p>
      </section>

      <!-- Modern Theme -->
      <section class="theme-section">
        <h2>Modern Glass</h2>
        <VPagination
          :total-items="200"
          :items-per-page="10"
          theme="modern"
        />
        <p class="status-text">Trendy glassmorphism for modern apps.</p>
      </section>

      <!-- Minimal Theme -->
      <section class="theme-section">
        <h2>Brutalist Minimal</h2>
        <VPagination
          :total-items="150"
          :items-per-page="10"
          theme="minimal"
        />
        <p class="status-text">Focus on content with bold simplicity.</p>
      </section>

      <!-- Cube Theme -->
      <section class="theme-section">
        <h2>3D Cube Projection</h2>
        <VPagination
          :total-items="120"
          :items-per-page="10"
          theme="cube"
        />
        <p class="status-text">Isometric 3D buttons with realistic depth.</p>
      </section>

      <!-- Gothic Theme -->
      <section class="theme-section">
        <h2>Midnight Gothic</h2>
        <VPagination
          :total-items="150"
          :items-per-page="10"
          theme="gothic"
        />
        <p class="status-text">Ornate gold-on-black medieval aesthetics.</p>
      </section>

      <!-- Arrows Only Mode -->
      <section class="theme-section">
        <h2>Arrows Only (No Numbers)</h2>
        <VPagination
          :total-items="100"
          :items-per-page="10"
          theme="minimal"
          hide-numbers
        />
        <p class="status-text">Compact navigation using 'hide-numbers' prop.</p>
      </section>

      <!-- Gradient Theme -->
      <section class="theme-section">
        <h2>Sunset Gradient</h2>
        <VPagination
          :total-items="300"
          :items-per-page="10"
          theme="gradient"
        />
        <p class="status-text">Vibrant colors and playful animations.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  max-width: 1000px;
}
</style>
