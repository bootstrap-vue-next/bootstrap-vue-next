import {defineClientConfig} from '@vuepress/client'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import DocReference from './components/DocReference.vue'

export default defineClientConfig({
  async enhance({app}) {
    if (!__VUEPRESS_SSR__) {
      const {BootstrapVue3, BToastPlugin} = await import('bootstrap-vue-3')
      app.use(BootstrapVue3)
      app.use(BToastPlugin, {BToast: {injectkey: 'toast'}})
      app.component('doc-reference', DocReference)
    }
  },
  setup() {},
  rootComponents: [],
})
