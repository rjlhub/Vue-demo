<template>
  <div class="search-page">
    <v-header name="搜索"></v-header>
    <div class="search-ctrl">
      <div class="searchIptBox">
        <i class="iconfont icon-search iconStype"></i>
        <input type="text" placeholder="" v-model="iptVal" @focus="iptFocus" class="searchIpt">
        <!-- <div class="searchIpt">{{iptVal}}</div> -->
      </div>
      <div class="cancel">
        <p class="cancel-text">取消</p>
      </div>
    </div>
    <div class="searchmain">
      <div class="nodefault">
        <img src="../assets/imgs/nos.jpg" class="noicon" salt="">
        <p style="font-size: 18px;color:#666666;">抱歉，没有发现相关内容</p>
        <p style="font-size: 14px;color:#999999;">换个关键词试试吧</p>
      </div>
      <div class="tuijian">
        <p style="line-height: 50px;padding-left: 25px;font-size: 14px;color:#333333;font-weight: bold;">推荐搜索</p>
        <div class="tjlist">
          <ul class="tjlist-ul">
            <li class="tjlist-li" v-for="(item,idx) in tuijian" :key="idx">{{item}}</li>
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
  data(){
    return{
      iptVal:'基金/股票/资讯',
      tuijian:['122','asd','得到的','啊大叔','得到的','啊大叔','得到的','啊大叔']
    }
  },
  methods:{
    iptFocus(){
      this.iptVal = ''
    },
  }
}
</script>
<style lang="less" scoped>
  .search-page {
    padding-top: 60px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    .search-ctrl{
      display: flex;
      flex-direction: row;
      .searchIptBox {
        width: 72%;
        height: 30px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: flex-start;
        align-items: center;
        background-color: #f2f2f2;
        padding-left: 10px;
        border-radius: 20px;
        margin-left: 30px;
        .searchIpt {
          height: 100%;
          width: 100%;
          padding: 0 13px;
          font-size: 16px;
          font-weight: 500;
          line-height: 30px;
          color: #333333;
          background-color: transparent;
        }
        .iconStype {
          // position: absolute;
          // top: 10px;
          font-size: 22px;
          color: #cccccc;
        }
      }
      .cancel {
        line-height: 30px;
        width: 50px;
        text-align: center;
        .cancel-text {
          font-size: 14px;
          font-weight: bold;
          color: #333333;
        }
      }
    }
    .searchmain {
      
      .nodefault {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .noicon {
          display: block;
          margin: auto;
          width: 24%;
          margin-bottom: 40px;
        }
      }
      .tuijian {
        .tjlist{
          margin-left: 20px;
          margin-right: 20px;
          .tjlist-ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .tjlist-li {
              padding-left: 10px;
              padding-right: 10px;
              border-radius: 10px;
              height: 24px;
              line-height: 24px;
              background-color: #dad5d5;
              color: #716e6e;
              font-size: 15px;
              font-weight: bold;
              opacity: 0.8;
              margin-left: 5px;
              margin-right: 5px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
</style>
