<template>
  <div class="BranchDetail">
    <el-form :label-position="labelposition">

      <el-card>
        <el-row>
          <el-col :span="8">
            <el-form-item label="报告机构名称 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="网点名称 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>        
          <el-col :span="8">
            <el-form-item label="内部网点代码 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="现代化支付系统行号 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="账号管理系统行号 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="其他类型网点代码 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col> 
          <el-col :span="8">
            <el-form-item label="所在地区 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="网点地址 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="版本号 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生效日期 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>  
            <el-col :span="8">
            <el-form-item label="创建时间 ：">
              <span>上海某某银行</span>
            </el-form-item>
          </el-col>                                                      
        </el-row>


      <el-row>
        <el-col :span="16" offset="4">


        </el-col>
      </el-row>        
      </el-card>

      

    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'BranchDetail',
    data() {
      return {
        labelposition: 'top'
      }
    }
  }
</script>

<style scoped>
.BranchDetail{
  padding: 24px;
   background-color:  #f0f2f5;
}


</style>