import {isRef, onScopeDispose, type Plugin, ref, toRef, toValue, watch} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  PopoverOrchestratorParam,
  PopoverOrchestratorShowParam,
  TooltipOrchestratorParam,
  TooltipOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

export const popoverPlugin: Plugin = {
  install(app) {
    const popovers = ref(new Map<ControllerKey, PopoverOrchestratorParam>())
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: How to add refs for title & content?
          popovers.value.set(_self, {
            ...newValue,
            ...(typeof newValue['modelValue'] !== 'undefined' && isRef(obj)
              ? {
                  'onUpdate:modelValue': (val: boolean) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore: How to add emit types?
                    newValue['onUpdate:modelValue']?.(val)
                    obj.value.modelValue = val
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: How to add refs for title & content?
      popovers.value.set(self, {
        ...popover,
        ...toValue(val),
      })
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const removePopover = (self: ControllerKey) => popovers.value.delete(self)

    const tooltips = ref(new Map<ControllerKey, TooltipOrchestratorParam>())
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: How to add refs for title & content?
          popovers.value.set(_self, {
            ...newValue,
            ...(typeof newValue['modelValue'] !== 'undefined' && isRef(obj)
              ? {
                  'onUpdate:modelValue': (val: boolean) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore: How to add emit types?
                    newValue['onUpdate:modelValue']?.(val)
                    obj.value.modelValue = val
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: How to add refs for title & content?
      tooltips.value.set(self, {
        ...tooltip,
        ...toValue(val),
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
