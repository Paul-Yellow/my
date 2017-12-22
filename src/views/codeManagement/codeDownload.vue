<template>
  <div>
      <el-card>
          <!-- <div slot="header" class="clearfix">
            <span>代码下载</span>
          </div> -->
          <el-form :model="form" :inline="true">
            <el-row>
                <el-col :span="8">
                     <el-form-item label="代码类型：">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="生效日期 :">
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
                    <router-link to=""><el-button type="warning">清空</el-button></router-link>
                    <router-link to="rateCodeDownload"><el-button type="primary">汇率代码按照期数下载</el-button></router-link>
                </el-form-item>
            </el-row>
          </el-form>
      </el-card>
      <el-card class="tablewrap">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="type" label="代码类型"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作" min-width="30">
                <template slot-scope="scope">
                    <router-link to=""><el-button type="text" size="small">下载</el-button></router-link>
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