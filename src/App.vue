<template>
  <div id="app">
    
    <router-view class="router-view"/>
    
  </div>
</template>

<script>
  import mainFoot from '@/components/footer'
  export default {
    name: 'App',
    components:{
      mainFoot
    },
    data(){
      return {
        transitionName:'slide-left',
        footIndex:0
      }
    },
    methods:{
      toPage(datas){
        this.$router.push(datas.src);
      }
    }
  }
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  .router-view {
    position: relative;
    
  }
}
body, html {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
input,textarea {
  outline: none;
  border: none;
}
ul,li,ol,p,div {
  margin: 0;
  padding: 0;
}

.ellipsis {
  white-space: nowrap; 
  text-overflow:ellipsis; 
  overflow:hidden; 
}

</style>
