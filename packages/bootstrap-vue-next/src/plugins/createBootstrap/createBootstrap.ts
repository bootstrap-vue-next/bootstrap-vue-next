import type {Plugin} from 'vue'
import type {BootstrapVueOptions} from '../../types/BootstrapVueOptions'

import '../../styles/styles.scss'

import {breadcrumbPlugin} from '../breadcrumb/breadcrumbPlugin'
import {defaultsPlugin} from '../defaults/defaultsPlugin'
import {modalControllerPlugin} from '../modalController/modalControllerPlugin'
import {modalManagerPlugin} from '../modalManager/modalManagerPlugin'
import {popoverPlugin} from '../popover/popoverPlugin'
import {rtlPlugin} from '../rtl/rtlPlugin'
import {toastPlugin} from '../toast/toastPlugin'
import {tooltipPlugin} from '../tooltip/tooltipPlugin'

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
    if (pluginData.tooltip ?? true === true) {
      app.use(tooltipPlugin)
    }
    if (pluginData.popover ?? true === true) {
      app.use(popoverPlugin)
    }
    app.use(defaultsPlugin, pluginData)
  },
})
