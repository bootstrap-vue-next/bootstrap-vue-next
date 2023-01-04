import {useColorMode, UseColorModeOptions} from '@vueuse/core'

export default (modes: UseColorModeOptions['modes'] = {}, opts: UseColorModeOptions = {}) => {
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useColorMode({
    attribute,
    selector,
    storageKey: `${opts.attribute ?? attribute}-${opts.selector ?? selector}`,
    modes: {
      ...modes,
    },
    ...opts,
  })
}
