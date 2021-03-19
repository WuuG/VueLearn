<template>
  <div>
    <h2>{{ message }}</h2>
    <h3>您收到一条来自{{ userId }}的消息</h3>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      message: "这是一条来自用户的信息",
    };
  },
  //这里用计算属性处理，实际可以直接使用
  computed: {
    userId() {
      // 3.第三步获取活跃路由的参数 这里的$route是就是当前路由（活跃路由）  param（参数）
      return this.$route.params.userId;
    },
  },
  // created() {
  //   //页面创建回调
  //   console.log("user 创建");
  // },
  // destroyed() {
  //   //销毁回调
  //   console.log("user 销毁");
  // },
};
</script>

<style scoped>
</style>