import {
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Plugin,
  type Ref,
  ref,
  toRef,
  toValue,
  watch,
  type WatchHandle,
} from 'vue'
import {modalControllerPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  ModalOrchestratorMapValue,
  ModalOrchestratorParam,
  ModalOrchestratorShowParam,
  PromiseWithModal,
} from '../../types/ComponentOrchestratorTypes'

export const modalControllerPlugin: Plugin = {
  install(app) {
    const modals = ref(new Map<ControllerKey, ModalOrchestratorMapValue>())

    const _isOrchestratorInstalled = ref(false)

    const buildPromise = (
      _id: ControllerKey
    ): {
      value: PromiseWithModal
      resolve: (value: boolean | null) => void
      stop?: WatchHandle
    } => {
      let resolveFunc: (value: boolean | null) => void = () => {
        /* empty */
      }

      const promise = new Promise<boolean | null>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithModal
      Object.assign(promise, {
        id: _id,
        show() {
          const modal = modals.value.get(_id)
          if (!modal) return promise
          modal.isConfirm = false
          modal.modelValue = true
          modal['onUpdate:modelValue']?.(true)
          return promise
        },
        confirm() {
          const modal = modals.value.get(_id)
          if (!modal) return promise
          modal.isConfirm = true
          modal.modelValue = true
          modal['onUpdate:modelValue']?.(true)
          return promise
        },
        hide() {
          const modal = modals.value.get(_id)
          if (modal) {
            modal.modelValue = false
            modal['onUpdate:modelValue']?.(false)
          }
        },
        toggle() {
          const modal = modals.value.get(_id)
          if (modal) {
            modal.modelValue = !modal.modelValue
            modal['onUpdate:modelValue']?.(modal.modelValue)
          }
        },
        remove() {
          modals.value.get(_id)?.promise.stop?.()
          modals.value.delete(_id)
        },
      })

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    const create = (
      obj: ModalOrchestratorShowParam = {},
      isConfirm?: boolean
    ): PromiseWithModal => {
      if (!_isOrchestratorInstalled.value) {
        throw new Error(
          'The BModalOrchestrator component must be mounted to use the modal controller'
        )
      }

      const {component, slots} = toValue(obj)
      if (component) {
        if (isRef(obj)) obj.value.component = markRaw(component)
        else if (typeof obj === 'object') obj.component = markRaw(component)
      }
      if (slots) {
        if (isRef(obj)) obj.value.slots = markRaw(slots)
        else if (typeof obj === 'object') obj.slots = markRaw(slots)
      }
      const resolvedProps = toRef(obj)
      const _self = resolvedProps.value?.id || Symbol('Modals controller')

      const promise = buildPromise(_self)

      promise.stop = watch(
        resolvedProps,
        (newValue) => {
          const previous = modals.value.get(_self)
          // if (!previous) return
          const v = {
            ...(previous || {}),
          }

          if (newValue.props) {
            Object.assign(v, newValue.props)
            delete newValue.props
          }
          for (const key in newValue) {
            if (key.startsWith('on')) {
              v[key as keyof ModalOrchestratorShowParam] =
                newValue[key as keyof ModalOrchestratorShowParam]
            } else {
              v[key as keyof ModalOrchestratorShowParam] = toValue(
                newValue[key as keyof ModalOrchestratorShowParam]
              )
            }
          }
          modals.value.set(_self, {
            ...v,
            ...(v.modelValue === undefined && {modelValue: false}),
            'onUpdate:modelValue': (val: boolean) => {
              newValue['onUpdate:modelValue']?.(val)
              const {modelValue} = toValue(obj)
              if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
              if (isRef(modelValue) && !isReadonly(modelValue)) {
                ;(modelValue as Ref<ModalOrchestratorMapValue['modelValue']>).value = val
              }
              if (val === false) {
                stop()
                // modals.value.delete(_self)
              }
            },
            ...(v.isConfirm === undefined && {isConfirm: isConfirm ?? false}),
            promise,
          })
        },
        {
          immediate: true,
          deep: true,
        }
      )
      onScopeDispose(() => remove(_self), true)
      return promise.value
    }
    const show = (obj: ModalOrchestratorShowParam = {}): PromiseWithModal =>
      create(obj, false).show()
    const confirm = (obj: ModalOrchestratorShowParam = {}): PromiseWithModal =>
      create(obj, true).confirm()

    /**
     * You can get the symbol param from the return value from the show method, or use props.id
     */
    const remove = (self: ControllerKey) => {
      modals.value.get(self)?.promise.stop?.()
      modals.value.delete(self)
    }

    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const set = (self: ControllerKey, val: Partial<ModalOrchestratorParam>) => {
      const modal = modals.value.get(self)
      if (modal) {
        const v = {...modal, ...toValue(val)}
        // add modal to v
        modals.value.set(self, {
          ...v,
          title: toValue(v.title),
          body: toValue(v.body),
          modelValue: toValue(v.modelValue),
        })
      }
    }

    app.provide(modalControllerPluginKey, {
      _isOrchestratorInstalled,
      create,
      modals,
      remove,
      show,
      confirm,
      set,
    })
  },
}
