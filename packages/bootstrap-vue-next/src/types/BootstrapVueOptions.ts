import * as Components from '../components'
import * as Directives from '../directives'

import type {ToastOptions} from '../components/BToast/plugin'

export type ComponentType = keyof typeof Components
export type DirectiveType = keyof typeof Directives
export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}

export interface BootstrapVueOptions {
  components?: boolean | ConfigurationOption<ComponentType>
  directives?: boolean | ConfigurationOption<DirectiveType>
  BToast?: boolean | ToastOptions
}
