<template>
  <div class="zeroReportConfirm">
    <!-- <div>爱我中华</div> -->
    
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >零报告确认</span>
      </div>

      <!-- 第一大块开始 -->
      <div>
      <el-form ref="form" :model="sizeForm"  >
        
        <!-- 第一行 -->
        <el-row :gutter="20">

          <el-col :span="8">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="upData">上传日期 :</div>
                </el-col>
                <el-col :span="10">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelect" type="daterange" range-separator="至"  
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row>
          </el-col>

          <el-col :span="8">
              <el-form-item label="零报告确认状态 :">
                <el-select v-model="sizeForm.confirmState" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8" >
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="1">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onCheck" >查询</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <div class="box-card  secondBox">
        <el-table :data="tableData" style="width: 100%" header-cell-class-name="el-table-hearder">
          <!-- 第一列 -->
          <el-table-column label="序号"  >
            <template slot-scope="scope">
              <span>{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="零报告周期"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.time }}</div>
                <span>{{ scope.row.time }}</span>
              </el-tooltip>  
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="零报告通知日期"  >
            <template slot-scope="scope">
              <span>{{ scope.row.data }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="确认状态"  >
            <template slot-scope="scope">
              <span>{{ scope.row.confirmState }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="零报告原因"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.reason }}</div>
                <span>{{ scope.row.reason }}</span>
              </el-tooltip>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作" min-width="80">
            <template slot-scope="scope">
              <span v-if="scope.row.confirmState == '已确认'" style="color:#409EFF;cursor: pointer;" @click="dialogTableVisible = true">查看</span>
              <span v-if="scope.row.confirmState != '已确认'" style="color:#409EFF;cursor: pointer;" @click="dialogFormVisible = true">进行确认</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange" background
            :current-page.sync="currentPage" :page-size="10"  :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="totalNumber">
          </el-pagination>
        </p>
      </div>
    </el-card>
    <!-- 第二大块结束 -->

    <!-- 零报告确认弹窗1开始 -->
    <el-dialog title="零报告确认" :visible.sync="dialogFormVisible" center>
      <el-form :model="form">
        <el-form-item label="" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="5" style="text-align: right;"><div >零报告周期 :</div></el-col>
            <el-col :span="17" :offset="2"><div >{{form.cycle}}</div></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="5" style="text-align: right;"><div >零报告通知日期 :</div></el-col>
            <el-col :span="17" :offset="2"><div >{{form.informData}}</div></el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="5" style="text-align: right;"><div >零报告情况原因 :</div></el-col>
            <el-col :span="17" :offset="2">
              <el-select v-model="form.reason" placeholder="请选择">
                <el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
          </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="5" style="text-align: right;"><div >情况说明 :</div></el-col>
            <el-col :span="14" :offset="2">
              <el-input type="textarea" :rows="2"  placeholder="请输入内容" v-model="form.instruction"> </el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" >取 消</el-button>
        <el-button type="primary" @click="handConfirm" >确 定</el-button>
      </div>
    </el-dialog>
  <!-- 零报告确认弹窗1结束 -->

  <!-- 零报告确认弹窗2开始 -->
      <el-dialog title="零报告确认" :visible.sync="dialogTableVisible" center>
        <el-form :model="form2">
          <el-form-item label="" :label-width="formLabelWidth">
            <el-row>
              <el-col :span="5" style="text-align: right;"><div >零报告周期 :</div></el-col>
              <el-col :span="17" :offset="2"><div >{{form2.cycle}}</div></el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-row>
              <el-col :span="5" style="text-align: right;"><div >零报告通知日期 :</div></el-col>
              <el-col :span="17" :offset="2"><div >{{form2.informData}}</div></el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-row>
              <el-col :span="5" style="text-align: right;"><div >零报告确认日期 :</div></el-col>
              <el-col :span="17" :offset="2"><div >{{form2.confrimData}}</div></el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-row>
              <el-col :span="5" style="text-align: right;"><div >零报告情况原因 :</div></el-col>
              <el-col :span="17" :offset="2"><div >{{form2.reason}}</div></el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-row>
              <el-col :span="5" style="text-align: right;"><div >情况说明 :</div></el-col>
              <el-col :span="17" :offset="2"><div >{{form2.instruction}}</div></el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false" type="primary">
            <i class="el-icon-back"></i> 返回
          </el-button>
        </div>
      </el-dialog>
  <!-- 零报告确认弹窗2结束 -->
  </div>
</template>

<script>
import { zeroReportConform } from '@/api/dataSubmitAjax'
import store from '../../../store/index'
export default {
  store,
  data() {
    return {
      // 第一大块变量开始
      sizeForm: {
        timeSelect: '', // 时间选择器-上传日期
        confirmState: '' // 零报告确认
      },
      options: [{ // 下拉框
        value: 'quanbu',
        label: '全部'
      }, {
        value: 'yiqueren',
        label: '已确认'
      }, {
        value: 'daiqueren',
        label: '待确认'
      }],
      // 第一大块变量结束

      // 第二大块变量开始
      // tableData: [{
      //   orderNumber: '1', // 序号
      //   time: '2017-09-30至2017-10-30', // 零报告周期
      //   data: '2017-10-31', // 零报告通知日期
      //   confirmState: '已确认', // 确认状态
      //   reason: '本机构无需要报送的大额交易和可疑交易报告', // 零报告原因
      //   check: true // 操作列显示查看
      // }, {
      //   orderNumber: '2', // 序号
      //   time: '2017-10-31至2017-11-30', // 零报告周期
      //   data: '2017-12-01', // 零报告通知日期
      //   confirmState: '待确认', // 确认状态
      //   reason: '', // 零报告原因
      //   check: false
      // }],
      tableData: [],
      currentPage: 1, // 分页
      totalNumber: 1, // 列表数量
      eachPageNumber: '', // 每页条数

      // 弹窗1变量
      dialogFormVisible: false,
      form: {
        cycle: '2017-09-30至2017-10-30', // 零报告周期
        informData: '2017-10-31', // 零报告通知周期
        reason: '', // 零报告情况原因
        instruction: '' // 情况说明
      },
      formLabelWidth: '120px',
      options2: [{ // 下拉框2
        value: '选项1',
        label: '本机构无需要报送的大额交易和可以交易报告'
      }, {
        value: '选项2',
        label: '本机构有需要报送的大额交易和可以交易报告,但因故未报'
      }],
      value2: '', // 下拉框2取值
      textarea2: '', // 文本框的值

      // 弹窗2变量
      form2: {
        cycle: '2017-09-30至2017-10-30', // 零报告周期
        informData: '2017-10-31', // 零报告通知周期
        confrimData: '2017-11-06', // 零报告确认日期
        reason: '本机构无需要报送的大额交易和可疑交易报告', // 零报告情况原因
        instruction: '情况说明。。。' // 情况说明
      },
      dialogTableVisible: false
    }
  },
  methods: {
    // 点击查询
    onCheck() {
      console.log(this.sizeForm)
      // console.log('submit!')
    },
    // 弹框一点击确认
    handConfirm(index, row) {
      console.log(this.form)
      this.dialogFormVisible = false
      // this.$router.push({ path: row.path })
    },
    // 点击删除
    handleConfirm(index, row) {
      console.log(index, row)
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    // 发送ajax 请求获取数据
    getAjaxData() {
      this.listLoading = true
      zeroReportConform(this.listQuery).then(response => {
        // console.log(response.data.projects)
        this.tableData = response.data.projects
        this.listLoading = false
      })
    }
  },
  created() {
    this.getAjaxData()
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
.zeroReportConfirm{
  /* background: #f5f5f5;
  padding: 20px; */
}
.zeroReportConfirm .paddingLeftNone{
  padding-left: 0px !important;
}
.zeroReportConfirm .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.zeroReportConfirm .line{
  text-align: center;
}
.zeroReportConfirm .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}  
.zeroReportConfirm .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.zeroReportConfirm .checkEmpty1{
  background-color: #ff9a1b;
}
.zeroReportConfirm .checkEmpty2{
  background-color: #1a90f4;
}
      /* 第一大块结束 */
.zeroReportConfirm  .secondBox{
  /* margin-top: 20px;  */
}
.zeroReportConfirm .secondBox .el-table th>.cell{
  text-align: center;
}

.zeroReportConfirm .secondBox .el-table .cell{
  text-align: center;
}

</style>

