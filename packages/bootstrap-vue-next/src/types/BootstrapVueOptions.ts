import * as Components from '../components'
import * as Directives from '../directives/exports'

interface BToastPluginOptions {
  injectkey: symbol
}

export interface BootstrapVueOptions {
  components?: Record<keyof typeof Components, boolean>
  directives?: Record<keyof typeof Directives, boolean>
  BToast?: BToastPluginOptions
}
