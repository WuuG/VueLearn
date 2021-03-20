const actions = {
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

 export default actions