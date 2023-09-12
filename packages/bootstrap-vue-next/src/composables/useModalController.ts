import type {BModalController} from '../types'
import {useSharedModalStack} from './useModalManager'

export default (): BModalController => {
  const {last, stack} = useSharedModalStack()

  const hide = (trigger = '') => {
    if (last.value) {
      last.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    const modals = stack.value.reverse()

    for (const modal of modals) {
      modal.exposed?.hide(trigger)
    }
  }

  return {
    hide,
    hideAll,

    // Todo: Supports listening events globally in the future
  }
}
