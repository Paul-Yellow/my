<template>
  <div>
      <el-card>
          <div slot="header" class="clearfix">
            <span>报送概要</span>
          </div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="金融机构编码：">
                        <span>C0000000000001</span>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="报告机构名称：">
                        <span>上海某某银行</span>
                    </el-form-item>
                </el-col>
                <el-col :span="9">
                    <el-form-item label="报送日期：">
                        <el-date-picker type="daterange" v-model="value" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
          </el-form>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" fixed label="序号"></el-table-column>
            <el-table-column prop="name" fixed label="报告机构名称" width='120'></el-table-column>
            <el-table-column prop="submitdate" label="报送日期" width='90'></el-table-column>
            <el-table-column prop="lpage" label="大额交易数据包" min-width="150"></el-table-column>
            <el-table-column prop="spage" label="可疑交易数据包" min-width="150"></el-table-column>
            <el-table-column prop="lamessage" label="大额交易新增报文" min-width="150"></el-table-column>
            <el-table-column prop="latrade" label="大额交易新增交易" min-width="150"></el-table-column>
            <el-table-column prop="lcmessage" label="大额交易补正报文" min-width="150"></el-table-column>
            <el-table-column prop="lctrade" label="大额交易补正交易" min-width="150"></el-table-column>
            <el-table-column prop="lemessage" label="大额交易纠错报文" min-width="150"></el-table-column>
            <el-table-column prop="letrade" label="大额交易纠错交易" min-width="150"></el-table-column>
            <el-table-column prop="ldmessage" label="大额交易删除报文" min-width="150"></el-table-column>
            <el-table-column prop="ldtrade" label="大额交易删除交易" min-width="150"></el-table-column>
            <el-table-column prop="samessage" label="可疑交易新增报文" min-width="150"></el-table-column>
            <el-table-column prop="satrade" label="可疑交易新增交易" min-width="150"></el-table-column>
            <el-table-column prop="scmessage" label="可疑交易补正报文" min-width="150"></el-table-column>
            <el-table-column prop="sctrade" label="可疑交易补正交易" min-width="150"></el-table-column>
            <el-table-column prop="semessage" label="可疑交易纠错报文" min-width="150"></el-table-column>
            <el-table-column prop="setrade" label="可疑交易纠错交易" min-width="150"></el-table-column>
         </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
      </el-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentPage: 1, // 分页当前页数
      value: '',
      formInline: {
        user: ''
      },
      tableData: [
        {
          key: '1',
          name: '上海某某银行',
          submitdate: '2017-10-27',
          lpage: '233',
          spage: '122',
          lamessage: '444',
          latrade: '233',
          lcmessage: '122',
          lctrade: '100',
          lemessage: '200',
          letrade: '300',
          ldmessage: '200',
          ldtrade: '200',
          samessage: '400',
          satrade: '400',
          scmessage: '200',
          sctrade: '100',
          semessage: '100',
          setrade: '100'
        },
        {
          key: '2',
          name: '上海某某银行',
          submitdate: '2017-10-27',
          lpage: '233',
          spage: '122',
          lamessage: '444',
          latrade: '233',
          lcmessage: '122',
          lctrade: '100',
          lemessage: '200',
          letrade: '300',
          ldmessage: '200',
          ldtrade: '200',
          samessage: '400',
          satrade: '400',
          scmessage: '200',
          sctrade: '100',
          semessage: '100',
          setrade: '100'
        },
        {
          key: '3',
          name: '上海某某银行',
          submitdate: '2017-10-27',
          lpage: '233',
          spage: '122',
          lamessage: '444',
          latrade: '233',
          lcmessage: '122',
          lctrade: '100',
          lemessage: '200',
          letrade: '300',
          ldmessage: '200',
          ldtrade: '200',
          samessage: '400',
          satrade: '400',
          scmessage: '200',
          sctrade: '100',
          semessage: '100',
          setrade: '100'
        }
      ]
    }
  },
  methods: {
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
