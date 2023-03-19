/// <reference types="vitest" />

import {defineConfig, type PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {visualizer} from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVue.ts'),
      name: 'bootstrap-vue-next',
      fileName: (format) => `bootstrap-vue-next.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['bootstrap', 'bootstrap/js/dist/collapse', 'vue'],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-next.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'vue': 'Vue',
          'bootstrap': 'Bootstrap',
          'bootstrap/js/dist/collapse': 'Collapse',
        },
      },
    },
  },

  css: {preprocessorOptions: {scss: {charset: false}}},

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    visualizer() as unknown as PluginOption,
    dts({
      tsConfigFilePath: './tsconfig.app.json',
    }),
  ],

  server: {
    host: true,
  },

  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
  },
})
