import BootstrapVueNext from '../../../src/module'

export default defineNuxtConfig({
  modules: [BootstrapVueNext],
  compatibilityDate: 'latest',
  bootstrapVueNext: {
    composables: true,
    directives: false,
    css: false,
  },
})
