import {
  type ComponentInternalInstance,
  type ComponentPublicInstance,
  computed,
  type ComputedRef,
  getCurrentInstance,
  inject,
  markRaw,
  onScopeDispose,
  type Ref,
  ref,
  toValue,
} from 'vue'
import {useSharedModalStack} from '../useModalManager'

import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {
  ComponentController,
  ControllerKey,
  ModalOrchestratorArrayValue,
  ModalOrchestratorCreateParam,
} from '../../types'
import {buildController} from '../orchestratorShared'
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
   * @returns {ComponentController<typeof BModal, Ref<ModalOrchestratorArrayValue>>}
   */
  const create = <ComponentProps extends Record<string, unknown> = Record<string, unknown>>(
    obj: ModalOrchestratorCreateParam<ComponentProps> = {} as ModalOrchestratorCreateParam<ComponentProps>
  ): ComponentController<typeof BModal, Ref<ModalOrchestratorArrayValue>> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('BApp component must be mounted to use the modal controller')
    }

    const resolvedProps = ref(obj)

    const id = resolvedProps.value?.id || Symbol('Modals controller')
    const {resolve, controller} = buildController<
      typeof BModal,
      ComputedRef<OrchestratorStoreObject['modal']>
    >(
      id,
      computed(() => store.value.modal)
    )

    const value = computed<ModalOrchestratorArrayValue, ModalOrchestratorArrayValue['props']>({
      get: () => {
        const {component = markRaw(BModal), options, slots, ...props} = resolvedProps.value

        return {
          component,
          options,
          slots,
          fns: {
            resolve,
            setRef: (v: ComponentPublicInstance) => {
              controller.ref = v
            },
            destroy: controller.destroy
          },
          id,
          props,
        }
      },
      set: (v) => {
        resolvedProps.value = {
          ...resolvedProps.value,
          ...v,
        }
      },
    })

    store.value.modal.set(id, value)

    onScopeDispose(async () => {
      await controller[Symbol.asyncDispose]()
    }, true)
    return controller
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
      const modal = store.value.modal.get(id)
      if (modal?.value) {
        modal.value = {
          ...modal.value,
          props: {
            ...modal.value.props,
            modelValue: true,
          },
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
      const modal = store.value.modal.get(id)
      if (modal?.value) {
        modal.value = {
          ...modal.value,
          props: {
            ...modal.value.props,
            modelValue: false,
          },
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
    const modal = store.value.modal.get(id)
    if (modal) {
      return {
        modal,
        show() {
          show(id)
        },
        hide(trigger?: string) {
          hide(trigger, id)
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
