<template>
	<div class="add-manufaction">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="故障资源" prop="level">
    <el-radio-group v-model="ruleForm.level">
      <el-radio label="轻微"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="严重"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="故障描述" prop="description">
    <el-input type="textarea" v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
	</div>
</template>

<script>
export default {
  name: 'add-manufaction',
  data () {
    return {
      ruleForm: {
        level: '',
        description: ''
      },
      rules: {
        level: [
          { required: true, message: '请选择故障等级', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请填写故障描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-manufaction
  width 100%
  height 100%
  margin 50px 0px 0px 0px
</style>
