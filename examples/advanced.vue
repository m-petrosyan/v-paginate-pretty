<!-- Advanced Usage with Data Fetching -->
<script setup>
import { ref, watch, computed } from 'vue'
import { VPagination } from '@vue-pagination/core'

const currentPage = ref(1)
const itemsPerPage = 20
const products = ref([])
const totalProducts = ref(0)
const loading = ref(false)

// Fetch data when page changes
watch(currentPage, async (newPage) => {
  await fetchProducts(newPage)
}, { immediate: true })

const fetchProducts = async (page) => {
  loading.value = true
  try {
    const response = await fetch(
      `https://api.example.com/products?page=${page}&limit=${itemsPerPage}`
    )
    const data = await response.json()
    products.value = data.items
    totalProducts.value = data.total
  } catch (error) {
    console.error('Failed to fetch products:', error)
  } finally {
    loading.value = false
  }
}

const paginatedProducts = computed(() => {
  return products.value
})
</script>

<template>
  <div class="product-list">
    <div v-if="loading" class="loading">Loading...</div>
    
    <div v-else class="products">
      <div
        v-for="product in paginatedProducts"
        :key="product.id"
        class="product-card"
      >
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">${{ product.price }}</span>
      </div>
    </div>

    <VPagination
      v-model:current-page="currentPage"
      :total-items="totalProducts"
      :items-per-page="itemsPerPage"
      theme="modern"
      :max-visible-buttons="5"
    />
  </div>
</template>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.loading {
  text-align: center;
  padding: 4rem;
  font-size: 1.25rem;
  color: #6b7280;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.product-card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
}

.product-card h3 {
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.product-card p {
  color: #6b7280;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #3b82f6;
}
</style>
