<template>
  <div class="app-container">
    <el-card class="noticeTrain-style">
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
        title: '报送培训标题1',
        text: [
          '报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训',
          '报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训报送培训'
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
.noticeTrain-style {
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
