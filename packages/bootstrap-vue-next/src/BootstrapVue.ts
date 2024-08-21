import type {Plugin} from 'vue'
import type {BootstrapVueOptions} from './types/BootstrapVueOptions'

import './styles/styles.scss'

import {breadcrumbPlugin} from './plugins/breadcrumbPlugin'
import {defaultsPlugin} from './plugins/defaultsPlugin'
import {idPlugin} from './plugins/idPlugin'
import {modalControllerPlugin} from './plugins/modalControllerPlugin'
import {modalManagerPlugin} from './plugins/modalManagerPlugin'
import {popoverPlugin} from './plugins/popoverPlugin'
import {rtlPlugin} from './plugins/rtlPlugin'
import {toastPlugin} from './plugins/toastPlugin'
import {tooltipPlugin} from './plugins/tooltipPlugin'

// Main app plugin
export const createBootstrap = (pluginData: Readonly<BootstrapVueOptions> = {}): Plugin => ({
  install(app) {
    if (pluginData.breadcrumb ?? true === true) {
      app.use(breadcrumbPlugin)
    }
    if ((pluginData.id ?? true === true) || typeof pluginData.id === 'object') {
      app.use(idPlugin, pluginData)
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
    if (pluginData.tooltip ?? true === true) {
      app.use(tooltipPlugin)
    }
    if (pluginData.popover ?? true === true) {
      app.use(popoverPlugin)
    }
    app.use(defaultsPlugin, pluginData)
  },
})
