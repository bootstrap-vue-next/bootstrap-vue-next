import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App).use(router).use(createBootstrap()).mount('#app')
