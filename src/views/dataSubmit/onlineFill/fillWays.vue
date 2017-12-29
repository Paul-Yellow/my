<template>
  <div class="fillWays">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>手工填报</span>
      </div>
      <el-form ref="form"    :label-position="labelPosition" label-width="140px">
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-top:15px;">
          <el-col :span="14" :offset="6">
              <el-form-item label="报文种类 :">
                <el-select v-model="selectvalue" placeholder="请选择" >
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="14" :offset="6">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="5">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onSubmit" class="checkEmpty checkEmpty1">开始填报</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第一大块结束   -->

     <!-- 第二大块开始 -->
    <el-card class="box-card"  >
      <div slot="header" class="clearfix">
        <span>工具填报</span>
      </div>
      <el-form ref="form"  :label-position="labelPosition" label-width="140px" >
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-top:15px;">
          <el-col :span="11" :offset="6">
                <el-form-item label="Excel文件选择 :">
                  <span style="display:inline-block;width:94%" >
                    <el-input placeholder="请输入内容" v-model="inputValue" clearable > </el-input>
                  </span>
                </el-form-item>
          </el-col>
          <el-col :span="4">
              <div class="grid-content bg-purple">
                  <el-button   class="checkEmpty checkEmpty2" >浏览</el-button>
              </div>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="14" :offset="6">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="5">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onSubmit2" class="checkEmpty checkEmpty2">上传加载 , 开始填报</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第二大块结束   -->

    <!-- 第三大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>填报工具下载</span>
      </div>
      <el-form ref="form"  :label-position="labelPosition" label-width="140px" >
        <!-- 第一行 -->
        <el-row :gutter="20" style="padding-top:15px;">
          <el-col :span="14" :offset="6">
              <el-form-item label="报文种类 :">
                <el-select v-model="selectvalue2" placeholder="请选择" >
                  <el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="14" :offset="6">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="5">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onSubmit3" class="checkEmpty checkEmpty3">下载</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第三大块结束   -->
  </div>
</template>

<script>
 export default {
   data() {
     return {
       labelPosition: 'right', // 列表对齐方式
       selectvalue: '', // 下拉框1取值
       inputValue: '', // 工具填报的值
       selectvalue2: '', // 下拉框2取值

       options: [{ // 下拉框1
         value: '大额交易报告-新增',
         label: '大额交易报告-新增'
       }, {
         value: '大额交易报告-修改',
         label: '大额交易报告-修改'
       }, {
         value: '大额交易报告-删除',
         label: '大额交易报告-删除'
       }, {
         value: '可疑交易报告-新增',
         label: '可疑交易报告-新增'
       }, {
         value: '可疑交易报告-修改',
         label: '可疑交易报告-修改'
       }],
       options2: [{ // 下拉框2
         value: 'xuanxiang1',
         label: '大额交易报告-新增'
       }, {
         value: 'xuanxiang2',
         label: '大额交易报告-主动纠错'
       }, {
         value: 'xuanxiang3',
         label: '大额交易报告-系统补正回执应答'
       }, {
         value: 'xuanxiang4',
         label: '大额交易报告-删除'
       }, {
         value: 'xuanxiang5',
         label: '大额交易报告-人工补正-信息更正通知应答'
       }, {
         value: 'xuanxiang6',
         label: '可疑交易报告-新增'
       }, {
         value: 'xuanxiang7',
         label: '可疑交易报告-主动纠错'
       }, {
         value: 'xuanxiang8',
         label: '可疑交易报告-系统补正回执应答'
       }, {
         value: 'xuanxiang9',
         label: '可疑交易报告-人工补正-信息更正通知应答'
       }, {
         value: 'xuanxiang10',
         label: '信息补充通知应答'
       }]
     }
   },
   methods: {
     // 开始填报
     onSubmit() {
       console.log(this.selectvalue)
       //  console.log('submit!')
     },
     // 上传加载，开始填报
     onSubmit2() {
       console.log(this.inputValue)
       //  console.log('submit!')
     },
     // 下载
     onSubmit3() {
       console.log(this.selectvalue2)
       //  console.log('submit!')
     },
     // 点击编辑
     handleEdit(index, row) {
       //  window.location.href = row.path
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
     //  this.totalNumber = Math.ceil((this.tableData.length) / 10)
   },
   // 监控列表项的变化
   watch: {
     totalNumber: function() {
       //    alert(Math.ceil(this.tableData.length / 10))
     }
   }
 }
</script>

<style >
.fillWays .paddingLeftNone{
  padding-left: 0px !important;
}
.fillWays .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.fillWays  .el-select {
    display: inline-block;
    position: relative;
    width: 70%;
}  
.fillWays .line{
  text-align: center;
}
.fillWays .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.fillWays .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.fillWays .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.fillWays .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.fillWays .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.fillWays .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  
.fillWays .checkEmpty{
  width: 140px;
  border: none;
  color: #fff;
}
.fillWays .checkEmpty1{ 
  background-color: orange;
}
.fillWays .checkEmpty2{
  background-color: #409EFF;
}
.fillWays .checkEmpty3{
  background-color: #e95152;
}
      /* 第一大块结束 */

</style>

