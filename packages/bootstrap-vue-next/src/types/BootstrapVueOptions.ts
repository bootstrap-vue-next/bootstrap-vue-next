import * as Components from '../components'
import * as Directives from '../directives/exports'

interface BToastPluginOptions {
  injectkey: symbol
}

export interface BootstrapVueOptions {
  components?: boolean | Record<keyof typeof Components, boolean>
  directives?: boolean | Record<keyof typeof Directives, boolean>
  BToast?: boolean | BToastPluginOptions
}
