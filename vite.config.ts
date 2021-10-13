//import builtins from 'rollup-plugin-node-builtins'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import viteSSR from 'vite-ssr/plugin.js'

export const ssrTransformCustomDir = (): any => ({
  props: [],
  needRuntime: true,
})

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
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: `bootstrap-vue-3.[ext]`, //without this, it generates build/styles.css
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            'b-modal': ssrTransformCustomDir,
            'b-popover': ssrTransformCustomDir,
            'b-toggle': ssrTransformCustomDir,
            'b-tooltip': ssrTransformCustomDir,
            'b-visible': ssrTransformCustomDir,
          },
        },
      },
    }),
    viteSSR(),
  ],

  server: {
    host: 'localhost', //this is the default
    port: 8080, //this is the default
  },
})

export default config
