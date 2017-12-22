<template>
  <div>
      <el-card>
          <!-- <div slot="header" class="clearfix">
            <span>文件公函</span>
          </div> -->
          <el-form :inline="true" :model="form">
            <el-row>
                <el-col :span="7">
                     <el-form-item label="标题 :">
                        <el-input v-model="form.name"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="发起日期 :">
                        <el-date-picker type="daterange" v-model="value" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="阅读状态 :">
                        <el-select v-model="form.region" placeholder="请选择">
                        <el-option
                            v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="btn-row">
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button>清空</el-button>
                </el-form-item>
            </el-row>
          </el-form> 
      </el-card>
      <el-card class="tablewrap">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="序号"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="postdate" label="发布日期"></el-table-column>
            <el-table-column prop="readstate" label="阅读状态"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <router-link to="repliedFileOfficial" v-if="scope.row.hasCallBack"><el-button type="text" size="small">查看</el-button></router-link>
                    <router-link to="noreplyFileOfficial" v-if="!scope.row.hasCallBack"><el-button type="text" size="small">查看</el-button></router-link>
                </template>
            </el-table-column>
       </el-table>
         <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      form: {
        name: '',
        user: ''
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
      tableData: [{
        key: '1',
        title: '关于XXXX的通知',
        postdate: '2017-10-27',
        readstate: '已阅读',
        hasCallBack: true // 已回复
      }, {
        key: '2',
        title: '关于XXXX的通知',
        postdate: '2017-10-27',
        readstate: '未阅读',
        hasCallBack: false // 未回复
      }, {
        key: '3',
        title: '关于XXXX的通知',
        postdate: '2017-10-27',
        readstate: '已阅读',
        hasCallBack: true // 未回复
      }]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .btn-row {
        text-align: right;
    }
    .tablewrap {
        margin-top: 20px;
    }
</style>
