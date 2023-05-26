import {defineNuxtModule, addPlugin, createResolver, addImports} from '@nuxt/kit'
import type {Import} from 'unimport'
import useComponents from './composables/useComponents'
import type {ModuleOptions} from './types/ModuleOptions'
import parseActiveImports from './utils/parseActiveImports'

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
    composables: true,
  },
  setup(options, nuxt) {
    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    const normalizedComposables =
      typeof options.composables === 'boolean' ? {all: options.composables} : options.composables

    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')

    useComponents()

    const arr: Import[] = []
    if (Object.values(normalizedComposables).some((el) => el === true)) {
      const imports = parseActiveImports(normalizedComposables, {
        useBreadcrumb: false,
        useColorMode: false,
      }).map(
        (el) =>
          ({
            from: resolver.resolve('./runtime/composables'),
            name: el,
          } as Import)
      )
      arr.push(...imports)
    }
    if (arr.length) {
      addImports(arr)
    }
  },
})
