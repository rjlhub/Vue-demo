<template>
  <div class="">
    <div class="header"></div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <!-- <main-foot :activeIndex="footIndex" @toPage="toPage"></main-foot> -->
  </div>
</template>
<script>
import mainFoot from '@/components/footer'
  export default {
    components:{
      mainFoot
    },
    data() {
      return {
        footIndex:0,
        transitionName:'slide-left'
      }
    },
    methods:{
      toPage(datas){
        this.$router.push(datas.src);
      }
    },
    beforeRouterUpdate(to,from,next){
      let isBack = this.$router.isBack
      if(isBack) {
        this.transitionName = 'slide-right'
      }else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style lang="less" scoped>
  .child-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 0.8s cubic-bezier(0.55,0,0.1,1);
  }
  .slide-left-enter,.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%,0);
    transform: translate(100%,0)
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0.1;
    -webkit-transform: translate(-100%,0);
    transform: translate(-100%,0)
  }
  .header {
    // position: absolute;
    // height: 44px;
    // background-color: #0058f1;
    // width: 100%;
  }
</style>
