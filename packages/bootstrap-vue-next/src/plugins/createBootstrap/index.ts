import type {Plugin} from 'vue'
import type {BootstrapVueOptions, BvnComponents} from '../../types/BootstrapVueOptions'

import '../../styles/styles.scss'

import {breadcrumbPlugin} from '../breadcrumb'
import {bootstrapPlugin} from '../bootstrap'
import {modalControllerPlugin} from '../modalController'
import {modalManagerPlugin} from '../modalManager'
import {popoverPlugin} from '../popoverController'
import {rtlPlugin} from '../rtl'
import {toastPlugin} from '../toastController'
import {showHidePlugin} from '../showHide'

// Main app plugin
export const createBootstrap = (pluginData: Readonly<BootstrapVueOptions> = {}): Plugin => ({
  install(app) {
    if (pluginData.breadcrumb ?? true === true) {
      app.use(breadcrumbPlugin)
    }
    if (pluginData.modalController ?? true === true) {
      app.use(modalControllerPlugin)
    }
    if (pluginData.modalManager ?? true === true) {
      app.use(modalManagerPlugin)
    }
    if ((pluginData.rtl ?? true === true) || typeof pluginData.rtl === 'object') {
      app.use(rtlPlugin, pluginData)
    }
    if (pluginData.toast ?? true === true) {
      app.use(toastPlugin)
    }
    if (pluginData.popover ?? true === true) {
      app.use(popoverPlugin)
    }
    app.use(showHidePlugin)
    app.use(bootstrapPlugin, pluginData)
  },
})

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface GlobalComponents extends BvnComponents {}
}
