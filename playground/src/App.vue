<script setup lang="ts">
import { ref } from 'vue'
import { VPagination } from 'v-paginate-pretty'

const isDark = ref(false)
const hideNumbers = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleNumbers = () => {
  hideNumbers.value = !hideNumbers.value
}
</script>

<template>
  <div class="app-wrapper" :class="{ 'is-dark': isDark }">
    <div class="header">
      <div class="header-left">
        <h1 class="logo-text">v-paginate-pretty</h1>
        <a href="https://github.com/m-petrosyan/v-paginate-pretty" target="_blank" class="github-link">
          <svg viewBox="0 0 24 24" class="github-icon"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          Docs
        </a>
      </div>
      
      <div class="header-actions">
        <button @click="toggleNumbers" class="control-btn" :class="{ 'is-active': hideNumbers }">
          <span v-if="hideNumbers">🔢 Numbers</span>
          <span v-else>⬅️ Arrows</span>
        </button>
        <button @click="toggleTheme" class="control-btn theme-btn">
          <span v-if="isDark">☀️ Light</span>
          <span v-else>🌙 Dark</span>
        </button>
      </div>
    </div>
    
    <div class="demo-grid">
      <section class="theme-card">
        <h3>Professional Default</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="default" :hide-numbers="hideNumbers" />
        </div>
      </section>

      <section class="theme-card">
        <h3>Modern Glass</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="modern" :hide-numbers="hideNumbers" />
        </div>
      </section>

      <section class="theme-card">
        <h3>Brutalist Minimal</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="minimal" :hide-numbers="hideNumbers" />
        </div>
      </section>

      <section class="theme-card">
        <h3>Cube 3D Projection</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="cube" :hide-numbers="hideNumbers" />
        </div>
      </section>

      <section class="theme-card">
        <h3>Sunset Gradient</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="gradient" :hide-numbers="hideNumbers" />
        </div>
      </section>

      <section class="theme-card">
        <h3>Midnight Gothic</h3>
        <div class="pagination-wrapper">
          <VPagination :total-items="100" theme="gothic" :hide-numbers="hideNumbers" />
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* Global styles to ensure background covers the whole site */
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body {
  background-color: #f8fafc;
  transition: background-color 0.3s ease;
}

.dark body, body.is-dark {
  background-color: #0f172a;
}
</style>

<style scoped>
.app-wrapper {
  padding: 2rem;
  min-height: 100vh;
  color: #1e293b;
  font-family: 'Inter', system-ui, sans-serif;
  transition: color 0.3s ease;
}

.is-dark {
  background-color: #0f172a;
  color: #f8fafc;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.is-dark .header {
  border-color: #1e293b;
}

.logo-text {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.github-link:hover {
  color: #4f46e5;
}

.github-icon {
  width: 1.25rem !important;
  height: 1.25rem !important;
}

.header-actions {
  display: flex;
  gap: 0.75rem;
}

.control-btn {
  padding: 0.6rem 1rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  color: #475569;
}

.is-dark .control-btn {
  background: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

.control-btn:hover {
  border-color: #cbd5e1;
  background: #f1f5f9;
  transform: translateY(-1px);
}

.is-dark .control-btn:hover {
  background: #334155;
}

.control-btn.is-active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.theme-card {
  padding: 3rem 1rem;
  border-radius: 24px;
  background: white;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  transition: transform 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.pagination-wrapper {
  width: 100%;
  overflow-x: auto;
  padding: 1rem 0; /* Space for shadows/3D effects */
  display: flex;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
}

/* Hide scrollbar for cleaner look but keep functionality */
.pagination-wrapper::-webkit-scrollbar {
  display: none;
}
.pagination-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.is-dark .theme-card {
  background: #1e293b33;
  border-color: #1e293b;
}

.theme-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
}

.theme-card h3 {
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
}

/* Responsiveness for small screens */
@media (max-width: 500px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}
</style>
