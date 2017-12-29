<template>
  <div>
      <el-card>
          <div slot="header" class="clearfix">
            <span>自定义可疑交易特征管理</span>
          </div>
          <el-form :model="form">
            <el-row :gutter="20">
                <el-col :span="8">
                     <el-form-item label="自定义可疑交易特征代码 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="自定义可疑交易特征代码描述 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="版本号 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
            </el-row>
            <el-row class="btn-row">
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <router-link to="bulkImport"><el-button type="warning">批量导入</el-button></router-link>
                    <router-link to="importQuery"><el-button type="primary">导入结果查询</el-button></router-link>
                </el-form-item>
            </el-row>
          </el-form> 
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="code" label="自定义可疑交易特征代码" min-width="120"></el-table-column>
            <el-table-column prop="detail" label="自定义可疑交易特征代码描述" min-width="150"></el-table-column>
            <el-table-column prop="num" label="有此可疑特征的交易报告数量" min-width="150"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作" width="80">
                <template slot-scope="scope">
                    <router-link to="customSuspiciousTradeDetail"><el-button type="text">查看</el-button></router-link>
                </template>
            </el-table-column>
         </el-table>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
      </el-card>
  </div>
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
        key: '1',
        code: '0001',
        detail: '自定义可疑1',
        num: '20',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '2',
        code: '0002',
        detail: '自定义可疑1',
        num: '20',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '3',
        code: '0003',
        detail: '自定义可疑1',
        num: '20',
        version: 'V1.0',
        date: '2017-10-27'
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

<style rel="stylesheet/scss" lang="scss" scoped>
    .btn-row {
        text-align: right;
    }
</style>
