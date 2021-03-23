import axios from 'axios'
export function request(config, success, failure) { //通过传入参数（回调函数）来获取这个模块中的网络请求所获取的值。
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })
  instance(
    config
  ).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}
export function request1(config) {  //传入对象参数进行传参。
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  });
  instance(config.url).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}
export function request2(config) {  // promise方法
  return new Promise((resolve, rejecft) => {
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000,
    })
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      rejecft(err)
    })
  })
}

export function request3(config) {  //最终方案
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  });
  return instance(config) //这里instance的返回值就是一个promise所以可以直接用
}
// export function instance2() {  //考虑扩展性，不用default

// }