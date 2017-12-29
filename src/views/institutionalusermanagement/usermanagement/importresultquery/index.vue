<template>
  <div class="ImportResultQuery">

    <el-form :inline="true">
      <el-card>
                <div slot="header" class="clearfix User-title">
          <span>
            机构网点导入结果查询
          </span> 
       
    
      </div>
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
          <el-table :data="tableData"  >
            <el-table-column  prop="number" label="序号" ></el-table-column>
            <el-table-column  prop="file" label="导入文件名" ></el-table-column>
            <el-table-column  prop="version" label="版本号" ></el-table-column>
            <el-table-column  prop="date" label="生效日期" ></el-table-column>
            <el-table-column  prop="result" label="导入结果" ></el-table-column>
            <el-table-column  prop="handleTime" label="操作时间" ></el-table-column>
            <el-table-column  prop="handle" label="操作" >
              <template slot-scope="scope">
               <router-link to="resultDetail"> <el-button  type="text" size="small"> 导入详情</el-button></router-link> 
              </template>
            </el-table-column>
          
          </el-table>
             <div class="User-pagination">
           <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
        </div>
          
        </div>    
        <div class="bottomBtn">
          <router-link to="usermanagement">
            <el-button type="primary">返回</el-button></router-link>
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
      value1: '',
      currentPage: 1,
      currentPage3: 1
    }
  },
  created() {
    console.log(this.tableData)
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
.ImportResultQuery{

  .bottomBtn{
  text-align: center;
  padding:40px 0 20px 0;

}
}


</style>