export default {
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
}