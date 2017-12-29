<template>
  <div class="filePreview">
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>报文报告</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text"><router-link to="pageLoading">返回</router-link></el-button> -->
      </div>

      <!-- <el-row :gutter="20" >
        <el-col :span="8" >
          <div >
            <span>报文包概要</span>
          </div>
        </el-col>
      </el-row> -->
        <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="140px" class="content">
          <!-- 第一行 -->
          <!-- <el-row :gutter="20">
            <el-col :span="8" :offset="8">
              <el-form-item label="报文包名 :">
                <span>{{sizeForm.code}}</span>
              </el-form-item>
            </el-col>
          </el-row> -->
          
          <!-- 第二行 -->
          <!-- <el-row :gutter="20">
            <el-col :span="8" :offset="8">
              <el-form-item label="大额交易客户总数 :">
                <span>{{sizeForm.totalNumber}}</span>
              </el-form-item>
            </el-col>
          </el-row> -->
          <!-- 第三行 -->
          <!-- <el-row :gutter="20">
            <el-col :span="8" :offset="8">
              <el-form-item label="大额交易总数 :">
                <span>{{sizeForm.changeNumber}}</span>
              </el-form-item>
            </el-col>
          </el-row> -->
        </el-form>

        

      <!-- <el-row :gutter="20" style="margin-bottom:20px">
        <el-col :span="8" >
          <div >
            <span>报文报告</span>
          </div>
        </el-col>
      </el-row> -->
      
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
      <!-- 第一大块结束   -->

      <!-- 第二大块开始 -->
    <div class="buttonBox">
      <!-- <el-row :gutter="20">  
        <el-col :span="24" >
              <el-row :gutter="20">
                <el-col :span="6" :offset="7"> -->
                  <div style="text-align:center">
                      <el-button  @click="returnLastPage" type="primary">
                        <i class="el-icon-back"></i> 返回
                      </el-button>
                  </div>
                <!-- </el-col>
              </el-row>
          </el-col>
        </el-row>   -->
    </div>
    <!-- 第二大块结束 -->
    </el-card>
    

    
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
         totalNumber: '2', // 大额交易客户总数
         changeNumber: '12' // 大额交易总数
       },
       lastPage: '' // 上个页面名称
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
    /* 第一大块开始 */

.filePreview  .detailBox{
    font-size: 14px;
    line-height: 1.1;
    padding-left: 20px;
}
.filePreview  .detailBox p{
    margin: 6px 0;
}
.filePreview .buttonBox{
    margin-top: 45px;
}

      /* 第一大块结束 */



</style>

