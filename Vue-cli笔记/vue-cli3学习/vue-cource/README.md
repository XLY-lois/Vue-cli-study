# vue-cource

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
### 笔记
#### 路由
###### 动态路由匹配 
- 动态修改路由，使得不同参数对应不同的路由
```
//router.js
{//动态路由匹配
    path: '/argu/:name',
    component: () => import('../views/argu.vue')
  }
```
```
//argu.vue
<template>
  <div>{{ $route.params.name }}</div>
</template>
```
- $route 当前加载的页面的路由对象 包含params参数 里面有个name属性（自己定义的）
##### 嵌套路由
```
//router.js
{//嵌套路由
    path: '/parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  }
```
- 子路由的path不用加斜杠
##### 命名路由
```
//router.js
 {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},

```
```
//App.vue
<router-link v-bind:to="{name: 'about'}">About</router-link>
```
- 先通过v-bind绑定to属性 再传入一个对象 即可通过组件的name值进行跳转
```
//App.vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{name: 'about'}">About</router-link>
    </div>
    <router-view/>
    <router-view name="email"/>
    <router-view name="tel"/>
  </div>
</template>
```
```
//router.js
{//命名路由
    path: '/name_view',
    components: {
      default: () => import('../views/child.vue'),//不写名字默认渲染这个组件
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue'),
    }
  }
```
##### 重定向与别名
```
//router.js
{//重定向到 '/'
    path: '/main',
    redirect: '/'
  }
```
- 别名
```
//router.js
{
    path: '/',
    name: 'home',
    alias: '/home_page',//别名
    component: Home
},
```
##### 编程式导航
- $router 是在router/index.js 中注册的路由实例
```
<template>
  <div class="home">
    home
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") {
        this.$router.go(-1); //后退一页 或者可用back()
      } else if (type === "push") {
        this.$router.push("/parent"); //也可以用命名路由方式传入对象通过name值跳转
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent",
          query: {
            name: "lois",//添加query后能在url中拼接name和它的值
          },
        });
      }
    },
  },
}
</script>
```
- replace 和 push 的区别： push会在浏览历史上有记录能回退，replce是直接替换掉；
##### 路由组件传参
1. 布尔模式 通过url进行组件传参
```
//argu.vue
<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lois',//不传参时的默认值
    }
  }
};
</script>

```
- 加入了props属性
```
//router.js
{//动态路由匹配
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true //允许使用url中传进来的参数作为组件中props中的name属性值
  },
```
2. 对象模式 通过组件注册时的props属性直接传参
```
//router.js
{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'//参数在此处传入
    }
  },
```
```
//About.vue
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
      default: 'apple'//如果在组件注册时没有传参就会默认显示这个值
    }
  }
}
</script>
```
3. 函数模式
```
//router.js
{
    path: '/',
    name: 'home',
    alias: '/home_page',//别名
    component: Home,
    props: route => ({
      food: route.query.food
    })
},
```
```
//Home.vue
<b>{{ food }}</b>
...
props: {
    food: {
      type: String,
      default: 'apple'
}

```
- 此时在地址栏内输入 http://localhost:8080/?food=banana 即可将参数传入