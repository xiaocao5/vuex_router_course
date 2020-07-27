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

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/recharge',
    component: Recharge
  }, {
    path: '/course',
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
})