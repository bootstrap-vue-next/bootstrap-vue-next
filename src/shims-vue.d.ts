import BVModal from './globalProperties/bvModal'

/* eslint-disable */
declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bvModal: typeof BVModal
  }
}
