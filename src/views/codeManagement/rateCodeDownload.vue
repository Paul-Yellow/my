<template>
  <div>
      <el-card>
          <!-- <div slot="header" class="clearfix">
            <span>文件公函</span>
          </div> -->
          <el-form :model="form" :inline="true">
            <el-row>
                <el-col :span="9">
                     <el-form-item label="年份:">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="9">
                    <el-form-item label="版本号:">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                 <el-col :span="6">
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                        <router-link to="codeDownload"><el-button type="warning">返回</el-button></router-link>
                    </el-form-item>
                </el-col>
            </el-row>
          </el-form> 
      </el-card>
      <el-card class="tablewrap">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="期数"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link to=""><el-button type="text" class="downbtn">下载</el-button></router-link>
                </template>
            </el-table-column>
       </el-table>
       <div class="btn-row">
         <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
       </div>
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
        key: '2017年第12期',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '2017年第11期',
        version: 'V1.0',
        date: '2017-10-27'
      }, {
        key: '2017年第10期',
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
