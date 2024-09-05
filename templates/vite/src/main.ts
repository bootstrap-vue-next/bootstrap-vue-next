import {createApp} from 'vue'
import App from './App.vue'
import {createBootstrap, Components, Directives} from 'bootstrap-vue-next'

import 'bootstrap-styles/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(
  createBootstrap()
)
for (const name in Components) {
  app.component(name, Components[name])
}
for (const name in Directives) {
  app.directive(name, Directives[name])
}
app.mount('#app')
