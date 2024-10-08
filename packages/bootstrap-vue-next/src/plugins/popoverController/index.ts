import {markRaw, type Plugin, ref, toRef, watch} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {
  ControllerKey,
  PopoverOrchestratorMapValue,
  PopoverOrchestratorShowParam,
  PrivateOrchestratedPopover,
  PrivateOrchestratedTooltip,
  TooltipOrchestratorMapValue,
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
      const resolvedProps = toRef(obj.props)
      const reference = toRef(obj.target)

      const _self = resolvedProps.value?.id || Symbol('Popover controller')

      watch(
        reference,
        (newValue) => {
          if (!newValue) {
            popovers.value.delete(_self)
          } else {
            popovers.value.set(_self, {
              component: !obj.component ? undefined : markRaw(obj.component),
              props: {...resolvedProps.value, _target: newValue, _modelValue: false},
            })
          }
        },
        {immediate: true}
      )

      watch(resolvedProps, (newValue) => {
        const previous = popovers.value.get(_self)
        if (!previous) return
        popovers.value.set(_self, {
          component: !obj.component ? undefined : markRaw(obj.component),
          props: {...previous.props, ...newValue},
        })
      })

      return _self
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const setPopover = (self: ControllerKey, val: Partial<PrivateOrchestratedPopover>) => {
      const popover = popovers.value.get(self)
      if (!popover?.props) return
      popover.props = {
        ...popover.props,
        ...val,
      }
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
      const resolvedProps = toRef(obj.props)
      const reference = toRef(obj.target)

      const _self = resolvedProps.value?.id || Symbol('Tooltip controller')

      watch(
        reference,
        (newValue) => {
          if (!newValue) {
            tooltips.value.delete(_self)
          } else {
            tooltips.value.set(_self, {
              component: !obj.component ? undefined : markRaw(obj.component),
              props: {...resolvedProps.value, _modelValue: false, _target: newValue},
            })
          }
        },
        {
          immediate: true,
        }
      )

      watch(resolvedProps, (newValue) => {
        const previous = tooltips.value.get(_self)
        if (!previous) return
        tooltips.value.set(_self, {
          component: !obj.component ? undefined : markRaw(obj.component),
          props: {...previous.props, ...newValue},
        })
      })

      return _self
    }
    /**
     * @param {ControllerKey} self You can get the symbol param from the return value from the show method, or use props.id
     */
    const setTooltip = (self: ControllerKey, val: Partial<PrivateOrchestratedTooltip>) => {
      const tip = tooltips.value.get(self)
      if (!tip?.props) return
      tip.props = {
        ...tip.props,
        ...val,
      }
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
