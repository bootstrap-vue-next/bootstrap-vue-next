import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue from './BootstrapVue';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css';

const app = createApp(App);
app.use(BootstrapVue);
app.mount('#app');