<template>
  <div>
    <HelloWorld :index="'3'"></HelloWorld>
    <div id="buttons">
      <router-link to="/usersdata/countage"><el-button type="primary" plain >用户分布年龄段统计</el-button></router-link>
      
      <br/>
      <router-link to="/usersdata/countgender"><el-button type="primary" plain>用户性别统计</el-button></router-link>
    </div>
    <div id="countage"><router-view></router-view></div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import CountAge from '@/components/CountAge'

export default {
  name: "UsersData",
  data() {
    return {
    };
  },
  components: {
    HelloWorld: HelloWorld,
    CountAge
  },
  methods: {
  }
};
</script>

<style scoped>
#countage{
  position: relative;
  margin: 0;
  top:100px;
  left: 300px;
  width: 900px;
  height: 400px;
}
#buttons {
  position: relative;
  float: left;
  left: 0;
  margin-left: 0;
  margin-top: 30px;
  line-height: 80px;
  background-color: rgba(130, 206, 236, 0.534);
  width: 200px;
  height: 500px;
}
</style>
