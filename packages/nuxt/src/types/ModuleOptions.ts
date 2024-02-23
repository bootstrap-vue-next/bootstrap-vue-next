import type {Composables, Directives} from 'bootstrap-vue-next'

export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}
export type ConfigurationValue<T extends string> = boolean | ConfigurationOption<T>

export interface ModuleOptions {
  /**
   * There would be no reason to disable this, beyond conflicting auto imports. This should probably be left true
   *
   * @default true
   */
  composables: ConfigurationValue<keyof typeof Composables>
  /**
   * There would be no reason to disable this, beyond conflicting auto imports. This should probably be left true
   *
   * @default true
   */
  directives: ConfigurationValue<keyof typeof Directives>
}
