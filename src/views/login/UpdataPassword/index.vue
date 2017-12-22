<template>
  <el-row class='login-bg'>
      <el-col :span="7" class='login-bg login-bg-left'></el-col>
      <el-col :span="16">
          <el-row class='login-row'>
            <p><span class='login-title'>中国反洗钱监测分析系统</span></p>
            <span class='login-title2'>China Anti-Money Laundering Monitoering&Analysis System</span>
          </el-row>
          <el-row class='login-row2'>
            <span class='login-title-card1'>修改密码</span>
          </el-row>
          <el-row class='login-row3'>
            <el-col :span="11" :offset="8">
                <el-form :model='updataPwForm' :rules='rules' ref='updataPwForm'>
                    <el-col>
                        <el-row>
                            <el-col :span="19">
                                <el-form-item label='' prop='passwd'>
                                    <el-input type=passwd v-model='updataPwForm.passwd' autoComplete='on' class='form-input' placeholder='现在的密码'></el-input>
                                </el-form-item>
                                <el-form-item label='' prop='newPasswd' style="margin-bottom:0.5em">
                                    <el-input type=passwd v-model='updataPwForm.newPasswd' autoComplete='on' class='form-input' placeholder='新的密码'></el-input>
                                </el-form-item>
                                <span style="color:#ACACAC;font-size:0.7em">6-16位、区分大小写、必须包含数字、字母</span>
								                <el-form-item label='' prop='nextNewPasswd'>
                                    <el-input type=password v-model='updataPwForm.nextNewPasswd' autoComplete='on' class='form-input' placeholder='确认新的密码'></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="19">
                                <el-form-item label='' class='form-item-captcha' prop='captcha'>
                                    <el-input  v-model='updataPwForm.captcha' @keyup.enter.native='handleLogin' class='form-input' placeholder='验证码'></el-input>
                                </el-form-item>
                                <img class='login_cacaptcha' src='.././login-captcha.jpg'/>
                            </el-col>
                            <el-col :span="4" class='tip-col'>
                                <div style='margin-top:0.1em'>点击图片可</div>
                                <div style='margin-top:0.35em'>更换验证码</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="19">
                                <p><el-button class='login-btn' @click.native.prevent='handleSubmit'>提交</el-button></p>
								                <el-button class='login-btn-return' @click.native.prevent='openPage("/login")'>返回</el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-form>
            </el-col>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'updataPassword',
  data() {
    return {
      showInfo: false,
      updataPwForm: {
        passwd: '',
        newPasswd: '',
        nextNewPasswd: '',
        captcha: ''
      },
      rules: {
        passwd: [{ required: true, message: '请输入默认密码', trigger: 'blur' }],
        newPasswd: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
        nextNewPasswd: [{ required: true, message: '请确认新密码', trigger: 'blur' }],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    openPage(url) {
      this.$router.push(url)
    },
    handleSubmit() {
      this.showInfo = !this.showInfo
      this.$refs.updataPwForm.validate(valid => {
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
.login-bg {
  background: url(".././login-bg.jpg");
  background-size: 100% 100%;
  min-height:45vw;
  height: 100vh;
  font-size: 1vw;

  .login-bg-left {
    background: url(".././login-bg-left.jpg");
    background-size: 100% 100%;
  }

  .login-title {
    font-size: 3em;
    color: rgb(38, 43, 86);
    font-family: "微软雅黑";
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
    font-family: "微软雅黑";
  }

  .login-row {
    text-align: center;
    padding-top: 2.5em;
  }

  .login-row3 {
    text-align: center;
    padding-top: 2em;
  }

  .login-row2 {
    text-align: center;
    padding-top: 2em;
  }

  .tip-col {
    font-size: 0.75em;
    color: #acacac;
    text-align: center;
  }

  .form-input {
    height: 100%;
    font-size: 0.9em;
  }
  .form-item-captcha {
    width: 70%;
    float: left;
  }
  .el-input__inner {
    height: 100%;
  }
    .login_cacaptcha {
    float: right;
    cursor: pointer;
    width: 25%;
    height: 2.6em;
  }
    .login-btn {
    width: 100%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 1.2em;
    box-shadow: 0em 0.15em 0.35em rgb(53, 117, 223);
  }
  .login-btn-return {
    width: 100%;
    background: rgb(223, 125, 54);
    border-color: rgb(223, 125, 54);
    color: #fff;
    font-size: 1.2em;
    box-shadow: 0em 0.15em 0.35em rgb(223, 125, 54);
  }

  .el-button {
    padding: 0.25em 0.75em;
  }
  .el-dialog__body {
    font-size: 0.5em;
  }
  .el-dialog--center .el-dialog__body {
    padding: 1.25em 1.35em 1.5em;
  }
  .el-dialog--center .el-dialog__header {
    padding-top: 1.5em;
  }
  .el-dialog__header {
    padding: 0.75em 0.75em 0.5em;
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
}
</style>
