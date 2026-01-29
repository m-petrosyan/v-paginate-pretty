<template>
  <nav
    :class="[
      'v-pagination',
      `v-pagination--${props.theme}`,
      `v-pagination--${props.size}`,
      { 'v-pagination--disabled': props.disabled }
    ]"
    :aria-label="props.ariaLabel"
    role="navigation"
  >
    <!-- First Page Button -->
    <button
      v-if="props.showFirstLast"
      class="v-pagination__button v-pagination__button--first"
      :disabled="props.disabled || isFirstPage"
      @click="handleFirstPage"
      aria-label="Go to first page"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 17L13 12L18 7M11 17L6 12L11 7" />
      </svg>
    </button>

    <!-- Previous Page Button -->
    <button
      v-if="props.showPrevNext"
      class="v-pagination__button v-pagination__button--prev"
      :disabled="props.disabled || isFirstPage"
      @click="handlePrevPage"
      aria-label="Go to previous page"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18L9 12L15 6" />
      </svg>
    </button>

    <!-- Dynamic Page Buttons -->
    <template v-if="!props.hideNumbers">
      <template v-for="(page, index) in visiblePages" :key="`${page}-${index}`">
        <span v-if="page === -1" class="v-pagination__ellipsis" aria-hidden="true">
          ...
        </span>
        <button
          v-else
          :class="['v-pagination__button', { 'v-pagination__button--active': page === currentPage }]"
          :disabled="props.disabled"
          :aria-current="page === currentPage ? 'page' : undefined"
          :aria-label="`Page ${page}`"
          @click="goToPage(Number(page))"
        >
          {{ page }}
        </button>
      </template>
    </template>

    <!-- Next Page Button -->
    <button
      v-if="props.showPrevNext"
      class="v-pagination__button v-pagination__button--next"
      :disabled="props.disabled || isLastPage"
      @click="handleNextPage"
      aria-label="Go to next page"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18L15 12L9 6" />
      </svg>
    </button>

    <!-- Last Page Button -->
    <button
      v-if="props.showFirstLast"
      class="v-pagination__button v-pagination__button--last"
      :disabled="props.disabled || isLastPage"
      @click="handleLastPage"
      aria-label="Go to last page"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 17L11 12L6 7M13 17L18 12L13 7" />
      </svg>
    </button>
  </nav>
</template>
<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { usePagination } from '../composables/usePagination'

export interface Props {
  totalItems: number
  itemsPerPage?: number
  currentPage?: number
  maxVisibleButtons?: number
  theme?: 'default' | 'modern' | 'minimal' | 'gradient' | 'cube' | 'gothic' | 'cyberpunk' | 'neumorphic' | 'aurora' | 'retro'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showFirstLast?: boolean
  showPrevNext?: boolean
  hideNumbers?: boolean
  syncUrl?: boolean
  urlKey?: string
  ariaLabel?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10,
  currentPage: 1,
  maxVisibleButtons: 7,
  theme: 'default',
  showFirstLast: true,
  showPrevNext: true,
  hideNumbers: false,
  syncUrl: true,
  urlKey: 'page',
  disabled: false,
  size: 'md',
  ariaLabel: 'Pagination Navigation'
})

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'change', page: number): void
}>()

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
  totalItems: props.totalItems,
  itemsPerPage: props.itemsPerPage,
  currentPage: props.currentPage,
  maxVisibleButtons: props.maxVisibleButtons
})

// Sync internal state with v-model
watch(() => props.currentPage, (newPage: number) => {
  if (newPage && newPage !== currentPage.value) {
    goToPage(newPage)
  }
})

// Emit changes and sync with URL
watch(currentPage, (newPage: number) => {
  emit('update:currentPage', newPage)
  emit('change', newPage)

  if (props.syncUrl && typeof window !== 'undefined') {
    const url = new URL(window.location.href)
    url.searchParams.set(props.urlKey || 'page', newPage.toString())
    window.history.pushState({}, '', url.toString())
  }
})

onMounted(() => {
  console.log('VPagination mounted. Props:', props)
  if (props.syncUrl && typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const pageFromUrl = parseInt(params.get(props.urlKey || 'page') || '')
    if (pageFromUrl && !isNaN(pageFromUrl) && pageFromUrl !== currentPage.value) {
      goToPage(pageFromUrl)
    }
  }
})

const handlePageClick = (page: number) => {
  if (!props.disabled) {
    goToPage(page)
  }
}

const handleNextPage = () => {
  if (!props.disabled) {
    nextPage()
  }
}

const handlePrevPage = () => {
  if (!props.disabled) {
    prevPage()
  }
}

const handleFirstPage = () => {
  if (!props.disabled) {
    firstPage()
  }
}

const handleLastPage = () => {
  if (!props.disabled) {
    lastPage()
  }
}
</script>

<style scoped>
@import '../styles/base.css';
</style>
