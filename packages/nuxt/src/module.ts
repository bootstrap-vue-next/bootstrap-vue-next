import {defineNuxtModule, addPlugin, createResolver} from '@nuxt/kit'
// import type {Import} from 'unimport'
import useComponents from './composables/useComponents'
import type ModuleOptions from './types/ModuleOptions'
// import parseActiveImports from './utils/parseActiveImports'

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
    directives: true,
    composables: true,
  },
  setup(options, nuxt) {
    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    // const normalizedDirectives =
    //   typeof options.directives === 'boolean' ? {all: options.directives} : options.directives
    const normalizedcomposables =
      typeof options.composables === 'boolean' ? {all: options.composables} : options.composables

    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')

    useComponents()

    if (normalizedcomposables.createBreadcrumb || normalizedcomposables.useBreadcrumb) {
      addPlugin(resolver.resolve('./runtime/breadcrumb'))
    }

    // const arr: Import[] = []
    // if (Object.values(normalizedcomposables).some((el) => el === true)) {
    //   const imports = parseActiveImports(
    //     {
    //       createBreadcrumb: false,
    //       useBreadcrumb: false,
    //     },
    //     normalizedcomposables
    //   ).map(
    //     (el) =>
    //       ({
    //         from: resolver.resolve('./runtime/composables'),
    //         name: el,
    //       } as Import)
    //   )
    //   arr.push(...imports)
    // }
    // if (Object.values(normalizedDirectives).some((el) => el === true)) {
    //   const imports = parseActiveImports(
    //     {
    //       vBColorMode: false,
    //       vBPopover: false,
    //       vBToggle: false,
    //       vBTooltip: false,
    //     },
    //     normalizedDirectives
    //   ).map(
    //     (el) =>
    //       ({
    //         from: resolver.resolve('./runtime/directives'),
    //         name: el,
    //         as: el.toLowerCase().startsWith('v') ? el.slice(1) : el,
    //       } as Import)
    //   )
    //   arr.push(...imports)
    // }
    // if (arr.length) {
    //   addImports(arr)
    // }
  },
})
