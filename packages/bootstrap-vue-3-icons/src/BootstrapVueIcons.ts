import {App, Plugin} from 'vue'
import Components from './components'
import './styles/styles.scss'

// All available components
// Keep this list in sync with /components/index.ts please
import BIcon from './components/BIcon/BIcon.vue'
import BIconstack from './components/BIcon/BIconstack.vue'

// Export components
export {BIcon, BIconstack}

// Export types
export type {Animation, IconSize} from './types'

export {kebabCase, pascalCase} from './utils'

export * from './components/icons/icons'

// Inject all components into the global @vue/runtime-core
// This allows intellisense in templates w/out direct importing
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BIcon: typeof BIcon
    BIconstack: typeof BIconstack
  }
}

// Main app plugin
const plugin: Plugin = {
  // TODO: use options in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: App) {
    Object.entries(Components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export {plugin as BootstrapVue3Icons}
export default plugin
