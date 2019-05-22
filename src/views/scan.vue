<template>
  <div class="scan">
    <!-- <video id="qr-code" class="vdo" autoplay="autoplay"></video>
    <canvas id="msg" width="800" height="600" style="width: 800px;height: 600px;display: none;"></canvas>
    <p v-show="result != ''">{{result}}</p>
    <p v-show="errorMes != ''">{{errorMes}}</p> -->
    <music-head :data="recommend"></music-head>
    <div class="main" @touchmove.prevent>
      <div class="infomation">
        <div class="info-box">
          <!-- <div class="info-img">
            <img src="" alt="">
          </div> -->
          <div class="info-top row">
            <img src="http://img0.imgtn.bdimg.com/it/u=2006198296,327819518&fm=26&gp=0.jpg" class="info-img" alt="">
            <div class="user-info">
              <h2>如果你喜欢纯音乐，那么你不能错过这些！</h2>
              <div class="row user-msg">
                <img src="http://img3.imgtn.bdimg.com/it/u=978207393,115475790&fm=26&gp=0.jpg" alt="">
                <p class="name">失落的叶子</p>
              </div>
            </div>
          </div>
          <div class="info-bottom row">
            <div v-for="(item,idx) in choselist" :key="idx" class="item">
              <i :class="['iconfont', item.icon]"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="songs-list">
        <song-list></song-list>
      </div>
    </div>
    <contral></contral>
    <!-- <div></div> -->
  </div>
</template>


<script>
  import QRCode from 'qrcode'
// import { constants } from 'http2';
  import musicHead from '@/components/header/musicHead'
  import songList from "@/components/songsList"
  import contral from "@/components/playContral"
  

  export default {
    components:{
      musicHead,
      songList,
      contral,
    },
    data() {
      return {
        video:'',
        canvas:'',
        content:'',
        stopScan: null,
        result:'',
        errorMes:'',
        recommend:{
          recommend:'最后的谈判'
        },
        choselist:[
          {
            icon:'icon-collection'
          },{
            icon:'icon-message1'
          },{
            icon:'icon-share'
          },{
            icon:'icon-filedownload'
          }
        ]
      }
    },
    mounted(){
      // window.addEventListener('scroll',this.handleScroll);
    },
    methods:{
      personalized() {
        this.$fetch('/personalized')
        .then(response => {
          console.log(response)
        })

        this.$fetch('/playlist/detail',{
          id:1
        })
        .then(response =>{
          console.log(response,'详情')
        })
      },
      // handleScroll(ele){
        // console.log(ele)
      // }
    },
    created(){
      console.log(QRCode)
      this.personalized()
    },
    
    
  }
</script>
<style lang="less">
  .scan {
    background-color: #dddddd;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    
    .ipt-msg {
      border: 1px solid #dddddd;
      padding-top: 2px;
      padding-bottom: 2px;
      padding-left: 2px;
      padding-right: 2px;
      width: 200px;
    }
    #msg {
      width: 200px;
      height: 200px;
    }
    .main {
      // background-color: #dddddd;
      display: flex;
      flex:1;
      flex-direction: column;
      background-image: url('http://d.paper.i4.cn/max/2017/02/15/13/1487138184089_435930.jpg');
      background-size: cover;
      .infomation {
          width: 100%;
          height: 200px;
          // background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -60px;
        .info-box {
          width: 95%;
          height: 200px;
          // background-color: white;
          background-image: url('http://img3.imgtn.bdimg.com/it/u=2198722904,3529228547&fm=26&gp=0.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 2%;
          position: sticky;
          .info-top {
            justify-content: space-evenly;
            padding-top: 10px;
            padding-left: 10px;
            .user-info {
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              h2 {
                font-size: 16px;
                color: white;
              }
              .user-msg {
                // justify-content:;
                align-items: center;
                img {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                }
                .name {
                  font-size: 16px;
                  font-weight: 300;
                  color: white;
                  margin-left: 10px;
                  width: 118px;
                  // overflow: hidden;
                  // white-space: nowrap;
                  // text-overflow: ellipsis;
                }
              }
            }
            .info-img {
              // width: 130px;
              height: 130px;
              border-radius: 4%;
            }
          }
          .info-bottom {
            height: 60px;
            padding-left: 10px;
            padding-right: 10px;
            .item{
              display: flex;
              align-items: center;
              justify-content: center;
              flex:1;
              .iconfont {
                font-size: 34px;
                font-weight: 200;
                color: lightgray;

              }
            }
          }
        }
      }
    }
  }
</style>