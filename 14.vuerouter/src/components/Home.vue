<template>
  <div>
    <h1>这里是首页</h1>
    <img src="../assets/logo.png" alt="" />
    <h2>{{ message }}</h2>
    <!-- 第二步，在父组件中使用 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "都要忘记怎么使用vue了",
    };
  },
  // created() {
  //   //页面创建回调
  //   console.log("created Home");
  //   document.title = "首页";
  // },
  // mounted() {
  //   //组件挂载回调
  //   console.log("mounted");
  // },
  // updated() {
  //   //页面刷新回调
  //   console.log("updated");
  // },
  // destroyed () { //销毁回调
  //   ;
  // },
};
</script>

<style scoped>
</style>