<template>
  <div>
      <el-card>
          <div slot="header" class="clearfix">
            <span>汇率代码下载（按照期数下载）</span>
          </div>
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
                    </el-form-item>
                </el-col>
            </el-row>
          </el-form> 
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="期数"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column label="操作" min-width="30">
                <template slot-scope="scope">
                    <router-link to=""><el-button type="text" class="downbtn">下载</el-button></router-link>
                </template>
            </el-table-column>
         </el-table>
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
        <div class="btn-row">
          <router-link to="codeDownload"><el-button type="primary"><i class="el-icon-back"></i> 返回</el-button></router-link>
        </div>
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
        margin-top:10px;
    }
</style>
