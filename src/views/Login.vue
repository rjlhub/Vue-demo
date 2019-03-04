<template>
  <div class="Login">
    <div :class="['login-top']" :style="topImg">
      <div class="drop-cell">
        <p class="drop-cell-title">标题</p>
      </div>
    </div>
    <div class="login-form">
      <p style="font-size: 30px;padding-left: 10px;">登录</p>
      <div class="login-form-account login-input">
        <i class="iconfont icon-mobilephone"></i>
        <input type="text" placeholder="输入你的用户名/手机号">
      </div>
      <div class="login-form-password login-input">
        <i class="iconfont icon-lock4"></i>
        <input type="password" placeholder="输入您的密码">
      </div>
      <div class="forget-password" @click="toForgetPasswordpage" style="text-align: right;">
        <p class="forget-cell">忘记密码？</p>
      </div>
      <div class="login-btn" @click="signIn">
        <p class="login-btn-cell">登录</p>
      </div>
    </div>
    <div class="other-form">
      <div class="registeredBtn" @click="toRegisteredpage">
        <p class="registered">注册</p>
      </div>
    </div>
    <!-- 第三方登录 -->
    <div class="other-sign" style="margin-top: 10px;">
      <div class="otherSignTitle">
        <p>第三方登录</p>
      </div>
      <div class="sign-link">
        <div class="sign-link-item" :style="qqbg"></div>
        <div class="sign-link-item" :style="wxbg"></div>
        <div class="sign-link-item" :style="wbbg"><img src="" alt=""></div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topImg:{
        background: "url(" + require("@/assets/imgs/sign_in.jpg") + ")",
      },
      qqbg:{
        background: "url(" + require("@/assets/imgs/timg.jpg") + ")",
        backgroundPosition:" 70px 115px",
        backgroundSize: "170px"
      },
      wxbg:{
        background: "url(" + require("@/assets/imgs/timg.jpg") + ")",
        backgroundPosition:" 76px 0",
        backgroundSize: "200px"
      },
      wbbg:{
        background: "url(" + require("@/assets/imgs/timg.jpg") + ")",
        backgroundPosition:" -13px 1px",
        backgroundSize: "180px"
      }
    }
  },
  methods:{
    signIn(){
      let _this = this;
      _this.$toast("这是一个message",'info');
    },
    toForgetPasswordpage() {
      this.$router.push('/forgetPassWord');
    },
    toRegisteredpage(){
      this.$router.push('/Registered');
    }
  }
}
</script>
<style scoped>
  
  .login-top {
    width: 100%;
    height: 220px;
    background-size: cover;
    position: relative;
  }
  .drop-cell {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 220px;
    background-color: rgba(255,255,255,0.5);
  }
  .drop-cell-title {
    text-align: center;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    padding-top: 70px;
  }
  .login-form {
    width: 80%;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 20px 12px 12px;
    margin: auto;
    margin-top: -40px;
    position: relative;
    box-shadow:-5px 5px 10px -4px #dddddd,5px 5px 10px -4px #dddddd;
  }
  
  .login-input {
    /* width: 100%; */
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  .login-input i {
    font-size: 24px;
    color: #9F5F9F;
    margin-right: 10px;
  }
  .login-input input {
    width: 100%;
    height: 90%;
    font-size: 16px;
  }

  /*  */
  .forget-cell {
    font-size: 16px;
    color: #9F5F9F;
    text-align: right;
    margin: 20px 0;
    cursor: pointer;
    display: inline-block;
  }
  .login-btn {
    width: 86%;
    height: 50px;
    margin: auto;
    margin-bottom: -30px;
    border-radius: 30px;
    background-image: linear-gradient(90deg, #9F5F9F 0,#564598 100%);
  }
  .login-btn-cell {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    letter-spacing: 10px;
  }

  .registered {
    font-size: 18px;
    font-weight: 500;
    color: #9F5F9F;
    text-align: center;
    margin-top: 40px;
    cursor: pointer;
  }
  .otherSignTitle p {
    font-size: 18px;
    color: #dddddd;
    font-weight: 500;
    text-align: center;
    position: relative;
  }
  .otherSignTitle p::before {
    content: '';
    display: block;
    width: 130px;
    height: 1px;
    background-color: #dddddd;
    position: absolute;
    left: 0;
    top: 10px;
  }
  .otherSignTitle p::after {
    content: '';
    display: block;
    width: 130px;
    height: 1px;
    background-color: #dddddd;
    position: absolute;
    right: 0;
    top: 10px;
  }

  .sign-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
  }
  .sign-link-item {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #ffffff;
  }
</style>
