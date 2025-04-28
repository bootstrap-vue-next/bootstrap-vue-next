import {
  isReadonly,
  isRef,
  markRaw,
  nextTick,
  onScopeDispose,
  type Plugin,
  ref,
  type Ref,
  toRef,
  toValue,
  watch,
  type WatchHandle,
} from 'vue'
import {modalControllerPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  ModalOrchestratorCreateOptions,
  ModalOrchestratorCreateParam,
  ModalOrchestratorMapValue,
  ModalOrchestratorParam,
  PromiseWithModal,
  PromiseWithModalBoolean,
  PromiseWithModalInternal,
} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from 'src/utils'

export const modalControllerPlugin: Plugin = {
  install(app) {
    const modals = ref(new Map<ControllerKey, ModalOrchestratorMapValue>())

    const _isOrchestratorInstalled = ref(false)

    const buildPromise = (
      _id: ControllerKey
    ): {
      value: PromiseWithModal | PromiseWithModalBoolean
      resolve: (value: BvTriggerableEvent | boolean | null) => void
      stop?: WatchHandle
    } => {
      let resolveFunc: (value: BvTriggerableEvent | boolean | null) => void = () => {}

      const promise = new Promise<BvTriggerableEvent | boolean | null>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithModal | PromiseWithModalBoolean
      Object.assign(promise, {
        id: _id,
        ref: null,
        show() {
          if (!this.ref) return this.set({modelValue: true})
          this.ref.show()
          return promise
        },
        hide(trigger?: string) {
          if (!this.ref) return this.set({modelValue: false})
          this.ref.hide(trigger, true)
          return promise
        },
        toggle() {
          if (!this.ref) return this.set({modelValue: !this.get()?.modelValue})
          this.ref.toggle()
          return promise
        },
        get() {
          return modals.value.get(_id)
        },
        set(val: Partial<ModalOrchestratorParam>) {
          const modal = modals.value.get(_id)
          if (modal) {
            const v = {...toValue(modal), ...toValue(val)}
            // add modal to v
            if (modal.modelValue !== v.modelValue) {
              modal['onUpdate:modelValue']?.(v.modelValue as boolean)
            }
            modals.value.set(_id, {
              ...v,
              title: toValue(v.title),
              body: toValue(v.body),
              modelValue: toValue(v.modelValue),
            })
          }
          return promise
        },
        async destroy() {
          const modal = modals.value.get(_id)
          if (!modal) return
          modal.promise.stop?.()
          if (modal.modelValue) {
            await new Promise((resolve) => {
              modal.modelValue = false
              modal['onHidden'] = () => {
                resolve(undefined)
              }
              nextTick(() => {
                modal['onUpdate:modelValue']?.(false)
              })
            })
          }
          modals.value.delete(_id)
        },

        async [Symbol.asyncDispose]() {
          await this.destroy()
        },
      } as PromiseWithModalInternal)

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    /**
     * @returns {PromiseWithModal}  Returns a promise object with methods to control the modal (show, hide, toggle, get, set, destroy)
     */
    const create = (
      obj: ModalOrchestratorCreateParam = {},
      options: ModalOrchestratorCreateOptions = {}
    ): PromiseWithModal | PromiseWithModalBoolean => {
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
        (_newValue) => {
          const newValue = {...toValue(_newValue)}
          const previous = modals.value.get(_self)
          // if (!previous) return
          const v = {
            ...(previous || {}),
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
          modals.value.set(_self, {
            ...v,
            ...(v.modelValue === undefined && {modelValue: true}),
            'onUpdate:modelValue': (val: boolean) => {
              newValue['onUpdate:modelValue']?.(val)
              const {modelValue} = toValue(obj)
              if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
              if (isRef(modelValue) && !isReadonly(modelValue)) {
                ;(modelValue as Ref<ModalOrchestratorMapValue['modelValue']>).value = val
              }
              const modal = modals.value.get(_self)
              if (modal) {
                modals.value.set(_self, {
                  ...modal,
                  modelValue: val,
                })
              }
            },
            options,
            promise,
          })
        },
        {
          immediate: true,
          deep: true,
        }
      )
      onScopeDispose(() => {
        const modal = modals.value.get(_self)
        if (modal) {
          modal.promise.value.destroy?.()
        }
      }, true)
      return promise.value
    }

    /*
     * @deprecated use create().show() instead
     */
    const show = (obj: ModalOrchestratorCreateParam = {}): PromiseWithModalBoolean =>
      create(obj, {returnBoolean: true}).show() as PromiseWithModalBoolean
    /*
     * @deprecated use create().show() instead
     */
    const confirm = (obj: ModalOrchestratorCreateParam = {}): PromiseWithModalBoolean =>
      create(obj, {returnBoolean: true}).show() as PromiseWithModalBoolean

    app.provide(modalControllerPluginKey, {
      _isOrchestratorInstalled,
      create,
      modals,
      show,
      confirm,
    })
  },
}
