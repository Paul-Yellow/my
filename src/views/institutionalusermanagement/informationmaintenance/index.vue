<template>
    <div class="InformationMaintenance">
        <div class="contanier">
            <el-card>
                <div slot="header" class="clearfix title">
                    <span>报告机构信息维护</span> 
                </div>
                <div class="In-basicLink">
                    <el-row>
                      <el-col :span="16" class="contentTitle">报告机构基本信息</el-col>
                    </el-row>   
                      <el-row>
                      <el-col :span="24">
                        <div class="content">
                            <el-form   :model="formLabelAlign">
                                <el-row>
                                    <el-col :span="8">
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
                                        <el-col :span="8">
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
                                            <el-form-item label="备注：" class="specialIterm" >
                                                <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
                                            </el-form-item>                                       
                                        </div>
                                    </el-col>
                                    </el-row>
                        
                            </el-form>
                        </div>
                      </el-col>
                    </el-row>

                </div>
<!-- 分割线 -->
               <div class="el-divider el-divider-horizontal" ></div>
                <div class="In-detailLink">
                    <el-row>
                      <el-col :span="24" class="contentTitle">反洗钱工作部门联系信息</el-col>
                    </el-row> 
                    <el-row>
                      <el-col :span="24">
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
                                            <el-form-item label="邮编：" label-width="60px">
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
                                <el-row :gutter=20>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="负责人姓名：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
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
                                   
                                </el-row>
                                <el-row :gutter=20>
                                    <el-col :span="8">
                                        <div class="In-block">
                                            <el-form-item label="联系人姓名 ：">
                                                <el-input placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
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
                                   
                                </el-row>

                      
                                                             
                       
                            </el-form>
                            

                        </div>                       


                      </el-col>
                    </el-row> 

                </div>
                <div class="In-botomBtn">
                    <el-row>
                        <el-col>
                            <el-button type="primary" >提交</el-button>
                                <el-button >取消</el-button>
                        </el-col>
                    </el-row>                                
                </div>
            </el-card>
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
    .title{
        font-size: 18px;
    }

    .el-divider{
    margin-top: 20px;   
    margin-bottom: 32px;
    height: 1px;
    width: 100%;
    background: #e8e8e8;
    }
    .contentTitle{
        margin-bottom: 16px;
        padding-top: 16px;
        font-size: 16px;
        color: rgba(0, 0, 0, 1);
        font-weight: 500;
    }
    .In-botomBtn{
        padding: 20px 0;
        text-align: center;
    }
    .el-form-item__label{
        padding: 0 ;
    }
    .In-city{
        width: 100%
    }
     .In-basicLink{
         .el-form-item{
            margin-bottom: 0;
            .el-form-item__content{
                margin-left: 0;
                .el-textarea{
                    width: 80%
                }
             
            }
           
            
         }
     }


    @media screen and(min-width:1400px) {
   .In-detailLink{
        .el-form-item__label{
           width: 30%;
           text-align: right;
           display: inline-block
       }
       .el-form-item__content{
           width: 70%;
            display: inline-block
       }
   }
       
       .In-basicLink{
           .el-col-8{
               width: 24%
           }
           .el-form-item__label{
     
           text-align: right;
 
          }
       .specialIterm {
            .el-form-item__content{
            width:80%;
            display: inline-block;
            
            }
       .el-textarea{
            width: 100%
            }
        }
     }

        }
    
    

}




    
</style>