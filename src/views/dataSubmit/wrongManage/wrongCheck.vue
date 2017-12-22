<template>
  <div class="wrongCheck">
   <div style="padding:20px 10px">
    <!-- <div style="font-weight:600;margin-bottom:10px;">交易报文加载</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <!-- <div slot="header" class="clearfix">
        <span >报文详情</span>
      </div> -->
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="130px">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm.code}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="报告机构名称 :">
              <span>{{sizeForm.name}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="原报文包 :">
                <span>{{sizeForm.originBag}}</span>
              </el-form-item>
          </el-col>
        </el-row>
        
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="原报文 :">
              <span>{{sizeForm.originFile}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="原报文报送方式 :">
              <span>{{sizeForm.originSendWay}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="原报文报送时间 :">
                <span>{{sizeForm.originSendTime}}</span>
              </el-form-item>
          </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="异常生成时间 :">
              <span>{{sizeForm.wrongTime}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="异常发生环节 :">
              <span>{{sizeForm.wrongRing}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item label="异常信息 :">
              <el-input type="textarea" v-model="sizeForm.wrongInfo"></el-input>
            </el-form-item>
              <!-- <div style="" class="wrongDetail">{{sizeForm.wrongInfo}}</div> -->
          </el-col>  
        </el-row>
      </el-form>
    </el-card>
    <!-- 第一大块结束   -->
    
  </div>
    <!-- 第二大块开始 -->
    <div class="buttonBox">
      <el-row :gutter="20">  
        <el-col :span="14" :offset="1">
              <el-row :gutter="20">
                <el-col :span="6" :offset="1">
                  <div >
                      <el-button @click="goBack"  class="checkEmpty checkEmpty2">返回</el-button>
                  </div>
                  </el-col>
              </el-row>
          </el-col>
        </el-row>  
    </div>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
 export default {
   data() {
     return {
       // 第一大块变量开始
       labelPosition: 'right', // 列表对齐方式
       sizeForm: {
         code: 'C0000000000001', // 金融机构编码
         name: '上海**银行', // 报告机构名称
         originBag: 'CSSC0000000000001‐20171206‐00000001.ZIP', // 原报文包
         originFile: 'CSSC0000000000001‐20171206‐00000004.XML', // 原报文
         originSendWay: '页面加载', // 原报文报送方式
         originSendTime: '2017-12-06 08:30', // 原报文报送时间
         wrongTime: '2017-12-06 09:05', // 异常生成时间
         wrongRing: '数据解包', // 异常发生环节
         wrongInfo: '异常信息异常信息异常信息异常信息' // 异常信息
       }
       // 第一大块变量结束

     }
   },
   methods: {
     goBack() {
       this.$router.push({ path: 'wrongManage' })
     }
   },
   //  初始化列表的页数，每十项一页
   mounted: function() {
     //  alert(Math.ceil(this.tableData.length))
     //  this.totalNumber = Math.ceil((this.tableData.length) / 10)
   },
   // 监控列表项的变化
   watch: {
     //  totalNumber: function() {
     //     alert(Math.ceil(this.tableData.length / 10))
     //  }
   }
 }
</script>

<style >
.wrongCheck{
  /* background: #f5f5f5;
  padding: 20px; */
}
.wrongCheck .paddingLeftNone{
  padding-left: 0px !important;
}
.wrongCheck .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.wrongCheck .line{
  text-align: center;
}
.wrongCheck .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.wrongCheck .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.wrongCheck .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.wrongCheck .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.wrongCheck .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.wrongCheck .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;
}  
.wrongCheck .wrongDetail{
    border:1px solid #dcdfe6;
    min-height:60px;
    border-radius:4px;
    font-size: 13px;
    line-height: 40px;
    padding-left: 8px;
}
      /* 第一大块结束 */

/* 按钮 */
.wrongCheck .buttonBox{
    margin-top: 30px;
}
.wrongCheck .checkEmpty{
  width: 100%;
  /* border: 1px solid rgb(145,145,145); */
  color: #fff;
  background-color: rgb(228,228,228);
  padding:6px 20px;
}

.wrongCheck .checkEmpty2{
  background-color: #ff9a1b;
}



</style>

