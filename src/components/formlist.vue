<template>
  <router-link to="/Personal/businesscard" tag="li" class="personItem row">
    <div class="row flexCenter">
      <i class="iconfont icon-qrcode_fill" style="color:#564598"></i>
      <p class="title">二维码名片</p>
    </div>
    <div class="row flexCenter">
      <i class="iconfont icon-enter"></i>
    </div>
  </router-link>
</template>
<style lang="less" scoped>
  .personItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 12px;
    font-size: 16px;
    
    .flexCenter {
      align-items: center;
      i {
        font-size: 22px;
        font-weight: 500;
        color: #333333;
        line-height: 23px;
      }
      .title {
        font-size: 18px; 
        font-weight: 500;
        margin-left: 6px;
        color: #333333;
      }
    }
  }
  
</style>
