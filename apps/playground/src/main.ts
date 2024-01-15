import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVueNextPlugin} from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App)
  .use(router)
  .use(BootstrapVueNextPlugin, {components: true, directives: true})
  .mount('#app')
