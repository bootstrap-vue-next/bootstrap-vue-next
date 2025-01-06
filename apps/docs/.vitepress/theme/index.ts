// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import {appInfoKey} from './keys'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import {createBootstrap} from 'bootstrap-vue-next'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    const githubMainBranch = 'main'
    const base = `tree/${githubMainBranch}`
    const githubUrl = 'https://github.com/bootstrap-vue-next/bootstrap-vue-next'
    const githubPackageDirectory = `${githubUrl}/${base}/packages/bootstrap-vue-next`
    const githubComponentsDirectory = `${githubPackageDirectory}/src/components`
    const githubComposablesDirectory = `${githubPackageDirectory}/src/composables`
    const githubDirectivesDirectory = `${githubPackageDirectory}/src/directives`
    const githubDocsDirectory = `${githubUrl}/${base}/apps/docs/src/docs`
    ctx.app.provide(appInfoKey, {
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
    ctx.app.use(createBootstrap())
  },
} satisfies Theme
