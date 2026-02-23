// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type {EnhanceAppContext, Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import {appInfoKey} from './keys'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app, router}: EnhanceAppContext) {
    // After client-side route changes, re-scroll to the hash anchor once the
    // page content has finished rendering. VitePress's SPA router scrolls
    // before layout shifts settle, causing anchors to land off-screen.
    router.onAfterRouteChange = () => {
      setTimeout(() => {
        const {hash} = window.location
        if (!hash) return
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView()
      }, 300)
    }

    const githubMainBranch = 'main'
    const base = `tree/${githubMainBranch}`
    const githubUrl = 'https://github.com/bootstrap-vue-next/bootstrap-vue-next'
    const githubPackageDirectory = `${githubUrl}/${base}/packages/bootstrap-vue-next`
    const githubComponentsDirectory = `${githubPackageDirectory}/src/components`
    const githubComposablesDirectory = `${githubPackageDirectory}/src/composables`
    const githubDirectivesDirectory = `${githubPackageDirectory}/src/directives`
    const githubDocsDirectory = `${githubUrl}/${base}/apps/docs/src`
    app.provide(appInfoKey, {
      githubMainBranch,
      githubUrl,
      githubDocsDirectory,
      githubPackageDirectory,
      githubComponentsDirectory,
      githubComposablesDirectory,
      githubDirectivesDirectory,
      discordUrl: 'https://discord.gg/j2Mtcny',
      opencollectiveUrl: 'https://opencollective.com/bootstrap-vue-next',
    })
  },
} satisfies Theme
