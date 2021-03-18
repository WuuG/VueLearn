<template>
  <div id="app">
    <h1>hello vue !!!</h1>
    <!-- <router-link to="/home" replace tag="button" active-class="active">
      首页
    </router-link>
    <router-link to="/about" replace tag="button" active-class="active">
      关于我
    </router-link> -->
    <!-- <router-link to="/home" replace tag="button"> 首页 </router-link>
    <router-link to="/about" replace tag="button"> 关于我 </router-link> -->
    <el-button @click="toHome">首页</el-button>
    <el-button @click="toAbout">关于</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toHome() {
      //vue-router源码 将所有组件都添加了@router属性
      if (this.$router.history.current.path != "/home") {
        // this.$router.push("/home");
        this.$router.replace("/home");
      }
    },
    toAbout() {
      if (this.$router.history.current != "/about") {
        // this.$router.push("/about");
        this.$router.replace("/about");
      }
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
