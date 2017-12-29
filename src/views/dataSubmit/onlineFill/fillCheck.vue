<template>
  <div class="fileCheck">
    <!-- <div>爱我中华</div> -->

    <!-- 第一大块开始 -->
        <!-- 大额交易新增 -->
    <el-card class="box-card" v-if="firstBoxType == 'addBig'">
      <div slot="header" class="clearfix">
        <span >报告基本信息概览</span>
      </div>
      <el-form ref="form" :model="sizeForm1"   :label-position="labelPosition" label-width="135px" >
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-left:5px">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm1.code}}</span>
            </el-form-item>
          </el-col> 
          <el-col :span="8">
              <el-form-item label="大额交易客户总数 :">
              <span>{{sizeForm1.customerNumber}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="大额交易总数 :">
              <span>{{sizeForm1.bigTotal}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
        <!-- 可疑交易新增/修改 -->
    <el-card class="box-card" v-if="firstBoxType == 'suspicious'">
      <div slot="header" class="clearfix">
        <span>报告基本信息概览</span>
      </div>
      <el-form ref="form" :model="sizeForm2"  :label-position="labelPosition" label-width="160px">
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-left:5px">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm2.code}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="上报网点代码 :">
              <span>{{sizeForm2.onlineCode}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="可疑交易报告紧急程度 :">
              <span>{{sizeForm2.urgentLevel}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20" style="padding-left:5px">
          <el-col :span="8">
            <el-form-item label="可疑主体总数 :">
              <span>{{sizeForm2.suspiciousNumber}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="可疑交易总数 :">
              <span>{{sizeForm2.suspiciousChange}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 大额交易修改 -->
    <el-card class="box-card" v-if="firstBoxType == 'modify'">
      <div slot="header" class="clearfix">
        <span >报告基本信息概览</span>
      </div>
      <el-form ref="form" :model="sizeForm3"  size="mini" :label-position="labelPosition" label-width="135px">
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-left:5px">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm3.code}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="欲修改交易总数 :">
              <span>{{sizeForm3.changeTotal}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人工补正标识 :">
              <span>{{sizeForm3.corrctSign}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 大额交易删除 -->
    <el-card class="box-card" v-if="firstBoxType == 'delete'">
      <div slot="header" class="clearfix">
        <span >报告基本信息概览</span>
      </div>
      <el-form ref="form" :model="sizeForm4"  size="mini" :label-position="labelPosition" label-width="135px">
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-left:5px">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm4.code}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="欲删除交易总数 :">
              <span>{{sizeForm4.deleteTotal}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- 第一大块结束   -->

    <!-- 第二大块开始 -->
    <el-card class="box-card" style="margin-top:20px">
      <div slot="header" class="clearfix">
        <span  >报文信息</span>
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
      <!-- 第二大块结束   -->

         <!-- 第三大块开始 -->
      <div class="buttonBox">
          <!-- 在线填报类按钮   v-if="buttonType == 'online'" -->
        <el-row :gutter="20" v-if="buttonType == 'online'">  
          <el-col :span="14" :offset="1">
                <el-row :gutter="20">
                  <el-col :span="6" >
                    <div >
                        <el-button  @click="onSubmit" type="primary">
                          <i class="el-icon-back"></i> 返回
                        </el-button>  
                    </div>
                  </el-col>
                  <el-col :span="6" >
                    <div >
                        <el-button  @click="onSubmit2" >报送</el-button>
                    </div>
                  </el-col>
                </el-row>
            </el-col>
          </el-row>  
          <!-- 非在线填报类按钮 -->
        <el-row :gutter="20" v-if="buttonType == 'notOnline'">  
          <el-col :span="14" :offset="1">
                <el-row :gutter="20">
                  <el-col :span="6" >
                    <div >
                        <el-button  @click="onSubmit" >报文下载</el-button>
                    </div>
                  </el-col>
                  <el-col :span="6" >
                    <div >
                        <el-button  @click="onSubmit2" >报送</el-button>
                    </div>
                  </el-col>
                  <el-col :span="6" >
                    <div >
                        <el-button  @click="onSubmit3" >返回编辑</el-button>
                    </div>
                  </el-col>
                </el-row>
            </el-col>
          </el-row> 
      </div>
    <!-- 第三大块结束 -->
    </el-card>
    
  </div>
</template>

<script>
 export default {
   data() {
     return {
       firstBoxType: '', // 第一大块类型 addBig(大额交易新增) suspicious(可疑交易新增/修改) modify(大额交易修改) delete(大额交易删除)
       buttonType: '', // online(在线填报类) notOnline(非在线填报类)
       lastPage: '', // 上个页面的名字

       labelPosition: 'right', // 列表对齐方式
       sizeForm1: { // 大额交易新增
         code: 'C0000000000001', // 金融机构编码
         customerNumber: '2', // 大额交易客户总数
         bigTotal: '12' // 报文包大小
       },

       sizeForm2: { // 可疑交易新增/修改
         code: 'C0000000000001', // 金融机构编码
         onlineCode: '0001', // 上报网点代码
         urgentLevel: '非特别紧急', // 可疑交易报告紧急程度
         suspiciousNumber: '1', // 可疑主体总数
         suspiciousChange: '1' // 可疑交易总数
       },

       sizeForm3: { // 大额交易修改
         code: 'C0000000000001', // 金融机构编码
         changeTotal: '2', // 欲修改交易总数
         corrctSign: '12' // 人工补正标识
       },

       sizeForm4: { // 大额交易删除
         code: 'C0000000000001', // 金融机构编码
         deleteTotal: '20' // 欲删除交易总数
       },

       //    提示框变量
       titlePrompt: '报送成功', // 提示框标题
       promprDetail: '您填报的交易报告已报送成功，报文名：CSSC0000000000001‐20181021‐00000004.XML，报送处理结果以回执为准，请下载回执进行查看。' // 提示内容
     }
   },
   methods: {
     onSubmit() {
       this.$router.push({ path: 'onlineFill' })
       //    console.log('submit!')
     },
     onSubmit2() {
       this.$notify({
         title: this.titlePrompt,
         message: this.promprDetail,
         duration: 0
       })
     },
     onSubmit3() {
       console.log(this.lastPage)
     }
   },
   mounted: function() {
     this.firstBoxType = this.$route.query.firstBoxType
     this.buttonType = this.$route.query.buttonType
     console.log(this.$route.query.buttonType)
   }
 }
</script>

<style >
.fileCheck{
  /* background: #f5f5f5;
  padding: 20px; */
  
}
.fileCheck .paddingLeftNone{
  padding-left: 0px !important;
}
.fileCheck .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.fileCheck   .el-card__body {
    padding: 10px;
}  
.fileCheck  .detailBox{
    font-size: 14px;
    line-height: 1.1;
    padding-left: 20px;
}
.fileCheck  .detailBox p{
    margin: 6px 0;
}
.fileCheck .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.fileCheck .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.fileCheck .buttonBox{
  margin: 35px 0 25px 0;
}
.fileCheck .checkEmpty{
  width: 100%;
  color: #fff;
  padding:6px 20px;
}
.fileCheck .checkEmpty1{
  background-color: #ff9a1b;
}
.fileCheck .checkEmpty2{
  background-color: #409EFF;
}
.fileCheck .checkEmpty3{
  background-color: #e95152;
}
      /* 第一大块结束 */



</style>

