<template>
  <div class="wrapper">
    <h1 class="title">首页</h1>
    <h3 class="welcome">欢迎来到慕课网!</h3>
    <div class="intro">有如下这些课程资源，有些课程需付费。如有需要请<span class="charge">充值</span></div>
    <ul class="course-wrapper">
      <li class="course">
        <img width="100" height="100" src="../assets/images/java.jpg" alt="">
        <div class="content-wrapper">
          <h3 class="course-title">Java课程</h3>
          <div class="permission">免费课程</div>
        </div>
      </li>
      <li class="course">
        <img width="100" height="100" src="../assets/images/python.jpg" alt="">
        <div class="content-wrapper">
          <h3 class="course-title">Python课程</h3>
          <div class="permission">会员专享</div> 
        </div>
       
      </li>
      <li class="course">
        <img width="100" height="100" src="../assets/images/javascript.jpg" alt="">
        <div class="content-wrapper">
          <h3 class="course-title">JavaScript课程</h3>
          <div class="permission">会员专享</div> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
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
      padding 10px 0;
      .content-wrapper
        padding: 10px;
        .permission
          margin-top 50px;
          color: #B45F04
</style>