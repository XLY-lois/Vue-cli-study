<template>
  <!-- 年龄数据统计 -->
  <div id="myChart" :style="{ width: '700px', height: '400px' }"></div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "CountAge",
  data() {
    return {
      usersList: [],
      ageList: [],
      flag: ""
    };
  },
  components: {
    HelloWorld: HelloWorld
  },
  mounted() {
    this.getUsersList();
    // this.countAge(this.usersList);
    // this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        color: "skyblue",
        title: { text: "用户年龄阶段分布图" },
        grid: {
          left: "20%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          data: ["age<=20", "20<age<=40", "40<age<=50", "50<age<=60", "age>60"]
        },
        yAxis: {},
        series: [
          {
            name: "人数",
            type: "bar",
            data: this.ageList, //把统计过的ageList传入
            barWidth: "45%",
            barCategoryGap: 50,
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
          }
        ]
      });
    },
    countAge(usersList) {
      var ageList = [0,0,0,0,0]; 
      //0 <=20 ,1 20<age<=40, 2 40<age<=50 , 3 50<age<=60 ,4 age>60
      // console.log(usersList);
      
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].age <= 20) {
          ageList[0] += 1;
        } else if (usersList[i].age <= 40) {
          ageList[1] += 1;
        } else if (usersList[i].age <= 50) {
          ageList[2] += 1;
        } else if (usersList[i].age <= 60) {
          ageList[3] += 1;
        } else {
          ageList[4] += 1;
        }
      }
      // console.log(ageList);
      return ageList;
    },
    getUsersList() {
      //getUserInfo
        this.$http.get("/getUserInfo").then(res => {
        // console.log(res.data);
        this.usersList = res.data;
        this.ageList = this.countAge(this.usersList);
        this.drawLine();
      });
    }
  }
};
</script>

<style scoped></style>
