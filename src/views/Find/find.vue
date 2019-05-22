<template>
  <div class="SelectedPage">
    <div class="SelectedMain">
      <tab :line-width=0 custom-bar-width="50px" active-color='#564598' v-model="index">
        <tab-item class="vux-center tab-item-nav" :selected="demo2 === item" v-for="(item, index) in list2" @on-item-click="tabSelected(item,index)" @click="demo2 = item" :key="index">{{item}}</tab-item>
        <div :style="leftStyle" class="nav-scroll-bar vux-tab-ink-bar-transition-backward"></div>
      </tab>
      <div style="overflow-x:hidden;">
        <swiper v-model="index" :height="screenHeight" :show-dots="false" @on-index-change="pageChangeIndex">

          <swiper-item class="s-item">

            <div class="stock-head row">
              <p class="head-name name-sty">产品名称</p>
              <div class="head-ctrl row">
                <div class="ctrl1 row">
                  <span class="name-sty">最新价</span>
                  <div class="column mleft">
                    <i class="triangle-top"></i>
                    <i class="triangle-bottom"></i>
                  </div>
                </div>
                <div class="ctrl1 row">
                  <span class="name-sty">涨跌幅</span>
                  <div class="column mleft">
                    <i class="triangle-top"></i>
                    <i class="triangle-bottom"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="stockmain">
              <div v-for="(item,idx) in stocks" :key="idx" class="row stockList">
                <div class="column item-left">
                  <p class="itemsty">{{item.name}}</p>
                  <p style="font-size: 12px;">{{item.code}}</p>
                </div>
                <div class="row item-right">
                  <p class="itemsty" :style="{color:(!item.riseOrFall?'#059605':'#f10606')}">{{item.price}}</p>
                  <div class="applies" :style="{backgroundColor:(item.riseOrFall?'#f10606':'#059605')}">
                    <p>{{item.applies}}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="stock-head">
              
            </div>
          </swiper-item>
          <swiper-item>
            <div class="stock-head">
              
            </div>
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
      stocks: [
        {
          riseOrFall: false,
          name: '万科A',
          code: '000002',
          price: '22.74',
          applies: '-1.19%'
        },{
          riseOrFall: false,
          name: '万科B',
          code: '000003',
          price: '24.61',
          applies: '-0.89%'
        },{
          riseOrFall: true,
          name: '顺丰控股',
          code: '230527',
          price: '1231.01',
          applies: '+3.14%'
        }
      ],
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
  .s-item {
    .stock-head {
      align-items: center;
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 6px;
      padding-bottom: 6px;
      background-color: #f2f2f2;
      .head-name {
        flex:1;
      }
      .name-sty {
        font-size: 15px;
        font-weight: 500;
        color: #666666;
      }
      .head-ctrl {
        flex: 1;
        justify-content: space-between;
        .ctrl1 {
          align-items: center;
          .mleft {
            margin-left: 4px;
          }
        }
      }
    }
    .stockmain {
      padding-left: 12px;
      padding-right: 10px;
      .stockList {
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
        border-bottom: 2px solid #eeeeee;
        .item-left {
          flex:1;
        }
        .item-right {
          flex: 1;
          justify-content: space-between;
          align-items: center;
          .applies {
            width: 80px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #059605;
            font-size: 20px;
            color: #ffffff;
          }
        }
      }
    }
  
    .triangle-top{
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-bottom-color: #666666;
    }
    .triangle-bottom{
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-top-color: #666666;
      margin-top: 2px;
    }
  }
  .itemsty {
    font-size: 18px;
    font-weight: bold;
    color: #666666;
  }
  
  .vux-tab-ink-bar {}
</style>
