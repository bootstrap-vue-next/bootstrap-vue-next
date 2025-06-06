import {type Plugin, ref} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {ToastOrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'

export const toastPlugin: Plugin = {
  install(app) {
    const toasts = ref<ToastOrchestratorArrayValue[]>([])

    const _isAppend = ref(false)

    app.provide(toastPluginKey, {
      _isAppend,
      _isOrchestratorInstalled: ref(false),
      toasts,
    })
  },
}
