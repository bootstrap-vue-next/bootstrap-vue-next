import {defineClientConfig} from '@vuepress/client'
import ReferenceSection from './client/components/reference-section'
import {h} from 'vue'

export default defineClientConfig({
  async enhance({app, router, siteData}) {
    if (!__VUEPRESS_SSR__) {
      // wrap the `<ComponentReference />` component with plugin options
      app.component('ComponentReference', (props) => h(ReferenceSection, {}))
    }
  },
  setup() {},
  rootComponents: [],
})
