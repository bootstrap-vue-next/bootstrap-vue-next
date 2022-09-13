import {addComponentsDir, addImports, addPlugin, defineNuxtModule, resolveModule} from '@nuxt/kit'
import {name as packageName, version as packageVersion} from '../package.json'

interface ModuleOptions {
  plugins: {
    popover: boolean
    toggle: boolean
    tooltip: boolean
    visible: boolean
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    compatibility: {
      bridge: true,
      nuxt: '^3.0.0',
    },
    version: packageVersion,
    configKey: 'BootstrapVue3',
    name: packageName,
  },
  defaults: {
    plugins: {
      popover: true,
      toggle: true,
      tooltip: true,
      visible: true,
    },
  },
  async setup(options, nuxt) {
    const prefix = 'Bv'

    nuxt.options.css.push(resolveModule('./styles/styles.scss'))

    // Components
    await addComponentsDir({
      path: resolveModule('./components'),
      pathPrefix: false,
      global: true,
      prefix: '',
      extensions: ['vue'],
    })
    // Composables
    addImports([
      {
        name: 'useToast',
        as: `use${prefix}Toast`,
        from: resolveModule('./components/BToast/plugin'),
      },
      {
        name: 'useBreadcrumb',
        as: `use${prefix}Breadcrumb`,
        from: resolveModule('./composables/useBreadcrumb'),
      },
    ])
    // Directives
    // TODO clean this up, but follow this style for importing

    const directiveImports: Parameters<typeof addImports>[0] = []
    if (options.plugins.popover === true) {
      directiveImports.push({
        name: 'BPopover',
        as: 'VBPopover',
        from: resolveModule('./directives/BPopover'),
      })
    }
    if (options.plugins.toggle === true) {
      directiveImports.push({
        name: 'BToggle',
        as: 'VBToggle',
        from: resolveModule('./directives/BToggle'),
      })
    }
    if (options.plugins.tooltip === true) {
      directiveImports.push({
        name: 'BTooltip',
        as: 'VBTooltip',
        from: resolveModule('./directives/BTooltip'),
      })
    }
    if (options.plugins.tooltip === true) {
      directiveImports.push({
        name: 'BTooltip',
        as: 'VBTooltip',
        from: resolveModule('./directives/BTooltip'),
      })
    }
    if (options.plugins.visible === true) {
      directiveImports.push({
        name: 'BVisible',
        as: 'VBVisible',
        from: resolveModule('./directives/BVisible'),
      })
    }
    addImports(directiveImports)
    // Plugins
    addPlugin(resolveModule('./components/BToast/plugin'))
    // Utils
    addImports([
      {
        from: resolveModule('./utils/bvEvent'),
        name: 'BvEvent',
      },
    ])
  },
})
