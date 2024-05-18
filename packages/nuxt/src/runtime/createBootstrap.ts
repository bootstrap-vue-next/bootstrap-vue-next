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
          global: {
            teleportTo: '#teleports',
            ...opts?.components?.global,
          },
        },
      },
    })
  )
})
