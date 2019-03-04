<template>
  <div class="mainFootModule">
    <ul>
      <li v-for="item in navsInfo" :key="item.id" @click="toPage(item.id,item.path)">
        <i class="iconfont incontype" :class="[activeIndex == item.id? item.type_fill: item.type]"></i>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['activeIndex'],
  data(){
    return {
      navsInfo:[
        {
          id:1,
          type:'icon-homepage',
          type_fill:'icon-homepage_fill',
          path:'/',
          name:'首页',
        },{
          id:2,
          type:'icon-integral',
          type_fill:'icon-integral_fill',
          path:'/Selected',
          name:'理财',
        },{
          id:3,
          type:'icon-explore',
          type_fill:'icon-explore',
          path:'/Find',
          name:'发现',
        },
        {
          id:4,
          type:'icon-mine',
          type_fill:'icon-mine_fill',
          path:'/Personal',
          name:'我',
        }
      ]
    }
  },
  
  methods: {
    toPage(page,path) {
      this.$emit('toPage',{src:path,index:page})
    }
  }
}
</script>

<style>
  
  .mainFootModule {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 54px;
    box-shadow: 0 -1px 0 #dddddd;
    background-color: #ffffff;
  }
  .mainFootModule ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .mainFootModule ul li {
    display: flex;
    flex-direction: column;
    flex:1;
    justify-content: center;
    align-items: center;
  }
  .incontype {
    font-size: 28px;
    color: #666666;
    line-height: 22px;
  }
  .iconColor {
    color: #564598;
  }
  .name {
    font-size: 14px;
    font-weight: 500;
    margin-top: 2px;
  }
  /* https://github.com/rjlhub/Vue-demo.git */
</style>
