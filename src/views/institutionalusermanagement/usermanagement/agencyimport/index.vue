<template>
  <div class="AgencyImport" id="AgencyImport">
    <el-form label-width="80px">
      <el-card>
             <div slot="header" class="clearfix User-title">
          <span>
            机构网点导入
          </span> 
      </div>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <el-form-item label="版本号 :">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="生效日期 :">
                <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6" class="Ag-fromContanier">
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
          <router-link to="usermanagement"><el-button type="primary">导入</el-button></router-link>
          <router-link to="usermanagement"><el-button >取消</el-button></router-link>
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
   .el-input{
     width: 100%
   }
   .Ag-bottomBtn{
     button{
       margin-left: 40px;
     }
     text-align: center;
     padding-top: 40px;
     padding-bottom: 20px;
   }
   .el-upload{
     width: 100%;
      .el-upload-dragger{
     width: 100%;
   }
   }
  

}


</style>