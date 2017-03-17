<template>
  <div class="all-manufaction">
      <div class="searchInput">
        <el-select v-model="levelValue" placeholder="请选择故障等级">
          <el-option
          v-for="levelitem in leveloptions"
          :value="levelitem.value"
          :label="levelitem.label"
          >
            <div @click="level_select(levelitem)">{{levelitem.label}}</div>
        </el-option>
      </el-select>
      <el-select v-model="searchType" placeholder="请选择">
          <el-option
          v-for="searchitem in searchInputOptions"
          :label="searchitem.label"
          :value="searchitem.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="searchStartTime"
        type="date"
        placeholder="选择开始日期">
      </el-date-picker>
      <el-date-picker
        v-model="searchEndTime"
        type="date"
        placeholder="选择结束日期">
      </el-date-picker>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="warning" @click="reform">重置</el-button>
      <el-button type="success" @click="tableRefresh">刷新</el-button>
      </div>
      <el-table
        :data="currentManufaction"
        border
        style="width: 100%"
        >
            <el-table-column
              prop="id"
              label="编号"
              width="132"
              show-overflow-tooltip>
              <!-- <template scope="scope">{{ scope.row.id }}</template> -->
            </el-table-column>
            <el-table-column
              prop="proposer"
              label="提出者"
              width="100"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="proposeTime"
              label="提出时间"
              width="120"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="description"
              label="描述"
              width="120"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="level"
              label="等级"
              width="70">
            </el-table-column>
            <el-table-column
              prop="handler"
              label="处理人"
              width="80">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间"
              width="100"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间"
              width="100"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="diagnosis"
              label="诊断原因"
              width="100"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="prosessStep"
              label="处理步骤"
              width="102"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="80">
            </el-table-column>
            <el-table-column
              label="操作"
              width="95">
              <template scope="scope">
                <el-button type="danger" @click="deleteManufaction(scope.row.id)">删除</el-button>
              </template>
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
  </div>
</template>

<script>
import manufactionApi from '../../api/manufactionApi'
export default {
  name: 'all-manufaction',
  created () {
    this.getAllManufaction()
  },
  data () {
    return {
      currentPage: 1,
      sizePerOnePage: 10,
      currentManufaction: [],
      tableData: [],
      fixedHeader: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true,
      height: '400px',
      searchStartTime: '',
      searchEndTime: '',
      leveloptions: [{
        value: '',
        label: '故障等级'
      }, {
        value: '3',
        label: '轻微'
      }, {
        value: '2',
        label: '一般'
      }, {
        value: '1',
        label: '严重'
      }],
      levelValue: '',
      searchInputOptions: [{
        value: '',
        label: '全部提出时间'
      }, {
        value: 'proposeTime',
        label: '故障提出时间'
      }, {
        value: 'startTime',
        label: '开始处理时间'
      }, {
        value: 'endTime',
        label: '结束处理时间'
      }],
      searchType: ''
    }
  },
  methods: {
    level_select (item) {
      var _this = this
      manufactionApi.getManufaction(item.value, '', '', '', '', '10', '0')
        .then(function (response) {
          _this.tableData = response.data.result.data
          _this.getCurrentManufaction(1)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    ymdFilter: function (value) {
      var date = new Date(value)
      var Y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      if (m < 10) {
        m = '0' + m
      }
      if (d < 10) {
        d = '0' + d
      }
      var t = Y + '-' + m + '-' + d
      return t
    },
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
    getAllManufaction: function () {
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
            _this.tableRefresh()
            _this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success'
            })
          })
          .catch(function (error) {
            console.log(error)
            _this.$notify.error({
              title: '错误',
              message: '删除失败'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除'
        })
      })
    },
    search () {
      var startTime = this.ymdFilter(this.searchStartTime)
      var endTime = this.ymdFilter(this.searchEndTime)
      var _this = this
      manufactionApi.getManufaction(this.levelValue, '', this.searchType, startTime, endTime, '10', '0')
        .then(function (response) {
          _this.tableData = response.data.result.data
          _this.getCurrentManufaction(1)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    reform () {
      this.levelValue = ''
      this.searchType = ''
      this.searchStartTime = ''
      this.searchEndTime = ''
    },
    tableRefresh () {
      var _this = this
      manufactionApi.getManufaction('', '', '', '', '', '', '')
        .then(function (response) {
          _this.tableData = response.data.result.data
          _this.getCurrentManufaction(1)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
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
.searchInput
  width 100%
  height 40px
  float right
</style>
