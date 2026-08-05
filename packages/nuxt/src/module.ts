import { defineNuxtModule, createResolver, addImports, addPlugin, hasNuxtModule } from '@nuxt/kit'
import { composableNames, directiveNames, composablesWithExternalPath } from 'bootstrap-vue-next'
import { useComponents } from './composables/useComponents'
import type { ModuleOptions } from './types/ModuleOptions'
import { parseActiveImports } from './utils/parseActiveImports'
import { normalizeConfigurationValue } from './utils/normalizeConfigurationValue'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'bootstrap-vue-next',
    configKey: 'bootstrapVueNext',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    composables: true,
    directives: true,
    css: true,
    autoUseNuxtImage: true,
    plugin: {},
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
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
    const transformAssetUrls = {
      BImg: ['src'],
    }

    nuxt.options.vite.vue = nuxt.options.vite.vue || {}
    nuxt.options.vite.vue.template = nuxt.options.vite.vue.template || {}
    nuxt.options.vite.vue.template.transformAssetUrls
      = nuxt.options.vite.vue.template.transformAssetUrls ?? {}

    if (
      typeof nuxt.options.vite.vue.template.transformAssetUrls !== 'boolean'
      && !(
        'BImg' in nuxt.options.vite.vue.template.transformAssetUrls
        || 'b-img' in nuxt.options.vite.vue.template.transformAssetUrls
      )
    ) {
      nuxt.options.vite.vue.template.transformAssetUrls = {
        ...nuxt.options.vite.vue.template.transformAssetUrls,
        ...transformAssetUrls,
      }
    }

    // Add components
    useComponents()

    // Auto-detect @nuxt/image and configure BImg to use NuxtImg
    if (options.autoUseNuxtImage && hasNuxtModule('@nuxt/image')) {
      options.plugin = {
        ...options.plugin,
        components: {
          ...options.plugin?.components,
          BImg: {
            tag: 'NuxtImg',
            ...options.plugin?.components?.BImg,
          },
        },
      }
    }

    // Add directives
    const activeDirectives = Object.values(normalizedDirectiveOptions).includes(true)
      ? parseActiveImports(normalizedDirectiveOptions, directiveNames)
      : []

    // Expose the values for the runtime to use
    nuxt.options.runtimeConfig.public.bootstrapVueNext = {
      directives: activeDirectives,
      plugin: options.plugin,
    }

    if (activeDirectives.length > 0) {
      addPlugin(resolve('./runtime/useDirectives'))
    }

    // Add composables
    if (Object.values(normalizedComposableOptions).includes(true)) {
      parseActiveImports(normalizedComposableOptions, composableNames).forEach((name) => {
        const from = `bootstrap-vue-next${composablesWithExternalPath[name]}`
        addImports({
          from,
          name,
        })
      })
    }
  },
})
