import {h} from 'vue'
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
