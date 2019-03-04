<template>
  <div class="SelectedPage">
    <div class="SelectedMain">
      <tab :line-width=0 custom-bar-width="50px" active-color='#564598' v-model="index">
        <tab-item class="vux-center tab-item-nav" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="tabSelected(item,index)" @click="demo2 = item" :key="index">{{item}}</tab-item>
        <div :style="leftStyle" class="nav-scroll-bar vux-tab-ink-bar-transition-backward"></div>
      </tab>
      <div style="overflow-x:hidden;">
        <swiper v-model="index" :height="screenHeight" :show-dots="false" @on-index-change="pageChangeIndex">
          
          <swiper-item v-for="(item, currentIndex) in list2" :key="currentIndex">
            <div class="tab-swiper vux-center">{{item}} Container</div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    
    
    <main-Foot :activeIndex="footIndex" @toPage="toPage"></main-Foot>
  </div>
</template>
<script>
import mainFoot from '@/components/footer'
import TabSlider from 'tab-slider'

import { Tab, TabItem, Sticky, Swiper, SwiperItem} from 'vux'
const list = () => ['精选', '股票', '基金']
import '@/assets/css/theam.less'
export default {
  components:{
    mainFoot,
    TabSlider,
    Tab,TabItem,Sticky,Swiper,SwiperItem
  },
  data() {
    return {
      footIndex:3,
      demo2:'精选',
      list2: list(),
      index:0,
      demo06_index:0,
      winHeight:0,
      screenHeight: window.innerHeight,
      leftStyle:{
        left: '16%'
      },
      activeIndex: 0
    }
  },
  created(){
    this.sHeight();
  },
  computed:{
    contentHeight() {
      console.log(this.winHeight,'this.winHeight')
      return this.winHeight + "px"
    }
  },
  methods:{
    sHeight() {
      this.screenHeight = window.innerHeight - 98 + "px";
      // console.log(this.screenHeight,'screenHeight')
    },
    toPage(datas){
      this.$router.push(datas.src);
    },
    tabSelected(item,index){
      if (index==0) {
        this.leftStyle.left = '16%'
      }else if(index==1){
        this.leftStyle.left = '41.5%'
      }else if(index==2){
        this.leftStyle.left = '69%'
      }
    },
    pageChangeIndex(index){
      if (index==0) {
        this.leftStyle.left = '16%'
      }else if(index==1){
        this.leftStyle.left = '41.5%'
      }else if(index==2){
        this.leftStyle.left = '69%'
      }
    }
  },
  // mounted(){
  //   const that = this;
  //   window.onresize = () => {
  //     return (() => {
  //       that.screenHeight = window.innerHeight;
  //     })
  //   }
  // },
  onLoad() {
    let res = wx.getSystemInfoSync();
    this.winHeight = res.windowHeight;
    console.log(this.winHeight)
  }
}
</script>

 <style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
  
  .wrapper {
    height: 300px;
    padding-top: 50px;
    background-color: #f2f2f2;
  }
  
  .SelectedPage {
    /* padding-top: 50px; */
    padding-bottom: 54px;
    width: 100%;
    // height: auto;
  }
  .SelectedHeader {
    height: 50px;
    background-color: #564598;
    position: relative;
    
  }
  .scrollBar {
    position: absolute;
    bottom: 10px;
    /* left: 0; */
    width: 13px;
    height: 2px;
    background-color: #ffffff;
  }
  .selectedNavs {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .selectedNavs li {
    padding: 0 14px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
  }

  .nav-scroll-bar {
    width: 56px;
    height: 2px;
    background: #564598;
    position: absolute;
    // left: 16%;
    bottom: 0;
  }




  .vux-tab {
    justify-content: center;
  }
  .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
    background: inherit;
  }
  .vux-tab .tab-item-nav {
    width: 100px;
    display: inherit;
    flex: inherit;
  }
  .vux-tab-ink-bar {}
</style>
