import {inject, ref} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {PromiseWithToast} from '../../types/ComponentOrchestratorTypes'

export const useToastController = () => {
  const noopPromise = () => {
    // eslint-disable-next-line no-console
    console.warn(
      'useToastController() was called outside of the setup() function! or the plugin is not provided.'
    )
    return Promise.resolve(null) as unknown as PromiseWithToast
  }
  const toastContollerPlugin = inject(toastPluginKey, {
    toasts: ref([]),
    create: noopPromise,
    /*
      @deprecated
      */
    show: noopPromise,
    _isAppend: ref(false),
    _isOrchestratorInstalled: ref(false),
  })
  if (toastContollerPlugin.create === noopPromise) {
    throw new Error(
      'useToastController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }
  return {
    ...toastContollerPlugin,
  }
}
