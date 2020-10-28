import Home from '../views/Home'

export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',//别名
    component: Home,
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    }
  },
  {//动态路由匹配
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true //允许使用url中传进来的参数作为组件中props中的name属性值
  },
  {//嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {//命名路由
    path: '/name_view',
    components: {
      default: () => import('../views/child.vue'),//不写名字默认渲染这个组件
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue'),
    }
  },
  {//重定向到 '/'
    path: '/main',
    redirect: '/'//也可传入对象 {name:'home'}
  },
]
