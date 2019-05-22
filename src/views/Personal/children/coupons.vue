<template>
  <div class="coupons-page">
    <v-header name="我的优惠券"></v-header>
    <div class="couponsmain">
      <div class="couponsnavs">
        <div class="navItem" @click="navClick(idx)" v-for="(item,idx) in navs" :key="idx">
          <p :refs="'nav'+idx" :class="['navCol',index==idx?'navStyl':'']">{{item}}</p>
          <!-- <div class="navLine" :style="navStyl"></div> -->
        </div>
      </div>
      <div v-if="index == 0">
        <!-- <div class="couponslist" v-for="(item,idx) in coupons" :key="idx">
          <div class="couponprice" :style="{'background-color':item.bgcolor}">
            <p style="font-size: 24px;font-weight: 500;color:white;" v-if="item.coupontype==1">¥<span style="font-size: 36px;color:white;line-height:1;">{{item.price}}</span></p>
            <p style="font-size: 26px;color:white;line-height:1;" v-else>{{item.price}}</p>
            <p style="font-size: 14px;font-weight: bold;color:white;margin-top: 10px;">{{item.limit}}</p>
          </div>
          <div class="couponscontent">
            <p style="font-size: 20px;font-weight: 500;">{{item.title}}</p>
            <p style="font-size: 16px;margin-top: 10px;">有效期至{{item.validitytime}}</p>
          </div>
          <div class="usenow">
            <p class="usetext" v-if="item.failure">立即使用</p>
            <p class="usetext" v-else style="color:#cccccc;">已失效</p>
          </div>
        </div> -->
        <div v-if="coupons.length != 0" class="couponsbox">
          <coupons :datas="coupons"></coupons>
        </div>
        <div v-else class="nocoupons">
          <img src="@/assets/imgs/empty.jpg" alt="">
        </div>
      </div>
      <div v-else class="couponsbox">
        <div v-if="coupons.length != 0" class="couponsbox">
          <coupons :datas="coupons"></coupons>
        </div>
        <div v-else class="nocoupons">
          <img src="@/assets/imgs/empty.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coupons from '@/components/coupon'
import vHeader from '@/components/header'
export default {
  components:{
    vHeader,
    coupons
  },
  data(){
    return{
      index:0,
      navActive: 1,
      navs:['全部','已使用/已过期'],
      navStyl: {
        width:'20px',
      },
      coupons:[
        // {
        //   id:1,
        //   coupontype:1,
        //   bgcolor:'red',
        //   price: '5',
        //   limit: '满20元可用',
        //   title:'来自****旗舰店',
        //   validitytime:'2019-12-31',
        //   failure: 1, //失效
        // },{
        //   id:2,
        //   coupontype:2,
        //   bgcolor:'#c53097',
        //   price: '满减',
        //   limit: '满20元减10元',
        //   title:'来自****旗舰店',
        //   validitytime:'2019-12-31',
        //   failure: 1, //失效
        // },{
        //   id:3,
        //   coupontype:2,
        //   bgcolor:'blue',
        //   price: '包邮',
        //   limit: '全场包邮',
        //   title:'来自****旗舰店',
        //   validitytime:'2019-12-31',
        //   failure: 1, //失效
        // },{
        //   id:4,
        //   coupontype:1,
        //   bgcolor:'gray',
        //   price: '32',
        //   limit: '满20元可用',
        //   title:'来自****旗舰店',
        //   validitytime:'2019-12-31',
        //   failure: 0, //失效
        // }
      ],
    }
  },
  created(){

  },
  methods:{
    navClick(idx){
      this.index = idx;
    }
  }
}
</script>
<style lang="less" scoped>
  .coupons-page {
    background-color: #eff2f7;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 60px;
    min-height: calc(100% - 60px);
    .couponsmain {
      .couponsnavs {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #ffffff;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        .navItem {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          position: relative;
          .navLine {
            height: 2px;
            background-color: red;
            // position: absolute;
            // transform:translateX(20px);
          }
          .navCol {
            line-height: 50px;
            font-size: 16px;
            font-weight: 500;
            color: #999999;
            // border-bottom: 2px solid red;
          }
          .navStyl {
            border-bottom: 2px solid red;
            height: 50px;
          }
        }
      }
      .nocoupons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20%;
      }
    }
  }
</style>
