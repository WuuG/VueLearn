// 配置路由的相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

//1.通过Vue.use(插件)来安装插件。
Vue.use(VueRouter)

const homeNews = () => import('@/components/HomeNews.vue')
const homeMessage = () => import('@/components/HomeMessage.vue')
const profile = () => import('@/components/Profile.vue')
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
    name:'home',
    component: () => import('../components/Home.vue'),
    meta:{
      title:'首页title',
    },
    //第一步：添加子路由
    children: [
      {
        path: '',
        redirect:'message'
      },
      {
        path: 'news',
        name: 'news',
        component: homeNews,
      },
      {
        path: 'message',
        name: 'message',
        component: homeMessage,
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:'关于title',
    },
    component: () => import('../components/About.vue'),
  },
  {
    //1.第一步配置动态路由参数  index.js
    path: '/user/:userId',
    name: 'user',
    meta:{
      title:'用户title',
    },
    component: () => import('../components/User'),
  },
  {
    path: '/profile',
    name: 'profile',
    component:  profile,
    beforeEnter(to, from, next) {
      // console.log('这是独属于档案profile的路由守卫');
      document.title = '档案'
      next();
    },
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

//前置钩子（hook） 
router.beforeEach((to,from,next)=> {
  // document.title = to.meta.title; 
  //但是若有子路由就无法找到了，因为路径会走到子路由处，需要用下面的写法
  // console.log(to);
  document.title = to.matched[0].meta.title;
  next() //next必须调用的。否则无法进行页面跳转
})

//后置钩子
// router.afterEach((to, from) => {
//     // console.log(to.matched[0].meta.title + '的后置钩子');
// });

//3.将router对象传入router对象。(导出)
export default router