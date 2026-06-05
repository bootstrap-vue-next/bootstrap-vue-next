import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  onScopeDispose,
  type Ref,
  ref,
  toValue,
} from 'vue'
import {useSharedModalStack} from '../useModalManager'

import {orchestratorRegistryKey} from '../../utils/keys'
import type {
  ControllerKey,
  ModalOrchestratorArrayValue,
  ModalOrchestratorCreateParam,
  ModalOrchestratorParam,
  PromiseWithComponent,
} from '../../types/ComponentOrchestratorTypes'
import {buildPromise} from '../orchestratorShared'
import {BModal} from '../../components'

export const useModal = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)
  if (!orchestratorRegistry) {
    throw Error(
      'useModal() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  }
  const {store, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * @returns {PromiseWithComponent}  Returns a promise object with methods to control the modal (show, hide, toggle, get, set, destroy)
   */
  const create = <ComponentProps = Record<string, unknown>>(
    obj: ModalOrchestratorCreateParam<ComponentProps> = {} as ModalOrchestratorCreateParam<ComponentProps>,
  ): PromiseWithComponent<typeof BModal, Ref<ModalOrchestratorParam<ComponentProps>>> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('BApp component must be mounted to use the modal controller')
    }

    const resolvedProps = ref(obj)
    const modalStore = computed({
      get: () => store.value.modal,
      set: (v) => {
        store.value.modal = v
      }
    })

    const _self = resolvedProps.value?.id || Symbol('Modals controller')
    // TODO we should be able to decouple the buildPromise from the store, as
    // With our writable ref, we should be capable of mutating the ref directly
    const promise = buildPromise<
      typeof BModal,
      Ref<ModalOrchestratorParam<ComponentProps>>
    >(_self, modalStore)

    // Proxy to be able to write to the resolvedProps modelValue, and also provide default for BModal
    const myObject = computed<ModalOrchestratorArrayValue>({
      get: () => {
        const {
          _component = BModal,
          options,
          slots,
          ...props
        } = resolvedProps.value

        return {
          component: _component,
          options,
          slots,
          _self,
          promise,
          props
        } as ModalOrchestratorArrayValue
      },
      set: (v) => {
        resolvedProps.value = {
          ...resolvedProps.value,
          modelValue: v.props.modelValue,
        }
      }
    })

    store.value.modal.push(myObject)

    onScopeDispose(() => {
      const modal = store.value.modal.find((el) => el.value._self === _self)
      if (modal?.value) {
        modal.value.promise.value.destroy?.()
      }
    }, true)
    return promise.value
  }

  const {lastStack, stack, registry} = useSharedModalStack()
  /**
   * Show a modal
   * @param id - The id of the modal to show
   */
  const show = (id?: ControllerKey) => {
    if (id === undefined) {
      if (lastStack?.value) {
        lastStack?.value.exposed?.show()
      }
    } else {
      const stackModal = stack?.value.find((modal) => modal.exposed?.id === id)
      if (stackModal) {
        stackModal.exposed?.show()
        return
      }
      const modal = store.value.modal.find((el) => el.value._self === id)
      if (modal?.value) {
        modal.value = {
          ...modal.value,
          props: {
            ...modal.value.props,
            modelValue: true
          }
        }
      } else {
        stack?.value.forEach((modal) => {
          if (modal.exposed?.id === id) {
            modal.exposed?.show()
          }
        })
      }
    }
  }

  /**
   * Hide a modal
   * @param trigger - The trigger to hide the modal
   * @param id - The id of the modal to hide
   */
  const hide = (trigger?: string, id?: ControllerKey) => {
    if (id === undefined) {
      if (lastStack?.value) {
        lastStack?.value.exposed?.hide(trigger)
      }
    } else {
      const stackModal = stack?.value.find((modal) => modal.exposed?.id === id)
      if (stackModal) {
        stackModal.exposed?.hide(trigger)
        return
      }
      const modal = store.value.modal.find((el) => el.value._self === id)
      if (modal?.value) {
        modal.value = {
          ...modal.value,
          props: {
            ...modal.value.props,
            modelValue: false
          }
        }
      } else {
        stack?.value.forEach((modal) => {
          if (modal.exposed?.id === id) {
            modal.exposed?.hide(trigger, true)
          }
        })
      }
    }
  }

  /**
   * Hide all modals
   * @param trigger - The trigger to hide all modals
   */
  const hideAll = (trigger?: string) => {
    stack?.value.forEach((modal) => {
      modal.exposed?.hide(trigger, true)
    })
  }

  const get = (id: ControllerKey) => {
    const modal = store.value.modal.find((el) => el.value._self === id)
    if (modal) {
      return {
        modal,
        show() {
          modal?.value.promise.value.show()
        },
        hide(trigger?: string) {
          modal?.value.promise.value.hide(trigger)
        },
      }
    }
    if (registry?.value) {
      for (const [, modal] of registry?.value.entries() ?? []) {
        if (toValue(modal.exposed?.id) === id) {
          return {
            modal,
            show() {
              modal.exposed?.show()
            },
            hide(trigger?: string) {
              modal.exposed?.hide(trigger, true)
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
      if (component.parent.type === BModal) {
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
      hide(trigger?: string) {
        modalComponent.value?.exposed?.hide(trigger, true)
      },
      modal,
    }
  }

  return {
    show,
    hide,
    hideAll,
    get,
    current,
    create,
    _isOrchestratorInstalled,
    store,
    // Todo: Supports listening events globally in the future
  }
}

/**
 * @deprecated use useModal() instead.
 * @returns {ReturnType<typeof useModal>} The modal controller
 */
export const useModalController = useModal
