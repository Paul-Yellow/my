<template>
  <div class="onlineFillManage">
    <!-- <div>爱我中华</div> -->
    <!-- 第一大块开始 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >在线填报 &nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size:14px">请选择填报类型</span>
        <router-link to="" style="float: right; ">
          <i class="el-icon-download" style="font-size:18px;color: #409EFF;display:inline-block;vertical-align: middle;"></i>  
          <el-button  type="text" style="padding:3px 0">填报工具下载</el-button>
        </router-link>
        <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="linkTo()">在线填报</el-button> -->
      </div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" >
        <!-- 第一行 -->
        <el-row :gutter="20" style="font-size:14px;">
            <el-col :span="2" >
              <div class="titleStyle">大额交易 :</div>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv"><router-link to="newBigDeals">新增报文</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv"><router-link to="">补正报文</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv"><router-link to="">主动纠错报文</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv"><router-link to="">删除报文</router-link></span>
            </el-col>
        </el-row>

        <!-- 第二行 -->
        <el-row :gutter="20" style="font-size:14px;margin-top:15px">
            <el-col :span="2" >
              <div  class="titleStyle">可疑交易 :</div>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv2"><router-link to="newBigDeals">新增报文</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv2"><router-link to="">主动纠错报文</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv2"><router-link to="">系统纠正报文</router-link></span>
            </el-col>
        </el-row>

        <!-- 第三行 -->
        <el-row :gutter="20" style="font-size:14px;margin-top:15px">
            <el-col :span="2" >
              <div class="titleStyle">人工补正 :</div>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv3"><router-link to="newBigDeals">信息补充</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv3"><router-link to="">大额信息更正</router-link></span>
            </el-col>
            <el-col :span="3" >
              <span class="buttonDiv buttonDiv3"><router-link to="">可疑信息更正</router-link></span>
            </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 第一大块结束   -->

    <!-- 第二大块开始 -->
    <el-card class="box-card" style="margin-top:20px;">
       
        <div slot="header" class="clearfix">
          <span >填报历史</span>
        </div>
      <div  class="content"> 
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" >
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="8" >
            <el-form-item label="报送日期 :">
                  <div class="chooseTime">
                    <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                      start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  </div>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报送类型 :">
                <el-select v-model="sizeForm.sendType" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8">
              <el-form-item label="报送状态 :">
                <el-select v-model="sizeForm.sendState" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8" :offset="16">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="5">
                  <div class="grid-content bg-purple">
                    <!-- class="checkEmpty checkEmpty2" -->
                      <el-button @click="onEmpty" >清空</el-button>
                  </div>
                  </el-col>
                <el-col :span="8" :offset="1">
                  <div class="grid-content bg-purple">
                     <!-- class="checkEmpty checkEmpty1" -->
                      <el-button  @click="onCheck" >查询</el-button>
                  </div>
                </el-col>
                
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
         <!-- <el-row :gutter="20">
          <el-col :span="8" :offset="8">
            <el-form-item >
              <el-row :gutter="20">
                <el-col :span="8" :offset="3">
                  <div class="grid-content bg-purple">
                      <el-button @click="onEmpty" class="checkEmpty checkEmpty2">清空</el-button>
                  </div>
                  </el-col>
                <el-col :span="8" :offset="2">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onCheck" class="checkEmpty checkEmpty1">查询</el-button>
                  </div>
                </el-col>
                
              </el-row>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </div>
    <!-- </el-card> -->
    <!-- 第二大块结束   -->

    <!-- 第三大块开始     -->
    <div class="secondBox">
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          v-loading.body="listLoading" element-loading-text="Loading"
          style="width: 100%" header-cell-class-name="el-table-hearder">
          <!-- 第一列 -->
          <el-table-column label="序号"  fixed>
            <template slot-scope="scope">
              <span>{{ scope.$index+1 }}</span>
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
          <el-table-column label="状态"  >
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
          
            <!-- 第七列 -->
          <el-table-column label="回执状态"  >
            <template slot-scope="scope">
              <span > 
                  <i class="pointers" style="background-color:rgb(72,198,144);" v-if="scope.row.returnState == '正确回执'" ></i>
                  <i class="pointers" style="background-color:rgb(238,94,0);" v-if="scope.row.returnState == '系统补正'" ></i>
                  <i class="pointers" style="background-color:rgb(184,12,0);" v-if="scope.row.returnState == '错误回执'" ></i>
                   {{ scope.row.returnState }}
              </span>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="回执时间"  width="115">
            <template slot-scope="scope">
              <span>{{ scope.row.ruturnDate }}</span>
            </template>
          </el-table-column>
          <!-- 第七列 -->
          <el-table-column label="最后更新日期"  width="115">
            <template slot-scope="scope">
              <span>{{ scope.row.upDateTime }}</span>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <div v-if="scope.row.sendState == '暂存'" style="color:#409EFF;cursor: pointer;" >
                  <span @click="handleEdit(scope.$index, scope.row)">编辑</span>
              </div>
              <div v-if="scope.row.sendState != '暂存'" style="color:#409EFF;cursor: pointer;">
                  <span @click="handleEdit(scope.$index, scope.row)">查看</span> |
                  <span @click="handleDownLoad(scope.$index, scope.row)">下载回执信息</span>
                <!-- <a href="newsPortManage.vue"></a> -->
              </div>
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
         <el-pagination 
          @size-change="handleSizeChange" 
          @current-change="handleCurrentChange" 
          :current-page="currentPage" 
          :page-sizes="[10, 20, 30, 40,50]"
          :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" 
          :total="tableData.length" background>
         </el-pagination>
        </p>
      </div>  
    </el-card>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
import { onlineFill } from '@/api/dataSubmitAjax'
export default {
  data() {
    return {
      // 第一大块变量开始
      labelPosition: 'right', // 列表对齐方式
      sizeForm: {
        timeSelectValue: '', // 报送日期
        sendType: '', // 报送类型
        sendState: '' // 报送状态
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
      // tableData: [{
      //   orderNumber: '1',
      //   name: 'CSSC0000000000001‐20181021‐00000004.XML',
      //   upType: '大额交易新增',
      //   upData: '2017-10-11 09:27',
      //   sendState: '暂存',
      //   ruturnDate: '2017-10-11 10:27',
      //   upDateTime: '2017-10-23 10:19',
      //   returnState: '正确回执',
      //   path: 'newsPortManage'
      // }, {
      //   orderNumber: '2',
      //   name: 'CSSC0000000000001‐20181021‐00000004.XML',
      //   upType: '大额交易新增',
      //   upData: '2017-10-11 09:27',
      //   sendState: '暂存',
      //   ruturnDate: '2017-10-11 10:27',
      //   upDateTime: '2017-12-23 10:30',
      //   returnState: '系统补正',
      //   path: 'newsPortManage'
      // }, {
      //   orderNumber: '3',
      //   name: 'CSSC0000000000001‐20181021‐00000003.XML',
      //   upType: '大额交易新增',
      //   upData: '2017-10-11 09:27',
      //   sendState: '已报送',
      //   ruturnDate: '2017-10-11 10:27',
      //   upDateTime: '2017-12-23 10:30',
      //   returnState: '错误回执',
      //   path: 'fillCheck'
      // }, {
      //   orderNumber: '4',
      //   name: 'CSSC0000000000001‐20181021‐00000004.XML',
      //   upType: '可疑交易新增',
      //   upData: '2017-10-11 09:27',
      //   sendState: '已报送',
      //   ruturnDate: '2017-10-11 10:27',
      //   upDateTime: '2017-12-23 10:30',
      //   returnState: '错误回执',
      //   path: 'fillCheck'
      // }],
      listLoading: true,
      tableData: [],
      // 默认开始页码
      currentPage: 1,
      // 每页显示条数
      pagesize: 10

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
      this.sizeForm.timeSelectValue = '' // 清空报送日期
      this.sizeForm.sendType = '' // 清空报送类型
      this.sizeForm.sendState = '' // 清空报送状态
    },
    // 跳转传值
    handleEdit(index, row) {
      // if (row.upType === '大额交易新增') {
      //   //  alert('大额交易新增')
      //   this.$router.push({ path: row.path, query: { firstBoxType: 'addBig', buttonType: 'online' }})
      // } else if (row.upType === '可疑交易新增' || '可疑交易修改') {
      //   this.$router.push({ path: row.path, query: { firstBoxType: 'suspicious', buttonType: 'online' }})
      // } else if (row.upType === '大额交易修改') {
      //   this.$router.push({ path: row.path, query: { firstBoxType: 'modify', buttonType: 'online' }})
      // } else if (row.upType === '大额交易删除') {
      //   this.$router.push({ path: row.path, query: { firstBoxType: 'delete', buttonType: 'online' }})
      // }

      console.log(index, row)
    },
    // 点击下载
    handleDownLoad(index, row) {
      console.log(index, row)
    },
    // 分页
    handleSizeChange(size) {
      this.pagesize = size
      // console.log(`每页 ${size} 条`)
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      // console.log(`当前页: ${currentPage}`)
    },
    // 点击在线填报跳转
    linkTo() {
      this.$router.push({ path: 'fillWays' })
    },
    // 发送ajax 请求获取数据
    fetchData(listQuery) {
      this.listLoading = true
      onlineFill(this.listQuery).then(response => {
        // console.log(response.data.projects)
        this.tableData = response.data.projects
        this.listLoading = false
      })
    }
  },
  created() {
    var listQuery = { currentPage: this.currentPage, pageSize: this.pageSize }
    this.fetchData(listQuery)
  },
  //  初始化列表的页数，每十项一页
  mounted: function() {
    //  alert(Math.ceil(this.tableData.length))
    this.totalNumber = Math.ceil((this.tableData.length) / 10)
  }

}
</script>

<style >
.onlineFillManage  .pointers{
    display:inline-block;
    width: 5px; height: 5px;
    vertical-align: middle;
    border-radius:50%;
    margin-right:3px;
}
.onlineFillManage  .content{
  /* background: #f5f5f5; */
}
.onlineFillManage .el-col{
  cursor: pointer;
}
.onlineFillManage .titleStyle{
  font-size:14px;
  margin-top:15px;
  text-align: center
}

.onlineFillManage  .buttonDiv{
    width:120px;
    background-color: rgb(137,171,217); 
    padding: 8px 0;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    line-height: 24px;
    margin-right: 14px;
    display: inline-block;
    text-align: center
}
.onlineFillManage  .buttonDiv:nth-child(2n){
    margin-right: 0px;
}
.onlineFillManage  .buttonDiv2{
    background-color: rgb(143,129,188);
}
.onlineFillManage  .buttonDiv3{
    width:120px;
    padding: 8px 15px;
    background-color: rgb(87,192,187);
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
  background-color: rgb(60, 160, 245);
}
.onlineFillManage .checkEmpty2{
  background-color: rgb(170, 170, 170);
}
      /* 第一大块结束 */
.onlineFillManage  .secondBox{
  /* padding-top: 20px;  */
}
.onlineFillManage .secondBox .el-table th>.cell{
  text-align: center;
}

.onlineFillManage .secondBox .el-table .cell{
  text-align: center;
}
</style>

