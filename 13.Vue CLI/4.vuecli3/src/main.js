import Vue from 'vue'
import App from './App.vue'

//显示产品的构建信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') 
