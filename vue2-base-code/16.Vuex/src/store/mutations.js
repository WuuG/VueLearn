import { INCREASE } from "./mutations-types";

const mutations = {
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
  },
  updateName(state, payload) {  //conmmit两个都会执行，先执行store里的，然后执行mmoduleA的
    state.a.name = '这是store修改的名字'
    console.log('store a ');
  }
}

export default mutations