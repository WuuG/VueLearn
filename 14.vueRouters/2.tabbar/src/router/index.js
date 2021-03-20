
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'default',
    redirect:'/home',
  },
{
  path: '/home',
  name: 'home',
  component: () => import('../pages/Home.vue'),
},
{
  path: '/see',
  name: 'see',
  component: () => import('../pages/see.vue'),
},
{
  path: '/profile',
  name: 'profile',
  component: () => import('../pages/Profile.vue'),
},
{
  path: '/cart',
  name: 'cart',
  component: () => import('../pages/Cart.vue'),
},
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

export default router
