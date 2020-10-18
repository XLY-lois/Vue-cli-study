<template>
  <div>
    <AInput v-model="inputValue"/>
    {{ inputValue }}
  </div>
</template>

<script>
import AInput from '../components/AInput'

export default {
  name:'store',
  data() {
    return {
      inputValue: '',
      test: '123'
    }
  },
  components: {
    AInput
  }
}
</script>
