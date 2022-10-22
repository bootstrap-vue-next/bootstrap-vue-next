import {createApp, h} from 'vue'
import App from './App.vue'
import BootstrapVueIcons from './BootstrapVueIcons'

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        name: 'Home',
        render() {
          return h('h1', {}, 'Home page')
        },
      },
    },
  ],
})

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

createApp(App).use(BootstrapVueIcons).use(router).mount('#app')
