import {defineConfig} from 'vitepress'
import Icons from 'unplugin-icons/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BootstrapVueNext',
  description: 'BootstrapVueNext Documentation',
  base: '/bootstrap-vue-next/',
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [['link', {rel: 'icon', type: 'image/x-icon', href: '/bootstrap-vue-next/favicon.ico'}]],
  vite: {
    plugins: [Icons()],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },
  appearance: false,
})
