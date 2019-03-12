<template>
  <div class="message-page">
    <v-header name="消息"></v-header>
    <div class="message-navs">
      <div class="navs-item">
        <i class="iconfont icon-interactive" style="font-size: 26px;"></i>
        <p>离线问答</p>
      </div>
      <div class="navs-item">
        <i class="iconfont icon-bubble"></i>
        <p>在线咨询</p>
      </div>
      <div class="navs-item">
        <i class="iconfont icon-megaphone2"></i>
        <p>通知</p>
      </div>
    </div>
    <div class="message-list">
      <div class="msg-item" v-for="(item,idx) in messages" :key="idx">
        <div class="userimg" :style="{backgroundColor:(idx==0?'#564598':'')}">
          <i class="iconfont icon-setup" v-if="idx==0"></i>
          <img :src="item.imgSrc" v-else alt="">
          <div class="noticebar"></div>
        </div>
        <div class="msg-infomation">
          <p class="name">{{item.name}}</p>
          <p class="content">{{item.content}}</p>
          <span class="time">{{item.time}}</span>
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
  data(){
    return {
      messages:[
        {
          cid:1,
          imgSrc:'',
          name:'系统消息',
          content:'完成打开app客户端，获得纸币5～',
          time:'12:30'
        },{
          cid:2,
          imgSrc:'',
          name:'系统消息',
          content:'完成打开app客户端，获得纸币5～',
          time:'12:30'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .message-page {
    padding-top: 60px;
    background-color: #f2f2f2;
    height: 100%;
    .message-navs {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      background-color: #ffffff;
      padding: 14px 0;
      .navs-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .iconfont {
          font-size: 24px;
          color: #564598;
        }
        p {
          font-size: 14px;
          margin-top: 6px;
        }
      }
    }
    .message-list {
      margin-top: 10px;
      .msg-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ffffff;
        border-bottom: 1px solid #dddddd;
        .userimg {
          width: 60px;
          height: 60px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .noticebar {
            position: absolute;
            top: -3px;
            right: -3px;
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background-color: #ca164c;
          }
          .iconfont {
            font-size: 40px;
            color: #ffffff;
          }
        }
        .msg-infomation {
          display: flex;
          flex-direction: column;
          flex:1;
          margin-left: 12px;
          position: relative;
          .name {
            font-size: 16px;
            color: #333333;
          }
          .content {
            font-size: 14px;
            font-weight: 500;
            color: #564598;
            margin-top: 2px;
          }
          .time {
            position: absolute;
            font-size: 14px;
            font-weight: 500;
            color: #564598;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
</style>
