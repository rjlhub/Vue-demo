<template>
  <div class="setPage">
    <v-header name="设置"></v-header>
    <div>
      <group gutter="0.5em">
        <x-switch title="新消息通知" v-model="show1" @on-change="ShowNewsMsg"></x-switch>
        <x-switch title="2G/3G/4G播放和下载" v-model="show2" @on-change="ShowNewsMsg"></x-switch>
      </group>
      <group gutter="0.5em">
        <cell title="修改手机账号" link="https://m.baidu.com" value="xxxxxxxxxx"></cell>
        <cell title="修改密码" @click.native="onClick" is-link></cell>
      </group>
      <group gutter="0.5em">
        <cell title="检验新版本" is-link></cell>
        <cell title="反馈与建议" is-link></cell>
        <cell title="去评分" is-link></cell>
        <cell title="关于" is-link></cell>
      </group>
    </div>
  </div>
</template>

<script>

import vHeader from '@/components/header'
// import { Group, Cell, xSwitch } from 'vux'
import { XSwitch, Group,Cell } from 'vux'
export default {
  components:{
    vHeader,
    Group,
    Cell,
    XSwitch
  },
  data(){
    return {
      show1: false,
      show2: true
    }
  },
  methods:{
    ShowNewsMsg() {
      // this.show1 = !this.show1;
      console.log('showNewsMsg')
      console.log(this.show1)
    }
  }
}
</script>
<style scoped>
  
  .setPage {
    /* padding-top: 5px; */
    background-color: #f2f2f2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 60px;
    
  }
  
</style>
