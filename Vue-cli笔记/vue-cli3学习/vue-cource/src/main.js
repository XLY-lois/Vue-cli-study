import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'

Vue.config.productionTip = false

Vue.prototype.$bus = Bus//在原型对象上添加bus属性

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
