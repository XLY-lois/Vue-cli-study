const getters = {
  appNameWithVersion: (state) => { //传入的参数是当前vuex实例中同级的state
    return `${state.appName}v2.0`
  }
}
export default getters
