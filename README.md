# v-paginate-pretty 🎨

Beautiful and customizable pagination component for **Vue 3** with Composition API. Featuring 6 stunning themes (including 3D, Gothic, and Glassmorphism) and TypeScript support.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4fc08d?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Demo](https://img.shields.io/badge/Demo-Live-blueviolet?style=for-the-badge&logo=google-chrome)](https://m-petrosyan.github.io/v-paginate-pretty/)

## ✨ Features

- 🚀 **Vue 3 Composition API** - Built from the ground up for modern Vue.
- 🎨 **6 Stunning Themes** - Default, Modern Glass, Minimal, Gradient, 3D Cube, and Gothic.
- 🎲 **Flexible Navigation** - Optional "First/Last" and "Prev/Next" buttons.
- 📏 **Customizable Layout** - Control the number of visible pages.
- 🌑 **Dark Mode Ready** - All themes look great in dark mode.
- 🎯 **Hide Numbers** - Compact mode with arrows only.
- ⌨️ **Accessible** - ARIA labels and keyboard support.

## 📦 Installation

```bash
npm install v-paginate-pretty
# or
yarn add v-paginate-pretty
```

## 🚀 Quick Start

```vue
<script setup>
import { VPagination } from 'v-paginate-pretty'
import 'v-paginate-pretty/dist/style.css'
</script>

<template>
  <VPagination
    :total-items="100"
    :items-per-page="10"
    theme="modern"
  />
</template>
```

## 🎨 Themes

### Real UI (Flat Styles)
The basic themes provide a clean and professional look for daily use.


| Theme | Description |
|-------|-------------|
| `default` | Clean and professional blue design. |
| `modern` | Soft glassmorphism with subtle glow. |
| `minimal` | Bold black & white brutalist style. |
| `gradient` | Vibrant Sunset gradient with animations. |

### 🚀 NEW: 3D Isometric Style
Added a special **Isometric Cube** theme that brings a 3D feel directly to your web interface using pure CSS.

```vue
<VPagination theme="cube" ... />
```

*(Visual representation of the 3D look)*

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalItems` | `number` | **required** | Total number of items to paginate |
| `itemsPerPage` | `number` | `10` | Number of items per page |
| `currentPage` | `number` | `1` | Current active page (v-model) |
| `maxVisibleButtons` | `number` | `7` | Maximum number of page buttons to show |
| `theme` | `string` | `'default'` | Theme name: `default`, `modern`, `minimal`, `gradient`, `cube`, `gothic`. |
| `hideNumbers` | `boolean` | `false` | If `true`, only navigation arrows will be shown. |
| `showFirstLast` | `boolean` | `true` | Show first/last page buttons |
| `showPrevNext` | `boolean` | `true` | Show previous/next buttons |
| `disabled` | `boolean` | `false` | Disable all pagination controls |
| `ariaLabel` | `string` | `'Pagination Navigation'` | Custom aria-label for accessibility |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:currentPage` | `number` | Emitted when page changes (for v-model) |
| `change` | `number` | Emitted when page changes |

### Example with All Options

```vue
<script setup>
import { ref } from 'vue'
import { VPagination } from '@vue-pagination/core'

const currentPage = ref(1)

const handlePageChange = (page) => {
  console.log('Page changed to:', page)
}
</script>

<template>
  <VPagination
    v-model:current-page="currentPage"
    :total-items="500"
    :items-per-page="20"
    :max-visible-buttons="5"
    theme="modern"
    :show-first-last="true"
    :show-prev-next="true"
    :disabled="false"
    aria-label="Product List Pagination"
    @change="handlePageChange"
  />
</template>
```

## 🎯 Using the Composable

You can also use the `usePagination` composable directly for custom implementations:

```vue
<script setup>
import { usePagination } from '@vue-pagination/core'

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
  totalItems: 100,
  itemsPerPage: 10,
  currentPage: 1,
  maxVisibleButtons: 7
})
</script>

<template>
  <div>
    <button @click="prevPage" :disabled="isFirstPage">Previous</button>
    <button
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page === -1 ? '...' : page }}
    </button>
    <button @click="nextPage" :disabled="isLastPage">Next</button>
  </div>
</template>
```

## 🎨 Custom Styling

You can customize the appearance using CSS variables:

```css
.v-pagination {
  --v-pagination-gap: 0.5rem;
  --v-pagination-button-size: 2.5rem;
  --v-pagination-button-border: 1px solid #e5e7eb;
  --v-pagination-button-radius: 0.5rem;
  --v-pagination-button-bg: #ffffff;
  --v-pagination-button-color: #374151;
  --v-pagination-button-hover-bg: #f3f4f6;
  --v-pagination-active-bg: #3b82f6;
  --v-pagination-active-color: #ffffff;
  --v-pagination-focus-ring: rgba(59, 130, 246, 0.3);
}
```

### Creating a Custom Theme

```vue
<template>
  <VPagination
    class="my-custom-theme"
    :total-items="100"
    v-model:current-page="page"
  />
</template>

<style>
.my-custom-theme {
  --v-pagination-button-bg: #fef3c7;
  --v-pagination-button-color: #92400e;
  --v-pagination-active-bg: #f59e0b;
  --v-pagination-active-color: #ffffff;
}
</style>
```

## 🌐 TypeScript Support

Full TypeScript support with exported types:

```typescript
import type {
  PaginationProps,
  PaginationEmits,
  UsePaginationOptions,
  UsePaginationReturn
} from '@vue-pagination/core'
```

## ♿ Accessibility

This component follows WAI-ARIA best practices:

- Proper ARIA labels on all buttons
- `aria-current="page"` on active page
- Keyboard navigation support
- Focus management with visible focus rings
- Screen reader friendly

## 📱 Responsive Design

The component automatically adapts to smaller screens:

- Reduced button sizes on mobile
- Adjusted spacing for touch targets
- Maintains usability across all devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with ❤️ using Vue 3 and TypeScript.

---

**Enjoy using @vue-pagination/core!** ⭐ Star us on GitHub if you find this useful!
