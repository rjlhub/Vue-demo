<template>
  <div class="home-header">
    <div class="b-header" :style="toolbarStyle">
      <div class="back" @click="backPage">
        <i class="iconfont icon-message1 icontype"></i>
      </div>
      <div class="searchbox">
        <router-link to="/search" tag="div" class="searchIptBox">
          <i class="iconfont icon-search iconStype"></i>
          <div class="searchIpt">{{iptVal}}</div>
        </router-link>
      </div>
      <router-link tag="div" :to="{name:'message',params:{name:1}}" class="back" >
        <i class="iconfont icon-document icontype"></i>
      </router-link>
      <p class="header-title">{{name}}</p>
    </div>
    <div class="home-nav">
      <ul class="home-nav-ul">
        <li class="home-nav-item" v-for="(item,index) in homeNavs" :key="index" @click="navJump(item.to,item.cid)">
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
          cid:1,
          to:'scan',
          name:'扫一扫',
          type:'icon-scan'
        },
        {
          cid:2,
          to:'',
          name:'收付款',
          type:'icon-qrcode'
        },
        {
          cid:3,
          to:'bankCard',
          name:'银行卡',
          type:'icon-headlines'
        },
        {
          cid:4,
          to:'signIn',
          name:'签到有礼',
          type:'icon-activity'
        }
      ],
      toolbarStyle:{
        
      }
    }
  },
  mounted() {
    
    // ModalHelper.afterOpen();
    window.addEventListener("scroll", this.handleScroll);
  },
  created(){
    this.toolbarStyle = {
      background: "transparent",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%"
    };
  },
  methods:{
    backPage(){
      let _this = this;
      this.$router.go(-1);
    },
    iptFocus(){
      this.iptVal = ''
    },
    handleScroll(){
      var scrollTop = 
          window.pageYOffset || 
          document.documentElement.scrollTop || 
          document.body.scrollTop;
      // scrollTop = (scrollTop / 100) * 1
      
      if (scrollTop > 30) {
        this.toolbarStyle = {
          'background':'linear-gradient(#9483e9,#9282e4)'
        }
      }else {
        this.toolbarStyle = {
          background:'transparent'
        }
      }
      
    },
    navJump(to,id){
      // console.log(to,id)
      this.$router.push({name: to,params:{id: id}})
    }
  },
  destroyed(){
    this.iptVal = '基金/股票/资讯'
  }
  // directives:{
  //   focus:{
  //     inserted: function (el) {
  //       el.focus()
  //     }
  //   }
  // }
}
</script>
<style lang="less" scoped>
  .home-header {
    background: linear-gradient(#9882ee,#564598);
  }

  .b-header {
    height: 60px;
    // background-color: #564598;
    display: flex;
    flex:1;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
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
          line-height: 30px;
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
    padding-top: 60px;
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
