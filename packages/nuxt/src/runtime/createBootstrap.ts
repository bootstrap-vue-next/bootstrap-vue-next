import {createBootstrap} from 'bootstrap-vue-next/plugins'
import {defineNuxtPlugin, useId, useRuntimeConfig} from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  const opts = useRuntimeConfig().public.bootstrapVueNext.plugin

  nuxtApp.vueApp.use(
    createBootstrap({
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
      },
    })
  )
})
