import {useColorMode, type UseColorModeOptions} from '@vueuse/core'

interface ColorModeOptions extends UseColorModeOptions {
  persist?: boolean
}

export default (opts: ColorModeOptions = {}) => {
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useColorMode({
    attribute,
    selector,
    storageKey:
      opts.persist === true ? `${opts.attribute ?? attribute}-${opts.selector ?? selector}` : null,
    ...opts,
  })
}
