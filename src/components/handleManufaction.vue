<template>
	<div class="handle-manufaction">
    <el-tabs type="border-card">
  <el-tab-pane label="未处理">
     <el-table
    :data="currentManufaction"
    border
    style="width: 100%"
   >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="故障编号"
      width="120">
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
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="description"
      label="故障描述"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="level"
      label="故障等级"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="status"
      label="故障状态"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="操作"
      show-overflow-tooltip>
      <template scope="scope">sdasa</template>
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
  </el-tab-pane>
  <el-tab-pane label="进行中">进行中</el-tab-pane>
  <el-tab-pane label="已完成">已完成</el-tab-pane>
  <el-tab-pane label="全部">全部</el-tab-pane>
</el-tabs>
	</div>
</template>

<script>
// import manufactionApi from '../api/manufactionApi'
import axios from 'axios'
export default {
  created () {
    this.initManufaction()
    this.test()
  },
  name: 'handle-manufaction',
  data () {
    return {
      msg: '这个是故障处理页面',
      currentPage: 1,
      sizePerOnePage: 8,
      currentManufaction: [],
      tableData: [
        {
          id: 1,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1,
          selected: true
        },
        {
          id: 2,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 3,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1,
          selected: true
        },
        {
          id: 4,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 5,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 6,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        },
        {
          id: 7,
          proposer: 'John Smith',
          proposeTime: 'Employed',
          description: 'dsffsdsf',
          level: 1,
          status: 1
        }
      ],
      fixedHeader: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true,
      height: '400px'
    }
  },
  methods: {
    initManufaction () {
      this.getCurrentManufaction(1)
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
    test: function () {
      axios.get(this.HOST)
        .then(function (response) {
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

<style lang="stylus" scoped>
.handle-manufaction
  width 100%
  height 100%
  margin 0px auto
</style>
