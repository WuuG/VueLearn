
<template>
  <div class="title">
    <h2>{{ message }}</h2>
    <h2>{{ vueMessage }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  // name: "App",
  data() {
    return {
      message: "这里是来自vue的消息：hello world",
      vueMessage: "来自.vue文件的消息，hello vue",
    };
  },
  components: {
    Cpn,
  },
};
</script>

<style  scoped>
.title {
  color: seagreen;
}
</style>