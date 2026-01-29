import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { UsePaginationOptions, UsePaginationReturn } from '../types'

/**
 * Composable for managing pagination state and logic
 * @param options - Pagination configuration options
 * @returns Pagination state and methods
 */
export function usePagination(options: UsePaginationOptions): UsePaginationReturn {
    const {
        totalItems,
        itemsPerPage = 10,
        currentPage: initialPage = 1,
        maxVisibleButtons = 7
    } = options

    const currentPage = ref(initialPage)

    const totalPages = computed(() => {
        return Math.ceil(totalItems / itemsPerPage)
    })

    const isFirstPage = computed(() => currentPage.value === 1)
    const isLastPage = computed(() => currentPage.value === totalPages.value)

    /**
     * Calculate which page numbers should be visible
     * Uses smart algorithm to show ellipsis when needed
     */
    const visiblePages = computed(() => {
        const total = totalPages.value
        const current = currentPage.value
        const max = maxVisibleButtons

        if (total <= max) {
            return Array.from({ length: total }, (_, i) => i + 1)
        }

        const half = Math.floor(max / 2)
        let start = Math.max(1, current - half)
        let end = Math.min(total, start + max - 1)

        if (end - start < max - 1) {
            start = Math.max(1, end - max + 1)
        }

        const pages: number[] = []

        // Always show first page
        if (start > 1) {
            pages.push(1)
            if (start > 2) {
                pages.push(-1) // Ellipsis indicator
            }
        }

        // Show middle pages
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        // Always show last page
        if (end < total) {
            if (end < total - 1) {
                pages.push(-1) // Ellipsis indicator
            }
            pages.push(total)
        }

        return pages
    })

    /**
     * Navigate to a specific page
     */
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages.value) return
        currentPage.value = page
    }

    /**
     * Navigate to next page
     */
    const nextPage = () => {
        if (!isLastPage.value) {
            currentPage.value++
        }
    }

    /**
     * Navigate to previous page
     */
    const prevPage = () => {
        if (!isFirstPage.value) {
            currentPage.value--
        }
    }

    /**
     * Navigate to first page
     */
    const firstPage = () => {
        currentPage.value = 1
    }

    /**
     * Navigate to last page
     */
    const lastPage = () => {
        currentPage.value = totalPages.value
    }

    return {
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
    }
}
