//import builtins from 'rollup-plugin-node-builtins'

import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

const config = defineConfig({
    resolve: {
        alias: {
            "@": `${resolve(__dirname, "src")}`,
        },
    },

    build: {
        minify: true,
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
