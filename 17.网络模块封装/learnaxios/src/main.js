import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//默认情况下get请求
axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then((s)=> {
  console.log(s);
})