import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    base: '/v-paginate-pretty/',
    plugins: [vue()],
    resolve: {
        alias: [
            { find: /^v-paginate-pretty$/, replacement: fileURLToPath(new URL('../src/index.ts', import.meta.url)) },
            { find: /^v-paginate-pretty\/dist\/style\.css$/, replacement: fileURLToPath(new URL('../dist/style.css', import.meta.url)) }
        ]
    }
})
