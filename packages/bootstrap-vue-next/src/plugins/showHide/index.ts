import {type Plugin, readonly, ref, type Ref} from 'vue'
import {
  globalShowHideStorageInjectionKey,
  type RegisterShowHideFnInput,
  type RegisterShowHideMapValue,
} from '../../utils/keys'

export const showHidePlugin: Plugin = {
  install(app) {
    const values: Ref<Map<string, RegisterShowHideMapValue>> = ref(new Map())

    const register = ({
      id,
      component,
      value,
      toggle,
      show,
      hide,
      registerTrigger,
      unregisterTrigger,
    }: RegisterShowHideFnInput) => {
      values.value.set(id, {
        id,
        component,
        value: readonly(value),
        toggle,
        show,
        hide,
        registerTrigger,
        unregisterTrigger,
      })
      return {
        unregister() {
          // delete values.value[id]
          values.value.delete(id)
        },
        updateId(newId: string, oldId: string) {
          const existingValue = values.value.get(oldId)
          if (existingValue) {
            values.value.set(newId, {...existingValue, id: newId})
            values.value.delete(oldId)
          }
        },
      }
    }

    app.provide(globalShowHideStorageInjectionKey, {register, values})
  },
}
