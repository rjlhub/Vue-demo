<template>
  <div class="card-page">
    <v-header name="二维码名片"></v-header>
    <div class="content">
      <input v-model="message" class="ipt-msg">
      <p>{{message}}</p>
      <canvas id="msg"></canvas>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header'
import QRCode from 'qrcode'
export default {
  components:{
    vHeader
  },
  data(){
    return{
      codeUrl: '',
      message:''
    }
  },
  watch:{
    message(val){
      // console.log(val)
      var msg = document.getElementById('msg');
      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg,val,function(error){
        console.log(error)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .card-page {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #ffffff;
    padding-top: 60px;
    
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .ipt-msg {
        width: 70%;
        border: 1px solid #dddddd;
        padding: 6px 8px;
      }
    }
  }
</style>
