import {h} from 'vue'
import {defineClientAppEnhance} from '@vuepress/client'
import ReferenceSection from './components/reference-section'
export default defineClientAppEnhance(({app}) => {
  // wrap the `<ComponentReference />` component with plugin options
  app.component('ComponentReference', (props) => h(ReferenceSection, {}))
})
