import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@vue-pagination/core': fileURLToPath(new URL('../src/index.ts', import.meta.url))
        }
    }
})
