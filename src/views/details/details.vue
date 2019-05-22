<template>
  <div class="details-page">
    <v-header name="详情"></v-header>
    <div class="detail-bot">
      <TabPages
        :tab-list="tabList">
      </TabPages>
    </div>
    <!-- <div class="chart">
      <div id="echarts" style="height: 1.75rem;"></div>
    </div> -->
  </div>
  
</template>
<script>
import vHeader from '@/components/header'
// import betterScroll from '@/components/betterScroll'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/candlestick'



import TabPages from '@/components/handscroll';
export default {
  components:{
    vHeader,
    TabPages
  },
  data() {
    return {
      // 
      chart: null,
      datas:[],
      tabList:[{
        name:'tab1',
        path:''
      },{
        name:'tab2',
        path:''
      },{
        name:'',
        path:''
      },{
        name:'',
        path:''
      }]
    }
  },
  methods:{
    initChart(){
      // 基于准备好的dom,初始化echarts实例，移动端建议使用svg模式
      this.chart = echarts.init(document.getElementById('echarts'),'light',{renderer:'svg'});
      this.chart.setOption(chartUtil.lineOption());
    }
  },
  created() {
    // console.log(this.$route.params);
    // let _that = this;
    // this.$http.post('apiurls',{
    //   id: _that.$route.params.id
    // }).then((respon) => {
    // })
  }
}
</script>
<style lang="less" scoped>
.details-page{


  .detail-bot {
    .choose-navs {
      justify-content: space-between;
    }
  }
}
</style>
