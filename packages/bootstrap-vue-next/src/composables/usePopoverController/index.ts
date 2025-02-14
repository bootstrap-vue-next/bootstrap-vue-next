import {inject, ref} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {PromiseWithShowHide} from '../../types'

export const usePopoverController = () => ({
  ...inject(popoverPluginKey, {
    popovers: ref(new Map()),
    tooltips: ref(new Map()),
    popover: () => {
      // eslint-disable-next-line no-console
      console.warn(
        'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
      )
      return Promise.resolve(null) as PromiseWithShowHide
    },
    tooltip: () => {
      // eslint-disable-next-line no-console
      console.warn(
        'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
      )
      return Promise.resolve(null) as PromiseWithShowHide
    },
    remove: () => {},
    set: () => {},
    _isOrchestratorInstalled: ref(false),
  }),
})
