import BAlert from './components/BAlert.vue'
import BContainer from './components/BContainer.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BAlert: typeof BAlert
    BContainer: typeof BContainer
  }
}
