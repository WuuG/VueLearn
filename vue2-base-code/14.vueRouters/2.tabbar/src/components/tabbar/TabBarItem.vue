<template>
  <div class="tab-bar-item" @click="toPath(path)" :style="isActive">
    <div v-show="isShow">
      <slot name="img">
        <img src="../../assets/img/home.svg" alt="" />
      </slot>
    </div>
    <div v-show="!isShow">
      <slot name="img-active">
        <img src="../../assets/img/home-active.svg" alt="" />
      </slot>
    </div>
    <!-- 在所用的template内，使用v-bind:传给父组件的参数(这里是可以自定义的)="子组件的参数"
    在本例中,我使用a给父组件传递这个参数 -->
    <div>
      <slot name="text" :a="home">{{ home.first.a }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: {
        first: "这个是子对象的首页",
        second: "首页",
      },
      //active是活跃时的样式。
      active: {
        //这里的this.color是传递过来的颜色。
        color: this.color,
      },
    };
  },
  props: {
    //父组件传递进来的参数。
    path: String,
    color: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) == -1;
    },
    isActive() {
      if (this.$route.path.indexOf(this.path) !== -1) {
        return this.active;
      }
      return {};
    },
  },
  methods: {
    toPath(path) {
      if (this.$route.path != path) {
        this.$router.replace(path);
      }
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 30px;
  height: 30px;
  vertical-align: top;
}
</style>