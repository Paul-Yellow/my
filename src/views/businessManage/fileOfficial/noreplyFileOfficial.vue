<template>
      <el-card class="norepliedFileDfficials">
        <div class="card-wrap">
          <div class="contents">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
          </div>
            <div class="extends">
              <span class="btminfor">附件：<span>{{fujian}}</span></span>
              <span class="btminfor btminfor-two">发送日期: <span>{{sendData}}</span></span>
            </div>
        </div>
        <div class="btn">
          <router-link to="replyFileOfficial"><el-button >回复</el-button></router-link>
          <router-link to="fileOfficial">
            <el-button type="primary"> 
              <i class="el-icon-back" ></i> 返回
            </el-button>
          </router-link>
        </div>
      </el-card>
</template>

<script>
export default {
  data: function() {
    return {
      title: '关于XXXX的通知', // 标题
      content: '文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情文件公函详情', // 正文内容
      fujian: 'XXX.pdf', // 附件
      sendData: '2017年12月1日' // 发送日期
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.norepliedFileDfficials{
  // padding:0 9%;
}

.contents{
  padding:0 9%;
}
.extends{
  margin-top: 30vh;
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
    width:60%;
    margin:0 auto;
  }
  .btn { 
    text-align: center; 
    margin-top:30px;
    margin-bottom:20px;
  }
</style>
