<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "./components/tabbar/TabBar";
export default {
  name: "App",
  components: {
    tabBar,
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
