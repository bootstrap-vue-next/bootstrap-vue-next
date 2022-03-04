import {defineClientAppEnhance} from '@vuepress/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

export default defineClientAppEnhance(async ({app, router, siteData}) => {
  if (!__VUEPRESS_SSR__) {
    const {BootstrapVue3, BToastPlugin} = await import('../../dist/bootstrap-vue-3.es')
    app.use(BootstrapVue3)
    app.use(BToastPlugin)
  }
})
