<template>
  <div class="BranchDetail">
    <el-form label-width="160px" :label-position="'left'">
      <el-card>
        <div slot="header" class="clearfix User-title">
          <span>
          机构网点查看
          </span> 
        </div>
        <el-row>

          <el-col :span="8" :lg="6">
           <el-form-item label="报告机构名称 ：" label-width="80">
              <span>上海某某银行</span>
            </el-form-item>            
          </el-col>
          <el-col :span="8" :lg="6">
            <el-form-item label="网点名称 ：" label-width="80">
              <span>网点A1004</span>
            </el-form-item>
          </el-col> 



          <el-col :span="8" :lg="6">
            <el-form-item label="内部网点代码 ：" label-width="80">
              <span>0001</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6" >
            <el-form-item label="现代化支付系统行号 ：" label-width="100">
              <span>22222</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6">
            <el-form-item label="账号管理系统行号 ：" label-width="100">
              <span>3333</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6" >
            <el-form-item label="其他类型网点代码 ：" label-width="100">
              <span>666</span>
            </el-form-item>
          </el-col> 
          <el-col :span="8" :lg="6">
            <el-form-item label="所在地区 ：" label-width="80">
              <span>北京市市辖区</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6">
            <el-form-item label="网点地址 ：" label-width="80">
              <span>北京</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6">
            <el-form-item label="版本号 ：" label-width="80">
              <span>V1.0</span>
            </el-form-item>
          </el-col>
          <el-col :span="8" :lg="6">
            <el-form-item label="生效日期 ：" label-width="80">
              <span>2018-12-5</span>
            </el-form-item>
          </el-col>  
            <el-col :span="8" :lg="6">
            <el-form-item label="创建时间 ：" label-width="80">
              <span>2018-2-14 16:00</span>
            </el-form-item>
          </el-col>                                                      
        </el-row>


      <el-row class="mapContanier">
        <el-col :span="16" :offset="4">
  
          <div>
            <img :src="mapImg" alt="error">
          </div>
        </el-col>
      </el-row>  
      <div class="bottomBtn">
         <router-link to="usermanagement"><el-button type="primary">返回</el-button></router-link> 
        </div>      
      </el-card>

      

    </el-form>

  </div>
</template>

<script>
import mapImg from '@/assets/institutionalusermanagement/map.jpg'
export default {
  name: 'BranchDetail',
  data() {
    return {
      mapImg: mapImg
    }
  }
}
</script>

<style lang="scss">
.BranchDetail{

  .bottomBtn{
    text-align: center;
      padding: 40px 0 20px 0
   }
   .mapContanier{
     padding: 40px 0  0 0;
     img{
       width: 100%;
     }
   }
}


</style>