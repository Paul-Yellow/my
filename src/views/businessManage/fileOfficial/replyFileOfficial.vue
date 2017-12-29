<template>
      <el-card>
        <!-- <div class="card-wrap"> -->
            <!-- <el-card class="replywrap"> -->
              <span class="replytitle">文件公函:</span>
              <el-form label-width="100px">
                <el-form-item label="回复内容：">
                  <el-input type="textarea" v-model="textAreaValue"></el-input>
                </el-form-item>
                <el-form-item label="回复附件:">
                  <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-form>
            <!-- </el-card> -->
        <!-- </div> -->
        <div class="btn">
          <router-link to="repliedFileOfficial"><el-button type="primary">回复</el-button></router-link>
          <router-link to="fileOfficial"><el-button>返回</el-button></router-link>
        </div>
      </el-card>
</template>

<script>
export default {
  data: function() {
    return {
      textAreaValue: '' // 文本框内容
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .card-wrap h3 {
    text-align: center;
  }
  .card-wrap p{
    text-indent: 2em;
    font-size:0.9em;
    line-height:1.3em;
    margin-bottom: 4em;
  }
  .btminfor {
    display: block;
    font-size: 0.9em;
  }
  .btminfor-two {
    margin-top:4px;
  }
  .replywrap {
    margin-top:15px;
    background:#eee;
    color:#666;
  }
  .el-form {
    width:60%;
    margin:0 auto;
  }
  .btn { 
    text-align: center; 
    margin-top:10px;
  }
</style>
