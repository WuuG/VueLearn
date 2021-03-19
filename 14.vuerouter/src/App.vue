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
    <!-- 第二步.当路由跳转的时候需要传递值，否则报错 -->
    <!-- <router-link :to="'/user/' + userId" tag="button">用户</router-link> -->
    <!-- 这里需要绑定后传递对象，里面有属性：path和query对象 -->
    <!-- <router-link :to="{ path: '/profile', query: { name: 'why' } }"
      >档案
    </router-link> -->
    <el-button @click="toUser">用户</el-button>
    <el-button @click="toProfile">档案</el-button>
    <!-- 第一步：保持页面的渲染 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangzhangwww",
    };
  },
  methods: {
    toHome() {
      // console.log(this.$route);
      //vue-router源码 将所有组件都添加了@router属性
      if (this.$route.path != "/home/message") {
        // this.$router.push("/home");
        this.$router.replace("/home");
      }
    },
    toAbout() {
      if (this.$route.path != "/about") {
        // this.$router.push("/about");
        this.$router.replace("/about");
      }
    },
    toUser() {
      if (this.$route.path != "/user/" + this.userId) {
        this.$router.replace("/user/" + this.userId);
      }
    },
    toProfile() {
      this.$route.path != "/profile" || this.$route.query.name != this.userId
        ? this.$router.replace({
            path: "/profile",
            query: {
              name: this.userId,
              age: 10,
            },
          })
        : null;
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
