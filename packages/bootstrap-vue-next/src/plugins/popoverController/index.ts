import {type Plugin, ref} from 'vue'
import {popoverPluginKey} from '../../utils/keys'
import type {PopoverOrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'

export const popoverPlugin: Plugin = {
  install(app) {
    const _isOrchestratorInstalled = ref(false)
    const popovers = ref<PopoverOrchestratorArrayValue[]>([])

    app.provide(popoverPluginKey, {
      _isOrchestratorInstalled,
      popovers,
    })
  },
}
