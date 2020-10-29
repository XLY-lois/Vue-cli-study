<template>
  <div class="tel">tel: {{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click',mes => {
      this.message = mes
    })//绑定一个事件监听on-click事件
  }
}
</script>

<style lang="less" scoped>
.tel {
  border: 1px solid black ;
}
</style>
