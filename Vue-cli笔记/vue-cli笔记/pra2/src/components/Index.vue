<template>
<!-- 首页 -->
    <div class="container">
        <HelloWorld :index="'1'"></HelloWorld>
        <img src="@/assets/indexLogo2.jpg" >

    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
    name:'Index',
    components:{
        'HelloWorld':HelloWorld
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    background-color: rgb(246,246,246);
}
</style>>
