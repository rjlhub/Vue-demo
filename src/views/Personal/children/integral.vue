<template>
  <div class="integral-page">
    <v-header name="积分"></v-header>
    <div class="integralmain">
      <div class="integral-head">
        <p class="integral-tlt whiteColor">我的积分</p>
        <p class="integral-count whiteColor">10034</p>
        <p class="integral-overdue whiteColor">即将过期：个</p>
      </div>
      <div class="integral-vip">
        <div class="vip-left vipContent">
          <i class="iconfont icon-diamond iconVip"></i>
          <div class="vip-item">
            <p class="vip-tlt">会员等级</p>
            <p class="vip-sub">黄金会员</p>
          </div>
        </div>
        <div class="linebar"></div>
        <div class="vip-right vipContent">
          <i class="iconfont icon-qianbao iconVip"></i>
          <div class="vip-item">
            <p class="vip-tlt">我的钱包</p>
            <p class="vip-sub">查看详情</p>
          </div>
        </div>
      </div>
      <div class="integral-detail">
        <p class="integral-title">积分明细</p>
        <div class="integral-list">
          <ul>
            <li v-for="(item,idx) in integraldata" :key="idx" class="integral-item">
              <div class="integral-item-left">
                <div class="itergraIcon" v-if="item.increase">
                  <i class="iconfont icon-zhibi"></i>
                </div>
                <div v-else class="itergraIcon" style="background-color:green">
                  <i class="iconfont icon-zhangdan"></i>
                </div>
                <!-- <p>{{item.increase}}</p> -->
                
              </div>
              <div class="integral-item-right">
                <div>
                  <p class="project">{{item.project}}</p>
                  <p class="time">{{item.time}}</p>
                </div>
                <p>
                  <span class="count" v-if="item.increase" style="color:red">+</span>
                  <span class="count" v-else style="color:green;font-size: 22px;">- </span>
                  <span class="count" style="color:red" v-if="item.increase">{{item.count}}</span>
                  <span class="count" style="color:green" v-else>{{item.count}}</span>
                </p>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header'
export default {
  components:{
    vHeader
  },
  data() {
    return {
      integraldata:[
        {
          increase:1,
          project:'完成订单',
          time:'2018-12-12 12:00:00',
          count:'13'
        },{
          increase: 0,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        },{
          increase: 1,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        },{
          increase: 0,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        },{
          increase: 1,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        },{
          increase: 0,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        },{
          increase: 1,
          project: '积分兑换商品',
          time:'2018-12-12 12:00:00',
          count:'43'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .integral-page {
    background-color: #f2f2f2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 60px;
    min-height: calc(100% - 60px);
    .integralmain {
      .integral-head {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #564598;
        display: flex;
        flex-direction: column;
        align-items: center;
        .integral-tlt {
          font-size: 30px;
        }
        .integral-count {
          font-size: 24px;
          margin-top: 14px;
          margin-bottom: 14px;
        }
        .integral-overdue {
          font-size: 16px;
        }
        .whiteColor {
          color: #ffffff;
          line-height: 1;
        }
      }
      .integral-vip {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        position: relative;
        .linebar {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 1px;
          height: 40px;
          background-color: #dddddd;
        }
        .vipContent {
          display: flex;
          flex:1;
          align-items: center;
          justify-content: center;
          height: 80px;
          .iconVip {
            font-size: 30px;
            color: #564598;
          }
          .vip-tlt {
            font-size: 20px;
            font-weight: 500;
            color: #564598;
          }
          .vip-sub {
            font-size: 16px;
            font-weight: 500;
          }
          .vip-item {
            margin-left: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        .vip-left {
          .iconVip {
            color: gold;
          }
        }
        .vip-right {
          .iconVip {
            font-size: 32px;
            color: red;
          }
        }
        
      }
      .integral-detail {

        .integral-title {
          line-height: 60px;
          color: #999999;
          font-size: 18px;
          text-align: center;
        }
        .integral-list {
          padding-left: 20px;
          padding-right: 20px;
          .integral-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            .integral-item-left {
              display: flex;
              flex-direction: row;
              align-items: center;
              .itergraIcon {
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: red;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                .iconfont {
                  font-size: 30px;
                  color: #ffffff;
                }
              }
            }
            .integral-item-right {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              flex: 1;
              align-items: center;
              padding-top: 14px;
              padding-bottom: 14px;
              border-bottom: 1px solid #dddddd;
              .project {
                font-size: 16px;
                font-weight: 500;
              }
              .time {
                font-size: 14px;
                font-weight: 500;
                margin-top: 4px;
              }
              .count{
                font-size: 16px;
                font-weight: 500;
              }
            }
            
          }
          // .integral-item-last {

          // }
        }
      }
      
    }
  }
</style>
