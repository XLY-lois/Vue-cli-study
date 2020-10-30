<template>
  <div>
    <AInput @input="handleInput"></AInput>
    <p>{{ inputVal }} last letter is {{ inputValLateLetter }}</p>
    <!-- <AShow :content="inputVal" /> -->
    <p>appName: {{ appName }}</p>
    <p>userName: {{ userName }}</p>
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <!-- <p>userNameFirstLetter: {{ firstLetter }}</p> -->
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="handleChangeUserName">修改用户名</button>
  </div>
</template>

<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'
import vuex from 'vuex'
// import { mapState } from 'vuex' //这样导入就不用const了
const mapState = vuex.mapState
const mapGetters = vuex.mapGetters
const mapMutations = vuex.mapMutations
const mapActions = vuex.mapActions

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
    userName() {
      return this.$store.state.user.userName
    },
    ...mapState([
      'appName',
      'appVersion'
    ]),
    ...mapGetters([
      'appNameWithVersion',
      // 'firstLetter'
    ]),
    //或者可以不传入数组 传入一个对象{appName: state => state.appName}
    inputValLateLetter() {
      return this.inputVal.substr(-1,1)
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // }
  },
  methods: {
    ...mapMutations([
      'set_user_name'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput(val) {
      this.inputVal = val;
    },
    handleChangeAppName() {
      // this.appName = 'newName';//不行 会报错
      this.$store.commit('set_app_name','newAppName');
      this.$store.commit('set_app_version');
      this.updateAppName();
    },
    handleChangeUserName() {
      this.set_user_name('jack')
    }
  }
}
</script>
