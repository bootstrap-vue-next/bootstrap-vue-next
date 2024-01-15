import {inject} from 'vue'
import {useSharedModalStack} from './useModalManager'
import {modalControllerPluginKey} from '../utils'

export default () => {
  const {lastStack, stack} = useSharedModalStack()

  const modalControllerPlugin = inject(modalControllerPluginKey)

  const hide = (trigger = '') => {
    if (lastStack?.value) {
      lastStack?.value.exposed?.hide(trigger)
    }
  }

  const hideAll = (trigger = '') => {
    stack?.value.forEach((modal) => {
      modal.exposed?.hide(trigger)
    })
  }

  return {
    ...modalControllerPlugin,
    hide,
    hideAll,
    // Todo: Supports listening events globally in the future
  }
}
