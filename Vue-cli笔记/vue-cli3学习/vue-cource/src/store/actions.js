import { getAppName } from  '../api/app.js';

const actions = {
  updateAppName({ commit }) { //模拟一个异步的接口请求
    getAppName().then(res => {
      // console.log(res);
      commit('set_app_name',res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default actions
