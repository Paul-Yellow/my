<template>
      <el-card>
        <div class="card-wrap">
            <h3>关于XXXX的通知</h3>
            <p>
              文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件
              公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函
              详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情
              文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件
              公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函
              详情文件公函详情文件公函详情文件公函详情
            </p>
            <div>
              <span class="btminfor">附件：<span>XXX.pdf</span></span>
              <span class="btminfor btminfor-two">发送日期: <span>2017年12月1日</span></span>
            </div>
        </div>
        <div class="btn">
          <router-link to="replyFileOfficial"><el-button type="primary">回复</el-button></router-link>
          <router-link to="fileOfficial"><el-button>返回</el-button></router-link>
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
