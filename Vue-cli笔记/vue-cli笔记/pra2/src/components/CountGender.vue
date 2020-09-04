<template>
  <!-- 性别数据统计 -->
  <div id="myChart" :style="{ width: '700px', height: '300px' }"></div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "CountGender",
  data() {
    return {
      usersList: [],
      genderList: [],
      flag: ""
    };
  },
  components: {
    HelloWorld: HelloWorld
  },
  mounted() {
    this.getUsersList();
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
        xAxis: {},
        yAxis: {
          data: ["男性", "女性"]
        },
        series: [
          {
            name: "人数",
            type: "bar",
            data: this.genderList,
            barWidth: "30%",
            barCategoryGap: 50,
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
          }
        ]
      });
    },
    countGender(usersList) {
      var genderList = [0,0];
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].gender == 0) {
          genderList[0] += 1;
        } else {
          genderList[1] += 1;
        }
      }
      return genderList;
    },
    getUsersList() {
      //   /getUserInfo
      this.$http.get("/getUserInfo").then(res => {
        // console.log(res.data);//对象数组
        this.usersList = res.data;
        this.genderList = this.countGender(this.usersList);
        this.drawLine();
      });
      //模拟ajax请求后返回的数据
      //   var users = [
      //     { id: 1, name: "小小明", gender: 1, age: 21 },
      //     { id: 2, name: "小明2", gender: 0, age: 30 },
      //     { id: 3, name: "小明3", gender: 0, age: 60 },
      //     { id: 4, name: "小明4", gender: 1, age: 50 },
      //     { id: 5, name: "小明5", gender: 0, age: 25 },
      //     { id: 6, name: "小明4", gender: 1, age: 36 },
      //     { id: 7, name: "小明4", gender: 1, age: 78 },
      //     { id: 8, name: "小明4", gender: 1, age: 86 },
      //     { id: 9, name: "小明4", gender: 0, age: 15 },
      //     { id: 10, name: "小明4", gender: 1, age: 13 }
      //   ];
      //   this.usersList = users;
    }
  }
};
</script>

<style scoped></style>
