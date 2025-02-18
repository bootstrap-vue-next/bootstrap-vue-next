import {inject, ref} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {PromiseWithModal} from '../../types/ComponentOrchestratorTypes'

export const useToastController = () => {
  const noop = () => {}
  const noopPromise = () => {
    // eslint-disable-next-line no-console
    console.warn(
      'useToastController() was called outside of the setup() function! or the plugin is not provided.'
    )
    return Promise.resolve(null) as PromiseWithModal
  }
  const toastContollerPlugin = inject(toastPluginKey, {
    toasts: ref([]),
    create: noopPromise,
    show: noopPromise,
    remove: noop,
    hide: noop,
    set: noop,
    _isAppend: ref(false),
    _isOrchestratorInstalled: ref(false),
  })
  if (toastContollerPlugin.hide === noop) {
    throw new Error(
      'useToastController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }
  return {
    ...toastContollerPlugin,
  }
}
