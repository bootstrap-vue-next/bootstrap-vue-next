import {type Plugin, ref} from 'vue'
import {modalControllerPluginKey} from '../../utils/keys'
import type {ModalOrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'

export const modalControllerPlugin: Plugin = {
  install(app) {
    const modals = ref<ModalOrchestratorArrayValue[]>([])

    const _isOrchestratorInstalled = ref(false)

    app.provide(modalControllerPluginKey, {
      _isOrchestratorInstalled,
      modals,
    })
  },
}
