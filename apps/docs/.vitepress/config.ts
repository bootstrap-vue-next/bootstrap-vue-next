import {defineConfig} from 'vitepress'
import Icons from 'unplugin-icons/vite'

const title = 'BootstrapVueNext'
const description = 'Quickly and Easily Integrate Bootstrap V5 Components With Vue 3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: '/bootstrap-vue-next/',
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: '/bootstrap-vue-next/favicon.ico'}],
    ['meta', {property: 'og:title', name: 'og:title', content: title}],
    ['meta', {property: 'og:description', name: 'og:description', content: description}],
    ['meta', {property: 'twitter:card', name: 'twitter:card', content: 'summary'}],
    ['meta', {property: 'twitter:title', name: 'twitter:title', content: title}],
    ['meta', {property: 'twitter:description', name: 'twitter:description', content: description}],
  ],
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
