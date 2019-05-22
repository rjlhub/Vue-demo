<template>
  <div class="header" style="width:100%;">
    <div class="head-top row">
      <div class="head-box row" id="el" ref="el">
        <div class="head-left row">
          <div class="back-btn" @click="backPage">
            <i class="iconfont icon-arrowleft iconstyle"></i>
          </div>
          <div class="recommend">
            <p style="font-size: 22px;font-weight: bold;">歌单</p>
            <p style="font-size: 10px;color: #eaeaea;">根据你喜欢单曲《{{data.recommend}}》推荐</p>
          </div>
        </div>
        <div class="head-right row">
          <div class="search right-btn"><i class="iconfont icon-search iconstyle"></i></div>
          <div class="set right-btn"><i class="iconfont icon-switch iconstyle" style="font-weight: bold;"></i></div>
        </div>
      </div>
    </div>
    <!-- <div class="">

    </div> -->
  </div>
</template>
<script>
import { constants } from 'fs';
export default {
  props:['data'],
  data(){
    return {
      // data: {
      //   // recommend:"最后的谈判"
      // }
    }
  },
  mounted(){
    // window.addEventListener('scroll',this.handleScroll);
    // this.$router()
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods:{
    backPage(){
      let _this = this;
      this.$router.go(-1);
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      let offsetTopel = document.querySelector('#el').offsetTop;
      // let el = event.currentTarget;
      console.log(offsetTopel)
      
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    width: 100%;
    height: 120px;
    .head-top {
      background-image: linear-gradient(45deg, #7A88FF, #7AFFAF);
      width: 100%;
      height: 120px;
      .head-box {
        width: 100%;
        height: 60px;
        justify-content: space-between;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        .head-left {
          .back-btn {
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            .iconstyle {
              font-size: 24px;
              color: white;
            }
          }
          .recommend {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: white;
          }
        }
        .head-right {
          .right-btn {
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .iconstyle {
            font-size: 32px;
            color: white;
          }
        }
      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  
</style>
