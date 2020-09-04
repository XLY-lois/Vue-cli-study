<template>
  <div id="userdata">
      <div id="myChart"></div>
  </div>
</template>

<script>
export default {
    name:'UserData',
    data(){
        return {
            users:[],
            isCollapse: true,
            ageList:[]
        }
    },
    methods: {
    handleRouterPush() {
      this.$router.push('/add')
    },
    findAll(){
      this.$http.get('/getUserInfo').then(res => {
      // console.log(res.data);
      this.users = res.data;
      
      this.drawLine(this.countAge(this.users));
      });
    },
    countAge(users){
      // console.log(users);//jsobj
      // console.log(users.length);
      var usersObj = {
        youth:0,
        midle:0,
        old:0,
        older:0
      }
      for(let i = 0;i < users.length;i++){
        if(users[i].age <= 20){
          usersObj.youth += 1;
        }else if(users[i].age <= 40){
          usersObj.midle += 1;
        }else if(users[i].age <= 60){
          usersObj.old += 1;
        }else{
          usersObj.older += 1;
        } 
      }
      // console.log(usersObj);
      var ageList = Object.entries(usersObj);
      console.log(ageList);
      return ageList;//返回一个有各年龄阶段的 对象
    },
    drawLine(data){//

        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '各年龄阶段人数柱状图' },
            xAxis: {
                data: ["20岁以下","20-40岁","40-60岁","60岁以上"]
            },
            yAxis: {
            },
            series: [{
                name: '人数',
                type: 'bar',
                data: this.ageList,
            }]
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      },
      created(){
        this.findAll();
        
        // alert(JSON.stringify(this.users));
        // this.countAge(this.users);
      },
      mounted(){
        // this.drawLine(this.users);
  }, 
}
</script>

<style scoped>
#myChart{
  width: 300px; 
  height: 300px;
  margin: 0 auto;
}
#userdata > table {
  margin: 0 auto;
  width: 300px;
}
#test{
    width: 40px;
    background-color: pink;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>