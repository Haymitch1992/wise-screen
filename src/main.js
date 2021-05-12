import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './service/http';
import '@/mock'

Vue.config.productionTip = false;
Vue.use(api);
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
