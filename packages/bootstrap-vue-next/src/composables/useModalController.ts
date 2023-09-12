import type {BModalController} from '../types'
import {useSharedModalStack} from './useModalManager'

export default (): BModalController => {
  const {last} = useSharedModalStack()

  const hide = (trigger = '') => {
    if (last.value) {
      last.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    while (last.value) {
      hide(trigger)
    }
  }

  return {
    hide,
    hideAll,

    // Todo: Supports listening events globally in the future
  }
}
