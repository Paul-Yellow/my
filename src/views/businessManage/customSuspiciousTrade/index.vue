<template>
  <div>
      <el-card>
          <!-- <div slot="header" class="clearfix">
            <span>文件公函</span>
          </div> -->
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
      </el-card>
      <el-card class="tablewrap">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="code" label="自定义可疑交易特征代码"></el-table-column>
            <el-table-column prop="detail" label="自定义可疑交易特征代码描述"></el-table-column>
            <el-table-column prop="num" label="有此可疑特征的交易报告数量"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link to="customSuspiciousTradeDetail"><el-button type="text" size="small">查看</el-button></router-link>
                </template>
            </el-table-column>
       </el-table>
         <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </el-card>
  </div>
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
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .btn-row {
        text-align: right;
    }
    .tablewrap {
        margin-top: 20px;
    }
</style>
