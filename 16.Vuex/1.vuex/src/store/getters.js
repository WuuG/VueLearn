
export default {
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
};