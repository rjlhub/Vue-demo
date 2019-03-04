<template>
  <div class="perfectInfo">
    <v-header name="实名认证"></v-header>
    <div class="perfectmain">
      <div class="steps">
        <div class="">
          <div class="stepsIcon">
            <i class="icontype iconfont icon-group1"></i>
          </div>
          <p style="font-size: 15px;font-weight: 500;color:#564598;margin-top: 6px;">身份认证</p>
        </div>
        <div class="stepsLine"></div>
        <div class="">
          <div class="stepsIcon">
            <i class="icontype iconfont icon-businesscard"></i>
          </div>
          <p style="font-size: 15px;font-weight: 500;color:#564598;margin-top: 6px;">身份认证</p>
        </div>
      </div>
      <div class="authentication">
        <div class="upIdcard">
          <h2 class="authenticationTlt">上传身份证照片</h2>
          <div class="authenticationbox">
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传身份证正面</p>
            </div>
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传身份证反面</p>
            </div>
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传手持身份证</p>
            </div>
          </div>
        </div>
        <div class="upIdcard">
          <h2 class="authenticationTlt">上传标准</h2>
          <div class="authenticationbox">
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传身份证正面</p>
            </div>
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传身份证反面</p>
            </div>
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传手持身份证</p>
            </div>
            <div class="authborder">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传手持身份证</p>
            </div>
            <router-link class="authborder" to="" tag="div">
              <div class="authBox">
                <i class="iconfont icon-camera_fill"></i>
              </div>
              <p class="auth">上传手持身份证</p>
            </router-link>
        </div>
        </div>
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

    }
  }
}
</script>
<style lang="less" scoped>
  .perfectInfo {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .perfectmain {
    .steps {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      // border-bottom: 1px solid #dddddd;
      .stepsLine {
        width: 90px;
        height: 3px;
        border-radius: 5px;
        margin: 0 20px;
        background-color: #564598;
      }
      .stepsIcon {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e2e6e9;
        .icontype {
          font-size: 30px;
          color: #564598;
        }
      }
    }
    .authentication {
      .upIdcard {}
      .authenticationbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 10px;
        .authborder {
          width: 160px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px dashed #dddddd;
          border-radius: 6px;
          margin: 7px;
          .authBox {
            width: 46px;
            height: 46px;
            border-radius: 46px;
            background-color: rgba(198, 201, 203, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont {
              font-size: 28px;
              color: rgba(75, 75, 72, 0.3);
            }
          }
          .auth {
            font-size: 16px;
            color: rgba(75, 75, 72, 0.3);
            margin-top: 8px;
          }
        }
      }
    }
  }

  .authenticationTlt {
    font-size: 18px;
    font-weight: bold;
    color: #666666;
    padding: 10px 0;
    padding-left: 16px;
  }
</style>
