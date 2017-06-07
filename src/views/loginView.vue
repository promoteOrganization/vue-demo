<template>
  <div class="login-view">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账户" prop="account">
      <el-input v-model="ruleForm.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="userLogin('ruleForm')">登录</el-button>
      <el-button @click="register()">注册</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'login-view',
  data () {
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入账户密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      if (this.ruleForm.account !== '' && this.ruleForm.password !== '') {
        this.toLogin()
      }
    },
    toLogin () {
      // 演示用
      // 登录状态15天后过期
      let expireDays = 1000 * 60 * 60 * 24 * 15
      let value = this.ruleForm.account
      this.setCookie('session', value, expireDays)
      this.isLoging = false
      // 登录成功后
      this.$router.push('/table')
    },
    userLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-view
  width 600px
  height 280px
  margin 0px auto 
  margin-top 50px
  padding-top 50px
</style>
