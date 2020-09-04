<template>
  <div id="useradd">
      <h2>添加用户信息</h2>
      <form action="">
          姓名：<input v-model="user.name" type="text">
          年龄：<input v-model="user.age" type="text">
          生日：<input v-model="user.bir" type="text" value="如01-01">
          <input @click="saveUserInfo()" type="button" value="添加">
      </form>
      <br>  
    <a @click="handleRouterPush('/')">返回首页</a>
    <!-- <a href="#/">返回首页</a> -->
  </div>
</template>

<script>
export default {
    name:'UserAdd',
    data(){
        return {
            user:{}
        }
    },
    methods:{
        saveUserInfo(){
            // console.log(this.user);

            this.$http.post('http://rap2.taobao.org:38080/app/mock/260346/user/add',this.user).then((res) => {
            console.log(res);
        });
            //发送axios请求
            // this.$htttp.post('http://rap2.taobao.org:38080/app/mock/260346/user/add',this.user).then(res => {
            //     console.log(res);
            // });

        },
        handleRouterPush(url) {
        // 点击事件切换组件
        this.$router.push(url)
    }
    },
    created(){
        this.$http.get('http://rap2.taobao.org:38080/app/mock/260346/user/findAll?page=1&rows=5').then((res) => {
            // console.log(res.data);
            this.users = res.data.results;
        });
    },
}
</script>

<style >

</style>