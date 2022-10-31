<template>
  <div class="title">
    <h2>我是cpn组件的标题</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // name: "Cpn", //加不加name竟然没有差别吗？
  data() {
    return {
      message: "顺便测试下name属性的作用",
    };
  },
};
</script>

<style scoped>
.title {
  background-color: skyblue;
}
</style>