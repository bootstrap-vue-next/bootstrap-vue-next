const { createApp } = require('vue');
import App from './App.vue';

import { BootstrapVueNext, BToastPlugin } from 'bootstrap-vue-next';

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap-styles/css/bootstrap.css';

const app = createApp(App);
app.use(BootstrapVueNext);
app.use(BToastPlugin);

app.mount('#app');
