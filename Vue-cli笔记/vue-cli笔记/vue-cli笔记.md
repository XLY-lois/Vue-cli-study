# 2020-7-8 一切皆组件
---
## Vue-cli2
### 构建项目 
1. 安装
```
npm install -g @vue/cli //版本3 
npm install -g vue/cli  //版本2
```
2. 安装vue-cli成功后，通过cd命令进入你想放置项目的文件夹，在命令提示窗口执行创建vue-cli工程项目的命令：
```
vue init webpack 项目名

//cmd
D:\web前端\笔记\Vue-cli笔记>vue init webpack hello

? Project name hello
? Project description A Vue.js project
? Author xly
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
```
3. 项目启动
```
//切换到项目目录 hello
npm start
```

4. 项目结构
- hello---项目名
   - build---用来使用webpack打包的build依赖
   - config---用来做整个项目的配置目录
   - node_modules---用来管理项目中的依赖
   - src---用来书写vue的源码
      - assets---用来存放静态资源img css...
      - components---书写组件的
      - router
      - App.vue---项目中根组件
      - main.js--- 项目中的主入口
   - static---其他静态
   - .babelrs---将es6转为es5
   - .editorconfig---项目编辑配置
   - gitignore---git版本控制忽略文件
   - .postcssrc.js---源码相关js
   - index.html---项目的主页
   - package.json---依赖管理
   - package.json---锁
   - READ.md---说明

5. 开发方式
- 一个组件对应一个功能模块
- 不需要书写html 编写的是一个个组件，在打包之后才会编译运行成html，组件的后缀.vue。

### Vue中的axios
1. 安装
```
npm install axios --save-dev
```
2. main.js中引入axios
```
import axios from 'axios'
```


## Vue-cli3版本
1. 安装
```
npm install -g @vue/cli //版本3 
vue -V //查看vue-cli版本
```
2. 项目启动
` npm run serve`

## Vue-cli4 
1. 安装
```
npm install -g @vue/cli //版本3 
vue -V //查看vue-cli版本
```
2. 创建项目
```
vue.cmd create 项目名
```
3. 启动
```
npm run serve
```
4. 打包
```
npm run build
```
5. 引入element-ui
```
vue add element
```

## 父组件向子组件传值
```
<!-- 这是父组件 -->
<template> 
  <div>
   <!-- 这是子组件 -->
    <HelloWorld :index="'4'"></HelloWorld>
   
  </div>
</template>
```
1. 先在父组件对子组件的引用中绑定数值 其中 index 是在子组件那边接收数据的变量名
2. 在子组件的 props:['index'], 中接收父组件传来的 index 参数
3. 通过不同的路由对应不同的 index 修改 data 中 activeIndex: this.index, 从而修改导航栏的激活状态 ‘:default-active="activeIndex"’
```
<template>
  <!-- 页头组件 -->
  <div class="hello">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="handleRouterPush('/')">首页</el-menu-item>
      <el-menu-item index="2" @click="handleRouterPush('/hello')">查询用户信息</el-menu-item>
      <el-menu-item index="3" @click="handleRouterPush('/usersdata')">用户信息统计</el-menu-item>
      <el-menu-item index="4" @click="handleRouterPush('/shoppingcart')">购物车</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld",
      activeIndex: this.index,
    };
  },
  props:['index'],
  methods: {
  }
};
</script>
```