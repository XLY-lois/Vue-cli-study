<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lois',//不传参时的默认值
    }
  }
};
</script>
