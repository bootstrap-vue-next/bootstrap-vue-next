import {type UseColorModeOptions, useColorMode as useVueuseColorMode} from '@vueuse/core'

export interface ColorModeOptions extends UseColorModeOptions {
  /**
   * When set to true, useColorMode will automatically store itself and persist (default localstorage).
   * @default false
   */
  persist?: boolean
}

export const useColorMode = (opts: Readonly<ColorModeOptions> = {}) => {
  const persist = opts.persist ?? false
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useVueuseColorMode({
    attribute,
    selector,
    storageKey:
      persist === true
        ? `bv-color-${opts.attribute ?? attribute}-${opts.selector ?? selector}`
        : null,
    ...opts,
  })
}
