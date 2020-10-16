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