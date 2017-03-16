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
              <template scope="scope"><el-button type="success">处理</el-button><br>
            <el-button type="info">修改</el-button><br>
            <el-button type="danger">删除</el-button></template>
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
  name: 'unsolved-manufaction',
  created () {
    this.getUnsolvedManufaction()
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
    getUnsolvedManufaction: function () {
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
.other-view
  width 1300px
  height 600px
  margin 0px auto
  margin-top 20px
</style>
