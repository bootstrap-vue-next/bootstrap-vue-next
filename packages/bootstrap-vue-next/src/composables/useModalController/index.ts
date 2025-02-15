import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  ref,
  toValue,
} from 'vue'
import {modalControllerPluginKey} from '../../utils/keys'
import type {ControllerKey, PromiseWithModal} from '../../types/ComponentOrchestratorTypes'
import {useSharedModalStack} from '../../composables/useModalManager'

export const useModalController = () => {
  const noop = () => {}
  const noopPromise = () => {
    // eslint-disable-next-line no-console
    console.warn(
      'useModalController() was called outside of the setup() function! or the plugin is not provided.'
    )
    return Promise.resolve(null) as PromiseWithModal
  }
  const modalControllerPlugin = inject(modalControllerPluginKey, {
    modals: ref(new Map()),
    _isOrchestratorInstalled: ref(false),
    create: noopPromise,
    show: noopPromise,
    confirm: noopPromise,
    remove: noop,
  })
  if (modalControllerPlugin.remove === noop) {
    throw Error(
      'useModalController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }

  const {lastStack, stack, registry} = useSharedModalStack()
  const hide = (trigger = '', id?: ControllerKey) => {
    if (id === undefined) {
      if (id === undefined && lastStack?.value) {
        lastStack?.value.exposed?.hide(trigger)
      }
    } else {
      const stackModal = stack?.value.find((modal) => modal.exposed?.id === id)
      if (stackModal) {
        stackModal.exposed?.hide(trigger)
        return
      }
      const modal = modalControllerPlugin.modals.value.get(id)
      if (modal) {
        modal.modelValue = false
        modal['onUpdate:modelValue']?.(false)
      } else {
        stack?.value.forEach((modal) => {
          if (modal.exposed?.id === id) {
            modal.exposed?.hide(trigger)
          }
        })
      }
    }
  }

  const hideAll = (trigger = '') => {
    stack?.value.forEach((modal) => {
      modal.exposed?.hide(trigger)
    })
  }

  const get = (id: ControllerKey) => {
    if (modalControllerPlugin.modals.value.get(id)) {
      const modal = modalControllerPlugin.modals.value.get(id)
      return {
        modal,
        show() {
          modal?.promise.value.show()
        },
        hide() {
          modal?.promise.value.hide()
        },
      }
    }
    if (registry?.value) {
      for (const [, modal] of registry?.value.entries()) {
        if (toValue(modal.exposed?.id) === id) {
          return {
            modal,
            show() {
              modal.exposed?.show()
            },
            hide() {
              modal.exposed?.hide()
            },
          }
        }
      }
    }
    return null
  }

  const instance = getCurrentInstance()
  const current = () => {
    const findBModal = (component: ComponentInternalInstance): ComponentInternalInstance | null => {
      if (!component.parent) {
        return null
      }
      if (component.parent.type.__name === 'BModal') {
        return component.parent
      }
      return findBModal(component.parent)
    }
    if (!instance) {
      return null
    }
    const modalComponent = computed(() => findBModal(instance))
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

  return {
    hide,
    hideAll,
    get,
    current,
    ...modalControllerPlugin,
    // Todo: Supports listening events globally in the future
  }
}
