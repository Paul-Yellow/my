<template>
  <div class="notFound">
   <div style="padding:20px 10px">
    <!-- <div style="font-weight:600;margin-bottom:10px;">交易报文加载</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight:600">报文详情</span>
      </div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="110px">
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
    </el-card>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <el-card class="box-card  secondBox">
      <div slot="header" class="clearfix">
          <span style="font-weight:600">交易报文详情</span>
      </div>
        <el-table :data="tableData" style="width: 100%">
          <!-- 第一列 -->
          <el-table-column label="报文名"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="附件包"  >
            <template slot-scope="scope">
              <span>{{ scope.row.otherBag }}</span>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报文类型"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upType }}</span>
            </template>
          </el-table-column>
          
          

          <!-- 最后一列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" @click="pageJump(scope.$index, scope.row)">预览</span>
              <!-- <el-button size="mini" @click="pageJump(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange" background
            :current-page.sync="currentPage3" :page-size="10"  layout="prev, pager, next, jumper" :total="totalNumber">
          </el-pagination>
        </p>
    </el-card>
    <!-- 第二大块结束 -->
  </div>
    <!-- 第三大块开始 -->
    <div class="buttonBox">
      <el-row :gutter="20">  
        <el-col :span="14" :offset="1">
              <el-row :gutter="20">
                <el-col :span="6" >
                  <div >
                      <el-button  @click="onSubmit" class="checkEmpty checkEmpty1">报送</el-button>
                  </div>
                </el-col>
                <el-col :span="6" :offset="1">
                  <div >
                      <el-button  @click="onSubmit" class="checkEmpty checkEmpty3">删除</el-button>
                  </div>
                </el-col>
                <el-col :span="6" :offset="1">
                  <div >
                      <router-link to="pageLoading"><el-button  class="checkEmpty checkEmpty2">返回</el-button></router-link>
                  </div>
                  </el-col>
              </el-row>
          </el-col>
        </el-row>  
    </div>
    <!-- 第三大块结束 -->
  </div>
</template>

<script>
 export default {
   data() {
     return {
       // 第一大块变量开始
       labelPosition: 'right', // 列表对齐方式
       sizeForm: {
         name: 'XXXX.ZIP', // 报文包名
         upTime: '2017-10-30 10:35:00', // 上传时间
         bagSize: '300000B', // 报文包大小
         fileType: '大额交易报告新增报文', // 报文类型
         fileNumber: 4 // 报文数量
       },
       // 第一大块变量结束

       // 第二大块变量开始
       tableData: [{
         name: 'NBHC0000000000001‐20180801‐00000001.ZIP',
         upType: '大额交易报告新增报文',
         otherBag: '无'
       }, {
         name: 'NBHC0000000000001‐20180801‐00000002.ZIP',
         upType: '大额交易报告新增报文',
         otherBag: '无'
       }],
       tableColumn: [{
         headName: '序号',
         popover: false
       }, {
         headName: '姓名',
         popover: false
       }, {
         headName: '操作',
         popover: false
       }],
       currentPage3: 1, // 分页
       totalNumber: 1 // 列表数量

     }
   },
   methods: {
     onSubmit() {
       console.log('submit!')
     },
     // 点击跳转
     pageJump(index, row) {
       this.$router.push({ path: 'filePreview', query: { lastPage: 'notFound' }})
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
     //  alert(Math.ceil(this.tableData.length))
     this.totalNumber = Math.ceil((this.tableData.length) / 10)
   },
   // 监控列表项的变化
   watch: {
     totalNumber: function() {
       alert(Math.ceil(this.tableData.length / 10))
     }
   }
 }
</script>

<style >
.notFound{
  /* background: #f5f5f5;
  padding: 20px; */
}
.notFound .paddingLeftNone{
  padding-left: 0px !important;
}
.notFound .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.notFound .line{
  text-align: center;
}
.notFound .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.notFound .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.notFound .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.notFound .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.notFound .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.notFound .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  
      /* 第一大块结束 */
.notFound  .secondBox{
  margin-top: 20px; 
}
.notFound .secondBox .el-table th>.cell{
  text-align: center;
}

.notFound .secondBox .el-table .cell{
  text-align: center;
}

/* 按钮 */
.notFound .buttonBox{
    margin-top: 45px;
}
.notFound .checkEmpty{
  width: 100%;
  /* border: 1px solid rgb(145,145,145); */
  color: #fff;
  background-color: rgb(228,228,228);
  padding:6px 20px;
}
.notFound .checkEmpty1{
  background-color: #1a90f4;
}
.notFound .checkEmpty2{
  background-color: #ff9a1b;
}
.notFound .checkEmpty3{
  background-color: #e95152;
}


</style>

