import {h} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../Views/HomePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: HomePage},
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
