import {
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Plugin,
  ref,
  type Ref,
  toRef,
  toValue,
  watch,
  type WatchHandle,
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
      stop?: WatchHandle
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
          const item = store.value.get(_id)
          if (!item) return promise
          item.modelValue = true
          item['onUpdate:modelValue']?.(true)
          return promise
        },
        hide() {
          const item = store.value.get(_id)
          if (item) {
            item.modelValue = false
            item['onUpdate:modelValue']?.(false)
          }
        },
        toggle() {
          const item = store.value.get(_id)
          if (item) {
            // item.modelValue = !item.modelValue
            item['onUpdate:modelValue']?.(!item.modelValue)
          }
        },
        remove() {
          const item = store.value.get(_id)
          if (item && item.promise.stop) {
            item.promise.stop?.()
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
          'The BPopoverOrchestrator component must be mounted to use the popover controller'
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

      promise.stop = watch(
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
              if (v.modelValue !== val) {
                const popover = popovers.value.get(_self)
                if (popover) {
                  popover.modelValue = val
                }
              }
            },
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

    const tooltips = ref(new Map<ControllerKey, TooltipOrchestratorMapValue>())
    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise,
     * a symbol will be created that corresponds to its unique id.
     */
    const tooltip = (obj: TooltipOrchestratorShowParam): PromiseWithShowHide => {
      if (!_isOrchestratorInstalled.value) {
        throw new Error(
          'The BModalOrchestrator component must be mounted to use the item controller'
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

      promise.stop = watch(
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
              if (v.modelValue !== val) {
                const tooltip = tooltips.value.get(_self)
                if (tooltip) {
                  tooltip.modelValue = val
                }
              }
            },
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
    const set = (
      self: ControllerKey,
      val: Partial<TooltipOrchestratorParam | PopoverOrchestratorParam>
    ) => {
      const tooltip = tooltips.value.get(self)
      if (tooltip) {
        const v = {...tooltip, ...toValue(val)}
        // add tooltip to v
        tooltips.value.set(self, {
          ...v,
          title: toValue(v.title),
          body: toValue(v.body),
          modelValue: toValue(v.modelValue),
        })
        return
      }
      const popover = popovers.value.get(self)
      if (!popover) return
      const v = {...popover, ...toValue(val)}
      popovers.value.set(self, {
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
        tooltip.promise.stop?.()
        tooltips.value.delete(self)
      }

      const popover = popovers.value.get(self)
      if (!popover) return
      popover.promise.stop?.()
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
