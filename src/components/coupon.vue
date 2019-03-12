<template>
  <div>
    <div class="couponslist" v-for="(item,idx) in datas" :key="idx">
      <div class="couponprice" :style="{'background-color':item.bgcolor}">
        <!-- <div class="circle"></div> -->
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
    </div>
  </div>
</template>
<script>
export default {
  props:['datas'],
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
  .couponslist {
    display: flex;
    flex-direction: row;
    height: 106px;
    background-color: #ffffff;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    box-shadow: 0 0 1px #bab1b1;
    .couponprice {
      width: 110px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: red;
    }
    .couponscontent {
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
      padding-left: 16px;
    }
    .usenow {
      width: 40px;
      display: flex;
      flex-direction: column;
      letter-spacing: 7px;
      justify-content: center;
      border-left: 1px solid #dddddd;
      .usetext {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: red;
      }
    }
  }
</style>
