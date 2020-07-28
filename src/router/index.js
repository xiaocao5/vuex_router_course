import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';
import Home from '../components/Home';
import Recharge from '../components/Recharge';
import Course from '../components/course/Course.vue';
import Course_001 from '../components/course/components/Course_001.vue';
import Course_002 from '../components/course/components/Course_002.vue';
import Course_003 from '../components/course/components/Course_003.vue';
Vue.use(VueRouter);

import store from '../store';
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/recharge',
    name: 'recharge',
    component: Recharge
  }, {
    path: '/course',
    name: 'course',
    component: Course,
    children: [{
      path: '001',
      component: Course_001
    }, {
      path: '002',
      component: Course_002
    }, {
      path: '003',
      component: Course_003
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
