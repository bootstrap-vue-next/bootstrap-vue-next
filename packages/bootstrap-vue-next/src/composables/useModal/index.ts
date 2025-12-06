import {
  type Component,
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Ref,
  shallowRef,
  toValue,
  watch,
} from 'vue'
import {useSharedModalStack} from '../useModalManager'

import {orchestratorRegistryKey} from '../../utils/keys'
import type {
  ControllerKey,
  ModalOrchestratorArrayValue,
  ModalOrchestratorCreateParam,
  ModalOrchestratorParam,
  OrchestratorCreateOptions,
  PromiseWithComponent,
} from '../../types/ComponentOrchestratorTypes'
import {buildPromise} from '../orchestratorShared'
import {BModal} from '../../components'

export const useModal = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey)
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
    options: OrchestratorCreateOptions = {}
  ): PromiseWithComponent<typeof BModal, ModalOrchestratorParam<ComponentProps>> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('BApp or BOrchestrator component must be mounted to use the modal controller')
    }

    const resolvedProps = (isRef(obj) ? obj : shallowRef(obj)) as Ref<
      ModalOrchestratorParam<ComponentProps>
    >
    const _self = resolvedProps.value?.id || Symbol('Modals controller')

    const promise = buildPromise<
      typeof BModal,
      ModalOrchestratorParam<ComponentProps>,
      ModalOrchestratorArrayValue
    >(_self, store as Ref<ModalOrchestratorArrayValue[]>)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)} as Record<string, unknown>
        const previousIndex = store.value.findIndex((el) => el._self === _self)
        const previous =
          previousIndex === -1 ? {_component: markRaw(BModal)} : store.value[previousIndex]
        const v = {
          type: 'modal',
          _self,
          position: 'modal',
          ...previous,
          options,
          promise,
        } as ModalOrchestratorArrayValue

        for (const key in newValue) {
          if (key.startsWith('on')) {
            v[key as keyof ModalOrchestratorArrayValue] = newValue[key] as never
          } else if (key === 'component' && newValue.component) {
            v._component = markRaw(newValue.component as Component)
          } else if (key === 'slots' && newValue.slots) {
            v.slots = markRaw(newValue.slots) as never
          } else {
            v[key as keyof ModalOrchestratorArrayValue] = toValue(newValue[key]) as never
          }
        }
        v.modelValue = v.modelValue ?? false
        v['onUpdate:modelValue'] = (val: boolean) => {
          const onUpdateModelValue = newValue['onUpdate:modelValue'] as
            | ((val: boolean) => void)
            | undefined
          onUpdateModelValue?.(val)
          const {modelValue} = toValue(obj)
          if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
          if (isRef(modelValue) && !isReadonly(modelValue)) {
            ;(modelValue as Ref<ModalOrchestratorArrayValue['modelValue']>).value = val
          }
          const modal = store.value.find((el) => el._self === _self)
          if (modal) {
            modal.modelValue = val
          }
        }

        if (previousIndex === -1) {
          store.value.push(v)
        } else {
          store.value.splice(previousIndex, 1, v)
        }
      },
      {
        immediate: true,
        deep: true,
      }
    )
    onScopeDispose(() => {
      const modal = store.value.find((el) => el._self === _self)
      if (modal) {
        modal.promise.value.destroy?.()
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
      const modal = store.value.find((el) => el._self === id)
      if (modal) {
        modal.modelValue = true
        modal['onUpdate:modelValue']?.(true)
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
      const modal = store.value.find((el) => el._self === id)
      if (modal) {
        modal.modelValue = false
        modal['onUpdate:modelValue']?.(false)
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
    const modal = store.value.find((el) => el._self === id)
    if (modal) {
      return {
        modal,
        show() {
          modal?.promise.value.show()
        },
        hide(trigger?: string) {
          modal?.promise.value.hide(trigger)
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
