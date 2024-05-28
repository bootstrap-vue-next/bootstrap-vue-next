import {type Plugin} from 'vue'
import type {BootstrapVueOptions} from '../types'
import {idPluginKey} from '../utils'

export default {
  install(app, options: BootstrapVueOptions['plugins']) {
    if (!(options?.id instanceof Object && typeof options.id.getId === 'function')) return

    app.provide(idPluginKey, options.id.getId)
  },
} satisfies Plugin
