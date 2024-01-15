import * as Components from '../components'
import * as Directives from '../directives'

export type ComponentType = keyof typeof Components
export type DirectiveType = keyof typeof Directives
export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}

export interface BootstrapVueOptions {
  /**
   * @default false
   */
  components?: boolean | ConfigurationOption<ComponentType>
  /**
   * @default false
   */
  directives?: boolean | ConfigurationOption<DirectiveType>
  plugins?: {
    /**
     * @default true
     */
    breadcrumb?: boolean
    /**
     * @default true
     */
    modalController?: boolean
    /**
     * @default true
     */
    modalManager?: boolean
    /**
     * @default true
     */
    rtl?:
      | boolean
      | {
          /**
           * @default false
           */
          rtlInitial: boolean
          /**
           * @default undefined
           */
          localeInitial: string | undefined
        }
    /**
     * @default true
     */
    toast?: boolean
  }
}
