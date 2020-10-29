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
