export default {
    state: {
      name:'xiao a'
    },
    getters: {
      value: state => {
        return state.name +  '这是getters传递过来的值';
      },
      value2(state,getters) {
        return getters.value + '____这是value2的拼接'
      },
      value3(state,getters,rootState) {
        return getters.value2 + '_____拼接上store的count：'+rootState.count;
      }
    },
    mutations: {
      updateName(state, payload) {
        state.name = payload
        console.log('moduala');
      }
    },
    actions: {
      // updateValue({commit}, payload) 
      //这里是ES6的语法 解构对象 可以直接取对象里的值 {commit}
      aUpdateName(context, payload) {
        setTimeout(() => {
          context.commit('updateName', '这是小a传递的名字');
        }, 1000);
      }
    }
}