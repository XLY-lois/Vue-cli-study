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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
