<template>
  <div class="wrapper">
    <h1 class="title">充值中心</h1>
    <div class="accountInfo">
      <div class="account clearfix border-bottom">
        <div class="left">账号</div>
        <div class="right">789</div>
      </div>
      <div class="classes clearfix border-bottom">
        <div class="left">会员类别</div>
        <div class="right">免费用户</div>
      </div>
    </div>
    <div class="recharge-wrapper">
      <div class="duration">开通时长：</div>
      <ul class="duration-content">
        <li class="year">
          <div class="left">连续包年</div>
          <div class="right"><span class="iconfont RMB">&#xe606;</span>264</div>
        </li>
        <li class="quarter">连续包季</li>
        <li class="month">连续包月</li>
      </ul>
      <div class="way">支付方式：</div>
      <ul class="way-content">
        <li class="alipay">支付宝</li>
        <li class="wechat">微信</li>
      </ul>
      <div class="amount">支付金额: <span class="number">263</span>元</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recharge'
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding 100px 20px 0 20px;
  .title
    margin: 0 0 20px 0;
    text-align center;
    font-weight bold;
    font-size 30px;
  .accountInfo
    .account, .classes
      margin-bottom 10px;
      line-height 30px;
      font-size 18px;
      .left
        float left;
      .right 
        float right;
      &:before
        border-color #ccc;
        border-width 2px;
      &:after
        border-color #ccc;
        border-width 2px;
  .recharge-wrapper
    .duration-content
      .year
        display flex;
        justify-content center;
        align-items center;
        flex-wrap wrap;
        width 2rem;
        height 40px;
        border 1px solid red;
        .left
          display flex;
          justify-content center;
          align-items center;
          height: 40px;
          text-align center;
          width .6rem;
          font-size .1rem;
          background rgb(237, 237, 237);
        .right
          flex 1;
          padding: 10px;
          color: rgb(255, 0, 0);
          .RMB
            font-size: 10px;
</style>