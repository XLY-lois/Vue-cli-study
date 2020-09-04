import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import User from '../components/User'
import Student from '../components/Student'
import UserAdd from '../components/UserAdd'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: Home
    }, //重定向
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children: [{
          path: 'add',
          component: UserAdd
        } //将添加路由设置成用户管理路由的子路由
      ]
    },
    {
      path: '/student',
      component: Student
    },

  ]
})
