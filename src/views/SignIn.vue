<template>
  <div class="sign-in-page">
    <v-header name="签到">
      <!-- <div slot-scope="props">
        <span>{{props.text}}</span>
      </div> -->
    </v-header>
    <div class="signIn-content">
      <div class="interal-head">
        <p class="integral">当前积分：</p>
        <div class="integral-detail">
          <p>积分明细 >></p>
        </div>
      </div>
      <div class="sign-brand">
        <p class="brand-tlt">本周已签到</p>
        <div class="brand-days"><p class="days-num">3</p></div>
      </div>
      <div class="signline">
        <ul class="signline-ul">
          <li class="item-tail" v-for="(item,idx) in tails" :key="idx">
            <div :class="['item-head',item.active?'selected':'']">
              <i class="iconfont icon-check2" v-show="item.active"></i>
            </div>
            <div :class="['linebar',idx==6?'no-linebar':'linebar']" :style="{backgroundColor:(item.active?'#564598':'')}"></div>
            <div class="item-content">
              <p v-show="item.active">1.11</p>
            </div>
          </li>
        </ul>
        <div class="sign-btn">
          <p>签到</p>
        </div>
      </div>
      <div class="signcard">
        <div v-for="(item,idx) in sendList" :key="idx" class="cards">
          <div class="sendInfo">
            <p class="name">新用户赠送</p>
            <p class="price">¥5-500</p>
          </div>
        </div>
      </div>
      <div class="interalbox">
        <div class="interallist" v-for="(item,idx) in interaldata" :key="idx">
          <div>
            <p class="name">{{item.name}}</p>
            <p class="time">{{item.time}}</p>
          </div>
          <p class="add-subtract">{{item.add_subtract}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header'
import { Timeline, TimelineItem } from "vux";
export default {
  components:{
    vHeader,
    Timeline,
    TimelineItem
  },
  data(){
    return {
      tails:[
        {
          active:1,
          time:'1.11'
        },{
          active:1,
          time:'11.22'
        },{
          active:1,
          time:'11.12'
        },{
          active:0,
          time:'11.13'
        },{
          active:0,
          time:'11.14'
        },{
          active:0,
          time:'11.15'
        },{
          active:0,
          time:''
        }
      ],
      sendList:[
        {

        },{

        }
      ],
      interaldata:[
        {
          name:'签到领奖品',
          time:'2019.1.13 13:23:23',
          add_subtract:'+1'
        },{
          name:'分享送积分',
          time:'2019.1.13 13:23:23',
          add_subtract:'+1'
        },{
          name:'听音乐送积分',
          time:'2019.1.13 13:23:23',
          add_subtract:'+1'
        }
      ],
      week:[

      ],
      date:[1,2,3,4,5,6,7]
    }
  },
  created(){
    this.timeFormate();
  },
  methods: {
    timeFormate() {
      let year = new Date().getFullYear();
      let month =new Date().getMonth()+1;
      let date = new Date().getDate();
      console.log(year,month,date)
    }
  }
}
</script>
<style lang="less" scoped>
  .sign-in-page {
    height: 100%;
    background-color: #ffffff;
  }
  .signIn-content {
    padding-top: 60px;
    .interal-head {
      height: 50px;
      display: flex;
      // width: 100%;
      flex: 1;
      flex-direction: row;
      align-items: center;
      // line-height: 
      justify-content: space-between;
      padding-left: 10px;
      .integral-detail {
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 4px;
        padding-bottom: 4px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #e6e4e4;
        p {
          font-size: 14px;
          font-weight: 500;
          color: #564598;
        }
      }
    }
    .sign-brand {
      width: 50%;
      margin: 20px auto;
      box-shadow: 0 0 22px 0 #564598;
      border-radius: 4px;
      background-color: #ffffff;
      .brand-tlt {
        height: 44px;
        background-color: #564598;
        text-align: center;
        line-height: 44px;
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .brand-days {
        height: 120px;
        // line-height: 120px;
        text-align: center;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #564598;
        .days-num {
          font-size: 80px;
          line-height: 80px;
          padding-right: 30px;
          position: relative;
          &::after {
            content: '天';
            display: block;
            position: absolute;
            right: 0;
            bottom: -12px;
            font-size: 30px;
            font-weight: 500;
          }
        }
      }
    }
  }
  .signline {
    width: 96%;
    margin: auto;
    margin-top: 40px;
    .signline-ul {
      display: flex;
      flex-direction: row;
      padding-left: 20px;
      .item-tail {
        position: relative;
        display: flex;
        flex:1;
        .linebar {
          position: absolute;
          content: '';
          // height: 100%;
          height: 2px;
          width: 40px;
          left: 18px;
          top: 7px;
          background-color: #cccccc;
          
        }
        .no-linebar {
          height: 0;
          width: 0;
          background-color: transparent;
        }
        .item-head {
          width: 16px;
          height: 16px;
          border-radius: 16px;
          background-color: #cccccc;
          position: absolute;
          top: 0;
          left: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconfont {
            font-size: 12px;
            font-weight: bold;
            color: #ffffff;
          }
        }
        .selected {
          background-color: #564598;
        }
        .item-content {
          padding-top: 30px;
          left: 0px;
          p {
            font-size: 14px;
            color: #564598;
            font-weight: bold;
          }
        }
      }
      
    }
    .sign-btn {
      width: 200px;
      height: 50px;
      border-radius: 24px;
      background-color: #ffffff;
      margin: auto;
      text-align: center;
      line-height: 52px;
      box-shadow: 0 0 12px 0 #564598;
      font-size: 22px;
      font-weight: 500;
      color: #564598;
      margin-top: 40px;
      margin-bottom: 30px;
    }
  }
  .signcard {
    padding-top: 20px;
    border-top: 10px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    // align-items: 
    .cards {
      width: 40%;
      height: 100px;
      box-shadow: 0 0 8px 0 #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      background: linear-gradient(#9882ee, #564598);
      .sendInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        .name {
          font-size: 20px;
          font-weight: 500;
        }
        .price {
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    
  }
  .interalbox {
    padding-top: 16px;
    padding-bottom: 20px;
    .interallist {
      padding: 10px 20px;
      box-shadow: 0 4px 0 #f2f2f2;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size: 16px;
        color: #333333;
      }
      .time {
        font-size: 14px;
        margin-top: 4px;
      }
      .add-subtract {
        font-size: 16px;
        font-weight: bold;
        color: #564598;
      }
    }
  }
</style>
