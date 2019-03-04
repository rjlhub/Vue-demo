<template>
  <div class="forgetpassword">
    <v-header name="忘记密码"></v-header>
    <div class="forgetpageform">
      <ul>
        <li class="">
          <div class="icontypebox">
            <i class="iconfont icon-mobilephone icontype"></i>
          </div>
          <div class="line-partition"></div>
          <input type="text" ref="phoneInp" maxlength="11" class="resetInput" v-model.trim="inpNum" placeholder="请输入手机号">
          <div class="close-btn" v-if="inpNum.length > 0" @click="deleteInpVal">
            <i class="iconfont icon-delete_fill deleteBtn"></i>
          </div>
        </li>
        <li>
          <div class="icontypebox">
            <i class="iconfont icon-mail1 icontype"></i>
          </div>
          <div class="line-partition"></div>
          <input type="text" ref="validation" class="resetInput" placeholder="请输入验证码">
          <div class="getvalidation-btn" @click="getValidation">
            <p>获取验证码</p>
          </div>
        </li>
        <li>
          <div class="icontypebox">
            <i class="iconfont icon-unlock icontype"></i>
          </div>
          <div class="line-partition"></div>
          <input type="password" class="resetInput" placeholder="请重设密码" v-model="psd" v-if="is_eyeshow">
          <input type="text" class="resetInput" placeholder="请重设密码" v-model="psd" v-else>
          <div class="close-btn" @click="isEyeTarget">
            <i class="iconfont deleteBtn" :class="is_eyeshow?'icon-browse':'icon-browse_fill'" style="font-size: 30px;"></i>
          </div>
        </li>
      </ul>
      <div class="submit-btn" @click="submitResetPassWord">
        <p>确定</p>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/header.vue'
export default {
  components:{
    vHeader
  },
  data(){
    return {
      is_eyeshow: true,
      inpNum:'',
      psd: ''
    }
  },
  computed:{
    
  },
  methods:{
    isEyeTarget(){
      this.is_eyeshow = !this.is_eyeshow;
    },
    deleteInpVal(){
      this.inpNum = '';
      this.$refs.phoneInp.focus()
    },
    getValidation(){ //获取验证码
      console.log('获取验证码')
      this.$refs.validation.focus();
    },
    submitResetPassWord() { // 确定重置密码
      console.log('---------- 确定重置密码 ---------------');
      
      let _this = this;
      _this.$toast("密码更改成功!",'success_fill');
      this.$router.push('/Login')
    }
  }
}
</script>
<style scoped>
  .forgetpageform {
    padding: 0 12px;
    padding-top: 20px;
    box-shadow: inset 0 1px 0px rgba(221,221,221,0.6);
  }
  .forgetpageform ul li {
    line-height: 70px;
    border-bottom: 1px solid #dddddd;
    flex-direction: row;
    align-items: center;
  }
  .icontypebox {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icontype {
    font-size: 34px;
    color: #666666;
  }
  .line-partition {
    width: 1.5px;
    height: 30px;
    background-color: #dddddd;
  }
  .resetInput {
    width: 100%;
    height: 60px;
    font-size: 20px;
    padding-left: 16px;
    color: #666666;
  }
  .close-btn {
    height: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .deleteBtn {
    font-size: 24px;
    color: #b3b2b2;
  }
  .getvalidation-btn {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #564598;
    font-size: 16px;
    font-weight: 500;
    color: #564598;
  }
  .pright{
    padding-right: 30px;
  }
  .submit-btn {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #ffffff;
    background-color: #564598;
    margin-top: 40px;
  }
</style>

