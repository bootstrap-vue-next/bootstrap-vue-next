import {h} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../Views/HomePage.vue'
import {BLink} from 'bootstrap-vue-next/components/BLink'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'index', component: HomePage},
    {
      path: '/about/:id?',
      name: 'about',
      component: {
        name: 'About',
        render() {
          return [
            h('h1', {}, 'About page'),
            h(BLink, {to: {name: 'index'}, variant: 'danger'}, 'Go to home'),
          ]
        },
      },
    },
    {
      path: '/test',
      name: 'test',
      component: {
        name: 'Test',
        render() {
          return h('h1', {}, 'Test page')
        },
      },
    },
  ],
})
