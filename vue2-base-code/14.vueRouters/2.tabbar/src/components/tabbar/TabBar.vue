<template>
  <div class="tab-bar">
    <tab-bar-item :path="'/home'" :color="color">
      <!-- 父组件通过定义v-slot:子组件名称="自定义的对象" 通过 对象.子组件传递过来的参数 来进行使用
      在本例中, 自定义slot a是子组件传递来的参数 故可以表示为slot.a -->
      <template v-slot:text="slot">{{ slot.a.second }}</template>
      <!-- 标签内部别名的使用 -->
      <template v-slot:img><img src="~assets/img/home.svg" alt="" /></template>
      <template v-slot:img-active
        ><img src="../../assets/img/home-active.svg" alt=""
      /></template>
    </tab-bar-item>
    <tab-bar-item :path="'/see'" :color="color">
      <template v-slot:text>发现</template>
      <template v-slot:img
        ><img src="../../assets/img/eye.svg" alt=""
      /></template>
      <template v-slot:img-active
        ><img src="../../assets/img/eye-active.svg" alt=""
      /></template>
    </tab-bar-item>
    <tab-bar-item :path="'/cart'" :color="color">
      <template v-slot:text>购物车</template>
      <template v-slot:img
        ><img src="../../assets/img/shopCart.svg" alt=""
      /></template>
      <template v-slot:img-active
        ><img src="../../assets/img/shopCart-active.svg" alt=""
      /></template>
    </tab-bar-item>
    <tab-bar-item :path="'/profile'" :color="color">
      <template v-slot:text>我的</template>
      <template v-slot:img
        ><img src="../../assets/img/user.svg" alt=""
      /></template>
      <template v-slot:img-active
        ><img src="../../assets/img/user-active.svg" alt=""
      /></template>
    </tab-bar-item>
  </div>
</template>

<script>
//import标签 别名的使用
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  data() {
    return {
      color: "#d81e06",
    };
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px 3px 11px rgba(1, 1, 1, 0.3);
}
</style>