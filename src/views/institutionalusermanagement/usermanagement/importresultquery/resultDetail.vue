<template>
  <div class="ResultDetail">
    <el-card>
      <el-table :data="tableData" border >
         <el-table-column   fixed   prop="number"  label="序号" width="80"></el-table-column>
            <el-table-column fixed  prop="branch"  label="网点名称" ></el-table-column>
            <el-table-column  prop="code" label="内部网点代码" ></el-table-column>
            <el-table-column  prop="payNumber" label="现代化支付系统行号" ></el-table-column>
            <el-table-column  prop="manage" label="账号管理系统行号" ></el-table-column>
            <el-table-column  prop="area" label="所在地区行政区划代码" ></el-table-column>
            <el-table-column  prop="adress" label="网点地址" ></el-table-column>
            <el-table-column  prop="version" label="版本号" width="100"></el-table-column>
            <el-table-column  prop="date" label="生效日期" width="120"></el-table-column>
            <el-table-column  prop="result"  label="导入结果" width="100"></el-table-column>
            <el-table-column  prop="defeated"  label="失败原因" ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
const tableData = []
for (let i = 1; i < 10; i++) {
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
      tableData: tableData
    }
  }
}
</script>

<style scoped>
.ResultDetail{
  padding: 1px;
  background-color:  #f0f2f5;
}

</style>