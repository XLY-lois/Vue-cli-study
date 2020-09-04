<template>
    <div>
        <h2>用户添加信息</h2>
        <form action="">
            用户名:<input v-model="user.name" type="text"><br>
            年龄：<input v-model="user.age" type="text"><br>
            生日：<input v-model="user.birthday" type="text"><br>
            <input @click="saveUserInfo()" type="button" value="添加"><br>
        </form>
    </div>
</template>

<script>
export default {
    name:'UserAdd',
    data(){
        return{
            user:{},
        }
    },
    methods:{
        saveUserInfo(){
            console.log(this.user);
            //拿到表单用户信息后 发送axios请求
            this.$http.post('http://rap2.taobao.org:38080/app/mock/260346/use',this.user).then(res => {
            console.log(res);
            if(res.data.success){//添加成功则切换路由
                this.$router.push('/user');//切换路由
            }
            })
        }
    }
}
</script>