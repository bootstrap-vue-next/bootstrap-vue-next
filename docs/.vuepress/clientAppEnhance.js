import { defineClientAppEnhance } from '@vuepress/client'
import BootstrapVue from '../../dist/bootstrap-vue-3.common';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../src/styles/styles.css';


export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(BootstrapVue)
})