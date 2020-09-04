// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import App from './App'
import router from './router'
import axios from 'axios'
// 引入echarts
import  echarts from 'echarts'

Vue.use(ElementUI)   //新添加
require('./mock')

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
