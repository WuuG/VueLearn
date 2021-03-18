// 配置路由的相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
//1.通过Vue.use(插件)来安装插件。
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    //默认的首页
    path: '',
    name: 'vue',
    //重定向
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue'),
  },
  {
    //1.第一步配置动态路由参数  index.js
    path: '/user/:userId',
    name: 'user',
    component: () => import('../components/User'),
  },
]
const router = new VueRouter({
  //配置路径和组件之间的应用关系。
  routes,
  //切换模式
  mode:'history',
  //这个属性能够修改 router-link的默认类的class名
  linkActiveClass:'active'
})
//3.将router对象传入router对象。(导出)
export default router