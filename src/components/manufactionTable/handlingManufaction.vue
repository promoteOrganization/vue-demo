<template>
  <div class="handling-manufaction">
      <el-table
        :data="currentManufaction"
        border
        style="width: 100%"
        >
            <el-table-column
              prop="id"
              label="编号"
              width="163"
              show-overflow-tooltip>
              <!-- <template scope="scope">{{ scope.row.id }}</template> -->
            </el-table-column>
            <el-table-column
              prop="proposer"
              label="提出者"
              width="90">
            </el-table-column>
            <el-table-column
              prop="proposeTime"
              label="提出时间"
              width="135"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="description"
              label="描述"
              width="160"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="level"
              label="等级"
              width="80">
            </el-table-column>
            <el-table-column
              prop="handler"
              label="处理人"
              width="90">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间"
              width="135">
            </el-table-column>
            <el-table-column
              prop="diagnosis"
              label="故障原因"
              width="160">
            </el-table-column>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="90">
            </el-table-column>
            <el-table-column
              label="操作"
              width="95">
              <template scope="scope"><el-button type="success">完成</el-button><br>
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
  </div>
</template>

<script>
import manufactionApi from '../../api/manufactionApi'
export default {
  name: 'handling-manufaction',
  created () {
    this.getHandlingManufaction()
  },
  data () {
    return {
      currentPage: 1,
      sizePerOnePage: 8,
      currentManufaction: [],
      tableData: [],
      fixedHeader: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true,
      height: '400px'
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
    getHandlingManufaction: function () {
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
