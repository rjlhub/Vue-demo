<template>
  <div class="registeredPage">
    <v-header name="注册"></v-header>
    <div class="registeredContent">
      <div class="registeredUserImg">
        <div class="userImgbox">
          <img src="" alt="">
          <i class="iconfont icon-addition_fill"></i>
        </div>
      </div>
      <div class="registeredForm">
        <ul>
          <li>
            <h3 class="title">全名</h3>
            <input type="text" v-model="userName" placeholder="请输入昵称">
          </li>
          <li>
            <h3 class="title">邮箱</h3>
            <input type="text" v-model="email" placeholder="请输入邮箱" >
          </li>
          <li>
            <h3 class="title">密码</h3>
            <input type="text" v-model="password" placeholder="请输入密码" >
          </li>
          <li>
            <h3 class="title">生日</h3>
            <p style="width: 100%;height: 40px;line-height: 40px;font-size: 18px;color: #333333;">1984年5月15日</p>
          </li>
        </ul>
        <div class="registeredSubmitBtn" @click="registeredInfo" >
          <p>创建</p>
        </div>
      </div>
      <div class="noRegistered" @click="toLoginPage">
        <p>已经有账户？登录</p>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header'
export default {
  components:{
    vHeader
  },
  data() {
    return {
      userName:'',
      email:'',
      password:''
    }
  },
  methods:{
    registeredInfo(){
      let _this = this;
      _this.$toast('注册成功','success_fill')
    },
    toLoginPage() {
      this.$router.push('/Login');
    }
  }
}
</script>
<style scoped>
  .registeredUserImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .userImgbox {
    width: 65px;
    height: 65px;
    border-radius: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #dddddd;
  }
  .registeredUserImg i {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 26px;
    color: #564598;
  }
  .registeredForm {
    padding: 0 20px;
  }
  .registeredForm ul li {
    border-bottom: 1px solid #dddddd;
    margin-top: 20px;
    /* line-height: 70px; */
  }
  .title {
    font-size: 14px;
    color: #999999;
  }
  .registeredForm input {
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #333333;
  }
  .registeredSubmitBtn {
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    background-color: #564598;
    margin-top: 34px;
  }
  .noRegistered {
    font-size: 16px;
    text-align: center;
    margin-top: 24px;
    cursor: pointer;
  }
</style>
