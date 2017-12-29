<template>
  <div class="wrongManage">
    <!-- <div>爱我中华</div> -->
    
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>异常管理</span>
      </div>
    <!-- 第一大块开始 -->
    <div>
      <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="120px">
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
            <el-form-item label="原报文报送日期 :">
                <div class="chooseTime">
                  <el-date-picker v-model="sizeForm.timeSelectValue1" type="daterange" range-separator="至"
                  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </div>
            </el-form-item>
          </el-col>
        </el-row>
        
        <!-- 第二行 -->
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

          <el-col :span="8">
              <el-form-item label="异常生成日期 :">
                <div class="chooseTime">
                  <el-date-picker v-model="sizeForm.timeSelectValue2" type="daterange" range-separator="至"
                  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                </div>
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
                      <el-button @click="onEmpty" >清空</el-button>
                  </div>
                  </el-col>
                <el-col :span="8" :offset="2">
                  <div class="grid-content bg-purple">
                      <el-button  @click="onCheck" >查询</el-button>
                  </div>
                </el-col>
                
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      </div>
    <!-- </el-card> -->
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <div class="box-card  secondBox">
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
          <el-table-column label="金融机构编码"  >
            <template slot-scope="scope">
                <span>{{ scope.row.code }}</span>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报告机构名称"  >
            <template slot-scope="scope">
              <span>{{ scope.row.originName }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="原报文包"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.oringinBag }}</div>
                <span>{{ scope.row.oringinBag }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="原报文"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.oringinFile }}</div>
                <span>{{ scope.row.oringinBag }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第六列 -->
          <el-table-column label="原报文报送方式"   width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.oringinSendWay }}</span>
            </template>
          </el-table-column>
          <!-- 第七列 -->
          <el-table-column label="原报文报送时间"  width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.oringinSendDate }}</span>
            </template>
          </el-table-column>
          <!-- 第八列 -->
          <el-table-column label="异常生成时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.wrongDate }}</span>
            </template>
          </el-table-column>
          <!-- 第九列 -->
          <el-table-column label="异常发生环节"  >
            <template slot-scope="scope">
              <span>{{ scope.row.wrongLink }}</span>
            </template>
          </el-table-column>

          <!-- 最后一列 -->
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">查看
                <!-- <a href="newsPortManage.vue"></a> -->
              </span>
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination 
            @size-change="handleSizeChange"  
            @current-change="handleCurrentChange" background
            :current-page.sync="currentPage" 
            :page-size="pagesize"  :page-sizes="[10, 20, 30, 40,50]" layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.length">
          </el-pagination>
        </p>
      </div>  
    </el-card>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
import { worryManage } from '@/api/dataSubmitAjax'
export default {
  data() {
    return {
      // 第一大块变量开始
      labelPosition: 'right', // 列表对齐方式
      sizeForm: {
        code: 'C0000000000001', // 金融机构编码
        name: '上海某某银行', // 报告机构名称
        timeSelectValue1: '', // 原报文报送日期

        timeSelectValue2: '', // 异常生成日期
        originBagName: '', // 原报文包名
        originFile: '' // 原报文名
      },
      options: [{ // 下拉框1
        value: '全部',
        label: '全部'
      }, {
        value: '大额交易新增',
        label: '大额交易新增'
      }, {
        value: '可疑交易新增',
        label: '可疑交易新增'
      }, {
        value: '大额交易修改',
        label: '大额交易修改'
      }, {
        value: '可疑交易修改',
        label: '可疑交易修改'
      }, {
        value: '大额交易删除',
        label: '大额交易删除'
      }],
      options2: [{ // 下拉框2
        value: 'quanbu',
        label: '全部'
      }, {
        value: 'yibaosong',
        label: '已报送'
      }, {
        value: 'yishangchuan',
        label: '已上传'
      }],
      // 第一大块变量结束

      // 第二大块变量开始
      // tableData: [{
      //   orderNumber: '1',
      //   code: 'C0000000000001',
      //   originName: '上海**银行',
      //   oringinBag: 'CSSC0000000000001‐20171206‐00000001.ZIP',
      //   oringinFile: 'CSSC0000000000001‐20171206‐00000004.XML',
      //   oringinSendWay: '页面加载',
      //   oringinSendDate: '2017-12-06 08:30',
      //   wrongDate: '2017-12-06 09:05',
      //   wrongLink: '数据解包'
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
      this.sizeForm.timeSelectValue1 = '' // 清空原报文报送日期

      this.sizeForm.timeSelectValue2 = '' // 清空异常生成日期
      this.sizeForm.originBagName = '' // 清空原报文包名
      this.sizeForm.originFile = '' // 清空原报文名
    },
    // 点击编辑
    handleEdit(index, row) {
      this.$router.push({ path: 'wrongCheck' })
      //  console.log(index, row)
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 分页
    handleSizeChange(size) {
      this.pagesize = size
      console.log(`每页 ${size} 条`)
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      console.log(`当前页: ${currentPage}`)
    },
    // 发送ajax 请求获取数据
    getAjaxData() {
      this.listLoading = true
      worryManage(this.listQuery).then(response => {
        // console.log(response.data.projects)
        this.tableData = response.data.projects
        this.listLoading = false
      })
    }
  },
  created() {
    this.getAjaxData()
  },
  //  初始化列表的页数，每十项一页
  mounted: function() {
    //  alert(Math.ceil(this.tableData.length))
    this.totalNumber = Math.ceil((this.tableData.length) / 10)
  },
  // 监控列表项的变化
  watch: {
    totalNumber: function() {
      // alert(Math.ceil(this.tableData.length / 10))
    }
  }
}
</script>

<style >
.wrongManage{
  /* background: #f5f5f5;
  padding: 20px; */
}
.wrongManage .paddingLeftNone{
  padding-left: 0px !important;
}
.wrongManage .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.wrongManage .line{
  text-align: center;
}
.wrongManage .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.wrongManage .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.wrongManage .checkEmpty1{
  background-color: orange;
}
.wrongManage .checkEmpty2{
  background-color: #409EFF;
}
      /* 第一大块结束 */
.wrongManage  .secondBox{
  /* margin-top: 20px;  */
}
.wrongManage .secondBox .el-table th>.cell{
  text-align: center;
}

.wrongManage .secondBox .el-table .cell{
  text-align: center;
}
</style>

