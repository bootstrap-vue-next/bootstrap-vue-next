import {defineClientAppEnhance} from '@vuepress/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3, {BToastPlugin} from 'bootstrap-vue-3'

export default defineClientAppEnhance(async ({app, router, siteData}) => {
  if (!__VUEPRESS_SSR__) {
    app.use(BootstrapVue3)
    app.use(BToastPlugin)
  }
})
