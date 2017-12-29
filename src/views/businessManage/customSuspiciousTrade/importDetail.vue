<template>
    <el-card>
       <div slot="header" class="clearfix">
            <span>自定义可疑交易特征导入文件详情</span>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="code" label="自定义可疑交易特征代码" width="200"></el-table-column>
            <el-table-column prop="detail" label="自定义可疑交易特征代码描述" width="200"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column prop="result" label="导入结果"></el-table-column>
            <el-table-column prop="
            " label="失败原因"></el-table-column>
       </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
       <div class="btn-row">
         <router-link to="importQuery"><el-button type="primary"><i class="el-icon-back"></i> 返回</el-button></router-link>
       </div>
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
        key: '1',
        code: '0001',
        detail: '可疑交易特征说明1',
        version: 'V1.0',
        date: '2017-11-03',
        result: '成功',
        reason: ''
      }, {
        key: '2',
        code: '0001',
        detail: '可疑交易特征说明2',
        version: 'V1.0',
        date: '2017-11-03',
        result: '失败',
        reason: '自定义可疑交易特征代码为空'
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
        text-align: center;
    }
</style>
