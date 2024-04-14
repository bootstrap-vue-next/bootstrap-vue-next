import {defineConfig} from 'vitepress'
import Icons from 'unplugin-icons/vite'

const title = 'BootstrapVueNext'
const description = 'Quickly and Easily Integrate Bootstrap V5 Components With Vue 3'
const baseUrl = '/bootstrap-vue-next/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: baseUrl,
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: `${baseUrl}favicon.ico`}],
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
  sitemap: {
    hostname: `https://bootstrap-vue-next.github.io${baseUrl}`,
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
  },
})
