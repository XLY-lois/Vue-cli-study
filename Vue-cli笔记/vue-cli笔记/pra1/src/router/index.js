import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/UserList.vue'
import UserAdd from '@/components/UserAdd'
import UserData from '@/components/UserData'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/userlist',
      name: 'UserList',
      component: UserList,
    },{
        path: '/useradd',//添加用户路由
        name: 'UserAdd',
        component: UserAdd,
    },{
        path: '/useredit',//编辑用户路由
        name: 'UserEdit',
        component: UserEdit,
    },{
      path: '/userdata',
      name: 'UserData',
      component: UserData
    }
  ]
})
