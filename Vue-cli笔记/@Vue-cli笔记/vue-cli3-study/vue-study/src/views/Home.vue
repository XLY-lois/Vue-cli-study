<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="handleClick('argu')">跳转到argu</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  // beforeRouterEnter(to,from,next) {
  //   console.log(to.name)
  //   next()
  // },
  methods: {
    handleClick(type) {
      if (type === "back") {
        this.$router.go(-1); //this.$router 是我们的路由实例 返会后一页
        //或者可以使用this.$router.back() 返回后一页
      } else if (type === "push") {
        this.$router.push("/argu");
      } else if (type === "replace") {
        this.$router.replace({
          name: "Parent",
          query: {
            //加上这对象属性会在url里加入参数
            //此时点击按钮后的url为 http://localhost:8080/#/parent?name=lois
            name: "lois",
          },
        });
      } else if (type === "argu") {
        //路由传参
        this.$router.push({
          name: "Argu",
          params: {
            name: "lois",
          },
        });
      }
      //push 和 replace 的区别 push可回退 但replace是替换掉了不能回退
    },
  },
};
</script>
