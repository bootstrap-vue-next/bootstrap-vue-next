import 'bootstrap/dist/css/bootstrap.min.css'
import {createApp, h} from 'vue'
import {createRouter, createWebHistory, useRoute} from 'vue-router'
import App from './App.vue'
import {Directives} from './index'
import {createBootstrap} from './plugins/createBootstrap'
import './styles/styles.scss'
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
          const route = useRoute()
          return h('h1', {}, `About page ${route.params.id}`)
        },
      },
      props: true,
    },
  ],
})

const app = createApp(App)
app.use(createBootstrap())
app.use(router)
for (const name in Directives) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore some directives are weird
  app.directive(name.replace(/^v/, ''), Directives[name as unknown as keyof typeof Directives])
}
app.mount('#app')
