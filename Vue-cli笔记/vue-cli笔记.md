# 2020-7-8 一切皆组件
---
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
