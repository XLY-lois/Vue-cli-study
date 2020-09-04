<template>
    <div>
        <h1>用户列表</h1>
        <table border="1">
            <tr>
                <td>编号</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>生日</td>
                <td>操作</td> 
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.birthday }}</td>
                <td><a href="" @click="delRow(user.id)">删除</a><a href="">修改</a></td>
            </tr>
        </table>

        <a href="#/user/add">添加</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return{
            users:[]
        }
    },
    methods:{
        findAll(){//查询所有
        this.$http.get('http://rap2.taobao.org:38080/app/mock/260346/user/findAll/?page=1&rows=4').then((res) => {//向后端发送请求获取列表
        this.users = res.data.results;
        });
        },
        delRow(id){
            console.log(id);
        }
    },
    components:{},
    created(){
        this.findAll();
    },
    // 监听,当路由发生变化的时候执行
    watch: {
        $route: {
        handler: function(val, oldVal){
        console.log(val);
        },
    // 深度观察监听
        deep: true
        }
    },  
}
</script>