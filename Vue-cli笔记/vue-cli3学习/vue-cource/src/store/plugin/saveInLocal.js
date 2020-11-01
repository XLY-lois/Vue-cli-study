export default store => { //这个函数会在每次store初始化时调用
  console.log('store初始化了');
  //2. 每次刷新浏览器的时候再取出来
  if(localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));//替换掉原本新的state
  }
  store.subscribe((mutation,state) => {
    localStorage.state = JSON.stringify(state);
    //1. 提交后将state以json字符串的形式存储在localStorage中
  })//每次提交mutation后都会执行里面的回调函数
}
