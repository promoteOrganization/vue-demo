<template>
  <div class="unsolved-manufaction">
      <el-table
        :data="currentManufaction"
        border
        style="width: 100%"
        >
            <el-table-column
              prop="id"
              label="故障编号"
              width="277"
              show-overflow-tooltip>
              <!-- <template scope="scope">{{ scope.row.id }}</template> -->
            </el-table-column>
            <el-table-column
              prop="proposer"
              label="故障提出者"
              width="120">
            </el-table-column>
            <el-table-column
              prop="proposeTime"
              label="故障提出时间"
              width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="description"
              label="故障描述"
              width="300"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="level"
              label="故障等级"
              width="100">
            </el-table-column>
            <el-table-column
              prop="status"
              label="故障状态"
              width="107">
            </el-table-column>
            <el-table-column
              label="操作"
              width="95">
              <template scope="scope"><el-button type="success" @click="handleManufaction(scope.row.id)">处理</el-button><br>
            <el-button type="info" @click="updateManufaction(scope.row.id)">修改</el-button><br>
            <el-button type="danger" @click="deleteManufaction(scope.row.id)">删除</el-button></template>
          </el-table-column>
      </el-table>
    <br>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="sizePerOnePage"
        layout="total, prev, pager, next, jumper"
        :total="totalCommentSize">
      </el-pagination>
      <el-dialog title="处理故障" v-model="handleManufactionDialogVisible">
        <el-form :model="handleManufactionForm" :rules="handleRules" ref="handleManufactionForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="处理人" prop="handler">
            <el-input v-model="handleManufactionForm.handler"></el-input>
          </el-form-item>
          <el-form-item label="故障诊断原因" prop="diagnosis">
            <el-input type="textarea" v-model="handleManufactionForm.diagnosis"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitHandleForm('handleManufactionForm')">立即创建</el-button>
            <el-button @click="resetForm('handleManufactionForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="处理故障" v-model="updateManufactionDialogVisible">
        <el-form :model="updateManufactionForm" :rules="updateRules" ref="updateManufactionForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="故障提出者" prop="proposer">
            <el-input v-model="updateManufactionForm.proposer"></el-input>
          </el-form-item>
          <el-form-item label="故障等级" prop="level">
            <el-select v-model="updateManufactionForm.level" placeholder="请选择故障等级">
              <el-option label="区域一" value="3">轻微</el-option>
              <el-option label="区域二" value="2">一般</el-option>
              <el-option label="区域二" value="1">严重</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="故障提出时间" required>
            <el-col :span="11">
              <el-form-item prop="proposeTime1">
                <el-date-picker type="date" placeholder="选择日期" v-model="updateManufactionForm.proposeTime1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="proposeTime2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="updateManufactionForm.proposeTime2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="故障描述" prop="description">
            <el-input type="textarea" v-model="updateManufactionForm.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitUpdateForm('updateManufactionForm')">立即创建</el-button>
            <el-button @click="resetForm('updateManufactionForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>

<script>
import manufactionApi from '../../api/manufactionApi'
export default {
  name: 'unsolved-manufaction',
  created () {
    this.getUnsolvedManufaction()
  },
  data () {
    return {
      currentId: '',
      currentPage: 1,
      sizePerOnePage: 8,
      currentManufaction: [],
      tableData: [],
      fixedHeader: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true,
      height: '400px',
      handleManufactionDialogVisible: false,
      updateManufactionDialogVisible: false,
      handleManufactionForm: {
        handler: '',
        diagnosis: ''
      },
      handleRules: {
        handler: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        diagnosis: [
          { required: true, message: '请选择活动区域', trigger: 'blur' }
        ]
      },
      updateManufactionForm: {
        proposer: '',
        proposeTime1: '',
        proposeTime2: '',
        description: '',
        level: ''
      },
      updateRules: {
        proposer: [
          { required: true, message: '请输入故障提出者', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        proposeTime1: [
          { type: 'date', required: true, message: '请选择年月日', trigger: 'change' }
        ],
        proposeTime2: [
          { type: 'date', required: true, message: '请选择时分秒', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请填写故障描述', trigger: 'blur' }
        ],
        level: [
          { required: true, message: '请选择故障等级', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getCurrentManufaction(val)
    },
    getCurrentManufaction (page) {
      var size = this.tableData.length

      var startManufaction = this.sizePerOnePage * (page - 1)
      var endManufaction = startManufaction + this.sizePerOnePage
      endManufaction = endManufaction < size ? endManufaction : size
      this.currentManufaction = []
      for (var i = startManufaction; i < endManufaction; i++) {
        this.currentManufaction.push(this.tableData[i])
      }
    },
    getUnsolvedManufaction: function () {
      var _this = this
      manufactionApi.getManufaction('', '', '', '', '', '', '')
        .then(function (response) {
          _this.tableData = response.data.result.data
          _this.getCurrentManufaction(1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteManufaction (id) {
      this.$confirm('此操作将永久删除该故障, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this
        manufactionApi.deleteManufaction(id)
          .then(function (response) {
            _this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        })
      })
    },
    handleManufaction (id) {
      this.currentId = id
      this.handleManufactionDialogVisible = true
    },
    updateManufaction (id) {
      this.currentId = id
      this.updateManufactionDialogVisible = true
    },
    submitHandleForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitUpdateForm (formName) {
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
  },
  computed: {
    totalCommentSize () {
      return this.tableData.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.other-view
  width 1300px
  height 600px
  margin 0px auto
  margin-top 20px
</style>
