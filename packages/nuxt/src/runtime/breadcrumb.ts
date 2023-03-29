import {defineNuxtPlugin} from '#app'
import {createBreadcrumb} from 'bootstrap-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  createBreadcrumb(nuxtApp.vueApp)
})
