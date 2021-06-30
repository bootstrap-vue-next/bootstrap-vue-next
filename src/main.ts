import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue from './BootstrapVue';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app.use(BootstrapVue);
app.mount('#app');