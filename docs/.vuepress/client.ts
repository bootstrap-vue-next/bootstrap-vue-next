import {defineClientConfig} from '@vuepress/client'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import DocReference from './components/DocReference.vue'
import ReferenceSection from './PluginComponentReference/client/components/reference-section'
import {h} from 'vue'

export default defineClientConfig({
  async enhance({app, router, siteData}) {
    if (!__VUEPRESS_SSR__) {
      const {BootstrapVue3, BToastPlugin} = await import('../../dist/bootstrap-vue-3.es')
      app.use(BootstrapVue3)
      app.use(BToastPlugin)
      app.component('doc-reference', DocReference)
      app.component('ComponentReference', (props) => h(ReferenceSection, {}))
    }
  },
  setup() {},
  rootComponents: [],
})
