import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

//路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes:routes,
})

const HAD_LOGIN = true//模拟登录状态

router.beforeEach((to,from,next) => {
  to.mate && setTitle(to.meta.title)
  if(to.name !== 'login') {
    if(HAD_LOGIN) next();//直接跳转
    else next({name:'login'});
  }else{
    if(HAD_LOGIN) next({name:'home'});
    else next()
  }
})//注册一个全局前置守卫

//导航被确认之前 ？？？？
// router.beforeResolve

//后置钩子 路由跳转后的做操作
router.afterEach((to,from) => {
  //
})

export default router
