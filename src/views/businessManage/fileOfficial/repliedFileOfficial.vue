<template>
      <el-card class="repliedFileDfficials">
        <div class="card-wrap">
          <div class="contents">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
          </div>
          <div class="extends">
              <span class="btminfor">附件：<span>{{fujian}}</span></span>
              <span class="btminfor btminfor-two">发送日期: <span>{{sendData}}</span></span>
            </div>
            
            <el-card class="replywrap" style="margin-top:15px">
              <span class="replytitle">公函回复信息:</span>
              <el-form label-width="80px">
                <el-form-item label="回复内容:">
                  <span>{{backContent}}</span>
                </el-form-item>
                <el-form-item label="回复附件:">
                  <span>{{backFujian}}</span>
                </el-form-item>
              </el-form>
            </el-card>
        </div>
        <div class="btns">
          <router-link to="fileOfficial">
            <el-button type="primary">
              <i class="el-icon-back"></i> 返回
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
      sendData: '2017年12月1日', // 发送日期
      backContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', // 回复内容
      backFujian: 'XXX.pdf' // 回复附件
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.repliedFileDfficials{
  // padding:0 9%;
}
.contents{
  padding:0 9%;
}
.extends{
  margin-top: 15vh;
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
 .repliedFileDfficial .replywrap {
    margin-top:15px;
    background:#eee;
    color:#666;
  }
.repliedFileDfficial  .el-form {
    width:60%;
    margin:0 auto;
  }
 .repliedFileDfficial .el-card {
    box-shadow: none;
}
 .btns{
  text-align:center;
  margin-top:30px;
  margin-bottom:15px;
}
</style>
