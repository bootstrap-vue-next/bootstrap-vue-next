import {defineNuxtModule, createResolver, addImports, addPlugin} from '@nuxt/kit'
import useComponents from './composables/useComponents'
import type {ModuleOptions} from './types/ModuleOptions'
import parseActiveImports from './utils/parseActiveImports'
import {Composables, Directives} from 'bootstrap-vue-next'
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
  },
  setup(options, nuxt) {
    // @ts-ignore
    const {resolve} = createResolver(import.meta.url)
    const normalizedComposableOptions = normalizeConfigurationValue(options.composables)
    const normalizedDirectiveOptions = normalizeConfigurationValue(options.directives)

    // Add the base runtime plugin
    addPlugin(resolve('./runtime/plugins/createBootstrap'))

    nuxt.options.build.transpile.push(resolve('./runtime'))

    // Set transformAssetUrls
    const transformAssetUrls = Object.freeze({
      BImg: ['src'],
    })
    if (nuxt.options.vite.vue === undefined) {
      nuxt.options.vite.vue = {
        template: {
          transformAssetUrls,
        },
      }
    } else if (nuxt.options.vite.vue.template === undefined) {
      nuxt.options.vite.vue.template = {
        transformAssetUrls,
      }
    } else if (nuxt.options.vite.vue.template.transformAssetUrls === undefined) {
      nuxt.options.vite.vue.template.transformAssetUrls = transformAssetUrls
    } else if (
      // Do not overwrite user options
      !(
        typeof nuxt.options.vite.vue.template.transformAssetUrls !== 'boolean' &&
        ('BImg' in nuxt.options.vite.vue.template.transformAssetUrls ||
          'b-img' in nuxt.options.vite.vue.template.transformAssetUrls)
      )
    ) {
      Object.assign(nuxt.options.vite.vue.template.transformAssetUrls, transformAssetUrls)
    }

    nuxt.options.css.push('bootstrap-vue-next/dist/bootstrap-vue-next.css')

    // Add components
    useComponents()

    // Add directives
    if (Object.values(normalizedDirectiveOptions).some((el) => el === true)) {
      const activeDirectives = parseActiveImports(
        normalizedDirectiveOptions,
        Object.keys(Directives)
      )

      // Expose the values for the runtime to use in useDirectives
      nuxt.options.runtimeConfig.public.bootstrapVueNext = {
        directives: activeDirectives,
      }

      addPlugin(resolve('./runtime/plugins/useDirectives'))
    }

    // Add composables
    if (Object.values(normalizedComposableOptions).some((el) => el === true)) {
      parseActiveImports(normalizedComposableOptions, Object.keys(Composables)).forEach((name) =>
        addImports({
          from: 'bootstrap-vue-next',
          name,
        })
      )
    }
  },
})
