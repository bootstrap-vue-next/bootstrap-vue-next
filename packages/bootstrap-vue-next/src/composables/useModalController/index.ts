import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Ref,
  toRef,
  toValue,
  watch,
} from 'vue'
import {useSharedModalStack} from '../../composables/useModalManager'

import {modalControllerPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  ModalOrchestratorArrayValue,
  ModalOrchestratorCreateOptions,
  ModalOrchestratorCreateParam,
  ModalOrchestratorMapValue,
  ModalOrchestratorParam,
  PromiseWithComponent,
} from '../../types/ComponentOrchestratorTypes'
import {buildPromise} from '../shared'
import {BModal} from '../../components'

export const useModalController = () => {
  const controller = inject(modalControllerPluginKey)
  if (!controller) {
    throw Error(
      'useModalController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }
  const {modals, _isOrchestratorInstalled} = controller

  /**
   * @returns {PromiseWithModal}  Returns a promise object with methods to control the modal (show, hide, toggle, get, set, destroy)
   */
  const create = (
    obj: ModalOrchestratorCreateParam = {},
    options: ModalOrchestratorCreateOptions = {}
  ): PromiseWithComponent<typeof BModal, ModalOrchestratorParam> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error(
        'The BModalOrchestrator component must be mounted to use the modal controller'
      )
    }

    const {component, slots} = toValue(obj)
    if (component) {
      if (isRef(obj)) obj.value.component = markRaw(component)
      else if (typeof obj === 'object') obj.component = markRaw(component)
    } else {
      if (isRef(obj)) obj.value.component = markRaw(BModal)
      else if (typeof obj === 'object') obj.component = markRaw(BModal)
    }
    if (slots) {
      if (isRef(obj)) obj.value.slots = markRaw(slots)
      else if (typeof obj === 'object') obj.slots = markRaw(slots)
    }
    const resolvedProps = toRef(obj)
    const _self = resolvedProps.value?.id || Symbol('Modals controller')

    const promise = buildPromise<
      typeof BModal,
      ModalOrchestratorParam,
      ModalOrchestratorArrayValue
    >(_self, modals)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previousIndex = modals.value.findIndex((el) => el._self === _self)
        const previous = previousIndex === -1 ? {} : modals.value[previousIndex] || {}
        const v: ModalOrchestratorArrayValue = {
          type: 'modal',
          _self,
          position: 'modal',
          ...previous,
          options,
          promise,
        }

        if (newValue.props) {
          Object.assign(v, newValue.props)
          newValue.props = undefined
        }
        for (const key in newValue) {
          if (key.startsWith('on')) {
            v[key as keyof ModalOrchestratorCreateParam] =
              newValue[key as keyof ModalOrchestratorCreateParam]
          } else {
            v[key as keyof ModalOrchestratorCreateParam] = toValue(
              newValue[key as keyof ModalOrchestratorCreateParam]
            )
          }
        }
        v.modelValue = v.modelValue ?? false
        v['onUpdate:modelValue'] = (val: boolean) => {
          newValue['onUpdate:modelValue']?.(val)
          const {modelValue} = toValue(obj)
          if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
          if (isRef(modelValue) && !isReadonly(modelValue)) {
            ;(modelValue as Ref<ModalOrchestratorMapValue['modelValue']>).value = val
          }
          const modal = modals.value.find((el) => el._self === _self)
          if (modal) {
            modal.modelValue = val
          }
        }

        if (previousIndex === -1) {
          modals.value.push(v)
        } else {
          modals.value.splice(previousIndex, 1, v)
        }
      },
      {
        immediate: true,
        deep: true,
      }
    )
    onScopeDispose(() => {
      const modal = modals.value.find((el) => el._self === _self)
      if (modal) {
        modal.promise.value.destroy?.()
      }
    }, true)
    return promise.value
  }

  /*
   * @deprecated use create({}).show() instead
   */
  const show = (
    obj: ModalOrchestratorCreateParam = {}
  ): PromiseWithComponent<typeof BModal, ModalOrchestratorParam> => {
    // eslint-disable-next-line no-console
    console.warn(
      '[BootstrapVueNext] useModalController: The show() method is deprecated. Use create({}).show() instead.'
    )
    return create(obj, {returnBoolean: true}).show() as PromiseWithComponent<
      typeof BModal,
      ModalOrchestratorParam
    >
  }
  /*
   * @deprecated use create({}).show() instead
   */
  const confirm = (
    obj: ModalOrchestratorCreateParam = {}
  ): PromiseWithComponent<typeof BModal, ModalOrchestratorParam> => {
    // eslint-disable-next-line no-console
    console.warn(
      '[BootstrapVueNext] useModalController: The confirm() method is deprecated. Use create({}).show() instead.'
    )
    return create(obj, {returnBoolean: true}).show() as PromiseWithComponent<
      typeof BModal,
      ModalOrchestratorParam
    >
  }

  const {lastStack, stack, registry} = useSharedModalStack()
  const hide = (trigger?: string, id?: ControllerKey) => {
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
      const modal = modals.value.find((el) => el._self === id)
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

  const hideAll = (trigger?: string) => {
    stack?.value.forEach((modal) => {
      modal.exposed?.hide(trigger, true)
    })
  }

  const get = (id: ControllerKey) => {
    if (modals.value.find((el) => el._self === id)) {
      const modal = modals.value.find((el) => el._self === id)
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
      hide(trigger?: string) {
        modalComponent.value?.exposed?.hide(trigger, true)
      },
      modal,
    }
  }

  return {
    hide,
    hideAll,
    get,
    current,
    create,
    show,
    confirm,
    _isOrchestratorInstalled,
    modals,
    // Todo: Supports listening events globally in the future
  }
}
