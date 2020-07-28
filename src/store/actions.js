export default {
  pay_action (ctx, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        ctx.commit('setVIP_mutation', payload);
        resolve('充值成功1');
      }, 1000);
    })
  }
}