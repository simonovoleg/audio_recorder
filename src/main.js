import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from '@/store/Store.js';
import router from '@/router/Router.js';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
