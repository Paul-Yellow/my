<template>
  <div>
      <el-card>
          <!-- <div slot="header" class="clearfix">
            <span>文件公函</span>
          </div> -->
          <el-form :inline="true" :model="form">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="发起日期 :">
                        <el-date-picker type="daterange" v-model="value" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                 <el-col :span="7">
                     <el-form-item label="版本号 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item>
                     <el-button type="primary">查询</el-button>
                     <router-link to="customSuspiciousTrade"><el-button>返回</el-button></router-link>
                    </el-form-item>
                </el-col>
                
            </el-row>
          </el-form> 
      </el-card>
      <el-card class="tablewrap">
        <el-table :data="tableData" style="width: 100%" size='mini'>
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="name" label="导入文件名"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column prop="result" label="导入结果" width="300"></el-table-column>
            <el-table-column prop="handeldate" label="操作时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link to="importDetail"><el-button type="text">导入详情</el-button></router-link>
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
      value: '',
      form: {
        name: ''
      },
      tableData: [{
        key: '1',
        name: '0001',
        version: 'V1.0',
        date: '2017-11-03',
        result: '导入成功3条，导入失败2条，共计5条',
        handeldate: '2017-11-01 11:11'
      }, {
        key: '2',
        name: '0002',
        version: 'V1.0',
        date: '2017-11-03',
        result: '',
        handeldate: '2017-11-01 11:11'
      }, {
        key: '3',
        name: '0003',
        version: 'V1.0',
        date: '2017-11-03',
        result: '',
        handeldate: '2017-11-01 11:11'
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
