<template>
  <div class="pageLoading">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>页面加载管理</span>
        <el-button style="float: right; padding: 3px 0" type="text">报文加载</el-button>
      </div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="110px">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm.code}}</span>
              <!-- <el-input v-model="sizeForm.name"></el-input> -->
            </el-form-item>

          </el-col>
          <el-col :span="8">
              <el-form-item label="报告机构名称 :">
              <span>{{sizeForm.name}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报送类型 :">
                <el-select v-model="sizeForm.select1Value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="报送方式 :">
              <span>{{sizeForm.sendWays}}</span>
            </el-form-item>
          </el-col>

          
          <el-col :span="8">
              <!-- <el-row :gutter="20">
                <el-col :span="6">
                  <div class="upData">上传日期 :</div>
                </el-col>
                <el-col :span="10">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row> -->
              <el-form-item label="上传日期 :">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报文包状态 :">
                <el-select v-model="sizeForm.select2Value" placeholder="请选择">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="报文包名 :">
              <span style="display:inline-block">
                  <el-input v-model="sizeForm.fileBagName"></el-input>
              </span>
            </el-form-item>
          </el-col>

          <el-col :span="8" :offset="8">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="3">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onCheck" class="checkEmpty checkEmpty1">查询</el-button>
                  </div>
                </el-col>
                <el-col :span="8" :offset="2">
                  <div class="grid-content bg-purple">
                      <el-button @click="onEmpty" class="checkEmpty checkEmpty2">清空</el-button>
                  </div>
                  </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <el-card class="box-card  secondBox">
        <el-table :data="tableData" style="width: 100%">
          <!-- 第一列 -->
          <el-table-column label="序号"  >
            <template slot-scope="scope">
              <span>{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="报文包名"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报送类型"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upType }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="报送日期"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upData }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="报文包状态"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upState }}</span>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="上传时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upTime }}</span>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" @click="pageJump(scope.$index, scope.row)">查看
                <!-- <a href="newsPortManage.vue"></a> -->
              </span>
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <!-- <p style="textAlign:right"> -->
          <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange" background
            :current-page.sync="currentPage3" :page-size="10"  layout="prev, pager, next, jumper" :total="totalNumber">
          </el-pagination>
        <!-- </p> -->
    </el-card>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
import store from '../../../store/index'
export default {
  store,
  data() {
    return {
      // 第一大块变量开始
      labelPosition: 'right', // 列表对齐方式
      sizeForm: {
        code: 'C0000000000001', // 金融机构编码
        name: '上海某某银行', // 报告机构名称
        select1Value: '', // 下拉框1取值

        sendWays: '页面加载', // 报送方式
        timeSelectValue: '', // 上传时间
        select2Value: '', // 下拉框2取值

        fileBagName: '' // 报文包名
      },
      options: [{ // 下拉框1
        value: '全部',
        label: '全部'
      }, {
        value: '大额交易新增',
        label: '大额交易新增'
      }, {
        value: '可疑交易新增',
        label: '可疑交易新增'
      }, {
        value: '大额交易修改',
        label: '大额交易修改'
      }, {
        value: '可疑交易修改',
        label: '可疑交易修改'
      }, {
        value: '大额交易删除',
        label: '大额交易删除'
      }],
      value6: '', // 时间选择器的值
      options2: [{ // 下拉框2
        value: '全部',
        label: '全部'
      }, {
        value: '已报送',
        label: '已报送'
      }, {
        value: '已上传',
        label: '已上传'
      }],
      value2: '', // 下拉框2取值
      // 第一大块变量结束

      // 第二大块变量开始
      tableData: [{
        orderNumber: '1',
        name: 'NBHC0000000000001‐20180801‐00000001.ZIP',
        upType: '大额交易新增',
        upData: '2017-11-13',
        upState: '已报送',
        upTime: '2017-10-30 10:35:00',
        path: 'hadFound'
      }, {
        orderNumber: '2',
        name: 'NBHC0000000000001‐20180801‐00000002.ZIP',
        upType: '大额交易新增',
        upData: '2017-12-13',
        upState: '已上传',
        upTime: '2017-10-30 10:40:00',
        path: 'notFound'
      }],
      currentPage3: 1, // 分页
      totalNumber: 1 // 列表数量

    }
  },
  methods: {
    // 点击查询
    onCheck() {
      // console.log(this.sizeForm.fileBagName)
      console.log(this.sizeForm)
      // console.log('submit!')
    },
    // 点击清空
    onEmpty() {
      this.sizeForm.select1Value = '' // 清空下拉框1取值

      this.sizeForm.timeSelectValue = '' // 清空上传时间
      this.sizeForm.select2Value = '' // 清空下拉框2取值

      this.sizeForm.fileBagName = '' // 清空报文包名
    },
    // 点击跳转
    pageJump(index, row) {
      this.$router.push({ path: row.path })
      //  window.location.href = row.path
      //  console.log(index, row)
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  //  初始化列表的页数，每十项一页
  mounted: function() {
    console.log(this.$store.state)
    this.totalNumber = Math.ceil((this.tableData.length) / 10)
  },
  // 监控列表项的变化
  watch: {
    totalNumber: function() {
      // alert(Math.ceil(this.tableData.length / 10))
    }
  }
}
</script>

<style >
.pageLoading{
  /* background: #f5f5f5;
  padding: 20px; */
}
.pageLoading .paddingLeftNone{
  padding-left: 0px !important;
}
.pageLoading .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.pageLoading .line{
  /* text-align: center; */
}
.pageLoading .upData{
  /* font-size: 14px; */
  /* line-height: 28px; */
  /* text-align: left; */
  color: #606266;
}
.pageLoading .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.pageLoading .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.pageLoading .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.pageLoading .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.pageLoading .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  
.pageLoading .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.pageLoading .checkEmpty1{
  background-color: orange;
}
.pageLoading .checkEmpty2{
  background-color: #409EFF;
}
      /* 第一大块结束 */
.pageLoading  .secondBox{
  margin-top: 20px; 
}
.pageLoading .secondBox .el-table th>.cell{
  text-align: center;
}

.pageLoading .secondBox .el-table .cell{
  text-align: center;
}
</style>

