import {computed, type Plugin, reactive, readonly} from 'vue'
import {
  globalCollapseStorageInjectionKey,
  type RegisterCollapseFnInput,
  type RegisterCollapseValue,
} from '../../utils/keys'

export const collapsePlugin: Plugin = {
  install(app) {
    const values: Record<string, {value: boolean; toggle: () => void}> = reactive({})

    const fun = (({id, value, toggle}: RegisterCollapseFnInput) => {
      values[id] = computed(() => ({value: value.value, toggle})) as unknown as {
        value: boolean
        toggle: () => void
      }
      return {
        unregister() {
          delete values[id]
        },
      }
    }) as unknown as RegisterCollapseValue

    fun.map = readonly(values)

    app.provide(globalCollapseStorageInjectionKey, fun)
  },
}
