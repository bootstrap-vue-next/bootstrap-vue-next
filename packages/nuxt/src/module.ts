import {defineNuxtModule, createResolver, addImports, addPlugin} from '@nuxt/kit'
import useComponents from './composables/useComponents'
import type {ModuleOptions} from './types/ModuleOptions'
import parseActiveImports from './utils/parseActiveImports'
import {Composables} from 'bootstrap-vue-next'

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
    const {resolve} = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugins/createBootstrap'))

    const normalizedComposableOptions =
      typeof options.composables === 'boolean' ? {all: options.composables} : options.composables

    nuxt.options.build.transpile.push(resolve('./runtime'))

    const transformAssetUrls = {
      BImg: ['src'],
    }

    // Set transformAssetUrls
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

    nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
    nuxt.options.vite.optimizeDeps.include = nuxt.options.vite.optimizeDeps.include || []
    nuxt.options.vite.optimizeDeps.include.push('bootstrap-vue-next')

    useComponents()

    if (Object.values(normalizedComposableOptions).some((el) => el === true)) {
      parseActiveImports(normalizedComposableOptions, Object.keys(Composables)).map((name) =>
        addImports({
          from: 'bootstrap-vue-next',
          name,
        })
      )
    }
  },
})
