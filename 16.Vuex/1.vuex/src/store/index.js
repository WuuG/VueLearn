import Vue from 'vue';
import Vuex from 'vuex'
import { INCREASE } from "./mutations-types";

Vue.use(Vuex);
//这里的Store是大写 要注意呀
const store = new Vuex.Store({
  state: {
    count:100,
    persons: [
      {id:'001',name:'aaa',age:10},
      {id:'002',name:'bbb',age:12},
      {id:'003',name:'ccc',age:11},
      {id:'004',name:'ddd',age:16},
    ],
    //初始化时通过Dep->[Watch]观察变化，也就是说只要一开始就定义了，就会将属性添加至vue的响应式系统，当属性发生变化的时候，会通知界面去修改数据。
    info: {
      name:'kk',
      age:13,
    }
  },
  mutations: {
    //自动会传递state对象的参数
    [INCREASE] (state) {
      state.count++;
    },
    decrease(state) {
      state.count--
    },
    addCountStore(state,obj) {  //单一参数
       state.count += obj.num;
    },
    addPersonStore(state,person) {  //对象参数
      state.persons.push(person);
    },
    // updateInfo(state,payload) {
    //   // setTimeout(() => {  //Devtools无法跟踪异步操作,是错误代码，需要到action中去。
    //   //   state.info.name='aaaaa'
    //   // }, 1000);
    //   // state.info['address'] = 'la' //旧版本无法添加，现在都可以啦
    //   // delete state.info.age //可以删除啦
    //   // Vue.set(state.info,'address','罗桑基');
    //   // Vue.delete(state.info,'name');
    //   // console.log(payload,'这里是mutations');
    //   console.log(payload);
    //   state.info.name="kobe";
    // }
    updateInfo(state,payload) {
      console.log(payload+'mutations');
      state.info.name="kobe";
    }
  },
  getters: {
    square(state) {
      return state.count * state.count
    },
    more11(state) {
      return state.persons.filter(n => n.age > 11);
    },
    more11Length(state,getters) { //第二个参数可以调用已经写好的getters
      return getters.more11.length  
    },
    moreage(state) {
      return function(age) {  //通过内部写函数，来进行传参
        return state.persons.filter(n => n.age > age);
      }
    }
  },
  actions: {
  //   context 上下文 这里可以理姐成store
  //   aUpdataInfo (context,payload) {
  //       setTimeout(() => {
  //         // console.log(payload,'这里是actions');
  //         // context.commit('updateInfo',payload)  //经过action时去执行updateInfo
  //         // payload();  // 通过调用这个payload来通知，异步函数已经执行完成。
  //         context.commit('updateInfo',payload.info);
  //         payload.success()
  //       }, 1000);
  //   }
  // },
    aUpdataInfo (context,payload) {
      return new Promise((resolve,reject)=> {
        setTimeout(() => {
          context.commit('updateInfo',payload)
          console.log(payload+'actions');
          resolve('这是promise传递过来的参数')
        }, 1000);
      })
    }
 }
})


export default store