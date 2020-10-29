<template>
  <div>
    <AInput @input="handleInput"></AInput>
    {{ inputVal }}
    <AShow :content="inputVal" />
  </div>
</template>

<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'

export default {
  data() {
    return {
      inputVal: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput(val) {
      this.inputVal = val;
    }
  }
}
</script>
