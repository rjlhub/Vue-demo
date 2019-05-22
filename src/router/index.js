import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 扫码
import scan  from '@/views/scan'
// home 首页
import Home from '@/views/Home'
import bankCard from '@/views/BankCard/bankcard'
import signIn from '@/views/SignIn'
import message from '@/views/message/message'
// 登录
import Login from '@/views/Login' // 登录
import forgetPassWord from '@/views/forgetPassword' // 忘记密码
import registered from '@/views/registered' // 忘记密码
// 我的
import Personal from '@/views/Personal/Personal' // 我的
import setpage from '@/views/Personal/children/set.vue' // 设置
import perfectInfo from '@/views/Personal/children/perfectInformation.vue' // 设置
import integral from '@/views/Personal/children/integral'
import coupons from '@/views/Personal/children/coupons'
import businessCard from '@/views/Personal/children/businesscard'
// 发现
import Find from '@/views/Find/Find'
// 精选
import Selected from '@/views/Selected/Selected'
import recommended from '@/views/Selected/recommended'
import stock from '@/views/Selected/recommended'
import fund from '@/views/Selected/recommended'

import Popular from '@/views/Popular'
// 搜索
import search from '@/views/search' 

// 详情
import details from '@/views/details/details'

import PageTransition from '@/views/PageTransition'

import community from '@/views/community'

import Page1 from '@/pages/page1/index'
import Page2 from '@/pages/page2/index'
import Page3 from '@/pages/page3/index'
import Page4 from '@/pages/page4/index'
Router.prototype.goback = () =>{
  this.isBack = true
  window.history(-1)
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'PageTransition',
      component:PageTransition,
      children:[
        {
          path: '/scan',
          name: 'scan',
          meta:{index:1},
          component: scan
        },{
          path: '',
          name: 'Home',
          meta:{index:0},
          component: Home
          // path: '',
          // name: 'Popular',
          // meta:{index:0},
          // component: Popular
          // path:'',
          // name:'community',
          // meta:{index:0},
          // component:community
        },{
          path: '/bankCard',
          name: 'bankCard',
          meta:{index:2},
          component: bankCard
        },{
          path: '/signIn',
          name: 'signIn',
          component: signIn
        },{
          path: '/message',
          name: 'message',
          component: message
        },{
          path: '/Login',
          name: 'Login',
          component: Login
        },{
          path: '/forgetPassWord',
          name: 'forgetPassWord',
          component: forgetPassWord
        },{
          path:'/Registered',
          name:'registered',
          component: registered
        },{ //我的
          path:'/Personal',
          name:'Personal',
          component: Personal,
          children:[{
            path: 'set',
            name: 'setting',
            component: setpage
          },{
            path: 'businessCard',
            name: 'businessCard',
            component: businessCard
          },{
            path: 'perfectInfo',
            name: 'perfectInfo',
            component: perfectInfo
          },{
            path: 'integral',
            name: 'integral',
            component: integral
          },{
            path: 'coupons',
            name: 'coupons',
            component: coupons
          }]
        },{ //发现
          path:'/Find',
          name:'Find',
          meta:{index:2},
          component: Find,
        },{ //精选
          path:'/Selected',
          name:'Selected',
          meta:{index:1},
          component: Selected,
          children:[{
            path:'recommended',
            name:'recommended',
            component: recommended,
          },{
            path:'stock',
            name:'stock',
            component: stock,
          },{
            path:'fund',
            name:'fund',
            component: fund,
          }]
        },{//搜索
          path:'/search',
          name:'search',
          component: search
        },{
          path:'/details',
          name:'details',
          component: details
        }
      ]
    },
    
  ]
})


