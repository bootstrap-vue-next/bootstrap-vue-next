import {inject, ref} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {PromiseWithPopover} from '../../types'

export const usePopoverController = () => {
  const noopPromise = () => {
    // eslint-disable-next-line no-console
    console.warn(
      'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
    )
    return Promise.resolve(null) as unknown as PromiseWithPopover
  }
  const popoverControllerPlugin = inject(popoverPluginKey, {
    popovers: ref(new Map()),
    popover: noopPromise,
    tooltip: noopPromise,
    _isOrchestratorInstalled: ref(false),
  })
  if (popoverControllerPlugin.popover === noopPromise) {
    throw new Error(
      'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }
  return {
    ...popoverControllerPlugin,
  }
}
