import {useSharedModalStack} from './useModalManager'

export interface BModalController {
  hide: (trigger?: string) => void
  hideAll: (trigger?: string) => void
}

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
