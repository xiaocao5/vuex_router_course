<template>
  <li class="duration">
    <div class="left">{{ howLong }}</div>
    <div class="right">
      <span class="iconfont RMB">&#xe606;</span>{{ price }}
    </div>
    <span v-show="show" class="iconfont chosen">&#xe602;</span>
  </li>
</template>

<script>
export default {
  name: "combo",
  props: {
    howLong: String,
    price: Number,
    duration: String,
    show: Boolean
  }
};
</script>

<style lang="stylus" scoped>
.duration 
  position relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 2rem;
  height: 40px;
  border: 1px solid red;

  .left 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    text-align: center;
    width: 0.6rem;
    font-size: 0.1rem;
    background: rgb(237, 237, 237);
  
  .right 
    flex: 1;
    padding: 10px;
    color: rgb(255, 0, 0);

    .RMB 
      font-size: 10px;
  .chosen
    position absolute;
    right 0;
    bottom : 0;
    color rgb(255, 0, 0);


</style>