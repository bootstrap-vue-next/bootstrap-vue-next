import {type Plugin} from 'vue'
import {orchestratorPluginKey} from '../../utils/keys'
import {_newOrchestratorRegistry} from '../../composables/orchestratorShared'

export const orchestratorPlugin: Plugin = {
  install(app) {
    const orchestratorRegistry = _newOrchestratorRegistry()

    app.provide(orchestratorPluginKey, orchestratorRegistry)
  },
}
