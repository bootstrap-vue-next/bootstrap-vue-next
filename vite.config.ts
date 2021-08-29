//import builtins from 'rollup-plugin-node-builtins'

import {defineConfig} from "vite"
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

const config = defineConfig({
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },

  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/BootstrapVue.ts'),
      name: 'bootstrap-vue-3',
      fileName: (format) => `bootstrap-vue-3.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        assetFileNames: `bootstrap-vue-3.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],

  server: {
    host: 'localhost', //this is the default
    port: 8080, //this is the default       

  },
})

export default config
