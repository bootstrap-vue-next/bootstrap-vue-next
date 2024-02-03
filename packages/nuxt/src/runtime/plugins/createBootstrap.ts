import {createBootstrap} from 'bootstrap-vue-next'
import {defineNuxtPlugin} from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createBootstrap({
      components: false,
      directives: false,
    })
  )
})
