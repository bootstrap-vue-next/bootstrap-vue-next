import {useColorMode, type UseColorModeOptions} from '@vueuse/core'

export interface ColorModeOptions extends UseColorModeOptions {
  /**
   * When set to true, useColorMode will automatically store itself and persist (default localstorage).
   * @default false
   */
  persist?: boolean
}

export default (opts: ColorModeOptions = {}) => {
  const persist = opts.persist ?? false
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useColorMode({
    attribute,
    selector,
    storageKey:
      persist === true
        ? `bv-color-${opts.attribute ?? attribute}-${opts.selector ?? selector}`
        : null,
    ...opts,
  })
}
