import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import useComponents from './composables/useComponents'
import useComposables from './composables/useComposables'
import useDirectives from './composables/useDirectives'
import type { Composables, Directives } from 'bootstrap-vue-next'

// Module options TypeScript interface definition
export interface ModuleOptions {
  directives: Partial<Record<keyof typeof Directives, boolean>> & {all: boolean}
  composables: Partial<Record<keyof typeof Composables, boolean>> & {all: boolean}
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'bootstrap-vue-next',
    configKey: 'bootstrapVueNext',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
  },
  defaults: {
    directives: {all: true},
    composables: {all: true},
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')

    useComponents()
    if(Object.values(options.composables).some(el => el === true)) {
      useComposables(options.composables)
    }
    if(Object.values(options.directives).some(el => el === true)){
      useDirectives(options.directives)
    }
  }
})
