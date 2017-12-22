<template >
  <div  class="UserManagement" id="UserManagement">
    <el-form :inline="true">
        <el-card>
        <div slot="header" class="clearfix">
          <span>
            <el-form-item label="金融机构编码 ：" class="User-formItem" >
            <span>C0000000000001</span>
            </el-form-item>
            <el-form-item label="报告机构名称 ：" class="User-formItem">
            <span>上海某某银行</span>
            </el-form-item> 
          </span> 
       <el-button style="float: right; padding: 10px 6px" > <router-link to="importresultquery">机构网点导入结果查询</router-link> </el-button>
        <el-button style="float: right; padding: 10px 6px;  margin-right:16px" type="primary"><router-link to="agencyimport">机构网点导入</router-link> </el-button>
    
      </div>
      <div>
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
          border
          :stripe=true
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
              <el-button  type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="User-pagination">
          <el-pagination
      
           background
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
          </el-pagination>
        </div>
      </div>

      <div class="User-bottom">
        <el-button type="primary" icon="el-icon-back">返回</el-button>

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
      tableData: tableData,
      currentPage3: 1

    }
  }
}
</script>

<style  lang="scss">
#UserManagement{
  padding: 24px;
  background-color:  #f0f2f5;
  .User-formItem{
    margin-bottom: 0
  }
  .el-table__header{
    .has-gutter{
      tr{
        th{
              text-align: center;
            
          }
      }
      
    }
    
  }
  .el-table__body{
    td{
      text-align: center
    }
  }
.User-pagination{
  text-align: right;
  padding: 20px 20px 20px 0;
}
.User-bottom{
  padding: 20px;
  text-align: center;
}
}



  
</style>