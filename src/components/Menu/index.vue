<template>
  <div class="menu" v-if="show">
    <menu class="menu-main">
      <ul>
        <li class="menu-li" v-for="(item,idx) in menu" :key="idx">
          <div class="item-name" @click="anClassify(item)">
            <span>{{item.name}}</span>
            <span><i class="iconfont" :class="item.show?'icon-minus':' icon-add'"></i></span>
          </div>
          <div class="classify1" v-if="item.show">
            <ul>
              <li class="classify2" v-for="(item2,index) in item.classify2" :key="index">
                <span>{{item2.name}}</span>
                <span><i class="iconfont" :class="item2.show?'icon-minus':' icon-add'"></i></span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </menu>
    <div class="menu-drop" @click.stop="closeMenu"></div>
    <toast v-model="showtoast" type="text" text="Hello World"></toast>
  </div>
</template>
<script>
import { Toast } from 'vux'
export default {
  components:{
    Toast
  },
  props:['show','menu'],
  data() {
    return {
      showtoast: false
    }
  },
  methods:{
    closeMenu(){
      this.$emit('closeMenu')
    },
    anClassify(item){
      if(item.classify2) {
        item.show = !item.show;
      }else {
        this.$vux.toast.show({
          text: item.name
        })
        // this.$vux.toast.text('无'+item.name, 'middle');
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .menu {
    // transform: translateX();
    
    .menu-drop {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,0.3);
      z-index: 100;
    }
    .menu-main{
      position: fixed;
      z-index: 101;
      top: 0;
      left: 0;
      bottom: 0;
      width: 76%;
      margin: 0;
      padding: 0;
      padding-top: 20px;
      // background-color: #53739e;
      background-color: white;
      animation: show 0.3s linear;
      .menu-li {
        .item-name {
          background-color: white;
          color: #333333;
          font-size: 16px;
          height: 40px;
          line-height: 40px;
          // border-bottom: 1px solid #eeeeee;
          padding-left: 30px;
          padding-right: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .classify1 {
          background-color: #f4f4f4;
          .classify2 {
            height: 30px;
            line-height: 30px;
            padding-left: 40px;
            padding-right: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }

  @keyframes show {
    from {
      left: -76%
    }
    to {
      left: 0;
    }
  }
</style>
