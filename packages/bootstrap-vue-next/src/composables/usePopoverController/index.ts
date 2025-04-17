import {inject, ref} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {PromiseWithPopover} from '../../types'

export const usePopoverController = () => ({
  ...inject(popoverPluginKey, {
    popovers: ref(new Map()),
    popover: () => {
      // eslint-disable-next-line no-console
      console.warn(
        'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
      )
      return Promise.resolve(null) as unknown as PromiseWithPopover
    },
    tooltip: () => {
      // eslint-disable-next-line no-console
      console.warn(
        'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
      )
      return Promise.resolve(null) as unknown as PromiseWithPopover
    },
    _isOrchestratorInstalled: ref(false),
  }),
})
