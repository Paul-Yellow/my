<template>
      <el-card>
        <div slot="header" class="clearfix">
            <span>系统更新日志</span>
          </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="期数"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column prop="update" label="更新概要"></el-table-column>
            <el-table-column label="操作" width="80">
                <template slot-scope="scope">
                    <router-link to="systemUpdateLogDetail"><el-button type="text">查看</el-button></router-link>
                </template>
            </el-table-column>
       </el-table>
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
      </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // 分页当前页数
      form: {
        name: ''
      },
      tableData: [{
        key: '2017年第12期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }, {
        key: '2017年第11期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }, {
        key: '2017年第10期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }]
    }
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
