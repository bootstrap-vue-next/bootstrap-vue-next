import {addComponentsDir, createResolver, defineNuxtModule} from '@nuxt/kit'
import {displayName as configKey, name, version} from './package.json'

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
  },
  setup() {
    const {resolve} = createResolver(import.meta.url)

    addComponentsDir({
      global: true,
      path: resolve('./src/components'),
      extensions: ['vue'],
    })
  },
})
