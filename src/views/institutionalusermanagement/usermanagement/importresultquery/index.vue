<template>
  <div class="ImportResultQuery">

    <el-form :inline="true">
      <el-card>
        <el-row>
          <el-col :span="24">
            <el-form-item label="导入日期 ：">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="版本号 ：">
              <el-input  placeholder="请输入"></el-input>
            </el-form-item>
            <el-button type="primary">查询</el-button>

          </el-col>
        </el-row> 

        <div>
          <el-table :data="tableData" border >
            <el-table-column  prop="number" label="序号" ></el-table-column>
            <el-table-column  prop="file" label="导入文件名" ></el-table-column>
            <el-table-column  prop="version" label="版本号" ></el-table-column>
            <el-table-column  prop="date" label="生效日期" ></el-table-column>
            <el-table-column  prop="result" label="导入结果" ></el-table-column>
            <el-table-column  prop="handleTime" label="操作时间" ></el-table-column>
            <el-table-column  prop="handle" label="操作" >
              <template slot-scope="scope">
                <el-button  type="text" size="small">导入详情</el-button>
              </template>
            </el-table-column>
          
          </el-table>
          
        </div>    
        <div class="bottomBtn">
          <el-button type="primary" icon="el-icon-back">返回</el-button>
        
        </div>   
      </el-card>  


     
    </el-form>

  </div>
</template>

<script>
const tableData = []
for (let i = 1; i < 10; i++) {
  const obj = {
    number: `${i}`,
    file: `00${i}`,
    version: `V1.${i}`,
    date: `2018-${i > 12 ? '1' : i}-${(i + 2) > 30 ? '10' : i}`,
    result: `成功${i + 2}条，失败${i + 1}条`,
    handleTime: `2018-${i > 12 ? '1' : i}-${(i + 2) > 30 ? '10' : i}`
  }
  tableData.push(obj)
}
export default {
  name: 'ImportResultQuery',
  data() {
    return {
      tableData: tableData,
      value1: ''
    }
  },
  created() {
    console.log(this.tableData)
  }
}
</script>

<style scoped lang="scss">
.ImportResultQuery{
  padding: 24px;
  background-color:  #f0f2f5;
  .bottomBtn{
  text-align: center;
  padding:40px 0 20px 0;

}
}


</style>