// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type {EnhanceAppContext, Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import {appInfoKey} from './keys'
import {nextTick} from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
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

    // Prevent href="#" links from scrolling to top in documentation examples
    if (typeof window !== 'undefined') {
      // Replace href="#" with href="javascript:void(0)" to prevent scrolling
      const replaceHashHrefs = () => {
        document.querySelectorAll('a[href="#"]').forEach((link) => {
          link.setAttribute('href', 'javascript:void(0)')
        })
      }

      // Replace immediately after DOM is ready
      nextTick(() => {
        replaceHashHrefs()

        // Watch for Vue updates that might add new links
        const observer = new MutationObserver((mutations) => {
          const shouldReplace = mutations.some(
            (mutation) => mutation.type === 'childList' && mutation.addedNodes.length > 0
          )
          if (shouldReplace) {
            replaceHashHrefs()
          }
        })

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        })
      })
    }
  },
} satisfies Theme
