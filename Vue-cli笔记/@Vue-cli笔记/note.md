# Vue 实战

---
### 准备工作

1. 安装及新建工程

- 如果安装的是 vue-cli3 以下的 请先卸载
  ` npm uninstall vue-cli -g`
- 安装更高版本的 vue-cli
  `npm install @vue/cli -g` 默认安装最新版（此时的版本是 4.5.4 所参考的视频为 3 版本）
  `npm install @vue/cli@3.0.0 -g` 安装指定版本
- 新建工程
  `npm ui` 弹出界面进行项目的新建

2. 配置

- 在项目根目录下新建文件 .editorconfig 用于配置 vscode 编辑器
- 在 src 中新建目录 api 用来存放项目 ajax 请求
- 在 src 中新建目录 config 用来存放项目配置对象 将来要引用的时候只需要`import config from './config` 此时 node 会自动在 config 文件夹中自动寻找 index.js
- 在 src 中新建目录 directive 用于存放 vue 的自定义指令
- src - lib - util.js 存放与业务结合的工具方法
  src - lib - tools.js 存放工具方法
- 将 src - router 中的 index.js 注册的路由单独抽离 用 router.js 存放
- src - store 中新建 state.js mutations.js actions.js 记录状态 然后把新建的三个文件都引进到 index.js
- 新建 src - module 文件夹(文件夹中存放一些记录信息的模块 如 user.js ) 导入到 index.js
- 新建 src - mock 文件夹用于存放拦截请求的 js 文件
- 配置 vue.config.js

  ```
  const path = require('path')

    const resolve = dir => { //定义的resolve方法用来加载路径
  return path.join(_dirname, dir)
    }

    const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iveiw-admin' : '/'

    module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('src'))//当前路径拼接上src 即以后引入东西时可以用@代替 src及之前的路径
    .set('_c',resolve('components')) //同理 用_c可以快速引入components 文件夹中的组件
  },
  //打包时不生成.map文件 加开打包速度，减小体积
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
    }
    }
  ```
### 路由
