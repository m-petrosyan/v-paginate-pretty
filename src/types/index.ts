export interface PaginationProps {
    /** Total number of items to paginate */
    totalItems: number
    /** Number of items per page */
    itemsPerPage?: number
    /** Current active page (v-model) */
    currentPage?: number
    /** Maximum number of page buttons to show */
    maxVisibleButtons?: number
    /** Theme variant to apply */
    theme?: 'default' | 'modern' | 'minimal' | 'gradient' | 'cube' | 'gothic' | 'cyberpunk' | 'neumorphic' | 'aurora' | 'retro'
    /** Size variant to apply */
    size?: 'sm' | 'md' | 'lg' | 'xl'
    /** Show first/last page buttons */
    showFirstLast?: boolean
    /** Show previous/next buttons */
    showPrevNext?: boolean
    /** Whether to hide page numbers (only show navigation arrows) */
    hideNumbers?: boolean
    /** Whether to sync current page with URL (?page=1) */
    syncUrl?: boolean
    /** URL query parameter key for the page */
    urlKey?: string
    /** Custom aria-label for accessibility */
    ariaLabel?: string
}

export interface PaginationEmits {
    (e: 'update:currentPage', page: number): void
    (e: 'change', page: number): void
}

export interface UsePaginationOptions {
    totalItems: number
    itemsPerPage?: number
    currentPage?: number
    maxVisibleButtons?: number
}

export interface UsePaginationReturn {
    currentPage: Ref<number>
    totalPages: ComputedRef<number>
    visiblePages: ComputedRef<number[]>
    isFirstPage: ComputedRef<boolean>
    isLastPage: ComputedRef<boolean>
    goToPage: (page: number) => void
    nextPage: () => void
    prevPage: () => void
    firstPage: () => void
    lastPage: () => void
}

import type { Ref, ComputedRef } from 'vue'
