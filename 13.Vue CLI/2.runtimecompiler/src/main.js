// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

const cpn = {
  template: `
  <div>
    <h1>{{message}}</h1>
  </div>
  `,
  data() {
    return {
      message:'这是测试变量在render中的使用'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1.createElement('标签',{标签的属性},['内容'])
    // return createElement('h2', { class: 'box' }, ['hello vue'])
    //1.1 可以嵌套使用
    // return createElement('h2', 
    // { class: 'box' },
    // ['hello vue',createElement('button',['子项的按钮'])])
    //2.createElement(组件对象)
    // return createElement(cpn)
    return createElement(App)
  }
})

// 1.runtiem-compiler
// template-> ast->render->vdon->ui

// 2.runtime-only  (1.性能更高。2.代码量更少。)
// render->vdon->ui
