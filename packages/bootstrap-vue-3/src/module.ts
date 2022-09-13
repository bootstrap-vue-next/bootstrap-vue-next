import {addComponentsDir, addImports, addPlugin, defineNuxtModule, resolveModule} from '@nuxt/kit'
import {name as packageName, version as packageVersion} from '../package.json'

export default defineNuxtModule({
  meta: {
    compatibility: {
      bridge: true,
      nuxt: '^3.0.0',
    },
    version: packageVersion,
    configKey: 'BootstrapVue3',
    name: packageName,
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
    addImports([
      {name: 'BPopover', as: 'VBPopover', from: resolveModule('./directives/BPopover')},
      {name: 'BToggle', as: 'VBToggle', from: resolveModule('./directives/BToggle')},
      {name: 'BTooltip', as: 'VBTooltip', from: resolveModule('./directives/BTooltip')},
      {name: 'BVisible', as: 'VBVisible', from: resolveModule('./directives/BVisible')},
    ])
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
