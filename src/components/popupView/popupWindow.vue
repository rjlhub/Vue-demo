<template>
  <div>
    <div class="popupWindow" @click.stop="popClick" @touchmove.prevent ></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    popClick() {
      this.$emit('childByValue')
    }
  }
}
</script>

<style lang="less" scoped>
  .popupWindow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10001;
    // background-image: url();
  }
</style>
