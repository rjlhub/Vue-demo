<template>
  <div class="community">
    <div class="community-head">
      <p style="font-size: 20px;color: white;">社区</p>
      <div class="iconfont-view">
        <i class="iconfont icon-camera4" style="font-size: 20px;color: white;"></i>
      </div>
    </div>
    <main class="main">
      <ul class="main-ul">
        <li v-for="item in community" :key="item.id">
          <div class="main-head">
            <div class="conity-head-left row">
              <div class="user-img">
                <img src="" alt="">
              </div>
              <div>
                <p class="user-name">慕斯Meath</p>
                <p class="push-time">21分钟</p>
              </div>
            </div>
            <div class="guanzhu">
              +关注
            </div>
          </div>
          <div class="li-main">
            <p style="font-size: 15px;color: #333333;padding-top: 20px;">这里的漫天皑皑白雪，这里有诗和远方。。。。。</p>
            <ul class="imgs-content">
              <li v-for="(img,index) in item.imgs" :key="index"><img :src="img.src" alt="" class="commentsImg"></li>
            </ul>
            <div class="address row">
              <i class="iconfont icon-coordinates"></i>
              <span>{{item.address}}</span>
            </div>
            <ul class="features row">
              <li v-for="(ftre,index) in item.features" :key="index">{{ftre.name}}</li>
            </ul>
            <div class="controls row">
              <div class="cont-item share row">
                <i class="iconfont icon-share"></i>
                <p>分享</p>
              </div>
              <div class="cont-item pinglun row" @click="pinglunPopup">
                <i class="iconfont icon-interactive ico"></i>
                <p>评论</p>
              </div>
              <div class="cont-item zan row">
                <i class="iconfont icon-praise"></i>
                <p>点赞</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
    <div v-transfer-dom>
      <popup v-model="showModel" position="bottom" max-height="100%">
        <div ref="popupbox" style="background-color: #fff;padding: 18px 0 10px;max-height: 100%;height: 400px;">
          <div style="background-color: white;">
            <div class="pinglun-list">
              <pl-head></pl-head>
            </div>
          </div>
          <!-- <toggle-text @click.native="onShowModel = false"></toggle-text> -->
        </div>
      </popup>
    </div>
    
  </div>
</template>
<script>
import {TransferDom,Popup,ChinaAddressData} from 'vux'

import PlHead from '@/components/header/pinglunHeader'
export default {
  directives: {
    TransferDom
  },
  components:{
    Popup,
    PlHead
  },
  data() {
    return {
      community:[
        {
          id:1,
          imgs:[
            {
              src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517622450,339347041&fm=26&gp=0.jpg'
            },{
              src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2465353188,3686813460&fm=26&gp=0.jpg'
            },{
              src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3110338410,2239706884&fm=26&gp=0.jpg'
            },{
              src:'data:image/jpeg;base64,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'
            },{
              src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4071270602,4187261958&fm=26&gp=0.jpg'
            }
          ],
          address:'冰岛',
          features:[
            {
              id: 1,
              name:'图腾',
              src:''
            },{
              id: 2,
              name:'海浪',
              src:''
            },{
              id: 2,
              name:'七日游',
              src:''
            }
          ]
        },{
          id:'',
          imgs:[
            {
              src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517622450,339347041&fm=26&gp=0.jpg'
            },{
              src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2465353188,3686813460&fm=26&gp=0.jpg'
            },{
              src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3110338410,2239706884&fm=26&gp=0.jpg'
            },{
              src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4071270602,4187261958&fm=26&gp=0.jpg'
            },{
              src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4071270602,4187261958&fm=26&gp=0.jpg'
            }
          ],
          address:'冰岛',
          features:[
            {
              id: 1,
              name:'图腾',
              src:''
            },{
              id: 2,
              name:'海浪',
              src:''
            },{
              id: 2,
              name:'七日游',
              src:''
            }
          ]
        }
      ],
      showModel: true,
      popup: false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll())
  },
  methods:{
    onShowModel(){

    },
    pinglunPopup() {
      this.showModel = !this.showModel;
      this.$nextTick(() => {
        this.$refs.popupbox.scrollTop = 0;
      });
      // this.$refs.popupbox.scrollTop = 0;
    },
    handleScroll(){
      console.log(2)
    }
  }
}
</script>

<style lang="less" scoped>

  .community-head {
    height: 50px;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #2f4159;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    .iconfont-view {
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .main {
    padding-top: 20px;
    .main-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      .user-name {
        font-size: 16px;
        font-weight: bold;
        color: #2f4159;
      }
      .push-time {
        font-size: 14px;
        color: #216aca;
      }
      .guanzhu {
        width: 46px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        border: 1px solid #2f4159;
        color: #2f4159;
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
      }
    }
    .li-main {
      padding: 0 14px 20px;
      .imgs-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 10px;
        li {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          .commentsImg {
            width: 80px;
            height: 80px;
            
          }
        }
        
      }
      .address {
        align-items: center;
        margin: 5px 0;
        i {
          font-size: 30px;
          color: #216aca;
        }
        span{
          font-size: 16px;
          color: #216aca;
        }
      }
      .features {
        flex-wrap: wrap;
        li {
          border: 1px solid #cbced2;
          padding: 2px 10px;
          font-size: 14px;
          margin-right: 6px;
          color: #909294;
        }
      }
      .controls {
        border-top: 1px solid #cbced2;
        border-bottom: 1px solid #cbced2;
        margin-top: 10px;
        .cont-item {
          height: 40px;
          display: flex;
          flex:1;
          align-items: center;
          justify-content: center;
          i {
            font-size: 20px;
            color: #cbced2;
          }
          p{
            font-size: 14px;
            margin-left: 5px;
            font-size: 14px;
            color: #cbced2;
          }
        }
        .pinglun {
          border-left: 1px solid #cbced2;
          border-right: 1px solid #cbced2;
        }
      }
    }
    
  }
  .pinglun-list {
    padding: 10px 14px 50px;
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
      }
    }
  }
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
  .row {
    display: flex;
    flex-direction: row;
  }
</style>

