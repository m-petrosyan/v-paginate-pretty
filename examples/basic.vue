<!-- Basic Usage Example -->
<script setup>
import { ref } from 'vue'
import { VPagination } from 'v-paginate-pretty'

const currentPage = ref(1)
</script>

<template>
  <VPagination
    v-model:current-page="currentPage"
    :total-items="100"
    :items-per-page="10"
  />
</template>
