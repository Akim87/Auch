import '@/styles/main.scss';
import Vue from 'vue';
import { SimpleSVG } from 'vue-simple-svg';
import App from './App.vue';


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

Vue.component('simple-svg', SimpleSVG);
