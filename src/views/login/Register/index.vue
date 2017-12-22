<template>
  <el-row class='register-style'>
      <el-col :span="7" class='register-style login-bg-left'></el-col>
      <el-col :span="16">
          <el-row class='login-row'>
            <p><span class='login-title'>中国反洗钱监测分析系统</span></p>
            <span class='login-title2'>China Anti-Money Laundering Monitoering&Analysis System</span>
          </el-row>
          <el-row class='login-row2'>
            <div><span class='login-title-card1'>报告机构注册申请</span></div>
			      <div v-if="showInfo" style="margin-top:0.25em"><span class='login-title-card2'>*请下载并妥善保管此申请单*</span></div>
          </el-row>
          <el-row class='login-row3'>
            <el-col :span="17" :offset="4">
                <el-form :model='registerForm' :rules='rules' ref='registerForm'>
                    <el-row v-if="showInfo">
                        <fieldset class='fieldset-style'>
                            <legend class='fieldset-label-style'>申请单信息</legend>
							              <el-col :span='11' :offset='1' class="table-col">
                            	<div class='table-row'><span class='table-span1'>申请ID：</span><span class='table-span2'>{{ registerForm.code }}</span></div>
                          	</el-col>
                          	<el-col :span='11' :offset='1'  class="table-col">
                            	<div class='table-row'><span class='table-span1'>申请日期：</span><span class='table-span2'>{{ registerForm.date }}</span></div>
                          	</el-col>
                        </fieldset>
                    </el-row>
					          <el-row style='margin-top:1em'>
                      <fieldset class='fieldset-style'>
                        <legend class='fieldset-label-style'>报告机构基本信息</legend>
                        <div v-if="showInfo">
                          <el-col :span='11' :offset='1' class="table-col">
                            <div class='table-row'><span class='table-span1'>报告机构名称：</span><span class='table-span2'>{{ registerForm.officeName }}</span></div>
                            <div class='table-row'><span class='table-span1'>报告机构：</span><span class='table-span2'>{{ office }}</span></div>
                            <div class='table-row'><span class='table-span1'>当地人民银行分支机构：</span><span class='table-span2'>{{ registerForm.PBOCoffice }}</span></div>
                          </el-col>
                          <el-col :span='11' :offset='1'  class="table-col">
                                <div class='table-row'><span class='table-span1'>总部注册地址：</span><span class='table-span2'>{{ officAdress }}</span></div>
                                <div class='table-row'><span class='table-span1'>备注：</span><span class='table-span2'>{{ registerForm.info }}</span></div>
                              </el-col>
                            </div>
                            <div v-else style="text-align:center;padding-top:0.25em">
                              <el-col :span="12">
                                <el-form-item label='' prop='officeName'>
                                  <span class='form-label'>报告机构名称：</span>
                                  <el-input v-model='registerForm.officeName' style="width:60%" class='form-input' placeholder=''></el-input>
                                </el-form-item>
                                <el-form-item label='' prop='office'>
                                  <span class='form-label'>报告机构：</span>
                                  <el-cascader :options='officeList' v-model='registerForm.office' style="width:68%"  placeholder=''></el-cascader>
                                </el-form-item>
                                <el-form-item label='' prop='PBOCoffice'>
                                  <span class='form-label'>当地人民银行分支机构：</span>
                                  <el-input v-model='registerForm.PBOCoffice' style="width:47%" class='form-input' placeholder=''></el-input>
                                </el-form-item>
                              </el-col>
                              <el-col :span="12">
                                <el-form-item label='' prop='officAdress'>
                                  <span class='form-label'>总部注册地址：</span>
                                  <el-cascader :options='officAdressList' v-model='registerForm.officAdress' style="width:60%" placeholder=''></el-cascader>
                                </el-form-item>
                                <el-form-item label='' prop='info'>
                                  <span class='form-label'>备注：</span>
                                  <el-input type="textarea" :rows="2" v-model='registerForm.info' style="width:75%" class='form-input' placeholder=''></el-input>
                                </el-form-item>
                              </el-col>
                            </div>
                        </fieldset>
                    </el-row>
                    <el-row style='margin-top:1em'>
                        <fieldset class='fieldset-style'>
                            <legend class='fieldset-label-style'>反洗钱工作部门联系信息</legend>
                                <div v-if="showInfo">
                                  <div>
                                    <el-col :span='11' :offset='1' class="table-col">
                                      <div class='table-row'><span class='table-span1'>负责部门名称：</span><span class='table-span2'>{{ registerForm.chargeOfficeName }}</span></div>
                                    </el-col>
                                    <el-col :span='11' :offset='1'  class="table-col">
                                      <div class='table-row'><span class='table-span1'>传真：</span><span class='table-span2'>{{ registerForm.officeFax }}</span></div>
                                    </el-col>
                                  </div>
                                  <div>
                                    <el-col :span='7' :offset='1' class="table-col">
                                      <div class='table-row'><span class='table-span1'>负责人姓名：</span><span class='table-span2'>{{ registerForm.chargeName }}</span></div>
                                      <div class='table-row'><span class='table-span1'>联系人姓名：</span><span class='table-span2'>{{ registerForm.peopleName }}</span></div>
                                    </el-col>
                                    <el-col :span='7' :offset='1'  class="table-col">
                                      <div class='table-row'><span class='table-span1'>办公电话：</span><span class='table-span2'>{{ registerForm.chargeOfficePhone }}</span></div>
                                      <div class='table-row'><span class='table-span1'>办公电话：</span><span class='table-span2'>{{ registerForm.peopleOfficePhone }}</span></div>
                                    </el-col>
                                    <el-col :span='7' :offset='1'  class="table-col">
                                      <div class='table-row'><span class='table-span1'>移动电话：</span><span class='table-span2'>{{ registerForm.chargePhone }}</span></div>
                                      <div class='table-row'><span class='table-span1'>移动电话：</span><span class='table-span2'>{{ registerForm.peoplePhone }}</span></div>
                                    </el-col>
                                  </div>
                                  <div>
                                    <el-col :span='5' :offset='1' class="table-col">
                                      <div class='table-row'><span class='table-span1'>邮编：</span><span class='table-span2'>{{ registerForm.zipCode }}</span></div>
                                    </el-col>
                                    <el-col :span='17' :offset='1'  class="table-col">
                                      <div class='table-row'><span class='table-span1'>通讯地址：</span><span class='table-span2'>{{ registerForm.msgAdress }}</span></div>
                                    </el-col>
                                  </div>
                                </div>
                                <div v-else style="text-align:center;padding-top:0.25em">
                                  <div>
                                    <el-col :span="12">
                                      <el-form-item label='' prop='chargeOfficeName'>
                                        <span class='form-label'>负责部门名称：</span>
                                        <el-input v-model='registerForm.chargeOfficeName' style="width:60%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                      <el-form-item label='' prop='officeFax'>
                                        <span class='form-label'>传真：</span>
                                        <el-input v-model='registerForm.officeFax' style="width:74%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                  </div>
                                  <div>
                                    <el-col :span="8">
                                      <el-form-item label='' prop='chargeName'>
                                        <span class='form-label'>负责人姓名：</span>
                                        <el-input v-model='registerForm.chargeName' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                      <el-form-item label='' prop='peopleName'>
                                        <span class='form-label'>联系人姓名：</span>
                                        <el-input v-model='registerForm.peopleName' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                      <el-form-item label='' prop='chargeOfficePhone'>
                                        <span class='form-label'>办公电话：</span>
                                        <el-input v-model='registerForm.chargeOfficePhone' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                      <el-form-item label='' prop='peopleOfficePhone'>
                                        <span class='form-label'>办公电话：</span>
                                        <el-input v-model='registerForm.peopleOfficePhone' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                      <el-form-item label='' prop='chargePhone'>
                                        <span class='form-label'>移动电话：</span>
                                        <el-input v-model='registerForm.chargePhone' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                      <el-form-item label='' prop='peoplePhone'>
                                        <span class='form-label'>移动电话：</span>
                                        <el-input v-model='registerForm.peoplePhone' style="width:48%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                  </div>
                                  <div>
                                    <el-col :span="6">
                                      <el-form-item label='' prop='zipCode'>
                                        <span class='form-label'>邮编：</span>
                                        <el-input v-model='registerForm.zipCode' style="width:55%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                    <el-col :span="16" :offset="1">
                                      <el-form-item label='' prop='msgAdress'>
                                        <span class='form-label'>通讯地址：</span>
                                        <el-input v-model='registerForm.msgAdress' style="width:73%" class='form-input' placeholder=''></el-input>
                                      </el-form-item>
                                    </el-col>
                                  </div>
                                </div>
                        </fieldset>
                    </el-row>
					          <el-row style='margin-top:1em'>
                      <fieldset class='fieldset-style'>
                            <legend class='fieldset-label-style'>相关附件</legend>
                              <div v-if="showInfo">
                                  <el-col :span='23' :offset='1' class="table-col">
                                    <div class='table-row'><span class='table-span1'>《报告机构基本情况登记表》盖章后扫描件：</span><span class='table-span2'>{{ registerForm.word }}</span></div>
                                    <div class='table-row'><span class='table-span1'>其他各类文件资料扫描件：</span><span class='table-span2'>{{ registerForm.otherWord }}</span></div>
                                  </el-col>
                              </div>
                              <div v-else style="text-align:center;padding-top:0.25em">
                                  <el-col :span='9' class="table-col">
                                    <el-form-item label='' prop='word'>
                                        <el-input v-model='registerForm.word' style="width:100%" class='form-input' placeholder='《报告机构基本情况登记表》盖章后扫描件'></el-input>
                                      </el-form-item>
                                  </el-col>
                                  <el-col :span='4' style="text-align:center">
                                    <el-button class='btn-openfile1'>浏览</el-button>
                                  </el-col>
                                  <el-col :span='7' class="table-col">
                                    <el-form-item label='' prop='otherWord'>
                                        <el-input v-model='registerForm.otherWord' style="width:100%" class='form-input' placeholder='其他各类文件资料扫描件'></el-input>
                                      </el-form-item>
                                  </el-col>
                                  <el-col :span='4' style="text-align:center">
                                    <el-button class='btn-openfile2'>浏览</el-button>
                                  </el-col>
                            </div>
                        </fieldset>
                    </el-row>
                </el-form>
                <el-row style='margin-top:0.75em'>
                <el-col :span='8'><el-button @click.native.prevent='openPage("/login")' class='btn-return'>返回登录页面</el-button></el-col>
                          <el-col :span='14' :offset='2'>
                  <el-button v-if="showInfo" @click.native.prevent='download' class='btn-submit'>下载申请表单</el-button>
                  <el-button v-else @click.native.prevent='handleSubmit' class='btn-submit'>确认并提交</el-button>
                </el-col>
                </el-row>
            </el-col>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      showInfo: false,
      office: '',
      officAdress: '',
      registerForm: {
        code: '123456789', // 申请ID
        date: '20171215', // 申请日期
        officeName: '', // 报告机构名称
        office: [], // 报告机构
        PBOCoffice: '', // 当地人民银行分支机构
        officAdress: [], // 总部注册地址
        info: '', // 备注
        chargeOfficeName: '', // 负责部门名称
        officeFax: '', // 传真
        chargeName: '', // 负责人姓名
        peopleName: '', // 联系人姓名
        chargeOfficePhone: '', // 负责人办公电话
        peopleOfficePhone: '', // 联系人办公电话
        chargePhone: '', // 负责人移动电话
        peoplePhone: '', // 联系人移动电话
        zipCode: '', // 邮编
        msgAdress: '', // 通讯地址
        word: '', // 扫描件
        otherWord: ''// 其他文件
      },
      rules: {
        officeName: [{ required: true, message: '请输入报告机构名称', trigger: 'blur' }],
        office: [{ required: true, message: '请输入报告机构', trigger: 'blur' }],
        PBOCoffice: [{ required: true, message: '请输入当地人民银行分支机构', trigger: 'blur' }],
        officAdress: [{ required: true, message: '请输入总部注册地址', trigger: 'blur' }],
        info: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        chargeOfficeName: [{ required: true, message: '请输入负责部门名称', trigger: 'blur' }],
        officeFax: [{ required: true, message: '请输入传真', trigger: 'blur' }],
        chargeName: [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }],
        peopleName: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
        chargeOfficePhone: [{ required: true, message: '请输入负责人办公电话', trigger: 'blur' }],
        peopleOfficePhone: [{ required: true, message: '请输入联系人办公电话', trigger: 'blur' }],
        chargePhone: [{ required: true, message: '请输入负责人移动电话', trigger: 'blur' }],
        peoplePhone: [{ required: true, message: '请输入联系人移动电话', trigger: 'blur' }],
        zipCode: [{ required: true, message: '请输入邮编', trigger: 'blur' }],
        msgAdress: [{ required: true, message: '请输入通讯地址', trigger: 'blur' }],
        word: [{ required: true, message: '请选择《报告机构基本情况登记表》盖章后扫描件', trigger: 'blur' }],
        otherWord: [{ required: true, message: '请选择其他各类文件资料扫描件', trigger: 'blur' }]
      },
      officeList: [{
        value: 'yinghang',
        label: '银行业',
        children: [{
          value: 'beijingyinghang',
          label: '北京银行'
        }]
      }, {
        value: 'baoxiao',
        label: '保险业',
        children: [{
          value: 'pinanbiaoxian',
          label: '平安保险'
        }]
      }],
      officAdressList: [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州'
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
          value: 'nanjing',
          label: '南京'
        }]
      }]
    }
  },
  methods: {
    openPage(url) {
      this.$router.push(url)
    },
    handleSubmit() {
      this.showInfo = !this.showInfo
      const officeValue = this.registerForm.office
      const adressValue = this.registerForm.officAdress
      const officeList = this.officeList
      const officAdressList = this.officAdressList
      let office = ''
      let officAdress = ''
      if (typeof officeValue !== 'undefined') {
        officeList.map(function(item, i) {
          if (item.value === officeValue[0]) {
            officeList[i].children.map(function(o, j) {
              if (o.value === officeValue[1]) {
                office = officeList[i].label + '/' + officeList[i].children[j].label
              }
            })
          }
        })
      }
      if (typeof adressValue !== 'undefined') {
        officAdressList.map(function(item, i) {
          if (item.value === adressValue[0]) {
            officAdressList[i].children.map(function(o, j) {
              if (o.value === adressValue[1]) {
                officAdress = officAdressList[i].label + '/' + officAdressList[i].children[j].label
              }
            })
          }
        })
      }
      this.office = office
      this.officAdress = officAdress
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          //   this.centerDialogVisible = !this.centerDialogVisible
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    download() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.register-style {
  background: url(".././login-bg.jpg");
  background-size: 100% 100%;
  height: 100vh;
  min-height:45vw;
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

  .login-title-card2 {
    font-size: 0.8em;
    font-family: PingFangSC-Thin, sans-serif;
    color: rgb(243, 59, 3);
    font-weight: 600;
  }

  .login-title2 {
    font-size: 1.1em;
    color: #000;
    font-family: "微软雅黑";
  }

  .login-row {
    text-align: center;
    padding-top: 0.5em;
  }

  .login-row3 {
    text-align: center;
    padding-bottom: 0.75em;
  }

  .login-row2 {
    text-align: center;
    padding-top: 1.25em;
  }

  .form-input {
    height: 100%;
  }

  .el-form-item__label {
    font-size: 0.8em;
  }

  .el-form-item {
    margin-bottom: 0.75em;
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

  .btn-return {
    width: 100%;
    background: rgb(223, 125, 54);
    border-color: rgb(223, 125, 54);
    color: #fff;
    font-size: 0.8em;
    box-shadow: 0em 0.1em 0.25em rgb(223, 125, 54);
  }

  .btn-submit {
    width: 100%;
    background: rgb(53, 117, 223);
    border-color: rgb(53, 117, 223);
    color: #fff;
    font-size: 0.8em;
    box-shadow: 0em 0.1em 0.25em rgb(53, 117, 223);
  }

  .table-span1 {
    font-size: 0.9em;
    color: #858585;
  }

  .table-span2 {
    font-size: 0.8em;
    color: #292929;
  }

  .table-row {
    padding-top: 0.25em;
    padding-bottom: 0.4em;
  }
  .table-col {
    text-align: left;
  }

  .btn-openfile1 {
    width: 90%;
    background: rgb(52, 190, 190);
    border-color: rgb(52, 190, 190);
    color: #fff;
    font-size: 0.8em;
    box-shadow: 0em 0.1em 0.25em rgb(52, 190, 190);
  }

  .btn-openfile2 {
    width: 90%;
    background: rgb(52, 190, 190);
    border-color: rgb(52, 190, 190);
    color: #fff;
    font-size: 0.8em;
    box-shadow: 0em 0.1em 0.25em rgb(52, 190, 190);
  }

  .el-input el-input--suffix {
    height: 1.25em;
  }

  .form-label {
    font-size: 0.8em;
    color: #6e6e6e;
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
    height: 1.8em;
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
  .el-cascader .el-input__inner {
    height: 1.8em;
  }
  .el-input__icon {
    line-height:0.5em
  }
  .el-input {
    font-size: 0.5em;
  }
  .el-cascader {
    font-size: 0.5em;
    line-height: 2em;
  }
  .el-form-item__error {
    font-size: 0.6em;
  }
  .el-textarea__inner {
    height: 2em;
  }
}
</style>
