import {computed, type ComputedRef, type Plugin, reactive, readonly} from 'vue'
import {globalShowHideStorageInjectionKey, type RegisterShowHideFnInput} from '../../utils/keys'

export const showHidePlugin: Plugin = {
  install(app) {
    const values: Record<
      string,
      ComputedRef<{
        value: boolean
        toggle: () => void
        show: () => void
        hide: (trigger?: string) => void
        registerTrigger: (trigger: string, el: Element) => void
        unregisterTrigger: (trigger: string, el: Element, clean: boolean) => void
      }>
    > = reactive({})

    const fun = ({
      id,
      value,
      toggle,
      show,
      hide,
      registerTrigger,
      unregisterTrigger,
    }: RegisterShowHideFnInput) => {
      values[id] = computed(() => ({
        value: value.value,
        toggle,
        show,
        hide,
        registerTrigger,
        unregisterTrigger,
      }))
      return {
        unregister() {
          delete values[id]
        },
      }
    }

    fun.map = readonly(values)
    app.provide(globalShowHideStorageInjectionKey, fun)
  },
}
