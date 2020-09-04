<template>
  <div class="hello"> 
    <img v-if="true" src="../assets/timg.jpg">
    <div class="div1">
    <h1>{{ msg }}</h1>
    <h2>Welcome~</h2>
    </div>
    <br>
    <ul>
      <li>
        <el-button type="success" plain @click="handleRouterPush('/userlist')">用户列表</el-button>
        <!-- 添加点击事件切换组件 -->
      </li>
      <li>
         <el-button type="success" plain @click="handleRouterPush('/userdata')">用户数据统计</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎~这是首页',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleRouterPush(url) {
      // 点击事件切换组件
      this.$router.push(url)
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.div1{  
  background-color: #42b983b7;
  height: 100px;
  border-radius:5px 5px;
}
.hello>img{
  width: 400px;
}

</style>
