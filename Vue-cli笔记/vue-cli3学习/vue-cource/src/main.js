import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import Bus from './bus'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$bus = Bus//在原型对象上添加bus属性

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
