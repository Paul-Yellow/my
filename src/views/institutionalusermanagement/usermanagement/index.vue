<template >
  <div  class="UserManagement" id="UserManagement">
    <el-form :inline="true">
        <el-card>
        <div slot="header" class="clearfix User-title">
          <span>
            机构用户管理
          </span>
          <div style="float: right">
             <router-link to="agencyimport"><el-button style=" padding:8px 6px;  margin-right:16px" type="primary">机构网点导入 </el-button></router-link>
               <router-link to="importresultquery"><el-button style=" padding: 8px 6px" > 机构网点导入结果查询</el-button></router-link> 
             
            </div> 
     
    
      </div>
      <div>
        <el-row class="User-header">
          <el-col :span="24" >
            <el-form-item label="金融机构编码 ：" class="User-formItem" >
            <span>C0000000000001</span>
            </el-form-item>
            <el-form-item label="报告机构名称 ：" class="User-formItem">
            <span>上海某某银行</span>
            </el-form-item>
             <!-- <el-button style="  margin-right:16px" type="primary"><router-link to="agencyimport">机构网点导入</router-link> </el-button>
            <el-button > <router-link to="importresultquery">机构网点导入结果查询</router-link> </el-button> -->
           

          </el-col>
        </el-row>
          <el-row>
            <el-col :span="24">
            <el-form-item label="机构网点名称 ：">
              <el-input  placeholder="请输入..."></el-input>
          
            </el-form-item>
            <el-form-item label="机构网点代码 ：">
              <el-input  placeholder="请输入..."></el-input>
            </el-form-item> 
            <el-form-item label="版本号 ：">
              <el-input  placeholder="请输入..."></el-input>
            </el-form-item>
            <el-button type="primary" >查询</el-button>
            </el-col>
            



          </el-row>          

    

      </div>


      <div>
        <el-table
          :data="tableData"
        >
          <el-table-column
            prop="number"
            label="序号"
            width="80px"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="报告机构名称"
         >
          </el-table-column>
          <el-table-column
            prop="branch"
            label="网点代码"
          >
          </el-table-column>
          <el-table-column
            prop="branchName"
            label="网点名称"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="所在地区"
            >
          </el-table-column>
          <el-table-column
            prop="versions"
            label="版本号"
           >
          </el-table-column>
          <el-table-column
            prop="date"
            label="生效日期"
           >
          </el-table-column>
          <el-table-column
            width="120px"
            label="操作"
            >
            <template slot-scope="scope">
              <router-link to="branchdetail"><el-button  type="text" size="small"> 查看 </el-button></router-link>
            </template>
          </el-table-column>
        </el-table>
        <div class="User-pagination">
           <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]"
          :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" background></el-pagination>
        </div>
      </div>



    </el-card> 
    </el-form>

  
  </div>
</template>

<script>
const tableData = []
for (let i = 1; i < 8; i++) {
  const obj = {
    number: `${i}`,
    name: `上海浦发银行总行`,
    branch: `SH000${i}`,
    branchName: `上海浦东路浦发支行${i}`,
    address: `上海市浦东路${i}号`,
    versions: `V.0${i}`,
    date: `2018-${i > 12 ? '1' : i}`
  }
  tableData.push(obj)
}

export default {
  name: 'UserManagement',
  data() {
    return {
      currentPage: 1,
      tableData: tableData,
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

<style  lang="scss">
#UserManagement{
  .User-title{
    line-height: 30px;
  }
  .el-card__header{
        padding: 12px 20px;
  }
  
  .User-formItem{
    margin-bottom: 0
  }



// .User-bottom{
//   padding: 20px;
//   text-align: center;
// }
.User-header{
  padding-bottom: 20px;
}
}



  
</style>