const state = {
  userName: 'lois'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0,1)//获取名字的第一个字母
  }
}
const mutations = {
  set_user_name(state,params) {
    state.userName = params
  }
}
const actions = {

}
export default {
  // namespaced: true,//命名空间
  state,
  getters,
  mutations,
  actions
}
