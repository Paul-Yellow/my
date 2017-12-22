<template>
  <div class="onlineFillManage">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight:600;">在线填报管理</span>
        <router-link to="fillWays" >
          <el-button style="float: right; padding: 3px 0" type="text">在线填报</el-button>
        </router-link>
        <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="linkTo()">在线填报</el-button> -->
      </div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="110px">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="金融机构编码 :">
              <span>{{sizeForm.code}}</span>
              <!-- <el-input v-model="sizeForm.name"></el-input> -->
            </el-form-item>

          </el-col>
          <el-col :span="8">
              <el-form-item label="报告机构名称 :">
              <span>{{sizeForm.name}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报送类型 :">
                <el-select v-model="sizeForm.select1Value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="报送方式 :">
              <span>{{sizeForm.sendWays}}</span>
            </el-form-item>
          </el-col>

          <el-col :span="8">
              <!-- <el-row :gutter="20">
                <el-col :span="6">
                  <div class="upData">报送日期 :</div>
                </el-col>
                <el-col :span="10">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row> -->

              <el-form-item label="报送日期 :">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报送状态 :">
                <el-select v-model="sizeForm.select2Value" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="8" :offset="16">
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
          <el-table-column label="序号"  >
            <template slot-scope="scope">
              <span>{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="报送类型"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upType }}</span>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报送日期"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upData }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="报送状态"  >
            <template slot-scope="scope">
              <span>{{ scope.row.sendState }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="报文名"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="回执生成时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.ruturnDate }}</span>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="回执标志"  >
            <template slot-scope="scope">
              <span>{{ scope.row.returnSign }}</span>
            </template>
          </el-table-column>
          <!-- 第七列 -->
          <el-table-column label="最后更新时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upDateTime }}</span>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span v-if="scope.row.firstState" style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">继续填报
                <!-- <a href="newsPortManage.vue"></a> -->
              </span>
              <span v-if="!scope.row.firstState" style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">查看
                <!-- <a href="newsPortManage.vue"></a> -->
              </span>
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button> -->
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
         select1Value: '', // 下拉框1取值

         sendWays: '页面加载', // 报送方式
         timeSelectValue: '', // 报送时间
         select2Value: '' // 下拉框2取值
       },
       options: [{ // 下拉框1
         value: '选项1',
         label: '全部'
       }, {
         value: '选项2',
         label: '大额交易新增'
       }, {
         value: '选项3',
         label: '可疑交易新增'
       }, {
         value: '选项4',
         label: '大额交易修改'
       }, {
         value: '选项5',
         label: '可疑交易修改'
       }, {
         value: '选项5',
         label: '大额交易删除'
       }],
       value: '', // 下拉框1取值
       value6: '', // 时间选择器的值
       options2: [{ // 下拉框2
         value: 'quanbu',
         label: '全部'
       }, {
         value: 'zancun',
         label: '暂存'
       }, {
         value: 'yibaosong',
         label: '已报送'
       }],
       value2: '', // 下拉框2取值
       // 第一大块变量结束

       // 第二大块变量开始
       tableData: [{
         orderNumber: '1',
         name: 'CSSC0000000000001‐20181021‐00000004.XML',
         upType: '大额交易新增',
         upData: '2017-10-11 09:27',
         sendState: '暂存',
         ruturnDate: '2017-10-11 10:27',
         returnSign: '',
         upDateTime: '2017-10-23 10:19',
         path: 'newsPortManage',
         firstState: true
       }, {
         orderNumber: '2',
         name: 'CSSC0000000000001‐20181021‐00000004.XML',
         upType: '大额交易新增',
         upData: '2017-10-11 09:27',
         sendState: '暂存',
         ruturnDate: '2017-10-11 10:27',
         returnSign: '',
         upDateTime: '2017-12-23 10:30',
         path: 'newsPortManage',
         firstState: true
       }, {
         orderNumber: '3',
         name: 'CSSC0000000000001‐20181021‐00000003.XML',
         upType: '大额交易新增',
         upData: '2017-10-11 09:27',
         sendState: '已报送',
         ruturnDate: '2017-10-11 10:27',
         returnSign: '正确回执',
         upDateTime: '2017-12-23 10:30',
         path: 'fillCheck',
         firstState: false
       }, {
         orderNumber: '4',
         name: 'CSSC0000000000001‐20181021‐00000004.XML',
         upType: '可疑交易新增',
         upData: '2017-10-11 09:27',
         sendState: '已报送',
         ruturnDate: '2017-10-11 10:27',
         returnSign: '系统补正回执',
         upDateTime: '2017-12-23 10:30',
         path: 'fillCheck',
         firstState: false
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
       this.sizeForm.select1Value = '' // 清空下拉框1取值

       this.sizeForm.timeSelectValue = '' // 清空报送时间
       this.sizeForm.select2Value = '' // 清空下拉框2取值
     },
     // 跳转传值
     handleEdit(index, row) {
       if (row.upType === '大额交易新增') {
         //  alert('大额交易新增')
         this.$router.push({ path: row.path, query: { firstBoxType: 'addBig', buttonType: 'online' }})
       } else if (row.upType === '可疑交易新增' || '可疑交易修改') {
         this.$router.push({ path: row.path, query: { firstBoxType: 'suspicious', buttonType: 'online' }})
       } else if (row.upType === '大额交易修改') {
         this.$router.push({ path: row.path, query: { firstBoxType: 'modify', buttonType: 'online' }})
       } else if (row.upType === '大额交易删除') {
         this.$router.push({ path: row.path, query: { firstBoxType: 'delete', buttonType: 'online' }})
       }
 
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
     },
     // 点击在线填报跳转
     linkTo() {
       this.$router.push({ path: 'fillWays' })
     }
   },
   //  初始化列表的页数，每十项一页
   mounted: function() {
     //  alert(Math.ceil(this.tableData.length))
     this.totalNumber = Math.ceil((this.tableData.length) / 10)
   },
   // 监控列表项的变化
   watch: {
     totalNumber: function() {
       //  alert(Math.ceil(this.tableData.length / 10))
     }
   }
 }
</script>

<style >
.onlineFillManage{
  background: #f5f5f5;
  padding: 20px;
}
.onlineFillManage .paddingLeftNone{
  padding-left: 0px !important;
}
.onlineFillManage .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.onlineFillManage .line{
  text-align: center;
}
.onlineFillManage .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.onlineFillManage .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.onlineFillManage .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.onlineFillManage .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.onlineFillManage .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.onlineFillManage .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  
.onlineFillManage .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.onlineFillManage .checkEmpty1{
  background-color: orange;
}
.onlineFillManage .checkEmpty2{
  background-color: #409EFF;
}
      /* 第一大块结束 */
.onlineFillManage  .secondBox{
  margin-top: 20px; 
}
.onlineFillManage .secondBox .el-table th>.cell{
  text-align: center;
}

.onlineFillManage .secondBox .el-table .cell{
  text-align: center;
}
</style>

