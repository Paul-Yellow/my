<template>
  <div class="InformationChange">
    <el-card>
      <div slot="header" class="clearfix">
        <span>报告机构总部基本信息变更申请</span>
      </div>
      <div>
        <el-form >
          <el-collapse  v-model="activeNames">
            <el-collapse-item name="1">

              <template slot="title">

                    <span class="InCh-title">基本信息变更类别</span>
              </template>
              <div class="InCh-block">
                <el-row>
                  <el-col :span="12" :offset="6" >
                    <el-form-item label="变更类别 ：" label-width="120" label-position>
                      <el-select placeholder="请选择类别"  v-model="value" class="InCh-blockInp">
                            <el-option
                              v-for="item in selectData"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <span class="InCh-title">报告机构总部基本信息</span>
              </template>
              <div class="InCh-block">
                <el-row>
                  <el-col :span="10" :offset="2">
                    <el-form-item label="报告机构名称（变更前）：">
                      <span>上海某某银行</span>
                    </el-form-item>

                  </el-col>
                  <el-col :span="10">
                      <el-form-item label="报告机构名称（变更后）：" label-width="200px">
                        <el-input  placeholder=""></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row >
                  <el-col :span="10" :offset="2">
                    <el-form-item label="金融机构编码（变更前）：">
                      <span>上海某某银行</span>
                    </el-form-item>

                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="金融机构编码（变更后）：" label-width="200px">
                     <el-input v-model="value" placeholder="请输入"></el-input>
                    </el-form-item>


                  </el-col>
                </el-row>
                 <el-row>
                  <el-col :span="10" :offset="2">
                    <el-form-item label="总部注册地址（变更前）：">
                      <span>上海某某银行</span>
                    </el-form-item>

                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="总部注册地址（变更后）：" label-width="200px">
                         <el-cascader
                              :options="options"
                              v-model="selectedOptions"
                              class="InCh-city"
                          >
                          </el-cascader>

                    </el-form-item>

                  </el-col>
                </el-row>
              </div>

            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <span class="InCh-title">反洗钱工作部门联系信息</span>
              </template>
                  <div class="content">
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
                                <el-form-item label="联系人姓名：" >
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
                                <el-form-item label="传真：" >
                                      <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div>
                                <el-form-item label="城市：" >
                                      <el-cascader
                                        :options="options"
                                        v-model="selectedOptions"
                                        class="InCh-city"
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
                                <el-form-item label="邮编：" >
                                      <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                        </div>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template slot="title">
                <span class="InCh-title">附件上传</span>
              </template>
              <div class="InCh-upLoadContent">
                <el-row>
                  <el-col :span="12" :offset="6">
                    <el-upload
                      class="uploadContainer"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>

                  </el-col>
                </el-row>

              </div>

            </el-collapse-item>
          </el-collapse>
        </el-form>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'InformationChange',
  data() {
    return {
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options: [
        {
          value: 'zhinan',
          label: '河北',
          children: [
            {
              value: 'shejiyuanze',
              label: '邯郸',
              children: [
                {
                  value: 'yizhi',
                  label: '大名'
                },
                {
                  value: 'fankui',
                  label: '永年'
                },
                {
                  value: 'xiaolv',
                  label: '磁县'
                },
                {
                  value: 'kekong',
                  label: '邯郸县'
                }
              ]
            },
            {
              value: 'daohang',
              label: '唐山',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '唐山'
                }
              ]
            }
          ]
        }
      ],
      selectedOptions: [],
      activeNames: ['1', '2']
    }
  }
}
</script>

<style lang="scss">
.InformationChange {


  .el-collapse {
    border: 1px solid #d9d9d9;

    .el-collapse-item__header {
      border-bottom: 1px solid #d9d9d9;

      background: #fafafa;
      .el-collapse-item__arrow{
        float: left;
        margin-left: 20px;
      }
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .InCh-block {
      padding-top: 20px;

      .InCh-blockInp {
        width: 60%;
      }
      .InCh-city {
        width: 100%;
      }
    }

    .content {
      padding: 20px;
      .InCh-city {
        width: 100%;
      }
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .InCh-upLoadContent {
      padding: 20px;
    }
    .uploadContainer {
      width: 100%;
      .el-upload {
        width: 100%;
        .el-upload-dragger {
          width: 100%;
        }
      }
    }
  }
}
</style>
