<template>
  <header class="b-header">
    <div class="back" @click="backPage">
      <i class="iconfont icon-return icontype"></i>
    </div>
    <p class="header-title">{{name}}</p>
    <slot text="my-head"></slot>
  </header>
  
</template>
<script>
export default {
  props:['name'],
  data() {
    return {
      // title: 'title'
    }
  },
  methods:{
    backPage(){
      let _this = this;
      this.$router.go(-1);
      // window.history.back();
    }
  } 
}
</script>
<style scoped>
  .b-header {
    height: 60px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    position: relative;
    flex:1;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
  }
  .back {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icontype {
    font-size: 24px;
    font-weight: 600;
  }
  .header-title {
    font-size: 20px;
    font-weight: 500;
    color: #666666;
  }
</style>
