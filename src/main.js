// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import i18n from './i18n'
import './theme/theme-67da9a/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(api)
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
