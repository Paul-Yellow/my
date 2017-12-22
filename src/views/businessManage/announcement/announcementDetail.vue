<template>
      <el-card>
        <div class="card-wrap">
            <h3>中国反洗钱监测分析中心与厄瓜多尔金融经济分析组签署反洗钱反恐怖融资金融情报交流合作谅解备忘录</h3>
            <p>
             近日，中国反洗钱监测分析中心与厄瓜多尔金融经济分析组完成了《关于反洗钱和反恐怖融资金融情报交流合作谅
             解备忘录》的签署工作。这是中国反洗钱监测分析中心与境外金融情报机构签署的第48份合作文件。根据该谅解备
             忘录，双方将基于互惠原则在涉嫌洗钱、恐怖融资及其他相关犯罪的信息收集、研判和互协查方面开展合作。

                厄瓜多尔金融经济分析组（Financial and Economic Analysis Unit-UAFE Ecuador）创立于2005年，2008年
                开始正式运作，是行政型金融情报机构，隶属于厄经济政策协调部，负责接收、保存、处理及分析异常和不正当交
                易信息，并在必要时向检察机关提交报告。
            </p>
            <div>
              <span class="btminfor">附件：<span>XXX.pdf</span></span>
              <span class="btminfor btminfor-two">发送日期: <span>2017年12月1日</span></span>
            </div>
        </div>
        <div class="btn">
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
