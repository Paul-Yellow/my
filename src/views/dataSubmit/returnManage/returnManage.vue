<template>
  <div class="returnManage">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight:600">回执管理</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">报文加载</el-button> -->
      </div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="135px">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm.code}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报告机构名称 :">
              <span>{{sizeForm.name}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="原报文类型 :">
                <el-select v-model="sizeForm.select1Value" placeholder="请选择">
                  <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="8">
              <el-form-item label="原报文交易类型 :">
                <el-select v-model="sizeForm.select2Value" placeholder="请选择">
                  <el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="原报文报送方式 :">
                <el-select v-model="sizeForm.select3Value" placeholder="请选择">
                  <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="原报文报送日期 :">
                <div class="chooseTime">
                  <el-date-picker v-model="sizeForm.timeSelectValue1" type="daterange" range-separator="至"
                  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </div>
            </el-form-item>
              <!-- <el-row :gutter="20">
                <el-col :span="9" class="paddingRightNone">
                  <div class="upData">原报文报送日期 :</div>
                </el-col>
                <el-col :span="10" class="paddingLeftNone">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue1" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row> -->
          </el-col>
         
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="回执生成日期 :">
                <div class="chooseTime">
                  <el-date-picker v-model="sizeForm.timeSelectValue2" type="daterange" range-separator="至"
                  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </div>
            </el-form-item>
              <!-- <el-row :gutter="20">
                <el-col :span="8" class="paddingRightNone">
                  <div class="upData">回执生成日期 :</div>
                </el-col>
                <el-col :span="10" class="paddingLeftNone">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue2" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row> -->
          </el-col>

          <el-col :span="8">
              <el-form-item label="回执标识 :">
                <el-select v-model="sizeForm.returnMark" placeholder="请选择">
                  <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="系统补正处理状态 :">
                <el-select v-model="sizeForm.solveState" placeholder="请选择">
                  <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>

        <!-- 第四行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="原报文包名 :">
              <span style="display:inline-block">
                  <el-input v-model="sizeForm.originBagName"></el-input>
              </span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="原报文名 :">
              <span style="display:inline-block">
                  <el-input v-model="sizeForm.originFile"></el-input>
              </span>
            </el-form-item>
          </el-col>

          <el-col :span="8" >
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="3">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onCheck" class="checkEmpty checkEmpty1">查询</el-button>
                  </div>
                </el-col>
                <el-col :span="8" :offset="2">
                  <div class="grid-content bg-purple">
                      <el-button @click="onEmpty" class="checkEmpty checkEmpty2">清空</el-button>
                  </div>
                  </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <el-card class="box-card  secondBox">
        <el-table :data="tableData" style="width: 100%">
          <!-- 第一列 -->
          <el-table-column label="序号" fixed   >
            <template slot-scope="scope">
              <span>{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="原报文包"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="原报文"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.originAtical }}</div>
                <span>{{ scope.row.originAtical }}</span>
              </el-tooltip>
              <!-- <span>{{ scope.row.originAtical }}</span> -->
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="原报文报送方式"  width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.originSendType }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="原报文报送时间"  width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.upTime }}</span>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="回执生成时间"   width="110">
            <template slot-scope="scope">
              <span>{{ scope.row.returnTime }}</span>
            </template>
          </el-table-column>
           <!-- 第七列 -->
          <el-table-column label="回执文件"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.returnFile }}</div>
                <span>{{ scope.row.returnFile }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第八列 -->
          <el-table-column label="回执标志"  >
            <template slot-scope="scope">
              <span>{{ scope.row.returnSign }}</span>
            </template>
          </el-table-column>
          <!-- 第九列 -->
          <el-table-column label="错误总数"  >
            <template slot-scope="scope">
              <span>{{ scope.row.wrongTotal }}</span>
            </template>
          </el-table-column>
          <!-- 第九列 -->
          <el-table-column label="系统补正总数"   width="110">
            <template slot-scope="scope">
              <span>{{ scope.row.correctTotal }}</span>
            </template>
          </el-table-column>
          <!-- 第十列 -->
          <el-table-column label="系统补正处理状态"  width="135">
            <template slot-scope="scope">
              <span>{{ scope.row.correctState }}</span>
            </template>
          </el-table-column>
          <!-- 第十一列 -->
          <el-table-column label="补正处理天数"  width="110">
            <template slot-scope="scope">
              <span>{{ scope.row.correctDay }}</span>
            </template>
          </el-table-column>
          <!-- 第十二列 -->
          <el-table-column label="补正完成日期"  width="110">
            <template slot-scope="scope">
              <span>{{ scope.row.correctData }}</span>
            </template>
          </el-table-column>
          <!-- 最后一列 -->
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">查看回执</span>
              <span style="color:#409EFF;cursor: pointer;" @click="handleDelete(scope.$index, scope.row)">下载回执</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange" background
            :current-page.sync="currentPage3" :page-size="10"  layout="prev, pager, next, jumper" :total="totalNumber">
          </el-pagination>
        </p>
    </el-card>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
 export default {
   data() {
     return {
       // 第一大块变量开始
       labelPosition: 'right', // 列表对齐方式
       sizeForm: {
         code: 'C0000000000001', // 金融机构编码
         name: '上海某某银行', // 报告机构名称
         select1Value: '', // 下拉框1取值-原报文类型

         select2Value: '', // 下拉框2取值-原报文交易类型
         select3Value: '', // 下拉框3取值-原报文报送方式
         timeSelectValue1: '', // 原报文报送日期

         timeSelectValue2: '', // 回执生成日期
         returnMark: '', // 回执标志
         solveState: '', // 系统补正处理状态

         originBagName: '', // 原报文包名
         originFile: '' // 原报文名
       },
       options: [{ // 下拉框1
         value: '选项1',
         label: '全部'
       }, {
         value: '选项2',
         label: '新增'
       }, {
         value: '选项3',
         label: '修改'
       }, {
         value: '选项4',
         label: '删除'
       }],
       options2: [{ // 下拉框2
         value: 'quanbu',
         label: '全部'
       }, {
         value: 'dae',
         label: '大额'
       }, {
         value: 'keyi',
         label: '可疑'
       }],
       options3: [{ // 下拉框3
         value: 'quanbu',
         label: '全部'
       }, {
         value: 'zaixiantianbao',
         label: '在线填报'
       }, {
         value: 'yemianjiazai',
         label: '页面加载'
       }, {
         value: 'xioaxizhongjianjian',
         label: '消息中间件'
       }],
       options4: [{ // 下拉框4
         value: 'quanbu',
         label: '全部'
       }, {
         value: 'zhengquehuizhi',
         label: '正确回执'
       }, {
         value: 'cuowuhuizhi',
         label: '错误回执'
       }, {
         value: 'xitongbuzhenghuizhi',
         label: '系统补正回执'
       }],
       options5: [{ // 下拉框5
         value: 'quanbu',
         label: '全部'
       }, {
         value: 'daichuli',
         label: '待处理'
       }, {
         value: 'yichuli',
         label: '已处理'
       }],
       // 第一大块变量结束

       // 第二大块变量开始
       tableData: [{
         orderNumber: '1',
         name: '',
         originAtical: 'CSSC0000000000001‐20181021‐00000004.XML',
         originSendType: '在线填报',
         upTime: '2017-10-30 10:35:00',
         returnTime: '2017-12-31 10:00',
         returnFile: 'FDSC[CSSC0000000000001‐20181021‐00000004]20181026124530.XML',
         returnSign: '正确回执',
         wrongTotal: '0',
         correctTotal: '1',
         correctState: '',
         correctDay: '',
         correctData: '',
         path: 'notFound.vue'
       }, {
         orderNumber: '2',
         name: 'CSSC0000000000001‐20181021‐00000001.ZIP',
         originAtical: 'CSSC0000000000001‐20181021‐00000005.XML',
         originSendType: '页面加载',
         upTime: '2017-10-30 10:40:00',
         returnTime: '2017-12-31 10:00',
         returnFile: 'FDSC[CSSC0000000000001‐20181021‐00000004]20181026124534.XML',
         returnSign: '系统补正回执',
         wrongTotal: '2',
         correctTotal: '3',
         correctState: '已处理',
         correctDay: '6',
         correctData: '2017-11-06',
         path: 'notFound.vue'
       }],
       currentPage3: 1, // 分页
       totalNumber: 1 // 列表数量

     }
   },
   methods: {
     // 点击查询
     onCheck() {
       console.log(this.sizeForm)
       // console.log('submit!')
     },
     // 点击清空
     onEmpty() {
       this.sizeForm.select1Value = '' // 清空下拉框1取值-原报文类型

       this.sizeForm.select2Value = '' // 清空下拉框2取值-原报文交易类型
       this.sizeForm.select3Value = '' // 清空下拉框3取值-原报文报送方式
       this.sizeForm.timeSelectValue1 = '' // 清空原报文报送日期
 
       this.sizeForm.timeSelectValue2 = '' // 清空回执生成日期
       this.sizeForm.returnMark = '' // 清空回执标志
       this.sizeForm.solveState = '' // 清空系统补正处理状态

       this.sizeForm.originBagName = '' // 清空原报文包名
       this.sizeForm.originFile = '' // 清空原报文包
     },
     // 点击编辑
     handleEdit(index, row) {
       this.$router.push({ path: 'filePreview', query: { lastPage: 'returnManage' }})
       //  console.log(index, row)
     },
     // 点击删除
     handleDelete(index, row) {
       console.log(index, row)
     },
     // 分页
     handleSizeChange(val) {
       console.log(`每页 ${val} 条`)
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`)
     }
   },
   //  初始化列表的页数，每十项一页
   mounted: function() {
     //  alert(Math.ceil(this.tableData.length))
     this.totalNumber = Math.ceil((this.tableData.length) / 10)
   }
   // 监控列表项的变化
   //  watch: {
   //    totalNumber: function() {
   //      alert(Math.ceil(this.tableData.length / 10))
   //    }
   //  }
 }
</script>

<style >
.returnManage{
  /* background: #f5f5f5;
  padding: 20px; */
}
.returnManage .paddingLeftNone{
  padding-left: 0px !important;
}
.returnManage .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.returnManage .line{
  text-align: center;
}
.returnManage .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.returnManage .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.returnManage .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.returnManage .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.returnManage .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.returnManage .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  
.returnManage .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.returnManage .checkEmpty1{
  background-color: orange;
}
.returnManage .checkEmpty2{
  background-color: #409EFF;
}
      /* 第一大块结束 */
.returnManage  .secondBox{
  margin-top: 20px; 
}
.returnManage .secondBox .el-table th>.cell{
  text-align: center;
}

.returnManage .secondBox .el-table .cell{
  text-align: center;
}
</style>

