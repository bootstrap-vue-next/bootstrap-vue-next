import {addComponentsDir, addImports, createResolver, defineNuxtModule} from '@nuxt/kit'
import {displayName as configKey, name, version} from './package.json'

// Perhaps the best Object structure would be {all?: boolean, [individual]?: boolean}
// Where you can do {all: false, popover: true} and only get popover on
// And also do {all: true, popover: false} and get everything but popover on
// Where all default = true and individaul default = true
// Inspired by tauri config https://tauri.app/v1/guides/building/app-size#allowlist-config

type Import = Exclude<Parameters<typeof addImports>[0], Array<unknown>>

interface PluginObject {
  popover: boolean
  toggle: boolean
  tooltip: boolean
  visible: boolean
}

interface ComposableObject {
  useToast: boolean
  useBreadcrumb: boolean
}

interface ModuleOptions {
  plugins: boolean | PluginObject
  composables: boolean | ComposableObject
}

const activeResolver = <T extends string>(
  opt: boolean | Record<T, boolean>,
  obj: Record<T, Import>
): Array<Import> =>
  opt === true // If all true, get all values from Array<Import>
    ? Object.values(obj)
    : opt === false
    ? [] // If false []
    : Object.keys(obj)
        .filter((el) => opt[el as T] === true) // Filter which opts values are true
        .map((el) => obj[el as T]) // Go back to the obj and pull out the value based on keys that had opt values of true

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
  },
  defaults: {
    plugins: true,
    composables: true,
  },
  setup(opts) {
    const {resolve} = createResolver(import.meta.url)

    const plugins: Record<keyof PluginObject, Import> = {
      popover: {from: 'f', name: 'b'},
      toggle: {from: 'f', name: 'b'},
      tooltip: {from: 'f', name: 'b'},
      visible: {from: 'f', name: 'b'},
    }

    const composables: Record<keyof ComposableObject, Import> = {
      useBreadcrumb: {from: 'f', name: 'b'},
      useToast: {from: 'f', name: 'b'},
    }

    addComponentsDir({
      global: true,
      path: resolve('./src/components'),
      extensions: ['vue'],
    })

    addImports([
      ...activeResolver(opts.plugins, plugins), // Get Plugin imports
      ...activeResolver(opts.composables, composables), // Get Composable imports
    ])
  },
})
