<template>
  <div>
    <HelloWorld :index="'4'"></HelloWorld>
    <div  class="shoppingcart-container">
      <div class="header">
        <el-col :span="4">商品信息</el-col>
        <el-col :span="3">数量</el-col>
        <el-col :span="3">尺码/颜色</el-col>
        <el-col :span="3">原价</el-col>
        <el-col :span="3">折扣</el-col>
        <el-col :span="3">总金额</el-col>
        <el-col :span="3">操作</el-col>
      </div>
      <div class="clothes-container">
        <ul class="clothes-box">
          <li v-for="item in list" :key="item.id">
             <el-col :span="1">
              <el-checkbox v-model="selectedArr" :label="item.id" @change="item.selected = !item.selected"><span>{{ item.name }}</span></el-checkbox>
            </el-col>
            <el-col :span="3">
              <!-- <el-checkbox v-model="selectedArr" :label="item.id">{{ item.name }}</el-checkbox> -->
              <img src="@/assets/pic1.jpg" style="width:120px" />
            </el-col>
            <el-col :span="3">
              <span @click="cutNumber(item)">-</span>
              {{ item.number }}
              <span @click="addNumber(item)">+</span>
            </el-col>
            <el-col :span="3"
              ><span>{{ item.size }} / {{ item.color }}</span></el-col
            >
            <el-col :span="3"
              ><span>{{ item.price }}</span></el-col
            >
            <el-col :span="3"
              ><span>{{ item.discount }}</span></el-col
            >
            <el-col :span="3"
              ><span>{{
                item.price * item.discount * item.number
              }}</span></el-col
            >
            <el-col :span="3"
              ><span
                ><el-button
                  @click="del(item)"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button></span
            ></el-col>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="select-all"> <el-checkbox v-model="selectedAll" @change="selectAll">全选</el-checkbox></div>
        <div class="total-price">合计 {{ totalPrice }} </div>
        <div class="selected-clothes">已选商品 {{ totalClothes }} 件</div>
      </div>
    <div  class="nothing" v-if="list.length == 0 ">购物车没有商品，快去逛逛吧~</div>
    
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "ShoppingCart",
  data() {
    return {
      selectedArr:[],
      totalClothes:0,
      totalPrice:0,
      selectedAll:false,
      list: [],
    };
  },
  created(){
    this.getList();
  },
  methods: {
    cutNumber(item) {//减少件数
      if (item.number == 1) {
        return;
      }
      item.number--;
      this.getTotalClothes();
      this.getTotalPrice();
    },
    addNumber(item) {//增加件数
      item.number++;
      this.getTotalClothes();
      this.getTotalPrice();
    },
    del(item) {//删除商品
      let index = this.list.findIndex(cloth => {
        return cloth.id == item.id;
      })
      this.list.splice(index,1);
      this.getTotalClothes();
      this.getTotalPrice();
    },
    getTotalClothes(){//计算已选商品的总件数
      let totalClothes = 0;
      this.list.forEach( item => {
        if(item.selected){
          totalClothes += item.number;
        }
        this.totalClothes = totalClothes;
      })
    },getTotalPrice(){//计算已选商品的总价格
      let totalPrice = 0;
      this.list.forEach( item => {
        if(item.selected){
          totalPrice += item.price * item.number * item.discount;
        }
        this.totalPrice = totalPrice;
      })
    },
    selectAll(val){//全选
      let selectedArr = [];
      if(val){//全选时 将每一条item的select状态循环更新为true 同时将item放入临时数组selectedArr 在将selectedArr 赋值给this.selectedArr
        this.list.forEach( item => {
          item.selected = true;
          selectedArr.push(item.id);
        })
        this.selectedArr = selectedArr;
      }else{//取消全选时 将已选数组更新为空 同时将每一条item的select状态循环更新为false
        this.selectedArr = [];
        this.list.forEach( item => {
          item.selected = false;
        })
      }
      this.getTotalClothes();
      this.getTotalPrice();
    },
    getList(){//获取商品列表数据
      //ajax 返回数组
      let arr = [
        {
          name: "款式一",
          number: 2,
          size: "s",
          color: "藏青色",
          price: 100,
          discount: 0.5,
          id: 0
        },
        {
          name: "款式二",
          number: 2,
          size: "s",
          color: "淡黄色",
          price: 120,
          discount: 0.95,
          id: 1
        },
        {
          name: "款式三",
          number: 2,
          size: "s",
          color: "粉红色",
          price: 300,
          discount: 0.8,
          id: 2
        },
        {
          name: "款式四",
          number: 1,
          size: "m",
          color: "红色",
          price: 265,
          discount: 0.7,
          id: 3
        },
        {
          name: "款式五",
          number: 1,
          size: "m",
          color: "黄色",
          price: 265,
          discount: 0.9,
          id: 4
        }
      ];
      //给返回的对象数组循环增加一个属性 表示是否被选中
      arr.forEach( item => {
        item.selected = false;//未被选中
      })
      this.list = arr;//把ajax返回的数组赋值给list

    }
  },
  watch:{//监听
      selectedArr(){
        this.getTotalClothes();
        this.getTotalPrice();
        if(this.selectedArr.length == this.list.length){
          this.selectedAll = true;
        }else{
          this.selectedAll = false;
        }
      }
  },
  components: {
    HelloWorld: HelloWorld
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  margin-top: 20px;
  padding: 0;
}
.clothes-container {
  position: relative;
  margin-bottom: 100px;
}
.clothes-box {
  position: relative;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.clothes-box li {
  margin: 20px 0;
  height: 120px;
  border-top: 1px solid rgba(56, 55, 55, 0.1);
  border-bottom: 1px solid rgba(56, 55, 55, 0.1);
}
.clothes-box li span {
  line-height: 120px;
}
.select-all{
  position: relative;
  float: left;
  left: 20px;
  line-height: 80px;
}
.total-price{
  position: relative;
  float: right;
  right: 100px;
  line-height: 80px;
}
.selected-clothes{
  position: relative;
  float: right;
  right: 200px;
  line-height: 80px;
}
.footer{
  position: fixed;
  padding: 0;
  margin: 0;
  background-color:rgba(122, 190, 245, 0.8);
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-size: 110%;
  border-top: 1px solid rgba(56, 55, 55, 0.1);
  z-index:1;
}
.footer div {
  display: inline;
}
</style>
