<template>
      <el-card>
        <!-- <div class="card-wrap"> -->
            <!-- <el-card class="replywrap"> -->
              <div class="replytitle">系统更新日志详情:</div>
              <el-form label-width="120px">
                <el-form-item label="版本号：">
                  <span>v1.0</span>
                </el-form-item>
                <el-form-item label="上线部署日期：">
                  <span>2017-10-31</span>
                </el-form-item>
                <el-form-item label="更新内容：">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-form>
            <!-- </el-card> -->
        <!-- </div> -->
        <div class="btn">
          <router-link to="systemUpdateLog"><el-button type="primary">返回</el-button></router-link>
        </div>
      </el-card>
</template>

<script>
export default {
  data: function() {
    return {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .replytitle {
    margin-bottom: 20px;
  }
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
    width:80%;
    margin:0 auto;
  }
  .btn { 
    text-align: center; 
    margin-top:10px;
  }
</style>
