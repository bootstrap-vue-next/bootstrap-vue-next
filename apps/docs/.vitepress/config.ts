import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BootstrapVueNext",
  description: "BootstrapVueNext Documentation",
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver(),
          BootstrapVueNextResolver(),
        ]
      }) as any,
      Icons()
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
  },
  appearance: false
})
