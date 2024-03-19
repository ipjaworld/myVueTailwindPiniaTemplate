import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import htmlEnv from 'vite-plugin-html-env'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), htmlEnv()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
