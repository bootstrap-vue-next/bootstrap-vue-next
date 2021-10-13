import viteSSR from 'vite-ssr'
import App from './App.vue'
import BootstrapVue from './BootstrapVue'
/*
import { createWebHistory, createRouter } from "vue-router";
*/
const routes = [
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
    path: '/about/:id',
    name: 'About',
    component: {
      name: 'About',
      render() {
        return h('h1', {}, 'About page')
      },
    },
  },
]

/*
const router = createRouter({
  history: createWebHistory(),
  routes,
});
*/

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'

export default viteSSR(App, {routes}, (context) => {
  /* Vite SSR main hook for custom logic */
  const {app, router, initialState} = context
  app.use(BootstrapVue)
})

// app.use(router)
