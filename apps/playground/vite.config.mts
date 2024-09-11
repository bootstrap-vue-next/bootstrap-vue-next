import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  server: {
    watch: {
      ignored: ['!**/node_modules/bootstrap-vue-next/**'],
    },
  },
  optimizeDeps: {
    exclude: ['bootstrap-vue-next'],
  },
})
