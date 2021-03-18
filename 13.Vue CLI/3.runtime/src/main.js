import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//这里传过来的App对象中，已经没有template了
//因为vue-template-compiler将template转换成render函数了

