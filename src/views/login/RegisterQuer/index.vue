<template>
  <el-row class='registerQuer-style'>
      <el-col :span="7" class='registerQuer-style login-bg-left'></el-col>
      <el-col :span="16">
          <el-row class='login-row'>
            <p><span class='login-title'>中国反洗钱监测分析系统</span></p>
            <span class='login-title2'>China Anti-Money Laundering Monitoering&Analysis System</span>
          </el-row>
          <el-row class='login-row2'>
            <span class='login-title-card1'>报告机构注册申请进度查询</span>
          </el-row>
          <el-row class='login-row3'>
            <el-col :span="11" :offset="8">
                <el-row>
                    <el-form :model='querForm' :rules='rules' ref='querForm'>
                        <el-col>
                            <el-row>
                                <el-col :span='19'>
                                    <el-form-item label='' prop='code'>
                                        <el-input name='code' v-model='querForm.code' class='form-input' placeholder='申请ID'></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span='19'>
                                    <el-form-item label='' class='form-item-captcha' prop='captcha'>
                                        <el-input name='captcha'  v-model='querForm.captcha' class='form-input' placeholder='验证码'></el-input>
                                    </el-form-item>
                                    <img class='login_cacaptcha' src='../../../assets/login/login-captcha.jpg'/>
                                </el-col>
                                <el-col :span='4' class='tip-col'>
                                    <div style='margin-top:0.2em'>点击图片可</div>
                                    <div style='margin-top:0.35em'>更换验证码</div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span='19'>
                                  <p><el-button class='login-btn' @click.native.prevent='handleSubmit'>查询进度</el-button></p>
										              <el-button class='login-btn-return' @click.native.prevent='openPage("/login")'>返回登录</el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-form>
                </el-row>
            </el-col>
          </el-row>
      </el-col>
      <el-dialog title='申请进度查询结果' :visible.sync='centerDialogVisible' width='25em' center>
		<fieldset class='fieldset-style'>
        <div class="dialog-style">
            <span>报告机构注册申请正在审核中...</span>
        </div>
		</fieldset>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'registerQuer',
  data() {
    return {
      centerDialogVisible: false,
      querForm: {
        code: '',
        captcha: ''
      },
      rules: {
        code: [
          {
            required: true,
            message: '请输入申请ID',
            trigger: 'blur'
          }
        ],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    openPage(url) {
      this.$router.push(url)
    },
    handleSubmit() {
      this.centerDialogVisible = !this.centerDialogVisible
      this.$refs.querForm.validate(valid => {
        if (valid) {
        //   this.centerDialogVisible = !this.centerDialogVisible
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.registerQuer-style {
  background: url("../../../assets/login/login-bg.jpg");
  background-size: 100% 100%;
  height: 100vh;
  min-height:45vw;
  font-size: 1vw;

  .login-bg-left {
    background: url("../../../assets/login/login-bg-left.jpg");
    background-size: 100% 100%;
  }

  .login-title {
    font-size: 3em;
    color: rgb(38, 43, 86);
  }

  .login-title-card1 {
    font-size: 1.2em;
    font-family: PingFangSC-Thin, sans-serif;
    color: rgb(46, 88, 148);
    font-weight: 300;
  }

  .login-title2 {
    font-size: 1.1em;
    color: #000;
  }

  .login-row {
    text-align: center;
    padding-top: 5%;
  }

  .login-row3 {
    text-align: center;
    padding-top: 2%;
    padding-bottom: 5%;
  }

  .login-row2 {
    text-align: center;
    padding-top: 2.5em;
  }

  .form-input {
    height: 100%;
  }

  .tip-col {
    font-size: 0.75em;
    color: #acacac;
    text-align: center;
  }

  .login_cacaptcha {
    float: right;
    cursor: pointer;
    width: 25%;
    height: 2.6em;
  }

  .form-item-captcha {
    width: 70%;
    float: left;
  }

  .login-btn {
    width: 100%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 1.2em;
    box-shadow: 0em 0.1em 0.35em rgb(53, 117, 223);
  }

  .login-btn-return {
    width: 100%;
    background: rgb(223, 125, 54);
    border-color: rgb(223, 125, 54);
    color: #fff;
    font-size: 1.2em;
    box-shadow: 0em 0.1em 0.35em rgb(223, 125, 54);
  }

   .fieldset-style {
    border-radius: 0.2em;
    margin: 0% auto;
  }

  .dialog-style {
	  text-align: center;
	  font-size:0.9em;
	  color: #666;
	  margin-top:3em;
	  margin-bottom:3em
  }
  
  .el-button {
    padding: 0.25em 0.75em;
  }
  .el-dialog--center .el-dialog__body {
    padding: 1.25em 1.35em 1.5em;
  }
  .el-dialog--center .el-dialog__header {
    padding-top: 1.5em;
  }
  .el-form-item {
    height: 2.6em;
    margin-bottom: 1.1em;
  }
  .el-form-item__content {
    height: 100%;
    font-size: 0.5em;
    line-height:2em;
  }
  .el-input__inner {
    height: 100%;
  }
  .el-input--small {
    font-size: 1.8em;
  }
}
</style>
