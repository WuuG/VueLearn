import Vue from 'vue';
import Vuex from 'vuex'
import mutations from "./mutations"
import getters from './getters'
import actions from './actions';
import moduleA from "./modules/moduleA";

Vue.use(Vuex);
const state = {
  name:'store',
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
}

//这里的Store是大写 要注意呀
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
 modules: {
   a:moduleA,
 },
})


export default store