<template>
  <div id="userlist">
    <table border="1">
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>生日</th>
        <th>操作</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.bir }}</td>
        <td>
          <a  @click="delRow(user.id)">删除</a>
          <a  @click="handleEidt(user)">修改</a>
        </td>
      </tr>
    </table>
        <br>
        <a @click="handleRouterPush('/useradd')">添加用户</a>
        <router-view></router-view>
        <a @click="handleRouterPush('/')">返回首页</a>
        
  </div>
</template>

<script>
export default {
    name:'UserList',
    data(){
        return {
            users:[]
        }
    },
    methods: {
    handleRouterPush(url) {
      this.$router.push(url)
    },
    findAll(){
      this.$http.get('/getUserInfo').then(res => {
      // console.log(res.data);
      this.users = res.data
      });
    },
    delRow(id){
        console.log(id);
        this.$http.get('http://rap2.taobao.org:38080/app/mock/260346/user/delete?id='+id).then(res => {
            console.log(res);
            if(res.data.success){
                this.findAll();//删除成功后重新查询所有
                alert(res.data.msg)
                console.log(res.data);
            }
        });
    },
    handleEidt(user) {
      console.log(user);
      this.$router.push({ name: 'UserEdit', params: { ...user}})
    }
  },
    created(){
        this.findAll();
    },
    watch:{//??监听
        $router:function(val,oldVal){
            console.log(val);
            if(val.path == '/userlist'){
                this.findAll();
            }
        }
    }
}
</script>

<style >
#userlist > table {
  margin: 0 auto;
  width: 500px;
  font-size: 18px;
}

table{
    background-color: rgba(195, 214, 161, 0.384);
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #999999;
    border-collapse: collapse;
}
table>tr>th {
    background-color:#42b983;
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #999999;
}
table>td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #999999;
}
a {
  color: #3a3737;
  font-size: 16px;
}
a:hover{
   color:#42b983;
   text-shadow: 1px 1px 1px gray; /* 字体阴影 */

}
</style>