import {type Component, createApp} from 'vue'
import App from './App.vue'
import {createBootstrap, Components, Directives} from 'bootstrap-vue-next'

import 'bootstrap-styles/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(
  createBootstrap()
)
for (const name in Components) {
  app.component(name, Components[name as keyof typeof Components] as Component)
}
for (const name in Directives) {
  app.directive(name.replace(/^v/, ''), Directives[name as keyof typeof Directives])
}
app.mount('#app')
