import {type Plugin, ref, type Ref} from 'vue'
import type {BootstrapVueOptions, BvnComponentProps} from '../types/BootstrapVueOptions'
import {defaultsKey} from '../utils/keys'

export const defaultsPlugin: Plugin = {
  install(app, options: BootstrapVueOptions) {
    const val = options?.components ?? {}
    app.provide(defaultsKey, ref(val) as Ref<Partial<BvnComponentProps>>)
  },
}
