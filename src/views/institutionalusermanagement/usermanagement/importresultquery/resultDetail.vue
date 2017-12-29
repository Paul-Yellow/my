<template>
  <div class="ResultDetail">
    <el-card>
        <div slot="header" class="clearfix User-title">
          <span>
          机构网点管理页面-导入文件详情
          </span> 
        </div>
      <el-table :data="tableData"  >
         <el-table-column      prop="number"  label="序号" min-width="60"></el-table-column>
            <el-table-column   prop="branch"  label="网点名称"  min-width="100"></el-table-column>
            <el-table-column  prop="code" label="内部网点代码" min-width="120px"></el-table-column>
            <el-table-column  prop="payNumber" label="现代化支付系统行号" min-width="150px"></el-table-column>
            <el-table-column  prop="manage" label="账号管理系统行号" min-width="150px"></el-table-column>
            <el-table-column  prop="area" label="所在地区行政区划代码" min-width="160px"></el-table-column>
            <el-table-column  prop="adress" label="网点地址" min-width="100px"></el-table-column>
            <el-table-column  prop="version" label="版本号" min-width="100"></el-table-column>
            <el-table-column  prop="date" label="生效日期" min-width="120"></el-table-column>
            <el-table-column  prop="result"  label="导入结果" min-width="100"></el-table-column>
            <el-table-column  prop="defeated"  label="失败原因" min-width="100px"></el-table-column>
      </el-table>
        <!-- <div class="User-pagination">
           <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
        </div> -->
         <div class="bottomBtn">
        <router-link to="usermanagement"><el-button type="primary"> 返回 </el-button></router-link>
        </div>
    </el-card>
  </div>
</template>
<script>
const tableData = []
for (let i = 1; i < 2; i++) {
  const obj = {
    number: `${i}`,
    branch: `上海浦东银行大望路支行${i}`,
    code: `00${i}`,
    payNumber: `${i}00${i}${i}`,
    manage: `M00${i}`,
    area: `上海市浦东区`,
    adress: `上海市浦东区大望路${i}号`,
    version: `V1.${i}`,
    date: `2018-${i > 12 ? '1' : i}-${(i + 2) > 30 ? '10' : i}`,
    result: `${i % 2 === 0 ? '成功' : '失败'}`,
    defeated: `${i % 3 === 0 ? '格式错误' : '信息不完整'}`

  }
  tableData.push(obj)
}

export default {
  name: 'ResultDetail',
  data() {
    return {
      tableData: tableData,
      currentPage: 1,
      currentPage3: 1
    }
  },
  methods: {
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

<style scoped lang="scss">
.ResultDetail{
  .bottomBtn{
    padding: 40px 0 20px 0;
    text-align: center;
  }
 
}

</style>