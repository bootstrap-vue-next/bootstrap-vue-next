import {useColorMode, UseColorModeOptions} from '@vueuse/core'

export default (
  modes: UseColorModeOptions['modes'] = {},
  persist = false,
  opts: UseColorModeOptions = {}
) => {
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useColorMode({
    attribute,
    selector,
    storageKey: persist ? `${opts.attribute ?? attribute}-${opts.selector ?? selector}` : null,
    modes: {
      ...modes,
    },
    ...opts,
  })
}
