import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(router).use(BootstrapVue3).use(BToastPlugin).mount('#app')
