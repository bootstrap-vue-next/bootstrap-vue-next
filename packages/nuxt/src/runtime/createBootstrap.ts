import { createBootstrap as createBootstrapVue } from 'bootstrap-vue-next/plugins/createBootstrap'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const opts = useRuntimeConfig().public.bootstrapVueNext.plugin

  nuxtApp.vueApp.use(
    createBootstrapVue({
      ...opts,
      components: {
        ...opts?.components,
        BModal: {
          teleportTo: '#teleports',
          ...opts?.components?.BModal,
        },
        BModalOrchestrator: {
          teleportTo: '#teleports',
          ...opts?.components?.BModalOrchestrator,
        },
        BOffcanvas: {
          teleportTo: '#teleports',
          ...opts?.components?.BOffcanvas,
        },
        BToastOrchestrator: {
          teleportTo: '#teleports',
          ...opts?.components?.BToastOrchestrator,
        },
        BLink: {
          routerComponentName: 'NuxtLink',
          ...opts?.components?.BLink,
        },
      },
    }),
  )
})
