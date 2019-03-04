<template>
  <div class="defaultHeader">
    <p class="header">{{name}}</p>
  </div>
</template>
<script>
export default {

  props:['name'],
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .defaultHeader {
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#9882ee,#564598);
    .header {
      font-size: 20px;
      font-weight: 500;
      color: #ffffff;
    }
  }
</style>
