import {type Plugin, ref, type Ref} from 'vue'
import type {BootstrapVueOptions, BvnComponentProps} from '../types'
import {defaultsKey} from '../utils'

export default {
  install(app, options: BootstrapVueOptions['plugins']) {
    const val = options?.components ?? {}
    app.provide(defaultsKey, ref(val) as Ref<Partial<BvnComponentProps>>)
  },
} satisfies Plugin
