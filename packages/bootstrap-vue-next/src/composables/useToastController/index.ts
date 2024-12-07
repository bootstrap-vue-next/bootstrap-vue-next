import {inject, ref} from 'vue'
import {toastPluginKey} from '../../utils/keys'

export const useToastController = () => {
  const noop = () => {}
  const noopPromise = () => Promise.resolve(null)
  const toastContollerPlugin = inject(toastPluginKey, {
    toasts: ref([]),
    show: noopPromise,
    remove: noop,
    leave: noop,
    _setIsAppend: noop,
  })
  if (toastContollerPlugin.leave === noop) {
    if (process.env.NODE_ENV === 'development')
      // eslint-disable-next-line no-console
      console.error(
        'useToastController() was called outside of the setup() function! or the plugin is not provided.'
      )
  }
  return {
    ...toastContollerPlugin,
  }
}
