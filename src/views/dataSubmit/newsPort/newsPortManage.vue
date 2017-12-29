<template>
  <div class="newsPortManages">
    <!-- 第一大块开始 -->
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span>消息接口管理</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">报文加载</el-button> -->
      </div>

      <div>
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
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
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
                <el-form-item label="报送时间 :">
                    <div class="chooseTime">
                      <el-date-picker v-model="sizeForm.timeSelectValue" type="daterange" range-separator="至"
                      start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                    </div>
                </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="报文包名 :">
                <span style="display:inline-block">
                    <el-input v-model="sizeForm.fileBagName"></el-input>
                </span>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="20" class="btns">
            <el-col :span="8" :offset="16">
              <el-form-item >
                <el-row :gutter="20" >
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
    <!-- 第一大块结束   -->

    <!-- 第二大块开始     -->
    <div class="box-card  secondBox">
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
         v-loading.body="listLoading" element-loading-text="Loading" 
         style="width: 100%" header-cell-class-name="el-table-hearder">
          <!-- 第一列 -->
          <el-table-column label="序号"  >
            <template slot-scope="scope">
              <span>{{ scope.$index+1 }}</span>
            </template>
          </el-table-column>
          <!-- 第二列 -->
          <el-table-column label="报文包名"  >
            <template slot-scope="scope">
              <el-tooltip placement="top-start" effect="light">
                <div slot="content">{{ scope.row.name }}</div>
                <span>{{ scope.row.name }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- 第三列 -->
          <el-table-column label="报送类型"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upType }}</span>
            </template>
          </el-table-column>
          <!-- 第四列 -->
          <el-table-column label="报送日期"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upData }}</span>
            </template>
          </el-table-column>
          <!-- 第五列 -->
          <el-table-column label="报送时间"  >
            <template slot-scope="scope">
              <span>{{ scope.row.upTime }}</span>
            </template>
          </el-table-column>

          <!-- 第六列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">查看</span>
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <p style="textAlign:right">
          <el-pagination 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="currentPage" background
            :page-sizes="[10, 20, 30, 40,50]" 
            :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" 
            :total="tableData.length">
          </el-pagination>
        </p>
      </div>  
    </el-card>
    <!-- 第二大块结束 -->
  </div>
</template>

<script>
import { newsCenter } from '@/api/dataSubmitAjax'
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
        fileBagName: '' // 报文包名
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
      // 第一大块变量结束

      // 第二大块变量开始
      // tableData: [{
      //   orderNumber: '1',
      //   name: 'NBHC0000000000001‐20180801‐00000001.ZIP',
      //   upType: '大额交易新增',
      //   upData: '2017-11-13',
      //   upTime: '2017-10-30 10:35:00',
      //   path: 'newsPortDetail'
      // }, {
      //   orderNumber: '2',
      //   name: 'NBHC0000000000001‐20180801‐00000002.ZIP',
      //   upType: '大额交易新增',
      //   upData: '2017-12-13',
      //   upTime: '2017-10-30 10:40:00',
      //   path: 'newsPortDetail'
      // }, {
      //   orderNumber: '3',
      //   name: 'NBHC0000000000001‐20180801‐00000003.ZIP',
      //   upType: '大额交易新增',
      //   upData: '2017-12-23',
      //   upTime: '2017-10-30 10:40:00',
      //   path: 'newsPortDetail'
      // }, {
      //   orderNumber: '4',
      //   name: 'NBHC0000000000001‐20180801‐00000004.ZIP',
      //   upType: '大额交易新增',
      //   upData: '2017-12-28',
      //   upTime: '2017-10-30 10:40:00',
      //   path: 'newsPortDetail'
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
      this.sizeForm.select1Value = '' // 清空下拉框1取值

      this.sizeForm.timeSelectValue = '' // 清空上传时间
      this.sizeForm.fileBagName = '' // 清空报文包名
    },
    // 点击跳转
    handleEdit(index, row) {
      this.$router.push({ path: row.path })
      console.log(index, row)
    },
    // 点击删除
    handleDelete(index, row) {
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
    // 发送ajax 请求获取数据
    fetchData(listQuery) {
      this.listLoading = true
      newsCenter(this.listQuery).then(response => {
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
    // this.totalNumber = Math.ceil((this.tableData.length) / 10)
  }
}
</script>

<style >
.newsPortManages .btns .el-form-item__content{
  /* margin-left: 0px !important; */
}
    /* 第一大块开始 */
.newsPortManages .line{
  text-align: center;
}
.newsPortManages .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
 
.newsPortManages .checkEmpty{
  width: 100px;
  border: none;
  color: #fff;
}
.newsPortManages .checkEmpty1{
  background-color: orange;
}
.newsPortManages .checkEmpty2{
  background-color: #409EFF;
}
      /* 第一大块结束 */
.newsPortManages  .secondBox{
  /* margin-top: 20px;  */
}
.newsPortManages .secondBox .el-table th>.cell{
  text-align: center;
}

.newsPortManages .secondBox .el-table .cell{
  text-align: center;
}
</style>

