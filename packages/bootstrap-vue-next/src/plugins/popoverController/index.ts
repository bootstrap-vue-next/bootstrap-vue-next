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
} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  PopoverOrchestratorMapValue,
  PopoverOrchestratorParam,
  PopoverOrchestratorShowParam,
  PromiseWithShowHide,
  TooltipOrchestratorMapValue,
  TooltipOrchestratorParam,
  TooltipOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

export const popoverPlugin: Plugin = {
  install(app) {
    const _isOrchestratorInstalled = ref(false)

    const buildPromise = (
      _id: ControllerKey,
      store: Ref<Map<ControllerKey, PopoverOrchestratorMapValue | TooltipOrchestratorMapValue>>
    ): {
      value: PromiseWithShowHide
      resolve: (value: boolean | null) => void
    } => {
      let resolveFunc: (value: boolean | null) => void = () => {
        /* empty */
      }

      const promise = new Promise<boolean | null>((resolve) => {
        resolveFunc = resolve
      }) as PromiseWithShowHide
      Object.assign(promise, {
        id: _id,
        show() {
          const modal = store.value.get(_id)
          if (!modal) return promise
          modal.modelValue = true
          modal['onUpdate:modelValue']?.(true)
          return promise
        },
        hide() {
          const modal = store.value.get(_id)
          if (modal) {
            modal.modelValue = false
            modal['onUpdate:modelValue']?.(false)
          }
        },
        toggle() {
          const modal = store.value.get(_id)
          if (modal) {
            modal.modelValue = !modal.modelValue
            modal['onUpdate:modelValue']?.(modal.modelValue)
          }
        },
        remove() {
          const modal = store.value.get(_id)
          if (modal && modal.stop) {
            modal.stop()
          }
          store.value.delete(_id)
        },
      })

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    const popovers = ref(new Map<ControllerKey, PopoverOrchestratorMapValue>())
    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise,
     * a symbol will be created that corresponds to its unique id.
     */
    const popover = (obj: PopoverOrchestratorShowParam): PromiseWithShowHide => {
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
      const _self = resolvedProps.value?.id || Symbol('Popover controller')

      const promise = buildPromise(_self, popovers)

      let stop = () => {}
      stop = watch(
        resolvedProps,
        (newValue) => {
          const previous = popovers.value.get(_self)
          // if (!previous) return
          const v = {
            ...(previous || {}),
          }

          for (const key in newValue) {
            if (key.startsWith('on')) {
              v[key as keyof PopoverOrchestratorShowParam] =
                newValue[key as keyof PopoverOrchestratorShowParam]
            } else {
              v[key as keyof PopoverOrchestratorShowParam] = toValue(
                newValue[key as keyof PopoverOrchestratorShowParam]
              )
            }
          }
          popovers.value.set(_self, {
            ...v,
            ...(v.modelValue === undefined && {modelValue: false}),
            'onUpdate:modelValue': (val: boolean) => {
              newValue['onUpdate:modelValue']?.(val)
              const {modelValue} = toValue(obj)
              if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
              if (isRef(modelValue) && !isReadonly(modelValue)) {
                ;(modelValue as Ref<PopoverOrchestratorParam['modelValue']>).value = val
              }
            },
            promise,
            stop,
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
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */

    const tooltips = ref(new Map<ControllerKey, TooltipOrchestratorMapValue>())
    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise,
     * a symbol will be created that corresponds to its unique id.
     */
    const tooltip = (obj: TooltipOrchestratorShowParam): PromiseWithShowHide => {
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
      const _self = resolvedProps.value?.id || Symbol('Tooltip controller')

      const promise = buildPromise(_self, tooltips)

      let stop = () => {}
      stop = watch(
        resolvedProps,
        (newValue) => {
          const previous = tooltips.value.get(_self)
          // if (!previous) return
          const v = {
            ...(previous || {}),
          }

          for (const key in newValue) {
            if (key.startsWith('on')) {
              v[key as keyof TooltipOrchestratorShowParam] =
                newValue[key as keyof TooltipOrchestratorShowParam]
            } else {
              v[key as keyof TooltipOrchestratorShowParam] = toValue(
                newValue[key as keyof TooltipOrchestratorShowParam]
              )
            }
          }
          tooltips.value.set(_self, {
            ...v,
            ...(v.modelValue === undefined && {modelValue: false}),
            'onUpdate:modelValue': (val: boolean) => {
              newValue['onUpdate:modelValue']?.(val)
              const {modelValue} = toValue(obj)
              if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
              if (isRef(modelValue) && !isReadonly(modelValue)) {
                ;(modelValue as Ref<TooltipOrchestratorParam['modelValue']>).value = val
              }
            },
            stop,
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
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const set = (self: ControllerKey, val: Partial<TooltipOrchestratorParam>) => {
      const tooltip = tooltips.value.get(self)
      if (tooltip) {
        const v = toValue(val)
        tooltips.value.set(self, {
          ...tooltip,
          ...v,
          title: toValue(v.title),
          body: toValue(v.body),
          modelValue: toValue(v.modelValue),
        })
        return
      }
      const popover = popovers.value.get(self)
      if (!popover) return
      const v = toValue(val)
      popovers.value.set(self, {
        ...popover,
        ...v,
        title: toValue(v.title),
        body: toValue(v.body),
        modelValue: toValue(v.modelValue),
      })
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const remove = (self: ControllerKey) => {
      const tooltip = tooltips.value.get(self)
      if (tooltip) {
        tooltip.stop?.()
        tooltips.value.delete(self)
      }

      const popover = popovers.value.get(self)
      if (!popover) return
      popover.stop?.()
      popovers.value.delete(self)
    }

    app.provide(popoverPluginKey, {
      _isOrchestratorInstalled,
      popovers,
      tooltips,
      tooltip,
      popover,
      set,
      remove,
    })
  },
}
