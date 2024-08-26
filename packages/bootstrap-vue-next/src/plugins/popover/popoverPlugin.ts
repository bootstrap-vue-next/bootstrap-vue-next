import {markRaw, type Plugin, ref, toRef, watch} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {
  PopoverOrchestratorMapValue,
  PopoverOrchestratorShowParam,
  PrivateOrchestratedPopover,
} from '../../types/ComponentOrchestratorTypes'

export const popoverPlugin: Plugin = {
  install(app) {
    const popovers = ref(new Map<symbol, PopoverOrchestratorMapValue>())

    /**
     * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
     */
    const show = (obj: PopoverOrchestratorShowParam): symbol => {
      const resolvedProps = toRef(obj.props)

      const _self = Symbol()

      watch(
        obj.ref,
        (newValue) => {
          if (!newValue) {
            popovers.value.delete(_self)
          } else {
            popovers.value.set(_self, {
              component: !obj.component ? undefined : markRaw(obj.component),
              props: {...resolvedProps.value, _reference: newValue, _modelValue: false},
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
     * You can get the symbol param from the return value from the show method
     */
    const remove = (self: symbol) => {
      popovers.value.delete(self)
    }

    const set = (self: symbol, val: Partial<PrivateOrchestratedPopover>) => {
      const popover = popovers.value.get(self)
      if (!popover?.props) return
      popover.props = {
        ...popover.props,
        ...val,
      }
    }

    app.provide(popoverPluginKey, {
      popovers,
      show,
      remove,
      set,
    })
  },
}
