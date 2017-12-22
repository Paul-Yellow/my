<template>
    <div class="InformationMaintenance">
        <div class="contanier">
            <el-row >
                <el-col :span="24">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix title">
                            <span>报告机构基本信息</span> 
                        </div>
                        <div class="content">
                            <el-form  label-width="120px" :model="formLabelAlign">
                                <el-row>
                                    <el-col :span="6">
                                        <div>
                                            <el-form-item label="名称：">
                                                <span>C000001</span>
                                            </el-form-item>
                                        </div>
                                        <div>
                                            <el-form-item label="总部注册地址：">
                                                <span>C000001</span>
                                            </el-form-item>
                                        </div>                                       
                                    </el-col>
                                        <el-col :span="6">
                                        <div>
                                            <el-form-item label="报告机构名称：">
                                                <span>C000001</span>
                                            </el-form-item>
                                        </div>
                                        <div>
                                            <el-form-item label="机构类别：" >
                                                <span>C000001</span>
                                            </el-form-item>
                                        </div>                                         
                                    </el-col>
                                    <el-col :span="8">
                                        <div >
                                            <el-form-item label="备注：" label-width="60px">
                                                <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
                                            </el-form-item>                                       
                                        </div>
                                    </el-col>
                                    </el-row>
                        
                            </el-form>
                            

                        </div>
                        
                    </el-card>
                </el-col>
            </el-row>            
            <el-row class="In-link">
                <el-col :span="24">
                    <el-card class="box-card linkBox">
                        <div slot="header" class="clearfix title">
                            <span>反洗钱工作部门联系信息</span> 
                        </div>
                        <div class="content">
                            <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                <el-row :gutter=20>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="名称：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                                                            
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="负责人姓名：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="联系人姓名：" label-width="60px">
                                                 <el-input placeholder="请输入"></el-input>
                                            </el-form-item>                                       
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter=20>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="办公电话：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                                                            
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="移动电话：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="传真：" label-width="60px">
                                                 <el-input placeholder="请输入"></el-input>
                                            </el-form-item>                                       
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="城市：">
                                                  <el-cascader
                                                    :options="options"
                                                    v-model="selectedOptions"
                                                    class="In-city"
                                                >
                                                </el-cascader>
                                         
                                            </el-form-item>
                                        </div>
                                                                            
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="详细地址：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="邮编：" label-width="60px">
                                                 <el-input placeholder="请输入"></el-input>
                                            </el-form-item>                                       
                                        </div>
                                    </el-col>
                                </el-row>

                            <div class="In-botomBtn">
                                <el-row>
                                    <el-col>
                                        <el-button type="primary">提交</el-button>
                                         <el-button >取消</el-button>
                                    </el-col>
                                </el-row>                                
                            </div>
                                                             
                       
                            </el-form>
                            

                        </div>
                        
                    </el-card>
                </el-col>
            </el-row>
        </div>

       
    
    </div>
</template>

<script>
    export default {
      name: 'InformationMaintenance',
      data() {
        return {
          list: [],
          msg: '',
          labelPosition: 'top',
          formLabelAlign: {
            name: '',
            region: '',
            type: '',
            desc: ''
    
          },
          options: [{
            value: 'zhinan',
            label: '河北',
            children: [{
              value: 'shejiyuanze',
              label: '邯郸',
              children: [{
                value: 'yizhi',
                label: '大名'
              }, {
                value: 'fankui',
                label: '永年'
              }, {
                value: 'xiaolv',
                label: '磁县'
              }, {
                value: 'kekong',
                label: '邯郸县'
              }]
            }, {
              value: 'daohang',
              label: '唐山',
              children: [{
                value: 'cexiangdaohang',
                label: '唐山'
              }]
            }]
          }],
          selectedOptions: []
        }
      }
    
    }
</script>

<style scope lang="scss" >
.InformationMaintenance{
 padding:24px;
 background-color:  #f0f2f5;
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
  }

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
  }
.clearfix:after {
    clear: both
  }
.contanier{


.box-card{
    border-radius: 0
}
.el-form-item{
    margin-bottom: 0
}
.In-link{
    padding-top: 24px;
    .linkBox{
        margin-top: 0
    }
    .el-form-item__label{
        padding-bottom: 0;
        line-height: 30px;
    }
    .In-city{
        width: 100%;
       
    }
     .In-block{
            margin-bottom: 20px;
        }
}
.In-botomBtn{
    text-align: center;
    padding: 40px 0 20px 0;
}

}   

}




    
</style>