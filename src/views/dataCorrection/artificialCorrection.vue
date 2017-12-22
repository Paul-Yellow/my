<template>
  <div class="app-container">
      <el-card>
          <div slot="header" class="clearfix">
            <span>人工补正要求管理</span>
          </div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="7">
                    <el-form-item label="要求类型">
                        <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option
                            v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value">
                        </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="处理情况">
                        <el-select v-model="formInline.region2" placeholder="请选择">
                         <el-option
                            v-for="item2 in options2"  :key="item2.value"  :label="item2.label" :value="item2.value">
                        </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="发起日期">
                        <el-date-picker type="daterange" v-model="value" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
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

          <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" style="width: 100%" header-cell-class-name="el-table-hearder">
            <el-table-column label="序号">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column label="补正要求ID">
              <template slot-scope="scope">
                {{scope.row.id}}
              </template>
            </el-table-column>
            <el-table-column label="要求类型">
              <template slot-scope="scope">
                {{scope.row.type}}
              </template>
            </el-table-column>
            <el-table-column label="发起时间">
              <template slot-scope="scope">
                {{scope.row.startdate}}
              </template>
            </el-table-column>
            <el-table-column label="处理情况">
              <template slot-scope="scope">
                {{scope.row.manage}}
              </template>
            </el-table-column>
            <el-table-column label="处理时间">
              <template slot-scope="scope">
                {{scope.row.managedate}}
              </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small">补正要求通知下载</el-button>
                </template>
            </el-table-column>
       </el-table>
       <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/artificialCorrection'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      formInline: {
        user: '',
        region: '',
        region2: ''
      },
      options: [{
        value: '全部',
        label: '全部'
      }, {
        value: '信息更正',
        label: '信息更正'
      }, {
        value: '信息补充',
        label: '信息补充'
      }],
      options2: [{
        value: '全部',
        label: '全部'
      }, {
        value: '待补正',
        label: '待补正'
      }, {
        value: '处理中',
        label: '处理中'
      }, {
        value: '已补正',
        label: '已补正'
      }]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.projects
        this.listLoading = false
      })
    }
  }
}
</script>
