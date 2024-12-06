import {
  isReadonly,
  isRef,
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
  TooltipOrchestratorMapValue,
  TooltipOrchestratorParam,
  TooltipOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

export const popoverPlugin: Plugin = {
  install(app) {
    const popovers = ref(new Map<ControllerKey, PopoverOrchestratorMapValue>())
    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise,
     * a symbol will be created that corresponds to its unique id.
     */
    const popover = (obj: PopoverOrchestratorShowParam): ControllerKey => {
      const resolvedProps = toRef(obj)
      const _self = resolvedProps.value?.id || Symbol('Popover controller')

      watch(
        resolvedProps,
        (newValue) => {
          popovers.value.set(_self, {
            ...newValue,
            title: toValue(newValue.title),
            body: toValue(newValue.body),
            modelValue: toValue(newValue.modelValue),
            ...(typeof toValue(newValue['modelValue']) !== 'undefined' &&
            (isRef(obj) || isRef(toValue(obj).modelValue))
              ? {
                  'onUpdate:modelValue': (val: boolean) => {
                    newValue['onUpdate:modelValue']?.(val)
                    const {modelValue} = toValue(obj)
                    if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
                    if (isRef(modelValue) && !isReadonly(modelValue)) {
                      ;(modelValue as Ref<PopoverOrchestratorParam['modelValue']>).value = val
                    }
                  },
                }
              : {}),
          })
        },
        {
          immediate: true,
          deep: true,
        }
      )
      onScopeDispose(() => popovers.value.delete(_self), true)

      return _self
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const setPopover = (self: ControllerKey, val: Partial<PopoverOrchestratorParam>) => {
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
    const removePopover = (self: ControllerKey) => popovers.value.delete(self)

    const tooltips = ref(new Map<ControllerKey, TooltipOrchestratorMapValue>())
    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise,
     * a symbol will be created that corresponds to its unique id.
     */
    const tooltip = (obj: TooltipOrchestratorShowParam): ControllerKey => {
      const resolvedProps = toRef(obj)
      const _self = resolvedProps.value?.id || Symbol('Tooltip controller')

      watch(
        resolvedProps,
        (newValue) => {
          tooltips.value.set(_self, {
            ...newValue,
            title: toValue(newValue.title),
            body: toValue(newValue.body),
            modelValue: toValue(newValue.modelValue),
            ...(typeof toValue(newValue['modelValue']) !== 'undefined' &&
            (isRef(obj) || isRef(toValue(obj).modelValue))
              ? {
                  'onUpdate:modelValue': (val: boolean) => {
                    newValue['onUpdate:modelValue']?.(val)
                    const {modelValue} = toValue(obj)
                    if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
                    if (isRef(modelValue) && !isReadonly(modelValue)) {
                      ;(modelValue as Ref<TooltipOrchestratorMapParam['modelValue']>).value = val
                    }
                  },
                }
              : {}),
          })
        },
        {
          immediate: true,
          deep: true,
        }
      )
      onScopeDispose(() => tooltips.value.delete(_self), true)

      return _self
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const setTooltip = (self: ControllerKey, val: Partial<TooltipOrchestratorParam>) => {
      const tooltip = tooltips.value.get(self)
      if (!tooltip) return
      const v = toValue(val)
      tooltips.value.set(self, {
        ...tooltip,
        ...v,
        title: toValue(v.title),
        body: toValue(v.body),
        modelValue: toValue(v.modelValue),
      })
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const removeTooltip = (self: ControllerKey) => tooltips.value.delete(self)

    app.provide(popoverPluginKey, {
      popovers,
      tooltips,
      tooltip,
      popover,
      setPopover,
      setTooltip,
      removePopover,
      removeTooltip,
    })
  },
}
