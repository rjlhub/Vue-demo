<template>
  <div class="home-header">
    <div class="b-header">
      <div class="back" @click="backPage">
        <i class="iconfont icon-message1 icontype"></i>
      </div>
      <div class="searchbox">
        <div class="searchIptBox">
          <i class="iconfont icon-search iconStype"></i>
          <input type="text" placeholder="基金/股票/资讯" v-model="iptVal" @focus="iptFocus" class="searchIpt">
        </div>
      </div>
      <div class="back">
        <i class="iconfont icon-document icontype"></i>
      </div>
      <p class="header-title">{{name}}</p>
    </div>
    <div class="home-nav">
      <ul class="home-nav-ul">
        <li class="home-nav-item" v-for="(item,index) in homeNavs" :key="index">
          <i class="navitemIcon" :class="['iconfont',item.type]"></i>
          <p class="navitemName">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Search } from 'vux'
export default {
  props:['name'],
  components:{
    Search
  },
  data() {
    return {
      bgColor:'#ffffff',
      // title: 'title'
      iptVal:'基金/股票/资讯',
      homeNavs:[
        {
          name:'扫一扫',
          type:'icon-scan'
        },
        {
          name:'收付款',
          type:'icon-qrcode'
        },
        {
          name:'银行卡',
          type:'icon-headlines'
        },
        {
          name:'签到有礼',
          type:'icon-activity'
        }
      ]
    }
  },
  methods:{
    backPage(){
      let _this = this;
      this.$router.go(-1);
    },
    iptFocus(){
    }
  } 
}
</script>
<style lang="less" scoped>
  .home-header {
    background: linear-gradient(#9882ee,#564598)
  }

  .b-header {
    height: 60px;
    // background-color: #564598;
    display: flex;
    flex-direction: row;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .searchbox {
      display: flex;
      flex:1;
      align-items: center;
      height: 100%;
      border-radius: 20px;
      .searchIptBox {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: flex-start;
        align-items: center;
        background-color: rgba(255,255,255,0.1);
        padding-left: 10px;
        border-radius: 20px;
        .searchIpt {
          height: 100%;
          width: 100%;
          padding: 0 13px;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          background-color: transparent;
        }
        .iconStype {
          // position: absolute;
          // top: 10px;
          font-size: 22px;
          color: #cccccc;
        }
      }
    }
    .back {
      width: 45px;
      height: 60px;
      /* position: absolute; */
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icontype {
        font-size: 24px;
        font-weight: 500;
        color: #ffffff;
      }
      .header-title {
        font-size: 20px;
        font-weight: 500;
        color: #666666;
      }
    }
  }
  
  .home-nav {
    height: 120px;
    display: flex;
    align-items: center;
    .home-nav-ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      .home-nav-item {
        display: flex;
        flex:1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
        .navitemIcon {
          font-size: 44px;
          font-weight:inherit;
          color: #ffffff;
        }
        .navitemName {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
  }
  
</style>
