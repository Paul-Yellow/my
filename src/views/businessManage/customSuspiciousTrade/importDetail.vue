<template>
    <el-card>
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
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
       <router-link to="importQuery"><el-button type="primary">返回</el-button></router-link>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .btn-row {
        text-align: right;
    }
</style>
