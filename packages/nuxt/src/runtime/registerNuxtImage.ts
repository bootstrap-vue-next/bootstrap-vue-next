import { NuxtImg } from '#components'
import { defineNuxtPlugin } from '#app'

// This plugin is only bundled/added when `@nuxt/image` is detected and `autoUseNuxtImage` is
// enabled (see ../module.ts), so it is always safe to import `NuxtImg` from `#components` here.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('NuxtImg', NuxtImg)
})
