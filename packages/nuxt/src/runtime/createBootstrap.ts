import {createBootstrap} from 'bootstrap-vue-next'
import {defineNuxtPlugin, useId, useRuntimeConfig} from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const opts = useRuntimeConfig().public.bootstrapVueNext.plugin

  nuxtApp.vueApp.use(
    createBootstrap({
      components: false,
      directives: false,
      plugins: {
        ...opts,
        id: {
          getId: () => useId(),
        },
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
        },
      },
    })
  )
})
