// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type {Theme} from 'vitepress'
import {appInfoKey} from './keys'
import {BToastPlugin} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default {
  Layout,
  enhanceApp(ctx) {
    ctx.app.provide(appInfoKey, {
      githubUrl: 'https://github.com/bootstrap-vue-next/bootstrap-vue-next',
      discordUrl: 'https://discord.gg/j2Mtcny',
      opencollectiveUrl: 'https://opencollective.com/bootstrap-vue-next',
    })

    if (!import.meta.env.SSR) {
      ctx.app.use(BToastPlugin)
    }
  },
} as Theme
