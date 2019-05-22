<template>
  <div class="popular">
    <div class="popular-head">
      <div class="head-icon" @click="openMenu"><p>M</p></div>
      <p style="font-size: 24px;color: white;">Popular</p>
      <div class="head-icon"><p>S</p></div>
    </div>
    
    <main class="popular-main" ref="subject">
      <div class="swiper-container" id="swiper1">
        <swiper :options="swiperOption" style="height: 100%;" ref="mySwiper" id="swiper-main">
          <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
            <div style="padding-top: 40px;">
              <img class="swiper-item" :src="item.img" />
            </div>
            <div class="info-main">
              <p style="text-align: left;">{{item.style}}</p>
              <div class="stares row">
                <div class="stare"></div>
                <p>{{item.reviews}}</p>
              </div>
              <p style="font-size: 20px;text-align: left;">{{item.title}}</p>
              <button class="buyBtn" @click.stop="addCart(item)" :carNumber="item.carNumber">
                <span>₺{{item.price}}</span>
                <span>加入购物车</span>
                <badge :text="item.carNumber" v-show="item.carNumber>0" class="badge"></badge>
              </button>
            </div>
            
          </swiper-slide>
        </swiper>
      </div>
    </main>
    <vuemenu :show="showMenu" :menu="menum" @closeMenu="openMenu"></vuemenu>
  </div>
</template>
<script>
import {Swiper, Badge} from 'vux'
import vuemenu from '@/components/Menu'
export default {
  components:{
    // Swiper
    Badge,
    vuemenu
  },
  data() {
    return {
      swiperHeight:'',
      index:0,
      list:[
        {
          url: 'javascript:',
          img: 'https://common.ofo.so/campaign/valentine/images/ditie3.png',
          title: '送你一朵fua',
          style:'Shoes',
          reviews:374,
          price: 12,
          carNumber:0
        }, {
          url: 'javascript:',
          img: 'https://common.ofo.so/campaign/valentine/images/ditie4.png',
          title: '送你一次旅行',
          style:'T-Shart',
          reviews:174,
          price: 33,
          carNumber:0
        },{
          url: 'javascript:',
          img: 'https://common.ofo.so/campaign/valentine/images/ditie2.png',
          title: '生生世世',
          style:'trousers',
          reviews:23,
          price: 23,
          carNumber:0
        },{
          url: 'javascript:',
          img: 'https://common.ofo.so/campaign/valentine/images/ditie1.png',
          title: '呃呃呃阿斯顿',
          style:'Shoes',
          reviews:74,
          price: 145,
          carNumber:0
        }
      ],
      slide:[1,2,3,4],
      
      swiperOption:{
        
				loop:false,
				centeredSlides : true,
				slidesPerView:1.2,
				pagination : '.swiper-pagination',
				paginationClickable:true,//点击分页器是否会切换
				onInit:function(swiper){//回调函数，初始化后执行。
					swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
        },
        on: {
          // click: () =>{
          //   const realIndex = this.realIndex;
          //   console.log(realIndex)
          // }
        }
      },
      menum:[
        {
          name:'数码电子',
          show: true,
          classify2:[
            {
              name:'数码相机',
              show: false
            },{
              name:'手机',
              show: false
            }
          ]
        },{
          name:'男装时尚',
          show: false,
        },{
          name:'女装时尚',
          show: false,
        },{
          name:'箱子家居',
          show: false,
        },{
          name:'书籍文具',
          show: false,
        }
      ],
      showMenu: false,
      
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created(){
    vm = this;
  },
  mounted(){
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // this.$refs.subject.style.height = (h - 50) + 'px';
    this.$refs.subject.style.width = w+ 'px';

    let offsetHeight = this.$refs.subject.offsetHeight - 80;
    let mainHeight = parseInt(h - 80);
    console.log(offsetHeight,mainHeight);
    this.swiperHeight = offsetHeight > mainHeight?offsetHeight: mainHeight;
    this.$refs.subject.style.height = this.swiperHeight+'px';
  },
  created(){
    // vm = this;
  },
  methods:{
    onIndexChange(idx){
      this.index = idx;
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    addCart(item){
      item.carNumber++;
    }
  }
}
</script>

<style lang="less" scoped>
  .popular {
    background-color: #2f4159;
    .popular-main {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  .swiper-slide {
    width: 100%;
    // height: 100%;
    font-size: 30px;
    text-align: center;
    background-color: #2f4159;
  }
  .popular-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: #2f4159;
    position: sticky;
    top: 0;
    z-index: 100;
    .head-icon {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 16px;
    }
  }

  #swiper1 .swiper-container .swiper-wrapper img {
    width: 100%;
  }
  // .swiper-container .swiper-wrapper .swiper-slide-active img {
  //   width: 100%;
  // }
  .swiper-slide {
    -webkit-transition: transform 0.8s;
    -moz-transition: transform 0.8s;
    -ms-transition: transform 0.8s;
    -o-transition: transform 0.8s;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .swiper-slide-active,.swiper-slide-duplicate-active {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
      
  #swiper1 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding:  0 0 10px 0;
  }
  
  .swiper-container, .swiper-container2 {
    
  }
  
  #swiper1 .swiper-container .swiper-wrapper {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
  }
  #swiper1 .swiper-container .swiper-wrapper .swiper-slide {
    width: 86%;
    border-radius: 10px;
    background-color: rgba(255,255,255,1);
  }
  
  /* 上一张 */
  #swiper1 .swiper-container .swiper-wrapper .swiper-slide-prev {
    // margin-top: 5px;
  }
  /* 下一张 */
  #swiper1 .swiper-container .swiper-wrapper .swiper-slide-next {
    // margin-top: 5px;
  }
  
  /* 中间的图片 */
  .swiper-container .swiper-wrapper .swiper-slide-active {
    // height: calc(100% - 10px) !important;
    background-color: white !important;
  }
  .info-main {
    padding: 0 20px;
    .buyBtn {
      // padding:;
      width: 75%;
      height: 50px;
      border: 1px solid #dddddd;
      background-color: #cc380c;
      border-radius: 30px;
      margin-top: 30px;
      color: white;
      font-size: 20px;
      cursor: pointer;
      outline: none;
      position: relative;
      .badge {

      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  
</style>
