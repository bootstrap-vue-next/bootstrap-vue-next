import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  type MaybeRefOrGetter,
  toValue,
} from 'vue'
import {useSharedModalStack} from '../useModalManager'

export const useModal = (id: MaybeRefOrGetter<string | undefined> = undefined) => {
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
      if (!registry) return null
      for (const [, modal] of registry.value) {
        if (toValue(modal?.exposed?.id) === resolvedId) {
          return modal
        }
      }

      return null
    }

    if (!instance) {
      return null
    }

    return findBModal(instance)
  })

  const modal = computed(() => modalComponent.value?.proxy)

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
