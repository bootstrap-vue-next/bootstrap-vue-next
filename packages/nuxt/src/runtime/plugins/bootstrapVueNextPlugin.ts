import {BootstrapVueNextPlugin} from 'bootstrap-vue-next'

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVueNextPlugin)
})
