import {createApp, h} from 'vue'
import App from './App.vue'
import BootstrapVue, {BToastPlugin} from './BootstrapVue'

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
    {
      path: '/test',
      name: 'test',
      component: {
        name: 'Test',
        render() {
          return h('h1', {}, 'test page')
        },
      },
    },
    {
      path: '/about/:id',
      name: 'About',
      component: {
        name: 'About',
        props: {id: [Number, String]},
        render() {
          return h('h1', {}, `About page ${this.props.id}`)
        },
      },
      props: true,
    },
  ],
})

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

createApp(App).use(BootstrapVue).use(BToastPlugin).use(router).mount('#app')
