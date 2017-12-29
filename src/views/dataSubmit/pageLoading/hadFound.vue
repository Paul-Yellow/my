<template>
  <div class="hadFound">
   <div >
    
    <el-card class="box-card">
      <!-- 第一大块开始 -->
      <div>
        <div slot="header" class="clearfix">
          <span>报文包概要</span>
          <el-button style="float: right; padding: 3px 0" type="text"><router-link to="pageLoading">返回</router-link></el-button>
        </div>
        <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="110px" class="content">
          <!-- 第一行 -->
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="报文包名 :">
                <span>{{sizeForm.name}}</span>
                <!-- <el-input v-model="sizeForm.name"></el-input> -->
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="上传时间 :">
                <span>{{sizeForm.upTime}}</span>
              </el-form-item>
            </el-col>

            <el-col :span="8">
                <el-form-item label="报文包大小 :">
                  <span>{{sizeForm.bagSize}}</span>
                </el-form-item>
            </el-col>
          </el-row>
          
          <!-- 第二行 -->
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="报文类型 :">
                <span>{{sizeForm.fileType}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="报文数量 :">
                <span>{{sizeForm.fileNumber}}</span>
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>
      </div>  
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
      <div class="box-card  secondBox">
        <el-row>
          <el-col :span="16" class="contentTitle">交易报文详情</el-col>
        </el-row>
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          v-loading.body="listLoading" element-loading-text="Loading"
          style="width: 100%" header-cell-class-name="el-table-hearder" >
          <!-- 第一列 -->
          <el-table-column label="序号"  >
            <template slot-scope="scope">
              <span>{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="报文类型"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upType }}</span>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报送时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upData }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="状态"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upState }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="报文名"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="回执状态"  >
            <template slot-scope="scope">
              <span>
                <i class="pointers" style="background-color:rgb(72,198,144);" v-if="scope.row.returnState == '正确回执'" ></i>
                  <i class="pointers" style="background-color:rgb(238,94,0);" v-if="scope.row.returnState == '系统补正回执'" ></i>
                  <i class="pointers" style="background-color:rgb(184,12,0);" v-if="scope.row.returnState == '错误回执'" ></i>
                {{ scope.row.returnState }}
              </span>
            </template>
          </el-table-column>
          
          <!-- 第七列 -->
          <el-table-column label="回执时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.returnTime }}</span>
            </template>
          </el-table-column>
          <!-- 第八列 -->
          <el-table-column label="最后更新时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.lastTime }}</span>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" >
                <span @click="dialogTableVisible = true">查看</span>  | 
                下载回执信息
              </span>
              <!-- <el-button size="mini" @click="pageJump(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" background
            :current-page="currentPage"
            :page-size="pagesize"  
            :page-sizes="[10, 20, 30, 40,50]" layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.length">
          </el-pagination>
        </p>
      </div>  
      <!-- 第二大块结束 -->
    </el-card>
    
  </div>
         <!-- 弹窗开始 -->
      <el-dialog title="" :visible.sync="dialogTableVisible" class="alertBox">
          <div class="filePreview">

      <el-row :gutter="20">
        <el-col :span="8" >
          <div >
            <span style="font-size:16px">报文包概要</span>
          </div>
        </el-col>
      </el-row>
        <el-form ref="form" :model="sizeFormAlert" :label-position="labelPositionAlert" label-width="140px">
          <!-- 第一行 -->
          <el-row :gutter="20">
            <el-col :span="8" :offset="4">
              <el-form-item label="报文包名 :">
                <span>{{sizeFormAlert.code}}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row :gutter="20">
            <el-col :span="8" :offset="4">
              <el-form-item label="大额交易客户总数 :">
                <span>{{sizeFormAlert.totalNumber}}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="20">
            <el-col :span="8" :offset="4">
              <el-form-item label="大额交易总数 :">
                <span>{{sizeFormAlert.changeNumber}}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      <el-row :gutter="20" style="margin-bottom:15px">
        <el-col :span="8" >
          <div >
            <span style="font-size:16px">报文报告</span>
          </div>
        </el-col>
      </el-row>
      
      <div style="position:relative;">
        <div class="detailBox">
          <p>&lt;?xml version="1.0" encoding="utf‐8"?&gt;</p>
          <p>&lt;SSTR&gt;</p>
          <p>&lt;金融机构编码&gt;</p>
          <p>&lt;RPNC&gt;上报网点代码 &lt;/RPNC&gt;</p>
          <p>&lt;TPTR &gt;可疑交易报告触发点  &lt;/TPTR &gt;</p>
          <p> &lt;OTPR &gt;其他可疑交易报告触发点 &lt;/OTPR &gt;</p> 
          <p>&lt;STCB&gt;资金交易及客户行为情况&lt;/STCB&gt;</p>
          <p>&lt;AOSP&gt;疑点分析&lt;/AOSP&gt;</p>
          <p>&lt;TOSC&gt;疑似涉罪类型 1&lt;/TOSC&gt;</p>
          <p>&lt;金融机构编码&gt;</p>
          <p>&lt;RPNC&gt;上报网点代码 &lt;/RPNC&gt;</p>
          <p>&lt;TPTR &gt;可疑交易报告触发点  &lt;/TPTR &gt;</p>
          <p> &lt;OTPR &gt;其他可疑交易报告触发点 &lt;/OTPR &gt;</p> 
          <p>&lt;STCB&gt;资金交易及客户行为情况&lt;/STCB&gt;</p>
          <p>&lt;AOSP&gt;疑点分析&lt;/AOSP&gt;</p>
          <p>&lt;TOSC&gt;疑似涉罪类型 1&lt;/TOSC&gt;</p>
          <p>&lt;金融机构编码&gt;</p>
          <p>&lt;RPNC&gt;上报网点代码 &lt;/RPNC&gt;</p>
          <p>&lt;TPTR &gt;可疑交易报告触发点  &lt;/TPTR &gt;</p>
          <p> &lt;OTPR &gt;其他可疑交易报告触发点 &lt;/OTPR &gt;</p> 
          <p>&lt;STCB&gt;资金交易及客户行为情况&lt;/STCB&gt;</p>
          <p>&lt;AOSP&gt;疑点分析&lt;/AOSP&gt;</p>
          <p>&lt;TOSC&gt;疑似涉罪类型 1&lt;/TOSC&gt;</p>
        </div>
        <div class="coverScroll"></div>
      </div>
      <div style="height:20px"></div>
      
  </div>
      </el-dialog>
      <!-- 弹窗结束 -->


  </div>
</template>

<script>
import store from '../../../store/index'
import { hadFound } from '@/api/dataSubmitAjax'
export default {
  store,
  data() {
    return {
      // 第一大块变量开始
      labelPosition: 'right', // 列表对齐方式
      // sizeForm: {
      //   name: 'XXXX.ZIP', // 报文包名
      //   upTime: '2017-10-30 10:35:00', // 上传时间
      //   bagSize: '300000B', // 报文包大小
      //   fileType: '大额交易报告新增报文', // 报文类型
      //   fileNumber: 4 // 报文数量
      // },
      sizeForm: {},
      // 第一大块变量结束

      // 第二大块变量开始
      // tableData: [
      //   {
      //     upData: '2017-10-11 09:28',
      //     upState: '已报送',
      //     returnState: '正确回执',
      //     name: 'NBHC0000000000001‐20180801‐00000001.ZIP',
      //     upType: '大额交易新增',
      //     returnTime: '2017-10-11 11:27',
      //     lastTime: '2017-10-18 11:27'
      //   },
      //   {
      //     upData: '2017-10-11 09:45',
      //     upState: '已报送',
      //     returnState: '错误回执',
      //     name: 'NBHC0000000000001‐20180801‐00000002.ZIP',
      //     upType: '大额交易新增',
      //     returnTime: '2017-10-11 11:27',
      //     lastTime: '2017-10-21 11:27'
      //   }
      // ],
      listLoading: true,
      tableData: [],
      // 默认开始页码
      currentPage: 1,
      // 每页显示条数
      pagesize: 10,

      // 弹窗变量
      labelPositionAlert: 'right', // 列表对齐方式
      sizeFormAlert: {
        code: 'C0000000000001', // 金融机构编码
        totalNumber: '2', // 大额交易客户总数
        changeNumber: '12' // 大额交易总数
      },
      dialogTableVisible: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    // 点击跳转
    pageJump(index, row) {
      this.$router.push({
        path: 'filePreview',
        query: { lastPage: 'hadFound' }
      })
      //  console.log(index, row)
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 分页
    handleSizeChange(size) {
      this.pagesize = size
      // console.log(`每页 ${size} 条`)
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      // console.log(`当前页: ${currentPage}`)
    },
    // 发送ajax 请求获取数据
    fetchData(listQuery) {
      this.listLoading = true
      hadFound(this.listQuery).then(response => {
        // console.log(response.data)
        this.tableData = response.data.projects
        this.sizeForm = response.data.sizeForm
        this.listLoading = false
      })
    }
  },
  created() {
    var listQuery = { currentPage: this.currentPage, pageSize: this.pageSize }
    this.fetchData(listQuery)
  },
  //  初始化列表的页数，每十项一页
  mounted: function() {
    //  alert(Math.ceil(this.tableData.length))
    // console.log(this.$store.state.dataSubmitStore.dabiaoge)
    // this.totalNumber = Math.ceil(this.tableData.length / 10)
  }
}
</script>

<style >
.hadFound .pointers {
  display: inline-block;
  width: 5px;
  height: 5px;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 3px;
}

.hadFound .contentTitle {
  padding: 10px 0;
  font-size: 16px;
}
.hadFound .content {
  padding: 20px 10px;
  /* background: #f5f5f5; */
}
.hadFound .paddingLeftNone {
  padding-left: 0px !important;
}
.hadFound .paddingRightNone {
  padding-right: 0px !important;
}
/* 第一大块开始 */
.hadFound .line {
  text-align: center;
}
.hadFound .upData {
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.hadFound .el-date-editor--daterange.el-input__inner {
  width: 245px;
}
.hadFound .el-range-editor.el-input__inner {
  padding-right: 3px;
}
.hadFound .chooseTime .el-col-10 {
  padding-left: 2px !important;
}
.hadFound .chooseTime .el-date-editor .el-range-input {
  width: 80px;
}
.hadFound .chooseTime .el-date-editor .el-range-separator {
  padding: 0 5px;
  width: 24px;
}
/* 第一大块结束 */
.hadFound .secondBox {
  margin-top: 20px;
}
.hadFound .secondBox .el-table th > .cell {
  text-align: center;
}

.hadFound .secondBox .el-table .cell {
  text-align: center;
}

/* 按钮 */
.hadFound .buttonBox {
  margin-top: 45px;
}
.hadFound .checkEmpty {
  width: 100%;
  /* border: 1px solid rgb(145,145,145); */
  color: #fff;
  background-color: rgb(228, 228, 228);
  padding: 6px 20px;
}
.hadFound .checkEmpty1 {
  background-color: #1a90f4;
}
.hadFound .checkEmpty2 {
  background-color: #ff9a1b;
}
.hadFound .checkEmpty3 {
  background-color: #e95152;
}

/* 弹窗 */
.hadFound .detailBox {
  font-size: 14px;
  line-height: 1.1;
  padding-left: 20px;
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-right: none;
  position: relative;
}
.hadFound .alertBox .el-form-item--small.el-form-item {
  margin-bottom: 10px;
}
.hadFound .alertBox {
  /* position: relative; */
}

.hadFound .detailBox p {
  margin: 6px 0;
}
.hadFound .el-dialog__body {
  padding: 0 20px;
}
.hadFound .coverScroll {
  height: 50vh;
  width: 20px;
  background: #fff;
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 999;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>

