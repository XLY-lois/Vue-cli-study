<template>
  <!-- 主页面 -->
  <div id="container">
    <HelloWorld :index="'2'"></HelloWorld>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside
        width="200px"
        style="background-color: rgba(75, 133, 233, 0.15)"
      >
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>用户基本信息</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-message"></i>导航2</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- <el-container> -->
      <el-main>
        <el-table :data="usersList">
          <el-table-column prop="id" label="ID" width="140"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="140">
          </el-table-column>
          <el-table-column prop="gender" label="性别" width="140">
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="140">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "Hello",
  data() {
    return {
      usersList: [],
    };
  },
  created() {
    this.getUsersList();
  },
  methods: {
    getUsersList() {
      //getUserInfo
        this.$http.get("/getUserInfo").then(res => {
        // console.log(res.data);
        this.usersList = res.data;

      });
    }
  },
  components: {
    HelloWorld: HelloWorld
  }
};
</script>

<style scoped>
body {
  padding-top: 0;
  margin-top: 0;
}
#container {
  padding-top: 0;
  margin-top: 0;
}
</style>
