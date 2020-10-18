import { Teleport } from 'vue'
import Home from '../views/Home.vue'


//路由列表
export default[
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    alias:'/home_page',//别名
    name: 'Home',
    component: Home,
    beforeEnter: (to,from,next) => {//路由独享守卫
      if(from.name === 'About') alert('这是从about页来的')
      else alert('no')
      next()//记得调用这个函数 不然不会成功跳转
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //懒加载 只有在访问到这个页面的时候才会去引入
    props: {
      food: 'banana'//传参进去
    },
    meta: {//权限
      title: '关于'
    }
  },
  //动态路由匹配
  {
    path:'/argu/:name',
    //name就是动态路由参数
    name:'Argu',
    component: () => import('../views/Argu.vue'),
    props: true//允许使用$rout的params作为组件的属性（？）
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
  },
  {
    path:'/store',
    name:'store',
    component: () => import('../views/store.vue')
  },
  {//找不到匹配的url就会匹配这个路由
    path: '/:pathMatch(.*)',
    component: () => import('../views/Error_404.vue')
  }
]
