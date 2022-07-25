import {h} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Component from '../components/component.vue'

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
      path: '/component/:name',
      name: 'Component',
      component: Component,
    },
    {
      path: '/about',
      name: 'About',
      component: {
        name: 'About',
        render() {
          return h('h1', {}, 'About page')
        },
      },
    },
  ],
})

export default router
