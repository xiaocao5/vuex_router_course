<template>
  <div class="wrapper">
    <router-view></router-view>
    <div class="note">分享给好友即可获取三天VIP权限</div>
    <div class="where-text">分享到：</div>
    <div ref="where-content-wrapper" class="where-content-wrapper">
      <ul ref="where-content" class="where-content">
        <li class="item">
          <span class="iconfont QQ">&#xe622;</span>
          <br/>
          <span class="name">QQ</span>
        </li>
        <li class="item">
          <span class="iconfont wechat">&#xe601;</span>
          <br/>
          <span class="name">twitter</span>
        </li>   
        <li class="item">
          <span class="iconfont wechat">&#xe745;</span>
          <br/>
          <span class="name">facebook</span>
        </li>  
        <li class="item">
          <span class="iconfont wechat">&#xe650;</span>
          <br/>
          <span class="name">新浪微博</span>
        </li>  
        <li class="item">
          <span class="iconfont wechat">&#xe609;</span>
          <br/>
          <span class="name">微信</span>
        </li>  
        <li class="item">
          <span class="iconfont wechat">&#xe6ea;</span>
          <br/>
          <span class="name">抖音</span>
        </li>  
        <li class="item">
          <span class="iconfont wechat">&#xe6c8;</span>
          <br/>
          <span class="name">快手</span>
        </li>                                       
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'course',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    const qty = 7;
    const width = 100;
    this.$refs['where-content'].style.width = qty * width + 'px';    
    console.log(this.$refs['where-content'].style.width);
    this.scroll = new BScroll(this.$refs['where-content-wrapper'], {
      startX: 0,
      click: true,
      scrollX: true,
      scrollY: false,
      eventPassthrough: 'vertical'
    });
  },
  updated() {

  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding-top 50px;
  .note
    text-indent 10px;
    line-height 26px;
  .where-text
    line-height 26px;
    text-indent 10px;
  .where-content
    .item
      display table-cell;
      vertical-align middle;
      width 100px;
      height: 60px;
      border-right: 1px dotted #ccc;
      text-align center;
      .alipay
        font-size 26px;
        color red;
      .name
        line-height 22px;
</style>