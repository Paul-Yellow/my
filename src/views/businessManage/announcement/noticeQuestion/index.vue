<template>
  <div class="app-container">
    <el-card class="noticeQuestion-style">
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
        title: '如何修改已提交的可疑交易报告？',
        text: [
          '可以通过发布可疑交易报告修改报文来修改已提交的可疑交易报告。',
          '一份可疑交易报告修改报文必须与一份可疑交易报告新增报文相对应，其命名格式为：C(B/S/I)S金融机构编码(14位)‐报送日期(8位)‐报文编号(8位).XML ， 其中，“报送日期(8位)”和“报文编号(8位)”必须与欲修改的可疑交易报告新增报文相一致。'
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
.noticeQuestion-style {
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
