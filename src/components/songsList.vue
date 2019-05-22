<template>
  <div class="songslist">
    <div class="playall row">
      <div class="playall-left row">
        <div class="play">
          <i class="iconfont icon-playon"></i>
        </div>
        <div style="height: 40px;line-height: 40px;">
          <p style="font-size: 16px;color: white;">播放全部（共{{songs.length}}首歌曲）</p>
        </div>
      </div>
      <div class="playall-right">
        <div class="row" style="align-items:center;">
          <i class="iconfont icon-list" style="font-size: 22px;"></i>
          <p style="font-size: 16px;color: white;margin-left: 3px;">多选</p>
        </div>
      </div>
    </div>
    <div>
      <div class="song-list row" v-for="(item,idx) in songs" :key="idx">
        <p class="number">{{idx+1}}</p>
        <div class="song">
          <div class="song-left">
            <p class="name">{{item.name}}</p>
            <p style="font-size: 12px;color: #e6e6e6;">{{item.singer}}</p>
          </div>
          <div style="width: 40px;display: flex;align-items: center;justify-content: center;">
            <i class="iconfont icon-switch" style="font-size: 34px;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      songs:[
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .songslist {
    padding-left: 10px;
    padding-right: 10px;
    .playall {
      color: white;
      height: 60px;
      // font-size: 28px;
      justify-content: space-between;
      align-items: center;
      .playall-left {
        align-items: center;
      }
      .play {
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont {
          font-size: 28px;
        }
      }
    }
    .song-list {
      color: white;
      font-size: 16px;
      font-weight: 500;
      .number {
        width: 40px;
        line-height: 58px;
        font-size: 20px;
        text-align: center;
      }
      .song {
        height: 58px;
        align-items: center;
        display: flex;
        flex:1;
        border-bottom: 1px solid white;
        // box-shadow: 0 1px 0 white;
        justify-content: space-between;

        .name {
          font-size: 18px;
        }
      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
</style>
