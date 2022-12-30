/// <reference types="vitest" />

import {defineConfig, PluginOption} from 'vite'
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
      name: 'bootstrap-vue-3',
      fileName: (format) => `bootstrap-vue-3.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'bootstrap',
        'bootstrap-vue-icons',
        'bootstrap/js/dist/alert',
        'bootstrap/js/dist/collapse',
        'bootstrap/js/dist/modal',
        'bootstrap/js/dist/offcanvas',
        'bootstrap/js/dist/popover',
        'bootstrap/js/dist/carousel',
        'bootstrap/js/dist/dropdown',
        'bootstrap/js/dist/tooltip',
        'vue',
      ],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-3.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'vue': 'Vue',
          'bootstrap': 'Bootstrap',
          'bootstrap/js/dist/collapse': 'Collapse',
          'bootstrap/js/dist/alert': 'Alert',
          'bootstrap/js/dist/carousel': 'Carousel',
          'bootstrap/js/dist/dropdown': 'Dropdown',
          'bootstrap/js/dist/modal': 'Modal',
          'bootstrap/js/dist/offcanvas': 'Offcanvas',
          'bootstrap/js/dist/popover': 'Popover',
          'bootstrap/js/dist/tooltip': 'Tooltip',
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
    dts(),
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
