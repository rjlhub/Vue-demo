<template>
  <div class=" row">
    <!-- <audio ref="audio" autoplay="autoplay" src="../../assets/bgMusic.mp3"></audio> -->
    <div class="contral">
      <audio ref="player" src="/static/audios/bgMusic.mp3"></audio>
      <div class="sing-img">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554199386476&di=de638443fb72eb88ccad58df0badf537&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018d0b56dee10b32f875520f90ea0c.jpg%401280w_1l_2o_100sh.png" alt="">
      </div>
      <div class="contral-box column">
        <!-- <div class="bar-box">
          <div class="progress" :style="{width: progressWidth}">
            <div class="progress-ball"></div>
          </div>
        </div> -->
        
        <div class="play-ctrl row">
          <div class="song-msg">
            <p class="name">{{name}}</p>
            <p class="singer">{{singer}}</p>
          </div>
          <div class="row contrals">
            <div class="ctrl-btn" @click="PlayMusic()"><i :class="['iconfont', !isPlaying?'icon-play':'icon-pause']"></i></div>
            <div class="ctrl-btn" @click="playlist()"><i class="iconfont icon-alignright"></i></div>
          </div>  
        </div>
      </div>
    </div>
    <popup-window @childByValue="popClick" v-if="showPopup">
      <div class="play-list" v-if="showPopup" @touchmove.prevent>
        <div>
          <div class="list-top row">
            <div class="list-top-left row" @click.stop="switchStyle(key)">
              <i class="iconfont icon-cached"></i>
              <p>{{playstyle}}（{{songlist.length}}）</p>
            </div>
            <div class="row list-top-right">
              <div class="collection">
                <p>收藏全部</p>
              </div>
              <div class="delete-btn">
                <i class="iconfont icon-delete"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="play-list-songs">
          <ul>
            <li class="song-item row" v-for="(song,idx) in songlist" :key="idx">{{song.name}}</li>
          </ul>
        </div>
        <!-- <popup-window @childByValue="popClick"></popup-window> -->
      </div>
    </popup-window>
    
  </div>
</template>
<script>
import popupWindow from "../popupView/popupWindow"
export default {
  components:{
    popupWindow
  },
  data() {
    return {
      progressWidth: '20%',
      mp3src:'../../assets/bgMusic.mp3',
      currentTime:'00:00',
      totalTime:'',
      name:'yellow',
      singer:'Smoking',
      isPlaying:false,
      playstyle:'列表循环',
      showPopup: true,
      songlist:[
        {
          idx:1,
          name: "when you're gone",
          singer:'Avril Lavigne'
        },{
          idx:2,
          name:"千军万马",
          singer:"高梨康治"
        },{
          idx:1,
          name: "when you're gone",
          singer:'Avril Lavigne'
        },{
          idx:2,
          name:"千军万马",
          singer:"高梨康治"
        },{
          idx:1,
          name: "when you're gone",
          singer:'Avril Lavigne'
        },{
          idx:2,
          name:"千军万马",
          singer:"高梨康治"
        },{
          idx:1,
          name: "when you're gone",
          singer:'Avril Lavigne'
        },{
          idx:2,
          name:"千军万马",
          singer:"高梨康治"
        }
      ],
      key:0
    }
  },
  methods:{
    onTimeupdate(e){
      
      // let audio = this.$refs.audio;
      // this.currentTime = audio;
      console.log(e.target)
      // console.log(this.currentTime)
    },
    addEventListeners(){
      const self = this;
      self.$refs.player.addEventListener('timeupdate',self._currentTime)
      self.$refs.player.addEventListener('canplay',self._duartionTime)
    },
    removeEventListeners(){
      const self = this;
      self.$refs.player.removeEventListener('timeupdate',self._currentTime)
      self.$refs.player.removeEventListener('canplay',self._duartionTime)
    },
    _currentTime(){
      const self = this;
      self.currentTime = parseInt(self.$refs.player.currentTime);
      console.log(self.currentTime)
    },
    _duartionTime(){
      const self = this;
      self.totalTime = parseInt(self.$refs.player.duration);
      console.log(self.totalTime)
    },
    PlayMusic(){ //播放
      const self = this;
      if(!self.isPlaying){
        self.$refs.player.play()
        self.isPlaying = true
      }else{
        self.$refs.player.pause()
        self.isPlaying = false
      }
      
    },
    popClick() {
      console.log('close')
      this.showPopup = !this.showPopup;
      // this.scrollView()
      document.body.removeEventListener('touchmove', this.preDev, {passive: false})
    },
    playlist(){
      this.showPopup = !this.showPopup;
      console.log(this.showPopup)
      // this.scrollView()
      // document.body.addEventListener('touchmove', function(e){
      //     e.preventDefault();
      //     e.stopPropagation();
      // }, { passive: false });
      document.body.addEventListener('touchmove', this.preDev, {passive: false})
    },
    preDev(e){
      e.preventDefault();
    },
    switchStyle(key){
      this.key++;
      switch (this.key) {
        case 0:
          this.playstyle = '列表循环'
          break;
        case 1:
          this.playstyle = '单曲播放'
          break;
        case 2:
          this.playstyle = '随机播放'
          break;
        case 3:
          this.key = 0
          this.playstyle = '单曲循环'
          break;
        default:
          break;
      }
    }
  },
  mounted(){
    // this.onTimeupdate()
    this.addEventListeners()
    // this.noScroll();
  },
  beforeDestroyed(){
    this.removeEventListeners()
  }
}
</script>


<style lang="less" scoped>
  .contral {
    background-color: white;
    height: 50px;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 10000;
    .sing-img{
      // height: 30px;
      position: absolute;
      left: 20px;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 56px;
        border-radius: 50%;
      }
    }
    .contral-box {
      display: flex;
      flex: 1;
      justify-content: center;
      padding-left: 90px;
      .bar-box {
        width: 98%;
        height: 4px;
        border-radius: 4px;
        background-color: darkgray;
        .progress {
          // width: 10%;
          border-radius: 4px;
          height: 4px;
          background-color: salmon;
          position: relative;
          .progress-ball {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            box-shadow: 0 0 1px 1px salmon;
            position: absolute;
            top: -3px;
            right: 0;
            background-color: salmon;
          }
        }
      }
      .songtime {
        justify-content: space-between;

      }
      .play-ctrl {
        justify-content: space-between;
        height: 50px;
        .song-msg {
          .name {
            font-size: 20px;
            color: gray;
          }
          .singer{
            font-size: 14px;
            color: silver;
          }
        }
        .contrals {
          width: 30%;
          .ctrl-btn {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            .iconfont {
              font-size: 28px;
              color: gray;
            }
          }
        }
      }
    }
    
    
  }
  .play-list {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    max-height: 360px;
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    z-index: 10001;
    // over-flow: hidden;
    
    .list-top {
      justify-content: space-between;
      height: 56px;
      align-items: center;
      i{
        font-size: 20px;
      }
      .list-top-left {
        align-items: center;
        font-size: 15px;
        padding-right: 14px;
        padding-left: 10px;
        height: 100%;
      }
      .list-top-right {
        align-items: center;
        font-size: 15px;
        padding-right: 10px;
        height: 100%;
        .collection {
          height: 100%;
          padding-left: 10px;
          padding-right: 5px;
          display: flex;
          align-items: center;
        }
      }
    }
    .play-list-songs {
      padding-left: 10px;
      padding-right: 10px;
      // max-height: 264px;
      overflow-x: hidden;
      overflow-y: auto;
      .song-item {
        height: 50px;
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
  .row{
    display: flex;
    flex-direction: row;
  }
</style>
