import BootstrapVueNext from '../../../src/module'

export default defineNuxtConfig({
  modules: [BootstrapVueNext],
  compatibilityDate: 'latest',
  bootstrapVueNext: {
    css: false,
    composables: { all: false, useToast: true },
    directives: { all: false, vBTooltip: true },
    plugin: {
      components: {
        BModal: { teleportTo: '#custom-teleport' },
        BLink: { routerComponentName: 'NuxtLink' },
      },
    },
  },
})
