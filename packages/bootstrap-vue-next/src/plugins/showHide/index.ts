import {computed, type Plugin, reactive, readonly} from 'vue'
import {
  globalShowHideStorageInjectionKey,
  type RegisterShowHideFnInput,
  type RegisterShowHideValue,
} from '../../utils/keys'

export const showHidePlugin: Plugin = {
  install(app) {
    const values: Record<
      string,
      {value: boolean; toggle: () => void; show: () => void; hide: (trigger?: string) => void}
    > = reactive({})

    const fun = (({id, value, toggle, show, hide}: RegisterShowHideFnInput) => {
      values[id] = computed(() => ({value: value.value, toggle, show, hide})) as unknown as {
        value: boolean
        toggle: () => void
        show: () => void
        hide: (trigger?: string) => void
      }
      return {
        unregister() {
          delete values[id]
        },
      }
    }) as unknown as RegisterShowHideValue

    fun.map = readonly(values)
    app.provide(globalShowHideStorageInjectionKey, fun)
  },
}
