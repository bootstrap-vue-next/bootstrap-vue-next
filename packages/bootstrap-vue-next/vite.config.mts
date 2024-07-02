/// <reference types="vitest" />

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite'

import {copyFileSync} from 'node:fs'

export default defineConfig({
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVue.ts'),
      name: 'bootstrap-vue-next',
      fileName: 'bootstrap-vue-next',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-next.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  css: {preprocessorOptions: {scss: {charset: false}}},

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      dts: true,
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: './dist',
      afterBuild: () => {
        copyFileSync('./dist/src/BootstrapVue.d.ts', './dist/src/BootstrapVue.d.mts')
      },
    }),
  ],

  server: {
    host: true,
  },

  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
