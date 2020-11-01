import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import actions from  './actions'
import mutations from './mutations'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development', //开发环境为true 打包后生产环境为false
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [
    saveInLocal
  ]
})

export default store
