import Vue from 'vue';
import App from './App.vue';
import { CONFIG } from './config';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App, { props: CONFIG })
}).$mount('#app');
