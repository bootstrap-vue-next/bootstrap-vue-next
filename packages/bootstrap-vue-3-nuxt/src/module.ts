import {defineNuxtModule} from '@nuxt/kit'
import type {ModuleOptions} from './types'
import {useComponents, useComposables, usePlugins} from './composables'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'bootstrap-vue-3',
    configKey: 'bootstrapVue3',
    compatibility: {
      bridge: false,
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    composables: {all: true},
    plugins: {all: true},
  },
  setup(options) {
    useComponents()
    useComposables(options.composables)
    usePlugins(options.plugins)
  },
})
