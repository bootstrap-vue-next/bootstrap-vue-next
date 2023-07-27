import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVueNext, BToastPlugin} from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App).use(router).use(BootstrapVueNext).use(BToastPlugin).mount('#app')
