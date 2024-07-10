import {defineNuxtModule, createResolver, addImports, addPlugin} from '@nuxt/kit'
import useComponents from './composables/useComponents'
import type {ModuleOptions} from './types/ModuleOptions'
import parseActiveImports from './utils/parseActiveImports'
import {ComposableNames, DirectiveNames} from 'bootstrap-vue-next'
import normalizeConfigurationValue from './utils/normalizeConfigurationValue'

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
    directives: true,
    css: true,
    plugin: {},
  },
  setup(options, nuxt) {
    // @ts-ignore
    const {resolve} = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    if (options.css === true) {
      nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')
    }

    const normalizedComposableOptions = normalizeConfigurationValue(options.composables)
    const normalizedDirectiveOptions = normalizeConfigurationValue(options.directives)

    nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
    nuxt.options.vite.optimizeDeps.include = nuxt.options.vite.optimizeDeps.include || []
    nuxt.options.vite.optimizeDeps.include.push('bootstrap-vue-next')

    // Add the base runtime plugin
    addPlugin(resolve('./runtime/createBootstrap'))

    // Set transformAssetUrls
    const transformAssetUrls = Object.freeze({
      BImg: ['src'],
    })

    nuxt.options.vite.vue = nuxt.options.vite.vue || {}
    nuxt.options.vite.vue.template = nuxt.options.vite.vue.template || {}
    nuxt.options.vite.vue.template.transformAssetUrls =
      nuxt.options.vite.vue.template.transformAssetUrls ?? {}

    if (
      typeof nuxt.options.vite.vue.template.transformAssetUrls !== 'boolean' &&
      !(
        'BImg' in nuxt.options.vite.vue.template.transformAssetUrls ||
        'b-img' in nuxt.options.vite.vue.template.transformAssetUrls
      )
    ) {
      nuxt.options.vite.vue.template.transformAssetUrls = {
        ...nuxt.options.vite.vue.template.transformAssetUrls,
        ...transformAssetUrls,
      }
    }

    // Add components
    useComponents()

    // Add directives
    if (Object.values(normalizedDirectiveOptions).some((el) => el === true)) {
      const activeDirectives = parseActiveImports(normalizedDirectiveOptions, DirectiveNames)

      // Expose the values for the runtime to use in useDirectives
      nuxt.options.runtimeConfig.public.bootstrapVueNext = {
        directives: activeDirectives,
        plugin: options.plugin,
      }

      addPlugin(resolve('./runtime/useDirectives'))
    }

    // Add composables
    if (Object.values(normalizedComposableOptions).some((el) => el === true)) {
      parseActiveImports(normalizedComposableOptions, ComposableNames).forEach((name) =>
        addImports({
          from: 'bootstrap-vue-next',
          name,
        })
      )
    }
  },
})
