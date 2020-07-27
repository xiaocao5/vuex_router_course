<template>
  <div class="wrapper">
    <h1 class="title">慕课网</h1>
    <form action="">
      <input type="text" placeholder="请输入用户名">
      <input type="text" placeholder="请输入密码">
      <input type="button" value="登录">
    </form>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="stylus" scoped>
.wrapper
  padding-top 100px;
  .title
    margin-bottom 50px;
    text-align center;
    font-size 30px;
    font-weight bold;
  form
    input
      box-sizing border-box;
      display block;
      margin 20px auto;
      padding-left 20px;
      width 80%;
      height 40px;
      border 1px solid #ccc;
      border-radius 6px;     
    input::-webkit-input-placeholder
      text-align center;
      color #aaa;
</style>