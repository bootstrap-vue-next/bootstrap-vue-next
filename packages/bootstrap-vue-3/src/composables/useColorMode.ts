import {useColorMode, type UseColorModeOptions} from '@vueuse/core'

export default (persist = false, opts: UseColorModeOptions = {}) => {
  const attribute = 'data-bs-theme'
  const selector = 'body'
  return useColorMode({
    attribute,
    selector,
    storageKey: persist ? `${opts.attribute ?? attribute}-${opts.selector ?? selector}` : null,
    ...opts,
  })
}
