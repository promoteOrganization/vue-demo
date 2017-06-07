<template>
  <div class="register-view">
  <div class="demo-step-container">
  <mu-stepper :activeStep="activeStep">
    <mu-step>
      <mu-step-label>
        输入您的邮箱
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        设置密码
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        注册成功
      </mu-step-label>
    </mu-step>
  </mu-stepper>
  <div class="demo-step-content">
    <p v-if="finished">
      都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
    </p>
    <template v-if="!finished">
      <div v-if="activeStep == 0" class="register-step-one">
        <mu-text-field v-model="registerEmail" label="输入邮箱" :errorText="errorEmailText" labelFloat/>
      </div>
      <div v-if="activeStep == 1" class="register-step-two">
        <mu-text-field v-model="registerPass" label="输入密码" :errorText="errorPassText" labelFloat/>
        <mu-text-field v-model="registerRePass" label="再次输入" :errorText="errorRePassText" labelFloat/>
      </div>
      <div v-if="activeStep == 2" class="register-step-three">
        <mu-text-field label="恭喜" errorText="errorText" labelFloat/>
      </div>
      <div class="register-button">
        <mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
        <mu-raised-button class="demo-step-button" :label="activeStep === 2 ? '完成' : '下一步'" primary @click="handleNext"/>
      </div>
    </template>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'register-view',
  data () {
    return {
      msg: '这是注册页面',
      activeStep: 0,
      registerEmail: '',
      registerPass: '',
      registerRePass: '',
      errorEmailText: '',
      errorPassText: '',
      errorRePassText: ''
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2;
    }
  },
  methods: {
    handleNext () {
      var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.activeStep == 0) {
        if (this.registerEmail == '') {
          this.errorEmailText = '请输入您的邮箱'
        } else if (!emailRe.test(this.registerEmail)) {
          this.errorEmailText = '邮箱格式不正确'
        }else {
          this.activeStep++
        }
      } else if (this.activeStep == 1) {
        if (this.registerPass == '') {
          this.errorPassText = '请设置您的密码'
        } else if (this.registerRePass == '') {
          this.errorRePassText = '请再次输入以确认密码'
        } else if (this.registerPass != this.registerRePass) {
          this.errorRePassText = '两次密码输入不一致'
        }  else {
          this.activeStep++
        }
      }
    },
    handlePrev () {
      this.clearText();
      this.activeStep--;
    },
    reset () {
      this.activeStep = 0
    },
    clearText () {
      this.errorEmailText = '';
      this.errorPassText = '';
      this.errorRePassText = '';
      this.registerEmail = '';
      this.registerPass = '';
      this.registerRePass = '';
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-view
  margin-top 50px
  
.demo-step-container 
  width 100%
  max-width 700px
  margin auto

.demo-step-content 
  margin 0  16px

.demo-step-button 
  margin-top 12px
  margin-right 12px
  
.register-step-one
  width 300px
  height 120px
  margin 0px auto
  
.register-step-two
  width 300px
  margin 0px auto
  
.register-step-three
  width 300px
  margin 0px auto
  
.register-button
  width 300px
  margin 0px auto
</style>
