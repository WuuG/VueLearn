<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="count++">+</button>
    <h1>{{ count }}</h1>
    <button @click="count--">-</button>
    <hello-vuex :message="forVuex"></hello-vuex>
  </div>
</template>

<script>
import helloVuex from "@/components/HelloVuex.vue";
export default {
  name: "App",
  data() {
    return {
      message: "这是来自app的消息",
      forVuex: "这是传送给Vuex的消息",
      count: 0,
    };
  },
  components: {
    helloVuex,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  height: 40px;
  width: 40px;
}
</style>
