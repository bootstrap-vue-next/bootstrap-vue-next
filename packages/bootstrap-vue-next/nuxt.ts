import {addComponentsDir, addImports, createResolver, defineNuxtModule} from '@nuxt/kit'

type Import = Exclude<Parameters<typeof addImports>[0], Array<unknown>>

interface Base {
  all?: boolean
}

type ObjectExtension = Record<string, boolean | undefined>

interface PluginObject extends ObjectExtension {
  colorMode?: boolean
  popover?: boolean
  toggle?: boolean
  tooltip?: boolean
  visible?: boolean
}

const pluginsBase: PluginObject = {
  colorMode: undefined,
  popover: undefined,
  toggle: undefined,
  tooltip: undefined,
  visible: undefined,
}

interface ComposableObject extends ObjectExtension {
  useBreadcrumb?: boolean
  useColorMode?: boolean
  useToast?: boolean
}

const composablesBase: ComposableObject = {
  useBreadcrumb: undefined,
  useColorMode: undefined,
  useToast: undefined,
}

interface ModuleOptions {
  plugins: Base & PluginObject
  composables: Base & ComposableObject
}

/**
 * An object gets set with the defaults of true/false.
 * Then gets those values overwritten by what's in the opts.
 * The values gets filtered by which of those opts are true.
 * TODO Types need to be better, you can essentially input anything you want.
 * @param {Base & T} opt
 * @param {T} defaults
 * @param {Record<keyof Omit<T, keyof Base>, Import>} values
 * @returns {Array<Import>} filtered by which property key values are true from opts
 */
const activeResolver = <T extends ObjectExtension>(
  opt: Base & T,
  defaults: T,
  values: Record<keyof Omit<T, keyof Base>, Import>
): Array<Import> => {
  const {all, ...plugs} = opt
  const internalDefaults = {...defaults}
  Object.keys(internalDefaults).forEach(
    (el) => ((internalDefaults as unknown as keyof T)[el] = all)
  )
  const finalObj = {...internalDefaults, ...plugs}
  return Object.entries(values)
    .filter(([key]) =>
      Object.keys(finalObj)
        .filter((key) => finalObj[key] === true)
        .includes(key)
    )
    .map(([, value]) => value)
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
    plugins: {all: true},
    composables: {all: true},
  },
  setup(opts) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {resolve} = createResolver(import.meta.url)

    const plugins: Record<keyof PluginObject, Import> = {
      colorMode: {from: 'bootstrap-vue-next', name: 'vBColorMode'},
      popover: {from: 'bootstrap-vue-next', name: 'vBPopover'},
      toggle: {from: 'bootstrap-vue-next', name: 'vBToggle'},
      tooltip: {from: 'bootstrap-vue-next', name: 'vBTooltip'},
      visible: {from: 'bootstrap-vue-next', name: 'vBVisible'},
    }

    const composables: Record<keyof ComposableObject, Import> = {
      useBreadcrumb: {from: 'bootstrap-vue-next', name: 'useBreadcrumb'},
      useColorMode: {from: 'bootstrap-vue-next', name: 'useColorMode'},
      useToast: {from: 'bootstrap-vue-next', name: 'useToast'},
    }

    addComponentsDir({
      global: true,
      path: resolve('./src/components'),
      extensions: ['vue'],
    })

    addImports([
      ...activeResolver(opts.plugins, pluginsBase, plugins), // Get Plugin imports
      ...activeResolver(opts.composables, composablesBase, composables), // Get Composable imports
    ])
  },
})
