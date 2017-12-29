<template>
  <div>
      <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>通知公告</span>
          </div>
          <div>
            <el-form :inline="true" :model="form">
              <el-row>
                <el-form-item label="标题 :">
                  <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="类型 :">
                  <el-select v-model="form.type" placeholder="请选择">
                    <el-option v-for="item in options2"  :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="发起日期 :">
                  <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="阅读状态 :">
                  <el-select v-model="form.readstate" placeholder="请选择">
                    <el-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-row style="float:right">
                <el-form-item>
                  <el-button type="primary">查询</el-button>
                  <el-button>清空</el-button>
                </el-form-item>
              </el-row>
            </el-form> 
          </div>
          <div class="box-card  secondBox">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="key" label="序号"></el-table-column>
                <el-table-column prop="title" label="标题" width="450"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="postdate" label="发布日期"></el-table-column>
                <el-table-column prop="readstate" label="阅读状态"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button @click.native.prevent="linkTo(scope.$index, tableData)" type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>
          </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
              :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      form: {
        title: '',
        type: '',
        postdate: '',
        readstate: ''
      },
      options: [{
        value: '全部',
        label: '全部'
      }, {
        value: '已阅读',
        label: '已阅读'
      }, {
        value: '未阅读',
        label: '未阅读'
      }],
      options2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '通知公告',
        label: '通知公告'
      }, {
        value: '经典案例分享',
        label: '经典案例分享'
      }, {
        value: '报送培训',
        label: '报送培训'
      }, {
        value: '下载中心',
        label: '下载中心'
      }, {
        value: '常见问题',
        label: '常见问题'
      }],
      tableData: [{
        key: '1',
        title: '中国反洗钱监测分析中心与厄瓜多尔金融经济分析组签署反洗钱反恐怖融资金融情报交流合作谅解备忘录',
        type: '通知公告',
        postdate: '2017-10-27',
        readstate: '已阅读',
        path: '/businessManage/notice'
      }, {
        key: '2',
        title: '案例标题1',
        type: '经典案例分享',
        postdate: '2017-10-27',
        readstate: '未阅读',
        path: '/businessManage/noticeShareText'
      }, {
        key: '3',
        title: '报送培训标题1',
        type: '报送培训',
        postdate: '2017-10-27',
        readstate: '已阅读',
        path: '/businessManage/noticeTrain'
      }, {
        key: '4',
        title: '银行业大额交易报告填写模板.xlsx',
        type: '下载中心',
        postdate: '2017-10-27',
        readstate: '已阅读',
        path: '/businessManage/noticeDownload'
      }, {
        key: '5',
        title: '如何修改已提交的可疑交易报告？',
        type: '常见问题',
        postdate: '2017-10-27',
        readstate: '已阅读',
        path: '/businessManage/noticeQuestion'
      }],
      value: ''
    }
  },
  methods: {
    linkTo(index, data, o) {
      this.openPage(data[index].path)
    },
    openPage(url) {
      this.$router.push({
        path: url,
        query: { }
      })
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.btn-row {
  text-align: right;
}

// .btn-quer {
//   background: #1a90f4;
//   border-color: #1a90f4;
//   color: #fff;
//   width: 100px;
// }

// .btn-clear {
//   background: #ff9a1b;
//   border-color: #ff9a1b;
//   color: #fff;
//   width: 100px;
// }
  
</style>
