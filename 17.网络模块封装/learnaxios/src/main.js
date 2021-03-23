import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//默认情况下get请求  如果只输入url的话
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then((s) => {
//   console.log(s);
// })
// http://123.207.32.32:8000/home/data?type=sell&page=1

// axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
//   console.log(res);
// })
//base-url:http://152.136.185.210:7878/api/m5

//axios两个带参数的方法
// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1",  // 可以拼接，而在下面的params中添加
//   // method: 'post',  //  这个接口不能使用post
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data",  // 可以拼接，而在下面的params中添加
//   params: {
//     type: 'pop',
//     page: 1,
//   }
// }).then(res => {
//   console.log(res);
// })

// //axios处理并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://152.136.185.210:7878/api/m5/home/data',
//   params: {
//     type: 'pop',
//     page: 1,
//   }
// })]).then(axios.spread((res1, res2) => {  //axios提供了数组拆分开的功能。
//   console.log(res1);
//   console.log(res2);
// }))
//   // .then(res => { //这里的res是一个数组
//   //   console.log(res);
// })
// axios({
//   baseURL: 'http://123.207.32.32:8000', 
//   timeout: 5000,
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5' //全局的baseURL配置
// axios.defaults.timeout = 5000 //全局timeout配置

// axios({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// ngnix反向代理???
//  分布式服务器，用nginx设置一个代理服务器。
//有时候全局的配置进行网络请求的不太合适，为了应对服务器ip地址不同，因此需要创建对应的axios的实例
// const instance1 = axios.create({  //这里创建的实例就可以有独立的配置额
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 5000,
// })
// axios({
//   url: 'category' //若是没有设置全局配置自然是找不到这个rul的
// }).then(res => {
//   console.log(res.data);
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })


//5.封装request模块
// import { request, request1, request2, request3 } from './network/request'
import { request3 } from './network/request'
// request({ url: 'category' }, res => {  //这是三个变量的写法
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request1({
//   url: 'category',
//   success(res) {
//     console.log(res, '这是用对象封装进行调用的');
//   },
//   failure(err) {
//     console.log(err);
//   }
// })

// request2({
//   url: 'category'
// }).then(res => {  //这里其实是request2里所return的那个promise的then，也就是resolve要调用的那个函数,reslove调用时，会传入实参，并调用底下这个函数
//   console.log(res, '这是promise方法封装的网络请求结果');
// }).catch(err => {
//   console.log(err);
// })

request3('category').then(res => {  //这里返回axios对象，其实是promise对象
  console.log(res, '最终方案，直接返回axios封装的网络请求结果');
}).catch(err => {
  console.log('请求被拦截了，请返回config', err);
})