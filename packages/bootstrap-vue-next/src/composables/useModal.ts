import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  type MaybeRefOrGetter,
  toRef,
  toValue,
} from 'vue'
import {useSharedModalStack} from './useModalManager'

export default (id: MaybeRefOrGetter<string | undefined> = undefined) => {
  const {registry} = useSharedModalStack()
  const instance = getCurrentInstance()

  const findBModal = (component: ComponentInternalInstance): ComponentInternalInstance | null => {
    if (!component.parent) {
      return null
    }

    if (component.parent.type.__name === 'BModal') {
      return component.parent
    }

    return findBModal(component.parent)
  }

  const modalComponent = computed(() => {
    const resolvedId = toValue(id)
    if (resolvedId) {
      return registry?.value.find((modal) => modal.exposed?.id.value === resolvedId) || null
    }

    if (!instance) {
      return null
    }

    return findBModal(instance)
  })

  const modal = toRef(() => modalComponent.value?.proxy)

  return {
    show() {
      modalComponent.value?.exposed?.show()
    },
    hide(trigger = '') {
      modalComponent.value?.exposed?.hide(trigger)
    },
    modal,
  }
}
