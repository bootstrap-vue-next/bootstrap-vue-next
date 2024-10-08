import type {Plugin} from 'vue'
import type {BootstrapVueOptions} from '../../types/BootstrapVueOptions'

import '../../styles/styles.scss'

import {breadcrumbPlugin} from '../breadcrumb'
import {defaultsPlugin} from '../defaults'
import {modalControllerPlugin} from '../modalController'
import {modalManagerPlugin} from '../modalManager'
import {popoverPlugin} from '../popoverController'
import {rtlPlugin} from '../rtl'
import {toastPlugin} from '../toastController'

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
    app.use(defaultsPlugin, pluginData)
  },
})
