<!-- Custom Theme Example -->
<script setup>
import { ref } from 'vue'
import { VPagination } from 'v-paginate-pretty'

const currentPage = ref(1)
</script>

<template>
  <div class="custom-pagination-container">
    <VPagination
      v-model:current-page="currentPage"
      :total-items="500"
      :items-per-page="25"
      theme="default"
      class="my-custom-theme"
    />
  </div>
</template>

<style>
/* Custom theme using CSS variables */
.my-custom-theme {
  /* Spacing */
  --v-pagination-gap: 0.75rem;
  --v-pagination-button-size: 3rem;
  
  /* Colors - Purple theme */
  --v-pagination-button-bg: #faf5ff;
  --v-pagination-button-color: #7c3aed;
  --v-pagination-button-border: 2px solid #e9d5ff;
  --v-pagination-button-radius: 0.75rem;
  
  /* Hover state */
  --v-pagination-button-hover-bg: #f3e8ff;
  --v-pagination-button-hover-border: 2px solid #d8b4fe;
  
  /* Active state */
  --v-pagination-active-bg: #7c3aed;
  --v-pagination-active-color: #ffffff;
  --v-pagination-active-border: 2px solid #7c3aed;
  --v-pagination-active-hover-bg: #6d28d9;
  
  /* Focus ring */
  --v-pagination-focus-ring: rgba(124, 58, 237, 0.4);
  
  /* Ellipsis */
  --v-pagination-ellipsis-color: #a78bfa;
}

.custom-pagination-container {
  padding: 3rem;
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border-radius: 1rem;
}
</style>
