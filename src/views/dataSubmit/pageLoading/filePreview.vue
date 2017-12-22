<template>
  <div class="filePreview">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span  style="font-weight:600">报文详情</span>
      </div>
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
    </el-card>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始 -->
    <div class="buttonBox">
      <el-row :gutter="20">  
        <el-col :span="14" :offset="1">
              <el-row :gutter="20">
                <el-col :span="6" >
                  <div >
                      <el-button  @click="returnLastPage" class="checkEmpty checkEmpty1">返回</el-button>
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
       sizeForm: {
         name: 'XXXX.ZIP', // 报文包名
         upTime: '2017-10-30 10:35:00', // 上传时间
         bagSize: '300000B', // 报文包大小
         fileType: '大额交易报告新增报文', // 报文类型
         fileNumber: 4, // 报文数量
         lastPage: ''
       }
       // 第一大块变量结束

     }
   },
   methods: {
     returnLastPage() {
       this.$router.push({ path: this.lastPage })
       console.log('submit!')
     }
   },
   mounted: function() {
     this.lastPage = this.$route.query.lastPage
     console.log(this.$route.query.lastPage)
   }
 }
</script>

<style >
.filePreview{
  /* background: #f5f5f5;
  padding: 20px; */
  
}
.filePreview .paddingLeftNone{
  padding-left: 0px !important;
}
.filePreview .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.filePreview   .el-card__body {
    padding: 10px;
}  
.filePreview  .detailBox{
    font-size: 14px;
    line-height: 1.1;
    padding-left: 20px;
}
.filePreview  .detailBox p{
    margin: 6px 0;
}
.filePreview .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.filePreview .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.filePreview .buttonBox{
    margin-top: 30px;
}
.filePreview .checkEmpty{
  width: 100%;
  /* border: 1px solid rgb(145,145,145); */
  color: #fff;
  background-color: #ff9a1b;
  padding:6px 20px;
}
.filePreview .checkEmpty1{
  /* background-color: orange; */
}

      /* 第一大块结束 */



</style>

