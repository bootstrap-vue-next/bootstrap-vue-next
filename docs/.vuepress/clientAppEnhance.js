import { defineClientAppEnhance } from '@vuepress/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../src/styles/styles.css';


export default defineClientAppEnhance(async ({ app, router, siteData }) => {
  if (!__SSR__) {
    const BootstrapVue = await import('../../dist/bootstrap-vue-3.common');
    app.use(BootstrapVue.default)
  }
})