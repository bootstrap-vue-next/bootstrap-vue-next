//import builtins from 'rollup-plugin-node-builtins'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import visualizer from 'rollup-plugin-visualizer'

const config = defineConfig({
  resolve: {
    alias: {},
  },

  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVue.ts'),
      name: 'bootstrap-vue-3',
      fileName: (format) => `bootstrap-vue-3.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['bootstrap', 'vue'],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-3.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          bootstrap: 'Bootstrap',
        },
      },
    },
  },

  css: {preprocessorOptions: {scss: {charset: false}}},

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    visualizer(), // generates admin/stats.html on npm run build
  ],

  server: {
    host: 'localhost', //this is the default
    port: 8080, //this is the default
  },
})

export default config
