<template>
  <div>
    <h2>_____________{{ message }}_____________</h2>
    <h2>{{ $store.state.count }}</h2>
    <h3>{{ this.$store.state.info }}</h3>
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