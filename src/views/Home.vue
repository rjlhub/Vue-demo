<template>
  <div class="sign-in" id="home">
    <home-header></home-header>
    <div class="mainContent">
      <ul class="navContent">
        <li class="navItem" v-for="(item,index) in navslist" :key="index">
          <i class="navType iconfont" :class="['icon-'+item.type]"></i>
          <p class="navName">{{item.name}}</p>
        </li>
      </ul>
      <swiper auto height="30px" direction="vertical" :interval=2000 loop class="text-scroll" :show-dots="false">
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
          </div>
          
        </swiper-item>
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="scroll-infomation">
            <i class="iconfont icon-diannaoshuju scroll-icon"></i>
            <p class="scroll-info ellipsis">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
          </div>
        </swiper-item>
      </swiper>
    </div>
    <!-- <div class="partition"></div> -->
    <div class="activity">
      <swiper auto loop height="70px" :list="activities" :index="activityIndex" @on-index-change="onIndexChange"></swiper>
    </div>
    <!-- <div class="partition"></div> -->
    <div class="selectList">
      <h2 class="selectTitle">精选推荐</h2>
      <div class="selectContent" v-for="(item,index) in selects" :key="index">

        <div class="yieldview itembox">
          <p class="yield">+{{item.yield}}%</p>
          <p class="expect">{{item.expectInfo}}</p>
        </div>
        <div class="castview itembox">
          <div class="borderLine">
            <p class="castname ellipsis">易放达消费行业基金</p>
            <p class="expect">{{item.expectInfo}}</p>
          </div>
        </div>
      </div>
    </div>
    <main-foot :activeIndex="footIndex" @toPage="toPage"></main-foot>
  </div>
</template>

<script>

import homeHeader from "@/components/header/homeHeader";
import mainFoot from "@/components/footer"
import {Swiper, SwiperItem} from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))
export default {
  components:{
    'home-header': homeHeader,
    mainFoot,
    Swiper,SwiperItem
  },
  data(){
    return {
      footIndex:1,
      isShow: true,
      animateClass:'',
      btnAnimateClass:'',
      btnImg: "",
      navslist:[
        {
          name:'基金',
          type:'shuju'
        },
        {
          name:'理财',
          type:'xiaozhuchuxuguan'
        },
        {
          name:'财富中心',
          type:'qiandai'
        },
        {
          name:'充值中心',
          type:'yinhangqia'
        }
      ],
      activityIndex:0,
      activities:urlList,
      selects:[{
        id:1,
        stage:'28', // 第几期
        startCastPrice: 1000, //起投价格
        fundType:'稳健收益固定期权', //类型
        yield:8, // 收益率
        expectInfo: '预期年化收益率' //预计收益说明
      },{
        id:2,
        stage:'18', // 第几期
        startCastPrice: 1000, //起投价格
        fundType:'稳健收益固定期权', //类型
        yield:3.2, // 收益率
        expectInfo: '预期年化收益率' //预计收益说明
      }]
    }
  },
  methods:{
    toPage(datas){
      this.$router.push(datas.src);
    },
    onIndexChange(index) {
      this.activityIndex = index
    },
    backClick(){
      console.log('ads')
    }
  }
}
</script>

<style lang="less" scoped>
  .sign-in {
    /* background-image: url('@/assets/imgs/sign_in.jpg') */
    padding-bottom: 54px;
  }
  .mainContent {
    .navContent {
      height: 100px;
      width: 100%;
      display: flex;
      flex-direction: row;
      .navItem {
        display: flex;
        flex:1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .navType {
          font-size: 30px;
          color: #564598;
        }
        .navName {
          font-size: 16px;
          font-weight: 500;
          color: #564598;
        }
      }
    }
  }

  .scroll-infomation {
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    align-items: center;
    .scroll-icon {
      font-size: 20px;
      color: red;
      margin-right: 10px;
    }
    .scroll-info {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
    }
  }
  .activity {
    padding: 14px 10px;
    background-color: #f2f2f2;
  }
  .partition {
    width: 100%;
    height: 14px;
    background-color: #f2f2f2;
  }
  
  .selectList {
    padding: 18px 14px 0;
    .selectTitle {
      font-size: 24px;
      font-weight: 500;
      color: #333333;
      margin-bottom: 20px;
    }
    .selectContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      // margin: 16px 0 6px;
      border-bottom: 1px solid #dddddd;
      .itembox {
        // flex:1;
        padding: 20px 0;
      }
      .yieldview {
        display: flex;
        flex:3;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
        // padding: 20px 30px 20px 20px;
        .yield {
          font-size: 32px;
          font-weight: 500;
          color: #564598;
        }
        .expect {
          font-size: 16px;
          font-weight: 500;
          color: #666666;
          margin-top: 4px;
        }
      }
      .castview {
        flex: 4;
        .borderLine {
          padding-left: 20px;
          border-left: 1px solid #dddddd;
          .castname {
            font-size: 19px;
            color: #333333;
          }
          .expect {
            font-size: 16px;
            font-weight: 500;
            color: #666666;
            margin-top: 4px;
          }
        }
        
      }
      .h-content {
        display: flex;
        flex-direction: row;
        font-size: 24px;
        font-weight: 500;
        .stage {
          // color: red;
        }
        .cont {
          margin-left: 10px;
          span {
            color: red;
          }
        }
        
      }
      .colorGray {
        font-size: 13px;
        font-weight: bold;
        color: #666666;
        margin: 16px 0 8px;
      }
      .options {
        font-size: 60px;
        font-weight: 500;
        color: red;
      }
    }
  }
</style>
