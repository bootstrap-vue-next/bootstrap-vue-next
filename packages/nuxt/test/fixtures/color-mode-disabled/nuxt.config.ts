import BootstrapVueNext from '../../../src/module'

export default defineNuxtConfig({
  modules: [BootstrapVueNext, '@nuxtjs/color-mode'],
  compatibilityDate: 'latest',
  bootstrapVueNext: {
    autoConfigureNuxtColorMode: false,
  },
})
