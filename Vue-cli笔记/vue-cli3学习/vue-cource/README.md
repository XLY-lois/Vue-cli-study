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
##### 导航守卫
- 全局守卫
```
//router index.js
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
});
```
- 路由独享守卫 在路由列表配置
```
{
    path: '/',
    name: 'home',
    alias: '/home_page',//别名
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to,from,next) => {//路由独享守卫
      if(from.name === 'about'){
        alert('这是about页来的')
      }else {
        alert('这不是从about页来的')
      }
      next();//记得调用next 不然不能成功跳转
    }
  },
```
- 组件内的守卫
```
//home.vue
  beforeRouteEnter(to,from,next) {
    //路由要进来，页面还没有渲染的时候触发，此时不能用this获取当前组件实例
    // console.log(from.name);
    next();
  },
  beforeRouteLeave(to,from,next) {
    //在用户离开前调用  如询问是否保存数据
    const leave = confirm('您确定要离开吗？');
    if(leave) {
      next()
    }else {
      next(false);//传入false 此时就不会跳转
    }
  },
```
```
//argu.vue
 beforeRouteUpdate(to, from, next) {
    //路由发生变化且组件被复用时调用 即同一组件被跳转多次
    console.log(to.name, from.name);
  },
```
- 导航解析流程
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
##### 路由元信息
- 路由列表中的每个路由可以定义meta字段 用于权限
##### 路由的切换动效
- 多个组件切换用 group 为组件加入key值 
```
//App.vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{name: 'about'}">About</router-link>
    </div>
    <transition-group name="router">
    <router-view key="default"/>
    <router-view key="email" name="email"/>
    <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>

```
- 编写css
```
<style lang="less">
.router-enter {
  // 页面即将显示 一开始的状态
  opacity: 0;//透明度为0
}
.router-enter-active {
  //组件从无到有的动态效果
  transition: opacity 1s ease;
}
.router-enter-to {
  //最终显示效果
  opacity: 1;
}
.router-leave-to {
  //离开效果
  opacity: 0;
}
</style>
```

#### 状态管理
##### 组件间传值
- store页面中有个AIput输入框组件 如何将输入的值给store呢？（子组件修改数据 通过事件传个父组件）
```
//AIput.vue
<template>
  <div>
    <input @input="handleInput" :value="value">
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String,Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value;
      this.$emit('input', value)
    }
  }
}
</script>

```
```
//store.vue
<template>
  <div>
    <AInput v-model="inputVal"></AInput>
    {{ inputVal }}
  </div>
</template>

<script>
import AInput from '../components/AInput'
export default {
  data() {
    return {
      inputVal: ''
    }
  },
  components: {
    AInput
  }
}
</script>

```
- 兄弟组件传值 此时是store中触发input事件 修改data中的inputVal 由于组件AShow绑定了这个值 因此传进去了
```
//AShow.vue
<template>
  <div>
    <p>AShow {{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: [String,Number],
      default: ''
    }
  }
}
</script>

```
```
//store.vue
<template>
  <div>
    <AInput @input="handleInput"></AInput>
    {{ inputVal }}
    <AShow :content="inputVal" />
  </div>
</template>

<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'

export default {
  data() {
    return {
      inputVal: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput(val) {
      this.inputVal = val;
    }
  }
}
</script>

```
- 使用bus通信 创建一个名为Bus 的空Vue实例来存储状态
1. 新建文件夹 bus 新建文件index.js
```
import Vue from 'vue'

const Bus = new Vue();

export default Bus

```
2. 在main 中引入bus 
```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'

Vue.config.productionTip = false

Vue.prototype.$bus = Bus//在原型对象上添加bus属性

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```
```
//email.vue 的值要传给 tel.vue
<template>
  <div class="email">
    email
    <button @click="handleClick">press me</button>
  </div>
</template>


<script>
export default {
  mounted() {
    console.log(this.$bus);
  },
  methods: {
    handleClick() {
      this.$bus.$emit('on-click','hello')//$emit触发当前实例上的事件
    }
  }
}
</script>
<style lang="less" scoped>
.email {
  border: 1px solid black;
}
</style>
```
```
//tel.vue
<template>
  <div class="tel">tel: {{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click',mes => {
      this.message = mes
    })//绑定一个事件监听on-click事件
  }
}
</script>

<style lang="less" scoped>
.tel {
  border: 1px solid black ;
}
</style>
```
