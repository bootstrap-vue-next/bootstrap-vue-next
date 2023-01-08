import {defineClientConfig} from '@vuepress/client'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import DocReference from './components/DocReference.vue'
// import {h} from 'vue'

export default defineClientConfig({
  async enhance({app, router, siteData}) {
    if (!__VUEPRESS_SSR__) {
      const {BootstrapVueNext, BToastPlugin} = await import('bootstrap-vue-next')
      app.use(BootstrapVueNext)
      app.use(BToastPlugin, {BToast: {injectkey: 'toast'}})
      app.component('doc-reference', DocReference)
    }
  },
  setup() {},
  rootComponents: [],
})
