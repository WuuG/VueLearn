<template>
  <div class="title">
    <h2>我是cpn组件的标题</h2>
    <p>{{ message }}</p>
    <slot name="mid"><button>按钮</button></slot>
  </div>
</template>

<script>
export default {
  // name: "Cpn", //加不加name竟然没有差别吗？
  data() {
    return {
      message: "测试配置分离后还是否可以使用dev",
    };
  },
};
</script>

<style scoped>
.title {
  background-color: skyblue;
}
</style>