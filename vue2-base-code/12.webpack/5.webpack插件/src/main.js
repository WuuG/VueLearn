const { sum, mul } = require('./js/mathutils.js')
import * as info from './js/info.js'

console.log(sum(20, 11));
console.log(mul(20, 20));
console.log(info);
console.log('测试下是否可以直接用webpack打包');

//依赖css文件
require('./css/normal.css')

//2.依赖less文件
require('./css/special.less')

document.writeln('<h2>现在测试下less的loader是否安装</h2>')

// 3.使用Vue进行开发
import Vue from 'vue' //runtime-only  代码中，不可以有任何的template 
// import Vue from 'vue/dist/vue.esm.js'; //runtime-compiler(编译程序) 其可以对template进行编译 已经写道配置文件中了

// import App from './vue/app'
import App from './vue/App.vue'



new Vue({ //真实开发不用赋值
  el: '#app',
  template: `<App></App>`,
  components: {
    App,
  },
})