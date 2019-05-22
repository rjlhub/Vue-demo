<template>
  <div style="">
    <div class="row pinglun-head">
      <div class="row" style="align-items:center;">
        <div class="pl-user-img">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4071270602,4187261958&fm=26&gp=0.jpg" alt="">
        </div>
        <p class="pl-name">张</p>
      </div>
    </div>
    <div class="pinglun-content">
      <p class="article">引文紫的阿莱克斯大家；；乐乐累剋</p>
      <p class="sub-article">引文自动饿了拉了趣味,引文自动饿了拉了趣味，引文自动饿了拉了趣味......</p>
      <ul class="row pl-imgs">
        <li class="pl-imgs-list"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4071270602,4187261958&fm=26&gp=0.jpg" style="width: 130px;" alt=""></li>
      </ul>
      <div class="reback-content">
        <p style="font-size: 14px;color: #ccc;margin-bottom: 10px;">全部回复</p>
        <ul>
          <li style="border-bottom: 1px solid #eee;">
            <div class="row pinglun-head">
              <div class="row" style="align-items:center;">
                <div class="pl-user-img">
                  <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2465353188,3686813460&fm=26&gp=0.jpg" alt="">
                </div>
                <p class="pl-name">小丫</p>
              </div>
            </div>
            <p class="article">引文紫的阿莱克斯大家；；乐乐累剋</p>
            <p class="sub-article">引文自动饿了拉了趣味，引文自动饿了拉了趣味。。。。。</p>
            <div class="row raback-time-s">
              <p class="time">2018-12-2</p>
              <div class="row">
                <p class="time"><i class="iconfont icon-message1"></i></p>
                <p class="zan-reback"><i class="iconfont icon-praise"></i></p>
              </div>
            </div>
            <div class="interactive">
              <div class="" style="margin-bottom: 10px;font-size: 15px;line-height: 1.6;padding: 10px;border-bottom: 1px solid white;" v-for="(item,index) in interactive" :key="index">
                <span class="interactive-name">张</span>
                <p style="display: inline;">回复 <span class="interactive-name">下呀</span></p>
                <span>：</span>
                <p style="display: inline;">谢谢你的评论，可以留下你的微信号吗？等下班的时候我会去练习你。.可能就是这样的情况出现</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="pinglun">
      <div class="pinglun-ipt row">
        <div class="emotion" @click="toggleEmotion">
          <div class="face row">
            <!-- <div class="eye"></div>
            <div class="eye"></div>
            <div class="mouth"></div> -->
          </div>
        </div>
        <input type="text" v-model="pinglunIpt" placeholder="事实上">
      </div>
      <!-- <p v-html="content">{{content}}</p> -->
      <div class="emotion-box" v-show="show" :class="show?'borderTop':''">
        <swiper @on-index-change="emotion_onIndexChange" dots-position="center">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in emotion_list" :key="index">
            <ul class="row">
              <li v-for="(emo,idx) in item.list" :key="idx" @click="chooseEmoj(emo)">
                <emotion is_gif>{{emo}}</emotion>
              </li>
            </ul>
          </swiper-item>
        </swiper>
      </div>
    </div>
    
  </div>
</template>
<script>
import { WechatEmotion as Emotion,Swiper,SwiperItem } from 'vux'
export default {
  components:{
    Emotion,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      interactive:[
        {
          id:1,
          name:'asds'
        },{
          id:2,
          name:'233'
        }
      ],
      emotion_list:[
        {
          list:['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒','调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑',]
        },{
          list:[ '可爱', '白眼','傲慢', '饥饿', '困', '惊恐', '流汗','憨笑', '大兵', '奋斗', '咒骂', '疑问','嘘', '晕', '折磨','衰','骷髅','敲打', '再见', '擦汗', '抠鼻']
        },{
          list:['鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓','可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓','咖啡', '饭', '猪头']
        },{
          list:['玫瑰', '凋谢', '示爱','爱心', '心碎', '蛋糕', '闪电','炸弹','刀','足球', '瓢虫', '便便', '月亮', '太阳','礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳']
        },{
          list:['勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        }
      ],
      show: false,
      content:'',
      idx:0,
      pinglunIpt:''
      // list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', ]
    }
  },
  methods:{
    emotion_onIndexChange(index){
      // console.log(index)
    },
    toggleEmotion() {
      this.show = !this.show;
    },
    chooseEmoj(emoj){
      console.log(emoj)
      // this.content = this.content.replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi,function(emoj){
      //   let newWord = emoj.replace(/\[|\]/gi,'');
      //   let index = that.emotion.list.indexOf(newWord);
      //   return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
      // });
      this.pinglunIpt += ' '+emoj+' '
      console.log(this.pinglunIpt)
      // console.log(this.content)
    }
  }
}
</script>

<style lang="less" scoped>
  .pinglun-head {
    align-items: center;
    .pl-user-img {
      margin-right: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .pl-name {
      font-size: 16px;
      color: #2f4159;
      font-weight: 500;
    }
  }
  .pinglun-content {
    margin-top: 10px;
    .article {
      font-size: 18px;
      color: #434446;
    }
    .sub-article {
      font-size: 18px;
      color: #78797b;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    // .pl-imgs {
    //   margin-top: 10px;
    //   padding-bottom: 20px;
    //   border-bottom: 1px solid #eee;
    // }
    .reback-content {
      border-top: 1px solid #eee;
      padding-top: 10px;
      margin-top: 10px;
      .pl-user-img {
        margin-right: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .pl-name {
        font-size: 16px;
        color: #2f4159;
        font-weight: 500;
      }
      .back-head {
        align-items: center;
      }
      .raback-time-s {
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        .time {
          font-size: 15px;
        }
        i {
          font-size: 19px;
          &:last-child{
            margin-left: 10px;
          }
        }
      }
      .interactive {
        position: relative;
        width: 96%;
        min-height: 100px;
        background-color: #eee;
        border-radius: 4px;
        margin: auto;
        &:after{
          content:'';
          position: absolute;
          top: -10px;
          left: 14px;
          border-right:10px solid transparent;
          border-left:10px solid transparent;
          border-bottom:10px solid #eee;
        }
        .interactive-name {
          color: red;
        }
        
      }
    }
    
  }
  .pinglun {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .pinglun-ipt {
      height: 54px;
      display: flex;
      align-items: center;
      padding-right: 8px;
      box-shadow: 0 -1px 0 0 #eeeeee;
      
      background-color: white;
      .emotion {
        padding: 0 8px;
        height: 54px;
        display: flex;
        align-items: center;
        position: relative;
        .face {
          border: 1px solid #ccc;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          position: relative;
          justify-content: space-around;
          align-items: center;
          .eye {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid #ccc;
            position: relative;
            &:after{
              content:'';
              display: block;
              width: 10px;
              height: 10px;
              background-color: white;
              position: absolute;
              top: 1px;
              left: -1px;
              right: 0;
            }
          }
          .mouth {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #ccc;
            bottom: 3px;
            &:after{
              content:'';
              display: block;
              width: 15px;
              height: 10px;
              background-color: white;
              position: absolute;
              bottom: 3px;
              left: -2px;
              right: 0;
            }
          }
        }
        
      }
      input {
        height: 56%;
        display: flex;
        flex:1;
        font-size: 16px;
        padding: 3px 10px;
        border-radius: 4px;
        border: 1px solid #eee;
      }
      
    }
    .emotion-box {
      // position: fixed;
      // left: 0;
      // right: 0;
      bottom: 54px;
      background-color: white;
      padding: 10px 5px 0;
      width: calc(100% - 10px);
      &.borderTop {
        border-top: 1px solid #eee;
      }
      ul {
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          padding: 14px;
        }
      }
    }
  }
  
</style>
