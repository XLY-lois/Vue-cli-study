<template>
  <div id="app">
    <h1>欢迎 {{ msg }}</h1>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
///暴露组件
export default {
  name: 'App',
  data(){
    return{
      msg:'小明',
    }
  },
  methods:{},
}
</script>

<style>
</style>
