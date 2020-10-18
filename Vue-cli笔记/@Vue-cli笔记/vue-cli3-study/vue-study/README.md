# vue-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
### 路由
- router-link 封装的是一个a标签，有一个属性to：指定一个路径
- router-view 视图渲染组件，渲染router-link指向的组件
##### 动态路由匹配
```
{
    path:'/argu/:name',
    //name就是动态路由参数
    component: () => import('../views/Argu.vue')
}

//可通过 $route.params.name 获取这个name属性
```
- $route 表示当前加载的路由对象 
##### 嵌套路由
- 路由的注册
```
  //嵌套路由
  {
    path:'/parent',
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path:'child',//子路由不需要加斜杠
      component: () => import('../views/Child.vue')
      }
    ]
  }
```
- 使用
```
//父组件
  <div>
    I m parent
    <router-view/>
  </div>
//子组件
<template>
  <div>
    i m child
  </div>
</template>
```
##### 命名路由
- 使用
```
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <!-- 通过name属性跳转路由 -->
    <router-link :to="{ name:'About' }">About</router-link>
  </div>
  <router-view/>
  <router-view name="Email"/>
  <router-view name="Tel"/>
</template>
```
- 路由注册
```
 //命名路由
  {
    path:'/named_view',
    components: {
      default: () => import('../views/Child.vue'),//如果router-view没有传入name属性就会默认显示default的组件
      Email: () => import('../views/Email.vue'),
      Tel: () => import('../views/Tel.vue')
    }
  }

```
##### 路由重定向
```
  //路由重定向 将当前要访问的url跳转到另一个url
  {
    path:'/main',
    redeirect:{
      name:'Home'
    }
  }
```

### 路由进阶
##### 路由组件传参
- url动态传参 在url中输入argu/参数 即可将参数传入页面
```
//页面
<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String,Number],
      default: 'lois'
    }
  }
}
</script>

//路由
{
    path:'/argu/:name',
    //name就是动态路由参数
    name:'Argu',
    component: () => import('../views/Argu.vue'),
    props: true//允许使用$rout的params作为组件的属性（？）
  },
```
- 路由中传参 对象模式
```
//about 页面
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{ food }}</b>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>

//路由
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //懒加载 只有在访问到这个页面的时候才会去引入
    props: {
      food: 'banana'
    }
  },
```
- 函数模式

##### Html5 history模式
- 404页面跳转
```
  {//找不到匹配的url就会匹配这个路由
    path: '/:pathMatch(.*)',
    component: () => import('../views/Error_404.vue')
  }
```

##### 导航守卫
- 在路由跳转到结束时能进行一些逻辑处理（判断用户有没有登录啊没登陆就跳转到登录页面）
```
//router/index.js
const HAD_LOGIN = false//模拟登录状态

router.beforeEach((to,from,next) => {
  if(to.name !== 'login') {
    if(HAD_LOGIN) next();//直接跳转
    else next({name:'login'});
  }else{
    if(HAD_LOGIN) next({name:'home'});
    else next()
  }
})//注册一个全局前置守卫
```
- 路由独享守卫 在路由中单独定义
```
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
```

##### 导航解析流程
导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 状态管理
##### Bus
##### Vuex