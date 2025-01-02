import {type Plugin, ref, type Ref} from 'vue'
import type {BootstrapVueOptions, BvnComponentProps} from '../../types/BootstrapVueOptions'
import {defaultsKey} from '../../utils/keys'

/**
 * This plugin is essential for the bootstrap-vue-next to function. `createBootstrap` calls this for you,
 * but if you are not using `createBootstrap`, you will need to manually install this plugin.
 */
export const bootstrapPlugin: Plugin = {
  install(app, options: BootstrapVueOptions) {
    const val = options?.components ?? {}
    app.provide(defaultsKey, ref(val) as Ref<Partial<BvnComponentProps>>)
  },
}
