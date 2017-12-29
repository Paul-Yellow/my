<template>
  <div class="app-container">
    <el-card class="notic-style">
      <el-row class="notic-title">
        <el-col :span="14" :offset="5">{{ notic.title }}</el-col>
      </el-row>
      <el-row class="notic-text text-div">
        <p class="text-p" v-for="text in notic.text" :key="text">
          {{ text }}
        </p>
      </el-row>
      <el-row class="notic-file">
        <span>附件：</span>
        <router-link to="" v-for="file in notic.file" :key="file"><el-button type="text" class="file-btn">{{ file }}</el-button></router-link>
      </el-row>
      <el-row class="notic-date">
        <span>发布日期：</span>
        <span>{{ notic.date }}</span>
      </el-row>
      <el-row class="notic-return">
        <el-button @click.native.prevent='openPage("/businessManage/announcement")' class='btn-notic-return'>返回</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notic: {
        title: '中国反洗钱监测分析中心与厄瓜多尔金融经济分析组签署反洗钱反恐怖融资金融情报交流合作谅解备忘录',
        text: [
          '近日，中国反洗钱监测分析中心与厄瓜多尔金融经济分析组完成了《关于反洗钱和反恐怖融资金融情报交流合作谅解备忘录》的签署工作。这是中国反洗钱监测分析中心与境外金融情报机构签署的第48份合作文件。根据该谅解备忘录，双方将基于互惠原则在涉嫌洗钱、恐怖融资及其他相关犯罪的信息收集、研判和互协查方面开展合作。',
          '厄瓜多尔金融经济分析组（Financial and Economic Analysis Unit-UAFE Ecuador）创立于2005年，2008年开始正式运作，是行政型金融情报机构，隶属于厄经济政策协调部，负责接收、保存、处理及分析异常和不正当交易信息，并在必要时向检察机关提交报告。'
        ],
        file: ['附件1.doc', '附件2.pdf'],
        date: '2017年8月12日'
      }
    }
  },
  methods: {
    openPage(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.notic-style {
  .notic-title {
    color: #001d38;
    font-size: 1.6em;
    font-weight: 500;
    text-align: center;
  }
  .notic-return {
    text-align: center
  }
  .btn-notic-return {
    background: #ff9a1b;
    border-color: #ff9a1b;
    color: #fff;
  }
  .text-p {
    text-indent: 2em,
  }
  .text-div {
    height: 30em;
    font-size: 1em;
    color: #333333
  }
  .file-btn {
    font-size: 1em;
  }
}
</style>
