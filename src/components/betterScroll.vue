<template>
  <div class="mv-tabs">
    <div class="tabs" ref="tabWrapper">
      <ul ref="tab" class="tabs-ul">
        <li v-for="(item,idx) in tabs" :key="idx" @click="selectItem(idx)">
          <router-link tag="div" :to="item.to" class="tab-item">
            <span class="tab-link">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const list = () => ['推荐','音乐','Show','二次元','舞蹈','游戏','mv']
export default {
  data() {
    return {
      tabs:[
        {
          // to:'/',
          title:'推荐'
        },
        {
          to:'/mv/music-mv',
          title:'音乐'
        },
        {
          to:'/mv/show-mv',
          title:'Show'
        },
        {
          to:'/mv/acg-mv',
          title:'二次元'
        },
        {
          to:'/mv/dance-mv',
          title:'舞蹈'
        },
        {
          to:'/mv/game-mv',
          title:'游戏'
        },
        {
          to:'/mv/mvs',
          title:'mv'
        },
      ]
    }
  },
  methods:{
    _initMenu() {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .mv-tabs {
    position: relative;
    // top: -5.5rem;
    bottom: 0;
    width: 100%;
    .tabs {
      margin-top: 3.8rem;
      height: 2.5rem;
      width: 100%;
      line-height: 2.5rem;
      box-sizing: border-box;
      overflow: hidden;
      white-space: normal;
      background-color: #cccccc;
      .tabs-ul{
        display: flex;
        flex-direction: row;
        .tab-item {
          float: left;
          width: 80px;
          height: 40px;
          text-align: center;
          .tab-link {
            pading-top: 5px;
            color: #333333;
          }
          &.router-link-active {
            color: #d33a31;
            border-bottom: 2px solid #d33a31;
            box-sizing: border-box;
          }
        }
      }

    }
  }
</style>
