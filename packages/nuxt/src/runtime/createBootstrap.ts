import { createBootstrap as createBootstrapVue } from 'bootstrap-vue-next/plugins/createBootstrap'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const opts = useRuntimeConfig().public.bootstrapVueNext.plugin

  nuxtApp.vueApp.use(
    createBootstrapVue({
      ...opts,
      components: {
        ...opts?.components,
        global: {
          routerComponentName: 'BLink',
        },
        BModal: {
          teleportTo: '#teleports',
          ...opts?.components?.BModal,
        },
        BOffcanvas: {
          teleportTo: '#teleports',
          ...opts?.components?.BOffcanvas,
        },
        BOrchestrator: {
          teleportTo: '#teleports',
          ...opts?.components?.BOrchestrator,
        },
        BApp: {
          teleportTo: '#teleports',
          ...opts?.components?.BApp,
        },
      },
    }),
  )
})
