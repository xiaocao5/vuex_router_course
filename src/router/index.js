import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from '../store';
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login')
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home')
  }, {
    path: '/recharge',
    name: 'recharge',
    component: () => import('../components/Recharge')
  }, {
    path: '/course',
    name: 'course',
    component: () => import('../components/course/Course.vue'),
    children: [{
      path: '001',
      component: () => import('../components/course/components/Course_001.vue')
    }, {
      path: '002',
      component: () => import('../components/course/components/Course_002.vue')
    }, {
      path: '003',
      component: () => import('../components/course/components/Course_003.vue')
    }]
  }]
});
router.beforeEach((to, from, next) => {
  if ((store.state.name && store.state.password) || to.path === '/login') {
    next();
  } else {
    next({
      path: '/login'
    })
  }
})

export default router;
