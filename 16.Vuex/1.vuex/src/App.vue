<template>
  <div id="app">
    <h1>_____________响应式规则_____________</h1>
    <h3>{{ this.$store.state.info }}</h3>
    <button @click="commitInfo">修改信息</button>
    <h1>_____________{{ message }}_____________</h1>
    <button @click="add">+</button>
    <h1>{{ $store.state.count }}</h1>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h1>{{ $store.state.persons }}</h1>
    <button @click="addPerson({ id: '005', name: 'eee', age: 12 })">
      添加学生
    </button>
    <h2></h2>
    <h1>_____________getters相关_____________</h1>
    <h2>{{ $store.state.count * $store.state.count }}</h2>
    <h2>{{ $store.getters.square }}</h2>
    <h2>{{ more20 }}</h2>
    <!-- 一定要记得加$ -->
    <h2>getters:{{ $store.getters.more11 }}</h2>
    <h2>{{ $store.getters.more11Length }}</h2>
    <h2>{{ $store.getters.moreage(10) }}</h2>
    <hello-vuex :message="forVuex"></hello-vuex>
  </div>
</template>

<script>
import helloVuex from "@/components/HelloVuex.vue";
import { INCREASE } from "./store/mutations-types";
export default {
  name: "App",
  data() {
    return {
      message: "_____________mutation相关_____________",
      forVuex: "这是传送给Vuex的消息",
      count: 0,
    };
  },
  components: {
    helloVuex,
  },
  methods: {
    commitInfo() {
      this.$store.commit("updateInfo");
    },
    add() {
      this.$store.commit(INCREASE);
    },
    sub() {
      this.$store.commit("decrease");
    },
    addCount(num) {
      // 普通参数 num被称为payload
      //1.普通的提交风格
      // this.$store.commit("addCountStore", num);
      //2.特殊的提交风格
      this.$store.commit({
        type: "addCountStore",
        num,
      });
    },
    addPerson(person) {
      //数组对象
      this.$store.commit("addPersonStore", person);
    },
  },
  computed: {
    more20() {
      let name = [];
      const persons = this.$store.state.persons.filter((n) => n.age > 11);
      for (let i of persons) {
        name.push(i.name);
      }
      return name.join(" - ");
    },
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
}
</style>
