<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "lois", //不传参时的默认值
    },
  },
  beforeRouteUpdate(to, from, next) {
    //路由发生变化且组件被复用时调用 即同一组件被跳转多次
    console.log(to.name, from.name);
  },
};
</script>
