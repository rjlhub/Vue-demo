<template>
  <div class="bankCard">
    <v-header name="银行卡管理"></v-header>
    <div class="cardmain" @click="popUpEmptyClick">
      <div class="addCard">
        <i class="iconfont icon-yinhangqia yhk"></i>
        <div class="add-text">
          <p style="font-size: 20px;font-weight: 500;line-height: 32px;">添加银行卡</p>
          <p class="text">添加银行卡方便资产管理，享受理财生活服务</p>
        </div>
      </div>
      <div class="formListbox">
        <router-link to="/Personal/businesscard" tag="div" class="listItem row">
          <p class="title">还款提醒</p>
          <div class="flexCenter">
            <p class="busin set" style="color:#4941a5;">去设置</p>
            <i class="iconfont icon-enter"></i>
          </div>
        </router-link>
        <router-link to="/Personal/businesscard" tag="div" class="listItem row">
          <p class="title">预约还款</p>
          <div class="flexCenter">
            <i class="iconfont icon-enter"></i>
          </div>
        </router-link>
        <div class="listItem row">
          <p class="title">查询信用卡账单</p>
          <div class="flexCenter">
            <inline-x-switch v-model="value"></inline-x-switch>
          </div>
        </div>
        <router-link to="/Personal/businesscard" tag="div" class="listItem ">
          <p class="title">修改银行预留手机号</p>
          <div class="flexCenter">
            <i class="iconfont icon-enter"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="removebinding">
      <p>解除绑定</p>
    </div>

    <div class="coverlayer" v-if="isShowPopup" @click="popUpEmptyClick()">
      <div class="mycards">
        <p>我的银行卡</p>
        <div class="mycardlist">
          <div class="mycarditem" v-for="(item,idx) in cardlist" :key="idx">
            <p style="font-size: 16px;font-weight: bold;color:#333333;">{{item.name}}{{item.number}}</p>
            <i class="iconfont icon-success_fill" style="font-size: 30px;color:#564598;"></i>
          </div>
        </div>
        <div class="btnctrl">
          <p>银行卡管理</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

const ModalHelper = ((bodyCls) =>{
  let scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls);
    }
  }
})('dialog-open')






import vHeader from '@/components/header'
import { InlineXSwitch } from 'vux'
export default {
  components:{
    vHeader,
    InlineXSwitch
  },
  data(){
    return{
      value: false,
      isShowPopup: true,
      cardlist:[
        {
          name:'工商银行储蓄卡',
          number:'0868'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        },{
          name:'农业银行储蓄卡',
          number:'8140'
        }
      ]
    }
  },
  methods:{
    popUpEmptyClick(){
      this.isShowPopup = !this.isShowPopup;
    }
  },
  created(){
    ModalHelper.afterOpen();
  }
}
</script>

<style lang="less" scoped>
  .bankCard {
    height: calc(100% - 60px);
    background-color: #f2f2f2;
    padding-top: 60px;
    position: relative;
    .cardmain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      background-color: #ffffff;
      .addCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        border-radius: 4px;
        padding-top: 10px;
        padding-bottom: 24px;
        box-shadow: 0 0 6px 0 #eae5e5;
        background-color: #ffffff;
        .yhk {
          font-size: 50px;
          color: #564598;
          line-height: 50px;
        }
        .add-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          margin-top: 10px;
          .text {
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
          }
        }
      }
      .formListbox {
        width: 90%;
        margin-top: 16px;
        
        .listItem{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex:1;
          line-height: 54px;
          border-bottom: 1px solid #eeeeee;
          .title {
            font-size: 18px;
            color: #333333;
            font-weight: 500;
          }
          .flexCenter {
            display: flex;
            align-items: center;
            .busin {
              font-size: 16px;
              font-weight: 500;
              margin-right: 2px;
            }
            .iconfont {
              font-size: 22px;
              font-weight: 500;
              color: #333333;
              line-height: 23px;
            }
          }
        }
        
      }
      
    }
    .removebinding {
      height: 58px;
      background-color: #ffffff;
      margin-top: 20px;
      p {
        font-size: 18px;
        font-weight: bold;
        color: #d82f2f;
        text-align: center;
        line-height: 58px;
        
      }
    }
    .coverlayer {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      height: 100%;
      z-index: 101;
      .mycards {
        width: 70%;
        min-height: 264px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px 20px;
        // box-shadow: 0 0 6px 0 #d6d5d5;
        background-color: #f9f9f9;
        border-radius: 12px;
        overflow: hidden;
        p {
          line-height: 54px;
          font-size: 20px;
          color: #564598;
          font-weight: bold;
          text-align: center;
        }
        .mycardlist {
          height: 162px;
          // padding-top: 30px;
          overflow-y: scroll;
          /* ios需要下面这个属性 */
          -webkit-overflow-scrolling: touch;
          .mycarditem {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #c1bfbf;
          }
        }
        .btnctrl {
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%);
          width: 70%;
          height: 32px;
          background-color: #564598;
          border-radius: 20px;
          p {
            line-height: 32px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
