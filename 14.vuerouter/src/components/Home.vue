<template>
  <div>
    <h1>这里是首页</h1>
    <img src="../assets/logo.png" alt="" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "都要忘记怎么使用vue了",
    };
  },
};
</script>

<style scoped>
</style>