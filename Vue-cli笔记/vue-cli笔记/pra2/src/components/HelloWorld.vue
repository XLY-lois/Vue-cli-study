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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleRouterPush(url) {
      // 点击事件切换组件
      this.$router.push(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
