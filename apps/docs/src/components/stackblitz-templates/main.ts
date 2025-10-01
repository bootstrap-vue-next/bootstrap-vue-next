import {createApp} from 'vue'
import App from './App.vue'
import {Components, createBootstrap, Directives} from 'bootstrap-vue-next'

import 'bootstrap-styles/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap())

// Register all components globally
for (const name in Components) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.component(name, (Components as any)[name])
}

// Register all directives globally
for (const name in Directives) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.directive(name.replace(/^v/, ''), (Directives as any)[name])
}

app.mount('#app')
