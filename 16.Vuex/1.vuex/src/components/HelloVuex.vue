<template>
  <div>
    <!-- <h2>{{ count }}</h2> -->
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    message: {
      type: String,
      dafault: "这是Vuex的默认消息",
    },
  },
};
</script>

<style scoped>
</style>