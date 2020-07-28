import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    name: localStorage.defaultName || '',
    password: localStorage.defaultPassword || '',
    classes: localStorage.defaultClasses || '',
    remaining: localStorage.defaultRemaining || 0
  },
  getters: {
    accountClasses (state) {
      switch(state.classes) {
        case 'free':
          return '免费用户';
        case 'VIP':
          return 'VIP会员用户';
        default:
          return '默认值';
      }
    }
  },
  mutations: {
    login_mutation (state, obj) {
      state.name = obj.name;
      state.password = obj.password;
      state.classes = obj.classes;
      localStorage.defaultName = obj.name;
      localStorage.defaultPassword = obj.password;
      localStorage.defaultClasses = obj.classes;
      localStorage.defaultRemaining = obj.remaining;
    },
    setVIP_mutation (state, payload) {
      state.classes = payload.classes;
      state.remaining = payload.remaining;
    },
    share_mutation (state) {
      state.remaining = 3;
      state.classes = 'VIP';
    }
  }
})