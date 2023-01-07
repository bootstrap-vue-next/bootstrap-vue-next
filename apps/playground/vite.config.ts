import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      ignored: ['!**/node_modules/bootstrap-vue-3/**'],
    },
  },
  optimizeDeps: {
    exclude: ['bootstrap-vue-3'],
  },
})
