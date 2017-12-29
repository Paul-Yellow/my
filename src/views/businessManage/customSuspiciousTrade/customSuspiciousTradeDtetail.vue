<template>
  <div>
    <el-card>
       <div slot="header" class="clearfix">
            <span>自定义可疑交易特征管理</span>
        </div>
    <el-form>
      <el-row>
        <el-col :span="12">
          <el-form-item label="金融机构编码：">
              <span>C00000001</span>
          </el-form-item>
          <el-form-item label="自定义可疑交易特征代码：">
              <span>STR0001</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="报告机构名称：">
              <span>上海**银行</span>
          </el-form-item>
          <el-form-item label="自定义可疑交易特征代码描述：">
              <span>非法集资</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <DividerHorizontal/>
        </el-col>
      </el-row>
          <div class="cheader">
            <span>涉罪类型</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号" width="180"></el-table-column>
            <el-table-column prop="code" label="涉罪类型代码" width="180"></el-table-column>
            <el-table-column prop="detail" label="涉罪类型代码描述"></el-table-column>
        </el-table>
          <div class="cheader">
            <span>监测标准</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号" width="180"></el-table-column>
            <el-table-column prop="code" label="监测标准代码" width="180"></el-table-column>
            <el-table-column prop="detail" label="监测标准描述"></el-table-column>
        </el-table>
          <div class="cheader">
            可疑交易特征相关技术指标
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号" width="180"></el-table-column>
            <el-table-column prop="code" label="技术指标代码" width="180"></el-table-column>
            <el-table-column prop="detail" label="技术指标描述"></el-table-column>
        </el-table>
      <el-row>
        <el-col :span="12">
          <el-form-item label="可疑交易特征产生方法:">
              <span>算法简要描述</span>
          </el-form-item>
          <el-form-item label="版本号:">
              <span>V1.0</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="其他说明：">
              <span></span>
          </el-form-item>
          <el-form-item v-model="value" label="生效日期：">
              <span>2017-10-26</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <DividerHorizontal/>
        </el-col>
      </el-row>
    </el-form> 
    <div class="btnbox">
      <router-link to="customSuspiciousTrade"><el-button type="primary"><i class="el-icon-back"></i> 返回</el-button></router-link>
    </div> 
  </el-card>
  </div>
</template>

<script>
import DividerHorizontal from '@/views/layout/components/DividerHorizontal'

export default {
  data() {
    return {
      tableData: [{
        key: '1',
        code: '0609',
        detail: '涉嫌组织或参与经营非法金融机构的可疑交易行为'
      }, {
        key: '2',
        code: '0609',
        detail: '涉嫌非法吸收公众存款的可疑交易行为'
      }, {
        key: '3',
        code: '0609',
        detail: '涉嫌集资诈骗的可疑交易行为'
      }],
      value: ''
    }
  },
  components: {
    DividerHorizontal
  }
}
</script>

<style lang="scss" scoped>
    .btnbox {
      text-align: center;
    }
    .cheader {
      font-weight:500;
      font-size: 16px;
      margin-bottom:16px;
    }
    .el-table {
      margin-bottom:32px;
    }
</style>
