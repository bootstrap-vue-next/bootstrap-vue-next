import {type ComponentInternalInstance, computed, getCurrentInstance, toRef} from 'vue'
import {useSharedModalStack} from './useModalManager'

export default (id: string | undefined = undefined) => {
  const {find} = useSharedModalStack()
  const instance = getCurrentInstance()

  const modalComponent = computed(() => {
    if (id) {
      return find(id)
    }

    if (!instance) {
      return null
    }

    return findBModal(instance)
  })

  const modal = toRef(() => modalComponent.value?.proxy)

  return {
    show(): void {
      modalComponent.value?.exposed?.show()
    },
    hide(trigger = ''): void {
      modalComponent.value?.exposed?.hide(trigger)
    },
    modal,
  }
}

const findBModal = (component: ComponentInternalInstance): ComponentInternalInstance | null => {
  if (!component.parent) {
    return null
  }

  if (component.parent.type.__name === 'BModal') {
    return component.parent
  }

  return findBModal(component.parent)
}
