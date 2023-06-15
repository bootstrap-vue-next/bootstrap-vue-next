import type {ConfigurationOption, Composables} from 'bootstrap-vue-next'

export type ComposableType = keyof typeof Composables

export interface ModuleOptions {
  composables: ConfigurationOption<ComposableType> | boolean
}
