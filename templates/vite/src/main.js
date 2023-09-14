import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import { BootstrapVueNext, BToastPlugin } from 'bootstrap-vue-next';
import 'bootstrap-styles/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
app.use(BootstrapVueNext);
app.use(BToastPlugin);

app.mount('#app');
