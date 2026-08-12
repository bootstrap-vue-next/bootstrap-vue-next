import BootstrapVueNext from '../../../src/module'

export default defineNuxtConfig({
  modules: [BootstrapVueNext],
  compatibilityDate: 'latest',
  bootstrapVueNext: {
    composables: false,
    directives: true,
    css: false,
  },
})
