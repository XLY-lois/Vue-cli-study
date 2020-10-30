import vue from 'vue'

const mutations = { //用来定义一些修改全局state值的方法
  set_app_name(state,params){
    state.appName = params;
    //如果是多个参数 那么传进来的params会是一个对象(对象的键具体看在组价中使用是传进来的是什么 然后用点操作获取对象属性)
  },
  set_app_version(state){
    vue.set(state,'appVersion','v2.0');//参数： state对象 新值的名 新值的值
  }
}

export default mutations
