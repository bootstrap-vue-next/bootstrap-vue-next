import {type Plugin} from 'vue'
import type {BootstrapVueOptions} from '../types/BootstrapVueOptions'
import {idPluginKey} from '../utils/keys'

export const idPlugin: Plugin = {
  install(app, options: BootstrapVueOptions) {
    if (!(options?.id instanceof Object && typeof options.id.getId === 'function')) return

    app.provide(idPluginKey, options.id.getId)
  },
}
