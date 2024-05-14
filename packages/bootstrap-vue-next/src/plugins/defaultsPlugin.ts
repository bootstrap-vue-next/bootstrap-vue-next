import type {Plugin} from 'vue'
import type {BootstrapVueOptions, ComponentProps} from '../types'
import {defaultsKey} from '../utils'

export default {
  install(app, options: BootstrapVueOptions['plugins']) {
    app.provide(defaultsKey, options?.components ?? ({} as Partial<ComponentProps>))
  },
} satisfies Plugin
