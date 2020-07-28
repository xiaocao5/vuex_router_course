<template>
  <div class="wrapper">
    <h1 class="title">慕课网</h1>
    <form action="">
      <input v-model="name" type="text" placeholder="请输入用户名">
      <input v-model="password" type="password" placeholder="请输入密码">
      <input @click="login" type="button" value="登录">
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      let obj = {
        name: this.name,
        password: this.password,
        classes: ''
      }
      setTimeout(() => {
        obj.classes = 'free';
        this.login_mutation(obj);
        this.$router.push({
          path: '/home'
        })        
      }, 1000);
    },
    ...mapMutations(['login_mutation'])
  }
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