import {useColorMode, UseColorModeOptions} from '@vueuse/core'

export default (modes: UseColorModeOptions['modes'] = {}, opts: UseColorModeOptions = {}) =>
  useColorMode({
    attribute: 'data-bs-theme',
    selector: 'body',
    modes: {
      ...modes,
    },
    ...opts,
  })
