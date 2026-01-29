<!-- Using Composable Directly -->
<script setup>
import { ref, watch } from 'vue'
import { usePagination } from 'v-paginate-pretty'

const items = ref([...Array(100)].map((_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`
})))

const {
  currentPage,
  totalPages,
  visiblePages,
  isFirstPage,
  isLastPage,
  goToPage,
  nextPage,
  prevPage,
  firstPage,
  lastPage
} = usePagination({
  totalItems: items.value.length,
  itemsPerPage: 10,
  currentPage: 1,
  maxVisibleButtons: 7
})

// Get current page items
const getCurrentPageItems = () => {
  const start = (currentPage.value - 1) * 10
  const end = start + 10
  return items.value.slice(start, end)
}

const currentItems = ref(getCurrentPageItems())

watch(currentPage, () => {
  currentItems.value = getCurrentPageItems()
  // Scroll to top when page changes
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="composable-example">
    <h2>Items (Page {{ currentPage }} of {{ totalPages }})</h2>
    
    <div class="items-list">
      <div
        v-for="item in currentItems"
        :key="item.id"
        class="item"
      >
        <strong>{{ item.name }}</strong>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <!-- Custom pagination UI using composable -->
    <nav class="custom-pagination" aria-label="Pagination">
      <button
        @click="firstPage"
        :disabled="isFirstPage"
        class="nav-button"
      >
        First
      </button>

      <button
        @click="prevPage"
        :disabled="isFirstPage"
        class="nav-button"
      >
        Previous
      </button>

      <div class="page-numbers">
        <template v-for="(page, index) in visiblePages" :key="`page-${page}-${index}`">
          <span v-if="page === -1" class="ellipsis">...</span>
          <button
            v-else
            @click="goToPage(page)"
            :class="['page-button', { active: page === currentPage }]"
          >
            {{ page }}
          </button>
        </template>
      </div>

      <button
        @click="nextPage"
        :disabled="isLastPage"
        class="nav-button"
      >
        Next
      </button>

      <button
        @click="lastPage"
        :disabled="isLastPage"
        class="nav-button"
      >
        Last
      </button>
    </nav>
  </div>
</template>

<style scoped>
.composable-example {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.items-list {
  margin-bottom: 2rem;
}

.item {
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  border-left: 3px solid #3b82f6;
}

.item strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #1f2937;
}

.item p {
  color: #6b7280;
  font-size: 0.875rem;
}

.custom-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-button,
.page-button {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-button:hover:not(:disabled),
.page-button:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.page-numbers {
  display: flex;
  gap: 0.25rem;
}

.ellipsis {
  padding: 0.5rem;
  color: #9ca3af;
}
</style>
