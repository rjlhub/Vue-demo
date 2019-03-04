// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './assets/js/store'

import './assets/css/reset.css'
// animate
import animate from './assets/css/animate.css'
import './assets/css/icon/iconfont.css'

import Toast from './components/toast'
Vue.use(Toast);

// tab-slide
import TabSlider from 'tab-slider'
import 'tab-slider/dist/index.css'
Vue.use(TabSlider)


import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.prototype.animate = animate

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// router.push('/Find')