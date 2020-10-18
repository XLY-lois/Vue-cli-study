<template>
  <div>
    <input @input="handleInput($event)" :value="value"/>
  </div>
</template>

<script>
export default {
  name:'AInput',
  props: {
    value: {
      type: [String,Number],
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      var value = event.target.value;
      this.$emit('input',value);
    }
  }
}
</script>
