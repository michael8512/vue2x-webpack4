// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from "./store";
import resize from "./utils/resize.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from "./vuex/router";
require('./mock');//启动mock假数据拦截 
Router(store, router);
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.directive('resize', resize);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
