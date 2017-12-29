<template>
  <div class="UserQuit">
    <el-card>
      <div slot="header" class="clearfix">
        <span>报告机构退出申请</span>
      </div>
      <div>
        <el-form :model="value"  label-width="100px">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-form-item label="退出原因 ：">
              <el-input type="textarea" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :offset="4">
            <el-form-item label="附件上传 ：">
              <el-upload
                class="uploadContainer"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>             

            </el-form-item>

         
          </el-col>
        </el-row>  
             <div class="In-botomBtn">
                                <el-row>
                                    <el-col>
                                        <el-button type="primary">提交</el-button>
                                        
                                    </el-col>
                                </el-row>                                
                            </div>        
     
        </el-form>


      </div>


    </el-card>
      
  </div>
</template>

<script>
export default {
  name: 'UserQuit',
  data() {
    return {
      value: null,
      labelPosition: 'right'
    }
  }
}
</script>

<style  lang="scss">
.UserQuit{

  .uploadContainer {
      width: 100%;
      .el-upload {
        width: 100%;
        .el-upload-dragger {
          width: 100%;
        }
      }
    }
    .In-botomBtn{
      text-align: center
    }
}

</style>