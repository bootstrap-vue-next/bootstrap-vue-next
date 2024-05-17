import {createBootstrap} from 'bootstrap-vue-next'
import {defineNuxtPlugin, useId} from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createBootstrap({
      components: false,
      directives: false,
      plugins: {
        id: {
          getId: () => useId(),
        },
        components: {
          global: {
            teleportTo: '#teleports',
          },
        },
      },
    })
  )
})
