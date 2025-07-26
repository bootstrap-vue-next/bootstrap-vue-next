import type {Plugin} from 'vue'
import type {BootstrapVueOptions, BvnComponents} from '../../types/BootstrapVueOptions'

import '../../styles/styles.scss'

import {breadcrumbPlugin} from '../breadcrumb'
import {bootstrapPlugin} from '../bootstrap'
import {modalManagerPlugin} from '../modalManager'
import {rtlPlugin} from '../rtl'
import {showHidePlugin} from '../showHide'
import {orchestratorPlugin} from '../orchestrator'

// Main app plugin
export const createBootstrap = (pluginData: Readonly<BootstrapVueOptions> = {}): Plugin => ({
  install(app) {
    if (pluginData.breadcrumb ?? true === true) {
      app.use(breadcrumbPlugin)
    }
    if (pluginData.modalManager ?? true === true) {
      app.use(modalManagerPlugin)
    }
    if ((pluginData.rtl ?? true === true) || typeof pluginData.rtl === 'object') {
      app.use(rtlPlugin, pluginData)
    }
    if (pluginData.orchestrator ?? true === true) {
      app.use(orchestratorPlugin)
    }
    if (pluginData.showHide ?? true === true) {
      app.use(showHidePlugin)
    }
    app.use(bootstrapPlugin, pluginData)
  },
})

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface GlobalComponents extends BvnComponents {}
}
