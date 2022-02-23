import {defineClientAppEnhance} from '@vuepress/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../dist/bootstrap-vue-3.css'

export default defineClientAppEnhance(async ({app, router, siteData}) => {
  if (!__VUEPRESS_SSR__) {
    const BootstrapVue = await import('../../dist/bootstrap-vue-3.es')
    app.use(BootstrapVue.default)
    app.use(BootstrapVue.ToastPlugin)
  }
})
