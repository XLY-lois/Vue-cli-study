import Home from '../views/Home'

export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',//别名
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to,from,next) => {//路由独享守卫
      // if(from.name === 'about'){
      //   alert('这是about页来的')
      // }else {
      //   alert('这不是从about页来的')
      // }
      next();//记得调用next 不然不能成功跳转
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    },
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
  {
    path: '/store',
    component: () => import('../views/store.vue')
  },
  {//匹配所有不能匹配url的组件 一定要放在后面 因为优先级是从上到下
    path: '*',
    component: () => import('../views/error_404.vue')
  }
]
