import type { Composables, Directives, BootstrapVueOptions } from 'bootstrap-vue-next'

export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & { all: boolean }
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
  /**
   * Manages the inclusion of the module's CSS. It is recommended to leave this enabled unless there are conflicts with other styles.
   *
   * @default true
   */
  css: boolean
  /**
   * When enabled, if the `@nuxt/image` module is detected, `BImg` (and any component using `BImg` internally,
   * such as `BCardImg` or `BCarouselSlide`) will automatically render using `NuxtImg` instead of a plain `img` tag.
   *
   * @default true
   */
  autoUseNuxtImage: boolean
  /**
   * When enabled and `@nuxtjs/color-mode` is installed, bootstrap-vue-next provides module defaults
   * for that module so Bootstrap color mode attributes work out of the box.
   *
   * @default true
   */
  autoConfigureNuxtColorMode: boolean
  /**
   * @default {}
   */
  plugin: Omit<Exclude<BootstrapVueOptions, undefined>, 'id'>
}
