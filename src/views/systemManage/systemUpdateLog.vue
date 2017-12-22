<template>
      <el-card>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="key" label="期数"></el-table-column>
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="生效日期"></el-table-column>
            <el-table-column prop="update" label="更新概要"></el-table-column>
            <el-table-column label="操作" min-width="30">
                <template slot-scope="scope">
                    <router-link to="systemUpdateLogDetail"><el-button type="text">查看</el-button></router-link>
                </template>
            </el-table-column>
       </el-table>
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ''
      },
      tableData: [{
        key: '2017年第12期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }, {
        key: '2017年第11期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }, {
        key: '2017年第10期',
        version: 'V1.0',
        date: '2017-10-27',
        update: '修改系统问题'
      }]
    }
  }
}
</script>
