<template>
    <div>
        <h2>编辑用户信息</h2>
        <div class="container">
        <form action="">
            用户名：<input type="text" v-model="name"><br>
            年  龄：<input type="text" v-model="age"><br>
            生  日：<input type="text" v-model="bir"><br>
            <input @click="editUserInfo()" type="button" value="提交">
        </form>
        <a @click="handleRouterPush('/')">返回首页</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'UserEdit',
    data(){
        return{
                id:'',
                name:'',
                age:'',
                bir:''
        }
    },
    created(){
        console.log(this.$route.params.id);
    },
    mounted() {
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;
        this.age = this.$route.params.age;
        this.bir = this.$route.params.bir;

    },
    methods:{
         handleRouterPush(url) {
        // 点击事件切换组件
        this.$router.push(url)  
        },
        editUserInfo(){
            this.$http.post('http://rap2.taobao.org:38080/app/mock/260346/user/editl?id='+this.id).then(res => {
                if(res.data.success){
                    this.$router.push('/userlist');
                }
            });
        }
    }
}
</script>

<style>
.container{
    width: 600px;
    height: 300px;
    background-color: #42b983;
    margin: 10px auto;
    border-radius:5px; 
}
form{
    margin: 50px auto ;
}
input{
    margin-top: 30px;

}
</style>