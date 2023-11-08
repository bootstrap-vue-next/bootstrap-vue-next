import {useSharedModalStack} from './useModalManager'

export default () => {
  const {lastStack, stack} = useSharedModalStack()

  const hide = (trigger = '') => {
    if (lastStack.value) {
      lastStack.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    for (const modal of stack.value) {
      modal.exposed?.hide(trigger)
    }
  }

  return {
    hide,
    hideAll,
    // Todo: Supports listening events globally in the future
  }
}
