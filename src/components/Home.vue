<template>
  <div class="wrapper">
    <h1 class="title">首页</h1>
    <h3 class="welcome">欢迎来到慕课网!</h3>
    <div class="intro">
      有如下这些课程资源，有些课程需付费。如有需要请
      <router-link tag="span" :to="{ name: 'recharge' }" class="charge">充值</router-link>
    </div>
    <ul class="course-wrapper">
      <li
       class="course"
       v-for="item of courseList"
       :key="item.id"
       @click="chooseCourse(item.id, item.limit)"
      >
        <img width="100" height="100" src="../assets/images/java.jpg" alt="">
        <div class="content-wrapper">
          <h3 class="course-title">{{ item.name }}</h3>
          <div class="permission">{{ item.limit }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      courseList: [
      {
        id: '001',
        name: 'Java课程',
        imgUrl: '../assets/images/java.jpg',
        limit: '免费课程'
      }, {
        id: '002',
        name: 'Python课程',
        imgUrl: '../assets/images/python.jpg',
        limit: '会员专享'
      }, {
        id: '003',
        name: 'JavaScript课程',
        imgUrl: '../assets/images/javascript.jpg',
        limit: '会员专享'
      }]
    }
  },
  methods: {
    chooseCourse (id, limit) {
      
      let userClasses = this.$store.state.classes;
      if (limit === '会员专享' && userClasses === 'free') {
        alert('此课程为会员专享课程，请充值再观看');
      } else {
        this.$router.push({
          path: '/course/' + id
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding 100px 20px 0 20px;
  .title
    font-weight bold;
    font-size 30px;
    line-height 60px;
    text-align center;
  .welcome
    line-height 30px;
    font-style italic;
  .intro
    line-height 20px;
    .charge
      font-weight bold;
      font-style italic;
  .course-wrapper
    .course
      display flex;
      margin 10px 0;
      .content-wrapper
        padding: 10px;
        .permission
          margin-top 50px;
          color: #B45F04
</style>