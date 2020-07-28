export default {
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