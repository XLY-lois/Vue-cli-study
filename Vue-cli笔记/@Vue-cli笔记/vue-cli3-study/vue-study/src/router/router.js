import { Teleport } from 'vue'
import Home from '../views/Home.vue'


//路由列表
export default[
  {
    path: '/',
    alias:'/home_page',//别名
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //懒加载 只有在访问到这个页面的时候才会去引入
  },
  //动态路由匹配
  {
    path:'/argu/:name',
    //name就是动态路由参数
    name:'Argu',
    component: () => import('../views/Argu.vue')
  },
  //嵌套路由
  {
    path:'/parent',
    name:'Parent',
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path:'child',//子路由不需要加斜杠
      component: () => import('../views/Child.vue')
      }
    ]
  },
  //命名路由
  {
    path:'/named_view',
    components: {
      default: () => import('../views/Child.vue'),//如果router-view没有传入name属性就会默认显示default的组件
      Email: () => import('../views/Email.vue'),
      Tel: () => import('../views/Tel.vue')
    }
  },
  //路由重定向 将当前要访问的url跳转到另一个url
  {
    path:'/main',
    redeirect:{
      name:'Home'
    }
  }
]
