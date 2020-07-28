<template>
  <div class="wrapper">
    <router-view></router-view>
    <div v-show="showShareBenefit" class="note">分享给好友即可获取三天VIP权限</div>
    <div class="where-text">分享到：</div>
    <div ref="where-content-wrapper" class="where-content-wrapper">
      <ul ref="where-content" class="where-content">
        <li 
          @click="share"
          class="item"
          v-for="item of mediaList"
          :key="item.id"
        >
          <span v-html="item.code" class="iconfont"></span>
          <br/>
          <span class="name">{{ item.media }}</span>
        </li>                                   
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BScroll from '@better-scroll/core'
export default {
  name: 'course',
  data() {
    return {
      scroll: null,
      showShareBenefit: true,
      mediaList: [{
        id: '001',
        media: 'QQ',
        code: '&#xe622;'
      }, {
        id: '002',
        media: 'twitter',
        code: '&#xe601;'
      }, {
        id: '003',
        media: 'facebook',
        code: '&#xe745;'
      }, {
        id: '004',
        media: '新浪微博',
        code: '&#xe650;'
      }, {
        id: '005',
        media: '微信',
        code: '&#xe609;'
      }, {
        id: '006',
        media: '抖音',
        code: '&#xe6ea;'
      }, {
        id: '007',
        media: '快手',
        code: '&#xe6c8;'
      }]
    }
  },
  computed: {
    ...mapState(['classes'])
  },
  methods: {
    share () {
      setTimeout(() => {
        if (this.$store.state.classes === 'free') {
          this.share_mutation();
          alert("分享成功！您已获得三天VIP会员资格");
          
        } else {
          this.share_mutation();
          alert('感谢分享！');
        }
        this.$router.push({
          name: 'home'
        })        
      }, 1000);
    },
    ...mapMutations(['share_mutation'])
  },
  created () {
    if (this.classes === 'VIP') {
      this.showShareBenefit = false;
    }
  },  
  mounted() {
    const qty = 7;
    const width = 100;
    this.$refs['where-content'].style.width = qty * width + 'px';    
    this.scroll = new BScroll(this.$refs['where-content-wrapper'], {
      startX: 0,
      click: true,
      scrollX: true,
      scrollY: false,
      eventPassthrough: 'vertical'
    });
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