<template>
  <div class="personalPage">
    <header class="personalHead">
      <router-link to="/Personal/set" class="head-btn">
        <i class="iconfont icon-params" style="transform:rotate(90deg)"></i>
      </router-link>
      <router-link to="/Personal" class="head-btn">
        <i class="iconfont icon-message1" style="font-size: 24px;"></i>
      </router-link>
    </header>
    <!-- content -->
    <div class="mainContent">
      <div  class="personInfo">
        <div class="personInfoLeft">
          <p class="userName">朋友1674748489449940404040404040440404040040</p>
          <div class="countBox">
            <p style="margin-right:14px;">{{personInfo.recommendedCount}}推荐票<i class="iconfont icon-enter"></i>
            </p>
            <p>{{personInfo.ticketCount}}月票<i class="iconfont icon-enter"></i>
            </p>
          </div>
        </div>
        <div class="personInfoRight">
          <img src="" class="userImg"  alt="">
        </div>
      </div>
      <div class="personList">
        <ul style="flex-direction: column;">
          <li class="personItem row">
            <div class="row flexCenter">
              <i class="iconfont icon-coupons" style="color:#564598"></i>
              <p class="title">我的优惠券</p>
            </div>
            <div class="row flexCenter">
              <p class="subTit">共<span style="color: #564598">{{personInfo.couponsCount}}</span>张可用</p>
              <i class="iconfont icon-enter"></i>
            </div>
          </li>
          <li class="personItem row">
            <div class="row flexCenter">
              <i class="iconfont icon-data" style="color:#564598"></i>
              <p class="title">我的积分</p>
            </div>
            <div class="row flexCenter">
              <p class="subTit">{{personInfo.integralCount}}分</p>
              <i class="iconfont icon-enter"></i>
            </div>
          </li>
          
          <router-link to="/Personal/perfectInfo" tag="li" class="personItem row">
            <div class="row flexCenter">
              <i class="iconfont icon-mine" style="color:#564598"></i>
              <p class="title">个人信息</p>
            </div>
            <div class="row flexCenter">
              <i class="iconfont icon-enter"></i>
            </div>
          </router-link>
          
          <li class="personItem row">
            <div class="row flexCenter">
              <i class="iconfont icon-baozhuang" style="color:#564598"></i>
              <p class="title">我的活动</p>
            </div>
            <div class="row flexCenter">
              <i class="iconfont icon-enter"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <main-foot :activeIndex="footIndex" @toPage="toPage"></main-foot>

    <transition :name="$store.state.states" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import mainFoot from '@/components/footer.vue'
export default {
  components:{
    mainFoot,
  },
  data() {
    return {
      footIndex:4,
      personInfo:{
        recommendedCount:'1',
        ticketCount:'1',
        couponsCount: '2',
        integralCount:'25'
      },
      listInfos:[
        {
          type:'coupons',
          title:'我的优惠券',
        },{
          type:'data',
          title:'我的积分',
        }
      ]
    }
  },
  methods:{
    toPage(datas){
      this.$router.push(datas.src);
    }
  }
}
</script>
<style scoped>
  .personalPage {
    padding-top: 54px;
    background-color: #f5f5f5;
    flex-direction: row;
    align-items: center;
  }
  
  .personalHead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    background-color: #ffffff;
  }
  .head-btn {
    width: 54px;
    height: 54px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .personInfoLeft {
    /* height: 70px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .userName {
    font-size: 18px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #333333;
    width: 280px;
    margin-right: 15px;
  }
  .personInfo {
    margin-bottom: 10px;
    padding: 14px 12px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
  }
  .personInfoRight {
    
  }
  .userImg {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #dddddd;
  }
  .countBox {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    margin-top: 6px;
  }

  .personList {
    background-color: #ffffff;
    padding-top: 20px;
  }
  .personItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 12px;
    font-size: 16px;
  }
  .personItem i {
    font-size: 22px;
    font-weight: 500;
    color: #333333;
    line-height: 23px;
  }
  .title {
    font-size: 18px; 
    font-weight: 500;
    margin-left: 6px;
    color: #333333;
  }
  .subTit {
    font-size: 16px;
    font-weight: 500;
    margin-right: 2px;
  }
  .flexCenter {
    align-items: center;
  }
  .row {
    display: flex;
    flex-direction: row;
  }



  .turn-left-enter {
    transform: translate3d(100%, 0, 0);
  }
  .turn-left-leave-to {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-left-enter-active,
  .turn-left-leave-active {
    transition: transform 0.3s ease;
  }
  .turn-right-enter {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-right-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .turn-right-enter-active,
  .turn-right-leave-active {
    transition: transform 0.3s ease;
  }
  .turn-right-leave-active {
    z-index: 2;
  }
  div {
    flex-direction: column;
  }



  /* .router-slid-enter-active,
  .router-slid-leave-active {
    transition: all 0.4s;
  }
  .router-slid-enter,
  .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
  @-webkit-keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }
  body .coverpart .cover-animate {
    transition: all 1s;
    animation: bounceIn 0.6s;
  }
  body .coverpart .cover-animate-leave {
    animation: zoomOut 0.4s;
  } */
</style>

