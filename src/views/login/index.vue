<template>
  <el-row class='login-bg'>
      <el-col :span="7" class='login-bg login-bg-left'></el-col>
      <el-col :span="16">
          <el-row class='login-row'>
            <p><span class='login-title'>中国反洗钱监测分析系统</span></p>
            <span class='login-title2'>China Anti-Money Laundering Monitoering&Analysis System</span>
          </el-row>
          <el-row class='login-row2'>
            <span class='login-title-card1'>用户机构登录</span>
          </el-row>
          <el-row class='login-row3'>
            <el-col :span="11" :offset="8">
                <el-row>
                    <el-form :model='loginForm' :rules='rules' ref='loginForm'>
                        <el-col>
                            <el-row>
                                <el-col :span="19">
                                    <el-form-item label='' prop='username'>
                                        <el-input v-model='loginForm.username' class='form-input' placeholder='金融机构编码'></el-input>
                                    </el-form-item>
                                    <el-form-item label='' prop='password'>
                                        <el-input type=password @keyup.enter.native='handleLogin' v-model='loginForm.password' autoComplete='on' class='form-input' placeholder='密码'></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="19">
                                    <el-form-item label='' class='form-item-captcha' prop='captcha'>
                                        <el-input  v-model='loginForm.captcha' @keyup.enter.native='handleLogin' class='form-input' placeholder='验证码'></el-input>
                                    </el-form-item>
                                    <img class='login_cacaptcha' src='./login-captcha.jpg'/>
                                </el-col>
                                <el-col :span="5" class='tip-col'>
                                    <div style='margin-top:0.1em'>点击图片可</div>
                                    <div style='margin-top:0.35em'>更换验证码</div>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="19">
                                  <el-button class='login-btn' @click.native.prevent='handleLogin'>登录</el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-form>
                </el-row>
              <el-row style='margin-top:1em'>
                <el-col :span="19">
                  <span class='login-btn-resetPass' @click='openPage("/resetPassword")'>重置密码</span>
                  <span class='login-btn-register' @click='showDialog'>机构注册</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
      </el-col>
      <el-dialog :visible.sync='centerDialogVisible' width='25em' center>
        <el-row style='text-align:center;margin-bottom:0.6em'>
              <el-col :span="11">
                <el-button class='btn-register' type="primary" @click='openPage("/register")' >机构注册申请</el-button>
              </el-col>
              <el-col :span="11" offset="2">
                <el-button class='btn-registerQuer' @click='openPage("/registerQuer")' >申请进度查询</el-button>
              </el-col>
        </el-row>
    </el-dialog>
  </el-row>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确金融机构编码'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      centerDialogVisible: false,
      loginForm: {
        username: 'admin',
        password: '111111',
        captcha: 'DWSE'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入金融机构编码',
            trigger: 'blur',
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
            validator: validatePassword
          }
        ],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    openPage(url) {
      this.$router.push(url)
    },
    showDialog() {
      this.centerDialogVisible = !this.centerDialogVisible
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.login-bg {
  background: url("./login-bg.jpg");
  background-size: 100% 100%;
  height: 100vh;
  min-height:45vw;
  font-size: 1vw;

  .login-bg-left {
    background: url("./login-bg-left.jpg");
    background-size: 100% 100%;
  }

  .login-title {
    font-size: 3em;
    color: rgb(38, 43, 86);
  }

  .login-title-card1 {
    font-size: 1.2em;
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

  .login-btn {
    width: 100%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 1.2em;
    box-shadow: 0px 0.1em 0.35em rgb(53, 117, 223);
  }

  .tip-col {
    font-size: 0.75em;
    color: #acacac;
    text-align: center;
  }

  .login-btn-resetPass {
    color: #828282;
    float: right;
    font-size: 0.9em;
    cursor: pointer;
  }

  .login-btn-register {
    float: left;
    color: #828282;
    height: 2.6em;
    font-size: 0.9em;
    cursor: pointer;
  }

  .form-input {
    height: 100%;
    font-size: 1.9em;
  }

  .form-item-captcha {
    width: 70%;
    float: left;
  }

  .btn-register {
    width: 100%;
    background: rgb(25, 187, 200);
    border-color: rgb(25, 187, 200);
    color: #fff;
    font-size: 0.9em;
    box-shadow: 0em 0.1em 0.25em rgb(25, 187, 200);
    height: 100%;
  }

  .btn-registerQuer {
    width: 100%;
    background: rgb(45, 140, 226);
    border-color: rgb(45, 140, 226);
    color: #fff;
    font-size: 0.9em;
    box-shadow: 0em 0.1em 0.25em rgb(45, 140, 226);
    height: 100%;
  }
  .login_cacaptcha {
    float: right;
    cursor: pointer;
    width: 25%;
    height: 2.6em;
  }

  .el-button {
    padding: 0.25em 0.75m;
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
