import {addImports, addPlugin, createResolver, defineNuxtModule} from '@nuxt/kit'
import type {Import} from 'unimport'
import useComponents from './composables/useComponents'
import type ModuleOptions from './types/ModuleOptions'
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
    directives: {all: true},
    composables: {all: true},
  },
  setup(options, nuxt) {
    nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')

    useComponents()

    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    if (options.composables.createBreadcrumb || options.composables.useBreadcrumb) {
      addPlugin(resolver.resolve('./runtime/breadcrumb'))
    }

    const arr: Import[] = []
    if (Object.values(options.composables).some((el) => el === true)) {
      const imports = parseActiveImports(
        {
          createBreadcrumb: false,
          useBreadcrumb: false,
        },
        options.composables
      ).map(
        (el) =>
          ({
            from: resolver.resolve('./runtime/composables'),
            name: el,
          } as Import)
      )
      arr.push(...imports)
    }
    if (Object.values(options.directives).some((el) => el === true)) {
      const imports = parseActiveImports(
        {
          vBColorMode: false,
          vBPopover: false,
          vBToggle: false,
          vBTooltip: false,
        },
        options.directives
      ).map(
        (el) =>
          ({
            from: resolver.resolve('./runtime/directives'),
            name: el,
            as: el.toLowerCase().startsWith('v') ? el.slice(1) : el,
          } as Import)
      )
      arr.push(...imports)
    }
    if (arr.length) {
      addImports(arr)
    }
  },
})
