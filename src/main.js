import Vue from 'vue'
import App from './App.vue'
import router from './router';
import fastClick from 'fastclick';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
  
Vue.use(VideoPlayer)

Vue.config.productionTip = false
fastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
