<template>
  <div class="newsPortDetail">
   <div >
    <!-- 第一大块开始 -->
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span>交易报文加载</span>
      </div>

      <div>
        <el-row>
          <el-col :span="16" class="contentTitle">报文详情</el-col>
        </el-row>
        <el-form ref="form" :model="sizeForm" :label-position="labelPosition" label-width="110px" class="content">
          <!-- 第一行 -->
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="报文包名 :">
                <span>{{sizeForm.name}}</span>
                <!-- <el-input v-model="sizeForm.name"></el-input> -->
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="报送时间 :">
                <span>{{sizeForm.upTime}}</span>
              </el-form-item>
            </el-col>

            <el-col :span="8">
                <el-form-item label="报文包大小 :">
                  <span>{{sizeForm.bagSize}}</span>
                </el-form-item>
            </el-col>
          </el-row>
          
          <!-- 第二行 -->
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="报文类型 :">
                <span>{{sizeForm.fileType}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="报文数量 :">
                <span>{{sizeForm.fileNumber}}</span>
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>
      </div>  
      <!-- </el-card> -->
      <!-- 第一大块结束   -->

      <!-- 分割线 -->
      <div class="el-divider el-divider-horizontal" ></div>

      <!-- 第二大块开始     -->
      <div class="box-card  secondBox">
        <el-row>
          <el-col :span="16" class="contentTitle">交易报文详情</el-col>
        </el-row>  

          <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
            v-loading.body="listLoading" element-loading-text="Loading"
            style="width: 100%" header-cell-class-name="el-table-hearder">
            <!-- 第一列 -->
            <el-table-column label="报文名"  >
              <template slot-scope="scope">
                <el-tooltip placement="top-start" effect="light">
                  <div slot="content">{{ scope.row.name }}</div>
                  <span>{{ scope.row.name }}</span>
                </el-tooltip>
              </template>
            </el-table-column>
            <!-- 第二列 -->
            <el-table-column label="附件包"  >
              <template slot-scope="scope">
                <span>{{ scope.row.otherBag }}</span>
              </template>
            </el-table-column>
            <!-- 第三列 -->
            <el-table-column label="报文类型"  >
              <template slot-scope="scope">
                <span>{{ scope.row.upType }}</span>
              </template>
            </el-table-column>
            <!-- 第四列 -->
            <el-table-column label="回执生成时间"  >
              <template slot-scope="scope">
                <span>{{ scope.row.returnTime }}</span>
              </template>
            </el-table-column>
            <!-- 第五列 -->
            <el-table-column label="回执标志"  >
              <template slot-scope="scope">
                <span>{{ scope.row.returnSign }}</span>
              </template>
            </el-table-column>
            

            <!-- 最后一列 -->
            <el-table-column label="操作">
              <template slot-scope="scope">
                <span style="color:#409EFF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">预览</span>
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
        <!-- 第二大块结束 -->

            <!-- 第三大块开始 -->
        <div class="buttonBox">
          <el-row :gutter="20">  
            <el-col :span="4" :offset="10">
                  <el-row :gutter="20">
                    <el-col :span="6" :offset="1">
                      <div >
                        <!-- class="checkEmpty checkEmpty2" -->
                          <router-link to="newsPortManage">
                            <el-button type="primary">
                              <i class="el-icon-back"></i> 返回
                            </el-button>
                          </router-link>
                      </div>
                      </el-col>
                  </el-row>
              </el-col>
            </el-row>  
        </div>
        <!-- 第三大块结束 -->
      </el-card>
      
    </div>

  </div>
</template>

<script>
import { newsCenterDetail } from '@/api/dataSubmitAjax'
export default {
  data() {
    return {
      // 第一大块变量开始
      labelPosition: 'right', // 列表对齐方式
      // sizeForm: {
      //   name: 'XXXX.ZIP', // 报文包名
      //   upTime: '2017-10-30 10:35:00', // 上传时间
      //   bagSize: '300000B', // 报文包大小
      //   fileType: '大额交易报告新增报文', // 报文类型
      //   fileNumber: 4 // 报文数量
      // },
      sizeForm: {},
      // 第一大块变量结束

      // 第二大块变量开始
      // tableData: [{
      //   name: 'NBHC0000000000001‐20180801‐00000001.ZIP',
      //   upType: '大额交易报告新增报文',
      //   otherBag: '无',
      //   returnTime: '2017-11-01 11:27',
      //   returnSign: '正确回执'
      // }, {
      //   name: 'NBHC0000000000001‐20180801‐00000002.ZIP',
      //   upType: '大额交易报告新增报文',
      //   otherBag: '无',
      //   returnTime: '2017-11-21 11:27',
      //   returnSign: '系统补正回执'
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
    onSubmit() {
      console.log('submit!')
    },
    // 点击编辑
    handleEdit(index, row) {
      this.$router.push({ path: 'filePreview', query: { lastPage: 'newsPortDetail' }})
      // console.log(index, row)
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
      newsCenterDetail(this.listQuery).then(response => {
        // console.log(response.data.sizeForm)
        this.tableData = response.data.projects
        this.sizeForm = response.data.sizeForm
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
.newsPortDetail .contentTitle{
  padding: 10px 0 20px;
  font-size: 16px;
}
.newsPortDetail .content{
  padding: 20px 10px;
  /* background: #f5f5f5; */
}
.newsPortDetail .paddingLeftNone{
  padding-left: 0px !important;
}
.newsPortDetail .paddingRightNone{
  padding-right: 0px !important;
}
    /* 第一大块开始 */
.newsPortDetail .line{
  text-align: center;
}
.newsPortDetail .upData{
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #606266;
}
.newsPortDetail .el-date-editor--daterange.el-input__inner{
    width: 245px;
}
.newsPortDetail .el-range-editor.el-input__inner {
    padding-right: 3px;
}
.newsPortDetail .chooseTime .el-col-10{
  padding-left: 2px !important;
}
.newsPortDetail .chooseTime .el-date-editor .el-range-input {
    width: 80px;
}
.newsPortDetail .chooseTime  .el-date-editor .el-range-separator {
    padding: 0 5px;
    width: 24px;

}  


      /* 第一大块结束 */

      /* 分割线 */
.newsPortDetail .el-divider{
    margin-top: 20px;   
    margin-bottom: 32px;
    height: 1px;
    width: 100%;
    background: #e8e8e8;
    }
.newsPortDetail  .secondBox{
  /* margin-top: 20px;  */
}
.newsPortDetail .secondBox .el-table th>.cell{
  text-align: center;
}

.newsPortDetail .secondBox .el-table .cell{
  text-align: center;
}

/* 按钮 */
.newsPortDetail .buttonBox{
    margin-top: 45px;
}
.newsPortDetail .checkEmpty{
  width: 100%;
  /* border: 1px solid rgb(145,145,145); */
  color: #fff;
  background-color: rgb(228,228,228);
  padding:6px 20px;
}
.newsPortDetail .checkEmpty1{
  background-color: #1a90f4;
}
.newsPortDetail .checkEmpty2{
  background-color: #ff9a1b;
}
.newsPortDetail .checkEmpty3{
  background-color: #e95152;
}

</style>

