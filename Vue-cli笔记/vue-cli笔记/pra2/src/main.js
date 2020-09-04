// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'//添加新行
import 'element-ui/lib/theme-chalk/index.css'//添加新行
import App from './App'
import router from './router'
import axios from 'axios'
// 引入echarts
import  echarts from 'echarts'
require('./mock')

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts 

Vue.prototype.$http = axios;//修改内部的$http为axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
