import VPagination from './components/VPagination.vue'
import { usePagination } from './composables/usePagination'
import type { PaginationProps, PaginationEmits, UsePaginationOptions, UsePaginationReturn } from './types'

// Import base styles
import './styles/base.css'
import './styles/themes/default.css'
import './styles/themes/modern.css'
import './styles/themes/minimal.css'
import './styles/themes/gradient.css'
import './styles/themes/cube.css'
import './styles/themes/gothic.css'

export { VPagination, usePagination }
export type { PaginationProps, PaginationEmits, UsePaginationOptions, UsePaginationReturn }

export default VPagination
