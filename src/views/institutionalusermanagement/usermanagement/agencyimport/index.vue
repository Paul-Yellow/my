<template>
  <div class="AgencyImport" id="AgencyImport">
    <el-form :inline="true">
      <el-card>
        <el-row >
          <el-col :span="16" :offset="4" class="Ag-fromContanier">
            <el-form-item label="版本号" class="Ag-formVersion">
              <el-input  placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="生效日期">
              <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期时间">
              </el-date-picker>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10" :offset="7" class="Ag-fromContanier">
            <el-upload
              class="uploadContainer"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">文件大小不超过500M</div>
            </el-upload>
          </el-col>
        </el-row>
        <div class="Ag-bottomBtn">
          <el-button type="primary">导入</el-button>
          <el-button >取消</el-button>
        </div>
     

      </el-card>

 
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'AgencyImport',
    data() {
      return {
        value1: ''
      }
    }

  }
</script>

<style lang="scss">
#AgencyImport{
  padding: 24px;
  background-color:  #f0f2f5;
.Ag-fromContanier{
  text-align: center;
  .Ag-formVersion{
   margin-right: 8%;
  }
  .uploadContainer{
      text-align: center;
       width: 100%;
      .el-upload {
        width: 100%;
        .el-upload-dragger {
           width: 100%;
        }
      }
      .el-upload__tip{
          text-align: left
        }

    }
   }
   .Ag-bottomBtn{
     button{
       margin-left: 40px;
     }
     text-align: center;
     padding-top: 40px;
     padding-bottom: 20px;
   }

}


</style>