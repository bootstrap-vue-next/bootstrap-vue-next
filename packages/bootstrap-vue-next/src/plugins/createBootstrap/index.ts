import {type Plugin, ref, type Ref} from 'vue'
import type {
  BootstrapVueOptions,
  BvnComponentProps,
  BvnComponents,
} from '../../types/BootstrapVueOptions'

import '../../styles/styles.scss'

import {rtlPlugin} from '../rtl'
import {registryPlugin} from '../registry'
import {orchestratorPlugin} from '../orchestrator'
import {defaultsKey} from '../../utils/keys'

// Main app plugin
export const createBootstrap = (pluginData: Readonly<BootstrapVueOptions> = {}): Plugin => ({
  install(app) {
    if ((pluginData.registries ?? true) === true) {
      app.use(registryPlugin, pluginData)
    }
    if ((pluginData.rtl ?? true) === true || typeof pluginData.rtl === 'object') {
      app.use(rtlPlugin, pluginData)
    }
    if ((pluginData.orchestrator ?? true) === true) {
      app.use(orchestratorPlugin)
    }
    // Provide global defaults for components
    const val = pluginData?.components ?? {}
    app.provide(defaultsKey, ref(val) as Ref<Partial<BvnComponentProps>>)
  },
})

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface GlobalComponents extends BvnComponents {}
}
