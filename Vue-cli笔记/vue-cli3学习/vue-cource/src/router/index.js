import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(Router)

const router = new Router({
  routes
});

//是否登录
const hasLogin = true;

//注册全局前置守卫
router.beforeEach((to,from,next) => {
  if(to.name !== 'login'){//如果访问的页面不是login
    //判断登录状态
    if(hasLogin) next();//如果已经登录 直接跳转
    else next({name: 'login'});//如果没有登录 跳转到登录页面
  }else { //如果访问的是登录页面
    if(hasLogin) next({name: 'home'});//已经登录的话跳转到home页
    else next();//直接跳转到登录页面
  }

  //判断路由是否有meta的title
  to.meta && setTitle(to.meta.title)
});

// //全局守卫 导航被确认（所有导航钩子都结束，）之前
// router.beforeResolve()

// //后置钩子 路由跳转后可做操作
// router.afterEach((to,from) => {
// })

export default router
