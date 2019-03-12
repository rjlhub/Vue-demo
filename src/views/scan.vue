<template>
  <div class="scan">
    <video id="qr-code" class="vdo" autoplay="autoplay"></video>
    <canvas id="msg" width="800" height="600" style="width: 800px;height: 600px;display: none;"></canvas>
    <p v-show="result != ''">{{result}}</p>
    <p v-show="errorMes != ''">{{errorMes}}</p>
  </div>
</template>


<script>
  import QRCode from 'qrcode'
  
  export default {
    data() {
      return {
        video:'',
        canvas:'',
        content:'',
        stopScan: null,
        result:'',
        errorMes:''
      }
    },
    mounted(){
      
    },
    created(){
      console.log(QRCode)
    },
    
    
  }
</script>
<style lang="less">
  .scan {
    height: 100%;
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
  }
</style>