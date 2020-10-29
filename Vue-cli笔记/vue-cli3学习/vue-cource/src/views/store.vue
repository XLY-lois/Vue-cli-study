<template>
  <div>
    <AInput @input="handleInput"></AInput>
    {{ inputVal }}
    <AShow :content="inputVal" />
    <p>{{ appName }}</p>
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
  computed: {
    appName() {
      console.log(this)
      return this.$store.state.appName
    }
  },
  methods: {
    handleInput(val) {
      this.inputVal = val;
    }
  }
}
</script>
