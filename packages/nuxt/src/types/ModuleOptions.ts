import type {Composables} from 'bootstrap-vue-next'

export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}

export interface ModuleOptions {
  /**
   * There would be no reason to disable this, beyond conflicting auto imports. This should probably be left true
   *
   * @default true
   */
  composables: ConfigurationOption<keyof typeof Composables> | boolean
}
