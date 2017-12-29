<template>
  <el-card>
      <div class="title">
          <p class="titleDetail">{{this.$route.params.title}}</p>
          <span>发布日期：2017年12月29日 </span>
          <DividerHorizontal />
      </div>
      <div class="contentDetail">
        <p>2月15日，中国人民银行2017年反洗钱工作会议在福州召开。会议总结了2016年人民银行反洗钱工作，分析了当前反洗钱工作形势，结合贯彻
              中央经济工作会议和人民银行工作会议精神，对2017年反洗钱工作进行了全面部署。人民银行党委委员、副行长殷勇出席会议并讲话。</p>
        <p>会议指出，《中华人民共和国反洗钱法》颁布十年以来，在党中央、国务院正确领导下，人民银行认真履行法律赋予的反洗钱职责，在完善
                反洗钱制度、应对金融行动特别工作组（FATF）第四轮互评估、强化反洗钱监管和调查、加强反洗钱监测分析、推动反洗钱国际合作等方面
                取得了明显成效，我国反洗钱工作取得了长足进步。</p>
        <p>在充分肯定成绩的同时，会议强调，当前防控金融风险、维护金融稳定的形势依然严峻，要增强大局意识和风险意识，密切关注反洗钱、
                  反逃税、反恐怖融资等领域相关风险的新变化、新动向和新情况，及时采取行动防范和化解各类风险。今年要进一步完善反洗钱制度体系，
                  全力推进接受FATF第四轮互评估工作，不断拓展和深化反洗钱国际合作，突出防范风险为本，加强反洗钱监管，提升反洗钱监管有效性。</p>
          <p>人民银行上海总部，各分行、营业管理部、省会（首府）城市中心支行反洗钱负责同志，反洗钱局和反洗钱监测分析中心代表出席会议。</p>
      </div>
      <div class="card-footer">
          <el-row>
              <el-col :span="24">
                  <div class="accessoryContanier">
                      <strong class="accessoryTitle">附件(1): </strong>
                      <a class="accessory" href="#">银行业大额交易报告填写模板.xlsx</a>
                  </div>
                  <div class="accessoryContanier">
                  <strong class="accessoryTitle">附件(2): </strong>
                  <a class="accessory" href="#">银行业大额交易报告填写模板.xlsx</a>
              </div>
              </el-col>
              <!-- <el-col :span="6">
                  <p>发布日期：2017年10月26日</p>
              </el-col> -->
          </el-row>
          <el-row>
              <div class="btn">
                  <router-link to="/dashboard"><el-button type="primary"><i class="el-icon-back"></i> 返回</el-button></router-link>
              </div>
          </el-row>

      </div>
  </el-card>
</template>

<script>
import DividerHorizontal from '../layout/components/DividerHorizontal'
// import { getDetail } from '@/api/dashboard'

export default {
  name: 'detail',
  components: {
    DividerHorizontal
  },
  data() {
    return {
      // title: null,
      // content: null,
      // createTime: null
    }
  },
  created() {
    // var id = this.$route.params.id
    // var title = this.$route.params.title
    // console.log(title)
    // this.fetchData(id)
  },
  methods: {
    // fetchData(id) {
    //   this.listLoading = true
    //   getDetail(id).then(response => {
    //     this.title = response.data.id.title
    //     this.content = response.data.id.content
    //     this.createTime = response.data.id.createTime
    //   })
    // }
  }

}
</script>

<style lang="scss" scoped>
.title {
  height: 55px;
  font-size: 16px;
  color: #001d38;
  margin: 0 24px;
  // padding-top: 10px;
  text-align: center;
  span {
    font-size: 12px;
    color: #666;
  }
  & p{
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.paragraph {
  text-indent: 28px;
  font-size: 14px;
  line-height: 28px;
  color: #333;
}
.contentDetail {
  margin: 20px 7% 9% 0%;
  padding: 0 9% 0 9%;
  // height:500px;
  overflow: auto;
  & p {
    text-indent: 20px;
    font-size: 14px;
    line-height: 20px;
  }
}
.accessoryContanier {
  margin-left: 5%;
  font-size: 14px;
  margin-top: 8px;
}
.btn {
  text-align: center;
  margin-top: 20px;
}
</style>
