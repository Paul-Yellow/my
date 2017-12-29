<template>
  <div>
      <el-card>
          <div slot="header" class="clearfix">
            <span>代码下载</span>
          </div>
          <el-form :model="form" :inline="true">
            <el-row>
                <el-col :span="8">
                     <el-form-item label="代码类型：">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="生效日期 :">
                          <el-date-picker type="daterange" v-model="value" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                          </el-date-picker>
                     </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="版本号 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
            </el-row>
            <el-row class="btn-row">
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <router-link to="rateCodeDownload"><el-button type="warning">汇率代码按照期数下载</el-button></router-link>
                </el-form-item>
            </el-row>
          </el-form>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="type" label="代码类型"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作" min-width="30">
                <template slot-scope="scope">
                    <router-link to=""><el-button type="text">下载</el-button></router-link>
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
      currentPage: 1,
      form: {
        name: ''
      },
      tableData: [{
        key: '1',
        type: '国家地区',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '2',
        type: '行政区划',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '3',
        type: '货币',
        version: 'V1.0',
        date: '2017-10-27'
      }],
      value: ''
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