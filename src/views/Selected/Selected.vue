<template>
  <div class="SelectedPage">
    <default-header name="投资理财"></default-header>
    <!-- <div class="SelectedMain">
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
    </div> -->
    <!-- financial 投资理财 -->
    <div class="financial">
      <div class="financialtop">
        <img src="" alt="">
      </div>
      <div class="financialcont">
        <!-- novice 新手 -->
        <div class="novice">
          <h1 class="financialTle">{{novice.title}}</h1>
          <div class="novicewrap cardwrap margin0">
            <div class="novicewrapLeft">
              <h2 class="novicename">{{novice.name}}</h2>
              <div class="yieldbox">
                <p class="yieldnumber"><span style="font-size: 38px;">{{novice.yield}}</span>%</p>
                <p class="isyield" v-if="novice.isyield">{{novice.yieldPlus}}</p>
              </div>
              <div class="noviceCast">
                <p>项目总额:{{novice.totalCastPrice}}</p>
                <p style="margin-left: 20px;">可投：{{novice.startCastPrice}}</p>
              </div>
            </div>
            <div class="novicewrapRight">
              <div class="noviceCricle">
                <div class="noviceBar">
                  <p>{{novice.finishRate}}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 热销产品  Sell like hot cakes-->
        <div class="sellLikeHotCakes">
          <h1 class="financialTle">{{novice.title}}</h1>
          <div class="cardwrap" :class="index==sellData.length-1?'margin0':''" v-for="(item,index) in sellData" :key="index">
            <h2 class="sellname">{{item.name}}</h2>
            <div class="sellwrap">
              <div class="sellLeft">
                <div class="sellyield">
                  <div class="generalbox">
                    <p class="annualRate"><span>{{item.yield}}</span>%</p>
                    <p class="rateName">七日年化收益率</p>
                  </div>
                  <div class="generalbox">
                    <p class="sellgeneral">{{item.days}}天</p>
                    <p class="sellgeneral">{{item.startCastPrice}}元起投</p>
                  </div>
                </div>
              </div>
              <div class="sellRight">
                <div class="sellBtn">立即购买</div>
              </div>
            </div>
            <div class="sellPercentage">
              <div class="percentagebox">
                <div class="percentagebar"></div>
              </div>
              <div class="percenttage">68%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <main-Foot :activeIndex="footIndex" @toPage="toPage"></main-Foot>
  </div>
</template>
<script>
import mainFoot from '@/components/footer'
import defaultHeader from '@/components/header/defaultHeader'
import TabSlider from 'tab-slider'

import { Tab, TabItem, Sticky, Swiper, SwiperItem} from 'vux'
const list = () => ['搜索', '股票', '基金', '']
import '@/assets/css/theam.less'
export default {
  components:{
    mainFoot,
    defaultHeader,
    TabSlider,
    Tab,TabItem,Sticky,Swiper,SwiperItem
  },
  data() {
    return {
      footIndex:2,
      demo2:'精选',
      list2: list(),
      index:0,
      demo06_index:0,
      winHeight:0,
      screenHeight: window.innerHeight,
      leftStyle:{
        left: '16%'
      },
      novice:{
        title:'新手专享',
        name:'老虎🐯中心专享001号产品',
        yield:'5.2',
        isyield: true,
        yieldPlus:'加息专享 5.5+0.2',
        totalCastPrice: '1000000',
        startCastPrice: '2000',
        finishRate: 97
      },
      sellData:[
        {
          title:'新手专享',
          name:'老虎🐯中心专享001号产品',
          yield:'5.2',
          startCastPrice: '2000',
          days:'45',
          finishRate: 97,
          percentage: '58'
        },
        {
          title:'新手专享',
          name:'老虎🐯中心专享001号产品',
          yield:'5.2',
          startCastPrice: '2000',
          days:'45',
          finishRate: 97,
          percentage: '58'
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
  onLoad() {
    let res = wx.getSystemInfoSync();
    this.winHeight = res.windowHeight;
    console.log(this.winHeight)
  }
}
</script>

 <style lang="less" scoped>
  .SelectedPage {
    background-color: #fdfdfd;
    padding-top: 60px;
    padding-bottom: 54px;
  }
  

  .sellLikeHotCakes {
    margin-top: 40px;
    .sellname {
      font-size: 16px;
      font-weight: 500;
      color: #333333;
    }
    .sellwrap {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .sellLeft {
        flex:3;
        .sellyield {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 10px 0;
          .annualRate {
            font-size: 30px;
            font-weight: bold;
            color: red;
            line-height: 1;
          }
          .rateName {
            font-size: 16px;
            color: #333333;
            line-height: 1;
            margin-top: 5px;
          }
          .generalbox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .sellgeneral {
              font-size: 17px;
              font-weight: bold;
              color: #666666;
              line-height: 1;
            }
          }
          
        }
      }
      .sellRight {
        flex:1;
        margin-left: 10px;
        cursor: pointer;
        .sellBtn {
          width: 72px;
          height: 30px;
          border-radius: 20px;
          line-height: 30px;
          text-align: center;
          border: 3px solid #564598;
          font-weight: bold;
          color: #564598;
        }
      }
    }
    .sellPercentage {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .percentagebox {
        width: 340px;
        height: 6px;
        border-radius: 5px;
        background-color: #cccccc;
        .percentagebar {
          width: 68%;
          height: 100%;
          border-radius: 5px;
          background-color: #564598;
        }
      }
      .percenttage {
        font-size: 16px;
        font-weight: 500;
        color: #666666;
        margin-left: 6px;
      }
    }
  }
  .cardwrap {
    width: 84%;
    margin: auto;
    box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 20px 10px;
    margin-bottom: 20px;
  }
  .novicewrap {
    
    .novicewrapLeft {
      flex:3;
      .novicename {
        font-size: 16px;
        font-weight: 500;
        color: #333333;
      }
      .yieldbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 4px 0;
        .yieldnumber {
          font-size: 14px;
          font-weight: bold;
          color: red;
        }
        .isyield {
          border: 1px solid sandybrown;
          height: 18px;
          padding: 0px 4px;
          line-height: 18px;
          font-size: 13px;
          font-weight: bold;
          color: sandybrown;
          border-radius: 3px;
          margin-left: 10px;
        }
      }
      .noviceCast {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        font-weight: 500;
        color: #666666;
      }
    }
    .novicewrapRight {
      flex: 1;
      display: flex;
      align-items: center;
      .noviceCricle {
        width: 80px;
        height: 80px;
        border-radius: 80px;
        background-color: #564598;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .noviceBar {
          width: 72px;
          height: 72px;
          border-radius: 72px;
          background-color: #fdfdfd;
          color: #564598;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          line-height: 72px;
        }
      }
    }
  }


  .financialTle {
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    padding-left: 12px;
    line-height: 1;
    position: relative;
    margin-bottom: 20px;
    &::before {
      content:'';
      display: block;
      width: 2px;
      height: 20px;
      background-color: #564598;
      position: absolute;
      left: 0;
    }
  }

  .novicewrap {
    display: flex;
    flex-direction: row;
  }
  .margin0 
  {
    margin-bottom: 0;
  }
</style>
