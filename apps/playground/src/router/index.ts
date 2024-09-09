import {h} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../Views/HomePage.vue'

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
          return h('h1', {}, 'About page')
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
