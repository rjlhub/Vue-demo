<template>
  <transition>
    <div v-if="visible" class="message dialog-tips dialog-center" :class="type">
      <i class="iconfont infoType" :class="'icon-'+type"></i>
      <div class="content">{{message}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      time: 2500,
      type:'info'
    }
  }
}
</script>
<style scoped>
  .dialog-tips {
    position: fixed;
    z-index: 100;
    min-width: 220px;
    padding: 12px;
    white-space: nowrap;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0 8px 15px 0 rgba(0,0,0,0.1);
    text-align: center;
  }
  .dialog-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .content {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
  .infoType {
    font-size: 24px;
    color: #ffffff;
  }
</style>

