<template>
  <div class="home">
    home
    <b>{{ food }}</b>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="handleClick('pushToArgu')">跳转到argu</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
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
      } else if (type === "pushToArgu") {
        this.$router.push({
          name: "argu",
          params: {
            name: 'jasmine'//此时可以通过params属性向路由（动态）传值
          }
        });
      }
    },
  },
};
</script>
