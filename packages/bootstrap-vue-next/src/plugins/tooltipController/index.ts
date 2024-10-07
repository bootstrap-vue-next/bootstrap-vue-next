import {markRaw, type Plugin, ref, toRef, watch} from 'vue'
import {tooltipPluginKey} from '../../utils/keys'
import type {
  PrivateOrchestratedTooltip,
  TooltipOrchestratorMapValue,
  TooltipOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

export const tooltipPlugin: Plugin = {
  install(app) {
    const tooltips = ref(new Map<symbol, TooltipOrchestratorMapValue>())

    /**
     * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
     */
    const show = (obj: TooltipOrchestratorShowParam): symbol => {
      const resolvedProps = toRef(obj.props)
      const reference = toRef(obj.target)

      const _self = Symbol('Tooltip controller')

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
     * You can get the symbol param from the return value from the show method
     */
    const remove = (self: symbol) => {
      tooltips.value.delete(self)
    }

    const set = (self: symbol, val: Partial<PrivateOrchestratedTooltip>) => {
      const tip = tooltips.value.get(self)
      if (!tip?.props) return
      tip.props = {
        ...tip.props,
        ...val,
      }
    }

    app.provide(tooltipPluginKey, {
      tooltips,
      show,
      remove,
      set,
    })
  },
}
