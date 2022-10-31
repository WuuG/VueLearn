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
    baseURL: 'http://152.136.185.210:7878/api/m5/',
    timeout: 5000,
  });
  //axios的拦截器
  instance.interceptors.request.use(config => { //1.对请求进行拦截
    console.log(config, '这是请求成功拦截器所栏下来的数据');  //所拦截下来的其实是config
    // 用处：1.若是config的信息不符合服务器要求，可以拦截后再进行修改。
    //2.每次发送网络请求时，需要再界面中显示一个网络请求的图标，也可以再这里做
    //3.某些网络请求（比如登录），必须携带一些特殊的信息，可以在这里拦截，并进行路由跳转。
    return config //拦截后，一定要返回。否则config就被拦住了，
  }, err => { //请求失败拦截
    console.log(err);
  })
  instance.interceptors.response.use(res => { //2.对响应进行拦截
    console.log(res, '这里是响应成功拦截器拦截的内容');
    console.log(res.data, '这是拦截下来的数据');
    //同上这里可以对拿到的数据进行处理。
    return res.data
  }, err => {
    console.log(err, '这里是响应失败拦截器');
  })
  return instance(config) //这里instance的返回值就是一个promise所以可以直接用
}
// export function instance2() {  //考虑扩展性，不用default

// }