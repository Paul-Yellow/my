<template>
    <el-card>
      <el-form  ref="form" :model="form" label-width="100px">
        <el-form-item label="选择文件:">
            <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item label="版本号：">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="生效日期：">
            
            <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
            <router-link to="customSuspiciousTrade"><el-button type="primary">导入</el-button></router-link>
            <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-form {
        width: 60%;
        margin: 0 auto;
    }
</style>
