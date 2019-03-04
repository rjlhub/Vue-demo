import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// home 首页
import Home from '@/views/Home'
import Login from '@/views/Login' // 登录
import forgetPassWord from '@/views/forgetPassword' // 忘记密码
import registered from '@/views/registered' // 忘记密码
// 我的
import Personal from '@/views/Personal/Personal' // 我的
import setpage from '@/views/Personal/children/set.vue' // 设置
import perfectInfo from '@/views/Personal/children/perfectInformation.vue' // 设置
// 发现
import Find from '@/views/Find/Find'
// 精选
import Selected from '@/views/Selected/Selected'
import recommended from '@/views/Selected/recommended'
import stock from '@/views/Selected/recommended'
import fund from '@/views/Selected/recommended'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
        path: 'perfectInfo',
        name: 'perfectInfo',
        component: perfectInfo
      }]
    },{ //发现
      path:'/Find',
      name:'Find',
      component: Find,
    },{ //精选
      path:'/Selected',
      name:'Selected',
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
    }
  ]
})


