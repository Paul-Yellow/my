<template>
    <el-row class='resetPassword-bg'>
        <el-col span="7" class='resetPassword-bg resetPassword-bg-left'></el-col>
        <el-col span="16">
            <el-row class='resetPassword-row'>
                <p><span class='resetPassword-title'>中国反洗钱监测分析系统</span></p>
                <span class='resetPassword-title2'>China Anti-Money Laundering Monitoering&Analysis System</span>
            </el-row>
            <el-row class='resetPassword-row2'>
                <span class='resetPassword-title-card1'>密码重置申请</span>
            </el-row>
            <el-row class='resetPassword-row3'>
                <el-col :span="16" :offset="4">
                    <el-form :model='resetForm' :rules='rules' ref='resetForm'>
                        <el-row>
                            <fieldset class='fieldset-style'>
                                <legend class='fieldset-label-style'>基本信息：</legend>
                                <el-row>
                                    <el-col :span='12'>
                                        <el-form-item label='' prop='code'>
                                            <span class='form-label'>金融机构编码：</span>
                                            <el-input name='code' v-model='resetForm.code' style='width: 60%' class='form-input' placeholder='金融机构编码'></el-input>
                                        </el-form-item>
                                        <el-form-item label='' prop='chargeName'>
                                            <span class='form-label'>反洗钱工作负责人姓名：</span>
                                            <el-input name='chargeName' v-model='resetForm.chargeName' style='width: 45%' class='form-input' placeholder='金融机构编码'></el-input>
                                        </el-form-item>
                                        <el-form-item label='' prop='opeopleName'>
                                            <span class='form-label'>联系人姓名：</span>
                                            <el-input name='opeopleName' v-model='resetForm.opeopleName' style='width: 65%' class='form-input' placeholder='金融机构编码'></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span='12'>
                                        <el-form-item label='' prop='name'>
                                            <span class='form-label'>报告机构名称：</span>
                                            <el-input name='name' v-model='resetForm.name' style='width: 60%' class='form-input' placeholder='报告机构名称'></el-input>
                                        </el-form-item>
                                        <el-form-item label='' prop='chargePhone'>
                                            <span class='form-label'>反洗钱工作负责人电话：</span>
                                            <el-input name='code' v-model='resetForm.chargePhone' style='width: 45%' class='form-input' placeholder='金融机构编码'></el-input>
                                        </el-form-item>
                                        <el-form-item label='' prop='peoplePhone'>
                                            <span class='form-label'>联系人电话：</span>
                                            <el-input name='peoplePhone' v-model='resetForm.peoplePhone' style='width: 65%' class='form-input' placeholder='金融机构编码'></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row style="height:3em">
                                    <el-form-item label='' prop='info'>
                                            <span style='vertical-align:top' class='form-label'>备注：</span>
                                            <el-input type='textarea' name='info' class='form-input-textarea' placeholder='备注'></el-input >
                                        </el-form-item>
                                </el-row>
                                <el-row style="height:0.25em">

                                </el-row>
                            </fieldset>
                        </el-row>
                        <el-row style='margin-top:1.5em'>
                            <fieldset class='fieldset-style'>
                                <legend class='fieldset-label-style'>相关附件：</legend>
                                    <el-row style='margin-top:0.5em'>
                                        <el-col :span='17'>
                                            <el-form-item label='' prop='file'>
                                                <span class='form-label'>请选择重置密码申请函扫描件：</span>
                                                <el-input name='file' style='width: 55%' class='form-input' placeholder='请选择重置密码申请函扫描件'></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span='7'>
                                            <el-button class='btn-file-open'>浏览</el-button>
                                        </el-col>
                                    </el-row>
                            </fieldset>
                        </el-row>
                    </el-form>
                    <el-row style='margin-top:1.5em'>
                        <el-col :span='8'><el-button @click.native.prevent='openPage("/login")' class='btn-return-login'>返回登录页面</el-button></el-col>
                        <el-col :span='14' :offset='2'><el-button @click.native.prevent='handleSubmit' type='primary' class='btn-submit-login'>提交</el-button></el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
      <el-dialog :visible.sync='centerDialogVisible' width='26em' center>
        <el-row style='text-align:center'>
            <img src='../../../assets/login/modal-ico.png' />
        </el-row>
        <el-row style='text-align:center'>
            <span style='fontSize:0.9em'>密码重置申请提交成功！</span>
        </el-row>
        <div slot='footer' class='dialog-footer'>
            <el-button class='dialog-btn' @click.native.prevent='openPage("/login")'>返回登录页面</el-button>
        </div>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'resetPassword',
  data() {
    return {
      centerDialogVisible: false,
      resetForm: {
        code: '',
        name: '',
        chargeName: '',
        chargePhone: '',
        opeopleName: '',
        peoplePhone: '',
        info: '',
        file: ''
      },
      rules: {
        code: [{ required: true, message: '请输入金融机构编码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入报告机构名称', trigger: 'blur' }],
        chargeName: [
          { required: true, message: '请输反洗钱工作负责人姓名', trigger: 'blur' }
        ],
        chargePhone: [
          { required: true, message: '请输入反洗钱工作负责人电话', trigger: 'blur' }
        ],
        opeopleName: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
        peoplePhone: [{ required: true, message: '请输入联系人电话', trigger: 'blur' }],
        info: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        file: [{ required: true, message: '请选择重置密码申请函扫描件', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.resetForm.validate(valid => {
        this.centerDialogVisible = true
      })
    //   this.centerDialogVisible = true
    },
    openPage(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.resetPassword-bg {
  background: url('../../../assets/login/login-bg.jpg');
  background-size: 100% 100%;
  height: 100vh;
  min-height:45vw;
  font-size: 1vw !important;

  .resetPassword-bg-left {
    background: url('../../../assets/login/login-bg-left.jpg');
    background-size: 100% 100%;
  }

  .resetPassword-title {
    font-size: 3em;
    color: rgb(38, 43, 86);
    font-family: '微软雅黑';
  }

  .resetPassword-title-card1 {
    font-size: 1.2em;
    font-family: PingFangSC-Thin, sans-serif;
    color: rgb(46, 88, 148);
    font-weight: 300;
  }

  .resetPassword-title2 {
    font-size: 1.1em;
    color: #000;
    font-family: '微软雅黑';
  }

  .resetPassword-row {
    text-align: center;
    padding-top: 5%;
  }

  .resetPassword-row3 {
    text-align: center;
    padding-top: 2%;
    padding-bottom: 5%;
  }

  .resetPassword-row2 {
    text-align: center;
    padding-top: 2.5em;
  }

  .btn-return-login {
    width: 100%;
    background: rgb(223, 125, 54);
    border-color: rgb(223, 125, 54);
    color: #fff;
    font-size: 0.9em;
    box-shadow: 0em 0.1em 0.25em rgb(223, 125, 54);
  }

  .btn-submit-login {
    width: 100%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 0.9em;
    box-shadow: 0em 0.1em 0.25em rgb(53, 117, 223);
  }

  .fieldset-style {
    border: 0.05em solid rgb(46, 88, 148);
    border-radius: 0.2em;
    margin: 0% auto;
  }

  .fieldset-label-style {
    color: rgb(46, 88, 148);
    font-size: 0.9em;
  }

  .dialog-btn {
    width: 85%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 0.9em;
    box-shadow: 0em 0.1em 0.25em rgb(53, 117, 223);
    height: 2em;
  }

  .form-input {
    height: 100%;
    font-size: 0.8em;
  }
  .form-label {
    // font-size: 0.8em;
    color: #6e6e6e;
  }

  .form-input-textarea {
    font-size: 0.8em;
    width: 88%;
    height: 100%;
  }

  .btn-file-open {
    width: 85%;
    background: rgb(51, 190, 192);
    border-color: rgb(51, 190, 192);
    color: #fff;
    font-size: 0.8em;
    height: 2.5em;
    box-shadow: 0em 0.1em 0.25em rgb(51, 190, 192);
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
  .el-dialog__header {
    padding: 0.75em 0.75em 0.5em;
  }
  .el-form-item {
    height: 2.1em;
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

  // .el-textarea__inner {
  //   height: 2em;
  // }

  .el-form-item__content {
    font-size: 0.8em;
  }
}
</style>
