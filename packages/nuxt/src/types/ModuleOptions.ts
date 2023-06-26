import type {Composables} from 'bootstrap-vue-next'

export type ComposableType = keyof typeof Composables
export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}

export interface ModuleOptions {
  composables: ConfigurationOption<ComposableType> | boolean
}
