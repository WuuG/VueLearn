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
  name: "home",
  data() {
    return {
      message: "都要忘记怎么使用vue了",
      path: "/home/news",
    };
  },

  // created() {
  //   //页面创建回调
  //   console.log("created Home");
  // },
  // destroyed() {
  //   //销毁回调
  //   console.log("destory home");
  // },
  // mounted() {
  //   //组件挂载回调
  //   console.log("mounted");
  // },
  // updated() {
  //   //页面刷新回调
  //   console.log("updated");
  // },

  //activated和deactivated两个回调函数都需要keep-alive作为前置条件
  deactivated() {
    //非活动时
    console.log("deactivated home");
  },
  //第二步：记录path 并且用两个回调函数处理
  activated() {
    if (this.path != this.$route.path) {
      this.$router.push(this.path);
    }
    console.log("activated Home");
  },
  beforeRouteLeave(to, from, next) {
    console.log(from.path);

    this.path = from.path;
    next();
  },
};
</script>

<style scoped>
</style>