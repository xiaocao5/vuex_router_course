<template>
  <div class="wrapper">
    <h1 class="title">充值中心</h1>
    <div class="accountInfo">
      <div class="account clearfix border-bottom">
        <div class="left">账号</div>
        <div class="right">{{ $store.state.name }}</div>
      </div>
      <div class="classes clearfix border-bottom">
        <div class="left">会员类别</div>
        <div class="right">{{ $store.getters.accountClasses }}</div>
      </div>
    </div>
    <div class="recharge-wrapper">
      <div class="duration">开通时长：</div>
      <ul class="duration-content">
        <combo :style="year.styleObj" @click.native="chosen('year')"  :show="year.show" howLong="连续包年" :price="269"></combo>
        <combo :style="quarter.styleObj" @click.native="chosen('quarter')" :show="quarter.show" howLong="连续包季" :price="68"></combo>
        <combo :style="month.styleObj" @click.native="chosen('month')" :show="month.show" howLong="连续包月" :price="25"></combo>
      </ul>
      <div class="way">支付方式：</div>
      <form class="pay-choice clearfix" action="">
        <div class="alipay">
          <input v-model="check" type="radio" name="pay-way" id="alipay" value="alipay">
          <span class="name">
            <span class="iconfont alipay-icon">&#xe600;</span>
            支付宝
          </span>
        </div>
        <div class="wechat">
          <input v-model="check" type="radio" name="pay-way" id="wechat" value="wechat">
          <span class="name">
            <span class="iconfont wechat-icon">&#xe630;</span>
            微信
          </span>
        </div>

      </form>
      <div class="pay">支付金额：</div>
      <div class="amount">
        <span class="highlight">{{ amount }}</span>
        元
      </div>
      <input @click="pay" class="confirm-pay" type="button" value="确认支付">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Combo from '../common/Combo';
export default {
  name: 'recharge',
  components: {
    Combo
  },
  data () {
    return {
      year: { name: 'year', show: false, styleObj: { border: '1px solid red' }, price: 263, remaining: 365 },
      quarter: { name: 'quarter', show: false, styleObj: { border: '1px solid red' }, price: 68, remaining: 90 },
      month: { name: 'month', show: false, styleObj: { border: '1px solid red' }, price: 25, remaining: 30 },
      amount: '',
      remaining: 0,
      check: false
    }
  },
  methods: {
    chosen (duration) {
      this.ifChosen(duration);
    },
    ifChosen (duration) {
      let arr = [this.year, this.quarter, this.month];
      let that = this;
      arr.forEach(function(item) {
        if (item.name === duration) {
          item.show = true;
          item.styleObj = {
            border: '3px solid red'
          };
          that.amount = item.price;
          that.remaining = item.remaining;
        } else {
          item.show = false;
          item.styleObj = {
            border: '1px solid red'
          };
        }
      })
    },
    pay () {
      if (this.check) {
        setTimeout(() => {
          alert('支付成功,您已是VIP会员');
          let obj = {
            classes: 'VIP',
            remaining: this.remaining
          }
          this.setVIP_mutation(obj);
          this.$router.push({
            name: 'home'
          });
        }, 1000);
      } else {
        alert('请选择支付方式');
      }

      
    },
    ...mapMutations(['setVIP_mutation'])
  }
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
    margin-bottom 20px;
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
    .duration
      margin-bottom 10px;
    .duration-content
      display flex;
      margin-bottom 20px;
      .year
        flex: 1;
      .quarter
        flex: 1;
        margin: 0 10px;
      .month
        flex: 1;
    .pay-choice
      width: 50%;
      margin: 0 auto 20px auto;
      .alipay
        float: left;
        .alipay-icon
          margin-left 4px;
          vertical-align bottom;
          color rgb(19, 151, 219);
      .wechat
        float: right;
        .wechat-icon
          vertical-align bottom;
          color rgb(10, 188, 8);
    .pay
      display inline-block;
    .amount
      display inline-block;
      margin-bottom 20px;
      .highlight
        color rgb(246, 99, 60);
        font-size: 26px;
    .confirm-pay
      display block;
      width 100%;
      padding 10px 0;
      font-weight bold;
      font-size: 20px;
      border-radius 6px;
      text-align center;
      color #000;
</style>
