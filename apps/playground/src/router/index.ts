import {h} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../Views/HomePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'index', component: HomePage},
    {
      path: '/about',
      name: 'about',
      component: {
        name: 'About',
        render() {
          return h('h1', {}, 'About page')
        },
      },
    },
  ],
})
