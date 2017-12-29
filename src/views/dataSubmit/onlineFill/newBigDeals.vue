<template>
  <div class="newBigDeals">
       <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="350px" >   
    <el-card class="contanier">
      <div slot="header" class="clearfix">
        
        <span>新增大额交易</span><el-button type="primary"  style="marginLeft:30px">导入填报工具</el-button>
        <router-link style="float: right;" to="onlineFill"><el-button   type="info" > 关闭 </el-button></router-link>
      </div>
      
      <div class="">
        <el-row>
          <el-col :span="16" :offset="4">
              <el-form-item
                prop="email"
                label="客户号（CSNM）："
              >
                <el-input v-model="dynamicValidateForm.email"></el-input>
              </el-form-item> 
              <el-form-item 
                v-for="(domain, index) in dynamicValidateForm.domains"
                :label="'国籍-'+(index+1)+'（CTNT）：'"
                :key="domain.key"
              >
              <el-select  v-model="domain.value" filterable placeholder="请选择">
                <el-option v-for="item in dynamicValidateForm.selectData"   :key="item.value"  :label="item.label"   :value="item.value">
                </el-option>
              </el-select> 
               <i v-if="showIcon==1||index==showIcon-1"  @click.prevent="addDomain()" class="el-icon-circle-plus-outline icon-add" ></i>  
              <i v-else @click.prevent="removeDomain(domain)" class="el-icon-remove-outline icon-remove"></i>
              </el-form-item>

              <el-form-item label="客户职业（对私）或客户行业（对公）（CTVC）：">
                <el-input v-model="dynamicValidateForm.Customvalue" placeholder=""></el-input>
              </el-form-item>
             
              <el-form-item  v-for="(inp,index) in dynamicValidateForm.TelInp" 
              :key="inp.key" 
              :label="'客户联系电话-'+(index+1)+'（CCTL）：'" >
                <el-input v-model="inp.value" placeholder=""></el-input>
                <i v-if="dynamicValidateForm.TelInp.length==1 || index== dynamicValidateForm.TelInp.length-1"  @click.prevent="addTelInp()" class="el-icon-circle-plus-outline icon-add" ></i>
                <i v-else @click.prevent="removeTelInp(inp)" class="el-icon-remove-outline icon-remove"></i> 
              </el-form-item>


              
              <el-form-item  v-for="(ad,index) in dynamicValidateForm.addressData" 
              :key="ad.key" 
              :label="'客户住址/经营地址-'+(index+1)+'（CTAR）'" >
                <el-input v-model="ad.value" placeholder=""></el-input>
                <i v-if="dynamicValidateForm.addressData.length==1||index==dynamicValidateForm.addressData.length-1"  @click.prevent="addAdress()" class="el-icon-circle-plus-outline icon-add" ></i>
                <i v-else @click.prevent="removeAdress(ad)" class="el-icon-remove-outline icon-remove"></i> 
              </el-form-item>
              <el-form-item label="客户其他联系方式（CCEI）：">
                <el-input v-model="dynamicValidateForm.addressValue" placeholder=""></el-input>
              
              </el-form-item>
       
              

            
                  
          </el-col>
        </el-row>
        <!-- 分割线 -->
       <div class="el-divider el-divider-horizontal"></div>
      </div>
      <!-- 交易日期 -->
      <div>
        <el-row>
          <el-col :span="16" :offset="4">
            <el-form-item label="大额交易发生日期（HTDT）：">
              <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 表格 -->
<el-popover
  ref="popover5"
  placement="top"
  width="160"
  v-model="visible2">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
  </div>
</el-popover>
        <div>
          <el-row class="tableTitle">
            <el-col :span="24">
              <span >大额交易</span> 
              <el-button type="primary" style="marginLeft:20px" @click="dialogFormVisible = true">新建大额交易</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="totalItem">
                <span>共 <em>{{tableData.length}}</em> 条</span>
              </div>
              <el-table
            :data="tableData"
              style="width: 100%">
                <el-table-column
                label="序号"
                type="index"
                width="60">
                </el-table-column>
                <el-table-column
                prop="LTFC"
                label="大额交易特征代码"
                width="140"
              >
                </el-table-column>
                <el-table-column
                prop="name"
                label="客户姓名名称"
                width="110"
              >
                </el-table-column>
                <el-table-column
                prop="LC"
                label="业务标识号"
                width="100"
            >
                </el-table-column>
                <el-table-column
                prop="ME"
                label="交易方式"
                width="80"
              >
                </el-table-column>
                
                <el-table-column
                prop="CCS"
                label="资金收付标志"
                width="110"
                >
                </el-table-column>
                <el-table-column
                prop="TC"
                label="交易币种"
                width="80"
              >
                </el-table-column>
                <el-table-column
                prop="TA"
                label="交易金额"
                width="80"
              >
                </el-table-column>
                <el-table-column
                prop="TRCD"
                label="交易发生地"
                width="110"
              >
                </el-table-column>
                <el-table-column
                prop="TR"
                label="交易时间"
                width="100"
              >
                </el-table-column>
                <el-table-column
                prop="CI"
                label="客户身份证件/证明文件类型"
               min-width="120"
            >
                </el-table-column>
                <el-table-column
                prop="OCI"
                label="客户其他身份证件/证明文件类型"
               min-width="140"
          
              >
                </el-table-column>
                <el-table-column
                prop="CIN"
                label="客户身份证件/证明文件号码"
              min-width="120"
            >
                </el-table-column>
                
                <el-table-column
               
                label="操作"
                width="120"
                fixed="right"
                
            >
            
                <template slot-scope="scope">
                    <el-button  size="small" type="text">编辑</el-button>
                      <!-- <el-popover trigger="click"  placement="top" width="160" >
                        <p>确定删除吗？</p>
                        <div style="text-align:right">
                        <el-button size="mini" type="text "  >取消</el-button>
                        <el-button size="mini" type="text"  >确定</el-button>
                        </div>
                        <span  slot="reference">
                        <el-button  size="small" type="text">删除</el-button>
                        </span>
                    </el-popover> -->

                      <el-button  size="small" v-popover:popover5 type="text">删除</el-button>
                  
                  
              
            
             
                </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>          
        </div>

     
      </div>
      <div class="cardBtn">
        


        <el-button type="primary" style="marginRight:4%"  >暂存</el-button>
    
         <router-link :to="{ path: 'fillCheck', query: { firstBoxType: 'addBig',buttonType: 'online' }}"><el-button > 在线预览 </el-button></router-link>
      </div>

    </el-card>
  </el-form>   

<!-- 弹层内容 -->
    <div class="dialogCotainer">
      <el-dialog title="大额交易编辑" 
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      width="70%"
      top='20px'
      >
        <el-form :model="dialog" label-width="350px">
          <el-row >
            <el-col :span="14" :offset="4">
              <el-form-item label="大额交易特征代码（CRCD）：" label-width="260px">
                <el-input v-model="dialog.crcd" placeholder="提示信息待定"></el-input>
              </el-form-item>
            </el-col>
      
          </el-row>
          <el-row>
            <el-col :span="14" :offset="4">
              <el-form-item label="客户身份信息：" label-width="260px">
                <el-input v-model="dialog.cardId" placeholder="提示信息待定"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>金融机构网点信息（RINI）</span>
              </div>
              <div class="content">
                <el-form-item label="金融机构网点代码（FINC）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="金融机构与客户的关系（RLFC）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>客户账户信息（ATIF）</span>
              </div>
              <div class="content">
                <el-form-item label="客户账户类型（CATP）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="客户账号（CTAC）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="客户账户开立时间（OATM）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="客户银行卡类型（CBCT）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="客户银行卡其他类型（OCBT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="客户银行卡号码（CBCN）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>

                
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>代办人信息（TBIF）</span>
              </div>
              <div class="content">
                <el-form-item label="交易代办人姓名（TBNM）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易代办人身份证件/证明文件类型（TBIT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="其他身份证件/证明文件类型（OITP）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易代办人身份证件/证明文件号码（TBID）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item> 
                <el-form-item label="交易代办人国籍（TBNT）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                              
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>交易明细信息（TSIF）</span>
              </div>
              <div class="content">
                <el-form-item label="交易时间（TSTM）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易发生地（TRCD）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="业务标识号（TICD）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="收付款方匹配号类型（RPMT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="收付款方匹配号（RPMN）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易方式（TSTP）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>  
                <el-form-item label="非柜台交易方式（OCTT）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="其他非柜台交易方式（OOCT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="非柜台交易方式的设备代码（OCEC）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="银行与支付机构之间的业务交易编码（BPTC）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="涉外收支交易分类与代码（TSCT）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="资金收付标志（TSDR）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item> 
                <el-form-item label="资金用途（CRPP）：  ">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易币种（CRTP）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易金额（CRAT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易金额（折人民币）（CRMB）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>  
                <el-form-item label="交易金额（折美元）（CUSD）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>                                                                                             
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>交易对手信息（TCIF）</span>
              </div>
              <div class="content">
                <el-form-item label="对方金融机构网点名称（CFIN）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="对方金融机构网点代码类型（CFCT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="对方金融机构网点代码（CFIC）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="对方金融机构网点行政区划代码（CFRC）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易对手姓名/名称（TCNM）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易对手身份证件/证明文件类型（TCIT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="其他身份证件/证明文件类型（OITP）：">
                  <el-input v-model="dialog.finc" placeholder="提示信息待定"></el-input>
                </el-form-item>
                <el-form-item label="交易对手身份证件/证明文件号码（TCID）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>  
                <el-form-item label="交易对手账户类型（TCAT）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item> 
                <el-form-item label="交易对手账号（TCAC）：">
                  <el-input v-model="dialog.rlfx" placeholder="提示信息待定"></el-input>
                </el-form-item>                                                           
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" :offset="2">
              <div class="title">
                <span>交易信息备注（ROTFs）</span>
              </div>
              <div class="content">
                <div class="remark">
             
                  <el-form-item v-for="(item, index) in dialog.rlfc" :key="item.key" :label="'交易信息备注 -'+(index+1)+'（ROTF）：'">
                    <el-input v-model="item.value" placeholder="提示信息待定"></el-input>
                    <i v-if="dialog.rlfc.length==1|| index==dialog.rlfc.length-1" class="el-icon-circle-plus-outline icon-add" @click="addRemark()"></i>
                    <i v-else class="el-icon-remove-outline icon-remove" @click="removeRemark(item)"></i>
                  </el-form-item>              
                </div>

              </div>
            </el-col>
          </el-row>

        
          
        </el-form>
        <div slot="footer" class="dialog-footer">
        
          <el-button type="primary" @click="addDeal">添加</el-button>
        </div>
        
      </el-dialog>
    </div>






  </div>
</template>

<script>

import { getList } from '@/api/newBigDeals'

export default {
  name: 'newBigDeals',

  data() {
    return {
      visible2: false,
      value1: '',
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: '',
        selectData: [
          {
            label: '中国',
            value: '1'
          },
          {
            label: '美国',
            value: '2'

          },
          {
            label: '俄罗斯',
            value: '3'

          },
          {
            label: '英国',
            value: '4'

          },
          {
            label: '加拿大',
            value: '5'

          }],

        selectValue: '',
        Customvalue: '',
        TelInp: [
          {
            value: ''
          }
        ],
        addressData: [
          {
            value: ''
          }
        ]

      },
      tableData: [],
      dialogFormVisible: false,
      dialog: {
        crcd: '',
        cardId: '',
        finc: '',
        rlfx: '',
        rlfc: [{
          value: ''
        }]

      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    showIcon: function() {
      return this.dynamicValidateForm.domains.length
    }

  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.unshift({
        value: '',
        key: Date.now()
      })
    },
    removeTelInp(item) {
      var index = this.dynamicValidateForm.TelInp.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.TelInp.splice(index, 1)
      }
    },
    addTelInp() {
      this.dynamicValidateForm.TelInp.push({
        value: '',
        key: Date.now()
      })
    },

    removeAdress(item) {
      var index = this.dynamicValidateForm.addressData.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.addressData.splice(index, 1)
      }
    },
    addAdress() {
      this.dynamicValidateForm.addressData.push({
        value: '',
        key: Date.now()
      })
    },
    addRemark() {
      this.dialog.rlfc.push({
        value: '',
        key: Date.now()
      })
    },
    removeRemark(item) {
      var index = this.dialog.rlfc.indexOf(item)
      if (index !== -1) {
        this.dialog.rlfc.splice(index, 1)
      }
    },
    addDeal() {
      this.newTabel[1] = this.tableData.length + 1
      this.tableData.push(this.newTabel)
      this.dialogFormVisible = false
      console.log(this.tableData)
    },
    // 请求数据
    fetchData() {
      getList().then(response => {
        this.tableData = response.data.projects
      })
    },
    //  点击删除
    removeItem(index) {
      this.show = !this.show
    }

  },

  mounted() {
    this.fetchData()
    console.log(this.tableData)
  }
}
</script>












<style lang="scss">
.newBigDeals{
    .icon-add, .icon-remove{
      font-size: 24px;
      cursor: pointer;
      vertical-align: middle;
      color: #999
    }
  .contanier{
    .el-input,.el-select{
      display: inline-block;
      width: 80%;
    
    }
    .el-select{
      .el-input{
        width: 100%
      }
    }
  
    .el-divider{
      margin-top: 20px;
      margin-bottom: 32px;
      height: 1px;
      width: 100%;
      background: #e8e8e8;
    }
 
    .totalItem{
      padding: 0 30px;
      text-align: right;
      span{
        font-size: 14px;
      }
      em{
        font-size: 18px;
      }

    }
  }

  .dialogCotainer{
    margin-bottom: 20px;
    .el-form-item{
      margin-bottom: 10px
    }
    .content{
      padding: 10px 12% 0 0;;
      border:  1px solid rgba(228, 228, 228, 1);
      .remark{
        .el-input {
          width: 80%;
        }
      }
    }

    .title{
      padding-top:10px
   
    }
    .dialog-footer{
      padding-bottom: 40px;
    }
  
  }
  .cardBtn{
    text-align: center;
    padding: 40px 0 10px 0

  }

 
}


</style>