<template>
  <div class="homewrap">
       <el-row :gutter="20">
            <el-col :span="9">
                <el-tabs type="border-card" class="firinline-box">
                    <el-tab-pane label="在办事项">
                        <div v-for="o in 3" :key="o" class="text item clearfix">
                            <div class="clearfix">
                                <span class="h-listtxt">{{'> 零报告确认提醒:2017年9月10日至今，无报告' + o }}</span>
                                <span class="tabs-state tab-new">[ new ]</span>
                            </div>
                             <div class="tabs-info"><span>反洗钱中心端</span><span>2017年3月10日</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待办提醒">
                        <div v-for="o in 3" :key="o" class="text item clearfix">
                            <div class="clearfix">
                                <span class="h-listtxt">{{'> 页面加载已上传未报送的数据包数' + o }}</span>
                                <span class="tabs-state">[ 未处理 ]</span>
                            </div>
                             <div class="tabs-info"><span>反洗钱中心端</span><span>2017年3月10日</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待阅事项">
                         <div v-for="o in 3" :key="o" class="text item clearfix">
                            <div class="clearfix">
                                <span class="h-listtxt">{{'> 页面加载已上传未报送的数据包数' + o }}</span>
                                <span class="tabs-state">[ 已处理 ]</span>
                            </div>
                             <div class="tabs-info"><span>反洗钱中心端</span><span>2017年3月10日</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="提醒事项">
                        <div v-for="o in 3" :key="o" class="text item">
                            <div class="clearfix">
                                <span class="h-listtxt">{{'> 页面加载已上传未报送的数据包数' + o }}</span>
                                <span class="tabs-state">[ 已处理 ]</span>
                            </div>
                             <div class="tabs-info"><span>反洗钱中心端</span><span>2017年3月10日</span></div>
                        </div>
                    </el-tab-pane>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-tabs>
            </el-col>
            <el-col :span="9">
                <el-card class="box-card noticecard firinline-box">
                    <div slot="header" class="header">
                        <span>通知公告</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item h-list">
                        <div class="clearfix">
                            <span class="h-listtxt"> {{'中国反洗监测中心与斯里兰卡金融情报机构签署反洗钱反恐怖荣资金' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="filecard firinline-box">
                    <div slot="header" class="header">
                        <span>文件公函</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in 4" :key="o" class="text item h-list">
                        <div class="clearfix">
                            <span class="h-listtxt">{{'金融机构反洗钱规定 ' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row :gutter="20">
            <el-col :span="5" type="error">
              <el-card class="returncard secinline-box">
                  <div slot="header" class="header clearfix">
                  <span>回执信息统计</span>
                  <el-button style="float: right; padding: 3px 0; color:#666" type="text">今日新增</el-button>
                </div>
                <div>
                    <div class="return-item clearfix">
                        <span class="r-txt"><em></em>人工补正</span>
                        <span class="r-num">122</span>
                    </div>
                     <div class="return-item clearfix">
                        <span class="r-txt"><em></em>系统补正</span>
                        <span class="r-num">122</span>
                    </div>
                     <div class="return-item clearfix">
                        <span class="r-txt"><em></em>正确回执</span>
                        <span class="r-num">122</span>
                    </div>
                     <div class="return-item clearfix">
                        <span class="r-txt"><em></em>错误回执</span>
                        <span class="r-num">2</span>
                    </div>
                     <div class="return-item clearfix">
                        <span class="r-txt"><em></em>异常包</span>
                        <span class="r-num">0</span>
                    </div>
                </div>
                </el-card>
            </el-col>
            <el-col :span="15">
              <el-card class="box-card submitcard secinline-box clearfix">
                <div slot="header" class="header clearfix">
                  <span>报送量统计</span>
                  <el-button style="float: right; padding: 3px 0; color:#666;" type="text">近一周数据统计</el-button>
                </div>
                <el-row :gutter="20">
                     <el-col :span="12" :lg="{span:12}" >
                        <chart width="100%"></chart>
                     </el-col>
                     <el-col :span="12"  >
                        <div class="home-listnum">
                        <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>大额新增报文</span>
                                <span class="r-num">122</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>可疑新增报文</span>
                                <span class="r-num">233</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>大额系统补正报文</span>
                                <span class="r-num">0</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>可疑系统补正报文</span>
                                <span class="r-num">12</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>大额主动纠错报文</span>
                                <span class="r-num">34</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>可疑信息更正</span>
                                <span class="r-num">178</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>大额删除报文</span>
                                <span class="r-num">455</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>可疑主动纠错报文</span>
                                <span class="r-num">8</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>大额信息更正</span>
                                <span class="r-num">34</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em></em>信息补充：</span>
                                <span class="r-num">7</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                     </el-col>
                </el-row>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card class="fillcard secinline-box" :body-style="{ paddingTop: '12px' }">
                    <div slot="header" class="header">
                        <span>快速填报入口</span>
                    </div>
                    <div>
                        <router-link to="/dataSubmit/onlineFillManage">
                            <div class="fillwrap editwrap">
                                <div class="fillbtn">
                                    <i class="el-icon-edit"></i>
                                </div>
                                <span>在线填报</span>
                            </div>
                        </router-link>
                        <router-link to="/dataSubmit/pageLoading">
                            <div class="fillwrap refreshwrap">
                                <div class="fillbtn">
                                    <i class="el-icon-refresh"></i>
                                </div>
                                <span>页面加载</span>
                            </div>
                        </router-link>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="casecard thirinline-box">
                    <div slot="header" class="header">
                        <span>案例分享</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        <div class="clearfix">
                            <span class="h-listtxt"> {{'江苏银行反洗钱案例 ' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card downcard thirinline-box">
                    <div slot="header" class="header">
                        <span>下载中心</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        <div class="clearfix">
                            <span class="h-listtxt"> {{'银行业大额可疑交易报告填写模板 ' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card2 issuecard thirinline-box">
                    <div slot="header" class="header">
                        <span>常见问题</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                         <div class="clearfix">
                            <span class="h-listtxt">  {{'如何修改已提交的可疑交易报告' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="traincard thirinline-box">
                    <div slot="header" class="header">
                        <span>报送培训</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                         <div class="clearfix">
                            <span class="h-listtxt">  {{'报送培训' + o }}</span>
                            <span class="tabs-state">[11-20]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from '@/components/Echars'

export default {
  name: 'dashboard',
  components: { Chart },
  data() {
    return {
      activeName: 'first',
      msgStyle: {
        top: '60px',
        right: '0'
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
  },
  mounted: function() {
    // this.open()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.homewrap {
  //  padding-top: 15px;
  .firinline-box {
      height: 240px;
  }
  .secinline-box {
      height: 262px;
      margin-top:20px;
  }
  .thirinline-box {
      margin-top:20px;
      height: 240px;
  }
  .el-card__header {
      padding-top:10px;
      padding-bottom:10px;
  }
  .el-card__header .header > span {
    padding-left:10px;
    border-left-width: 4px;
    border-left-style: solid;
  }
  .noticecard .el-card__header .header > span {
    border-left-color: #0fd1dd;
  }
  .filecard .el-card__header .header > span {
    border-left-color: #a6d32e;
  }
  .returncard .el-card__header .header > span {
    border-left-color: #c3de21;
  }
  .fillcard .el-card__header .header > span {
    border-left-color: #fbc32e;
  }
  .submitcard .el-card__header .header > span {
    border-left-color: #7f9ce0;
  }
  .filecard .el-card__header .header > span {
    border-left-color: #fbc32e;
  }
  .casecard .el-card__header .header > span {
    border-left-color: #3ab7f1;
  }
  .downcard .el-card__header .header > span {
    border-left-color: #ffb81e;
  }
  .issuecard .el-card__header .header > span {
    border-left-color: #e88e8e;
  }
  .traincard .el-card__header .header > span {
    border-left-color: #e78ede;
  }
  .el-card__body .h-list {
    padding: 9px 0;
  }
  .h-listtxt {
      display:inline-block;
      width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
  .tabs-state {
      float:right;
      color:#999;
      font-size: 12px;
  }
  .tab-new {
      color:#cc2626;
  }
  .tabs-info {
      margin-top:5px;
      color:#999;
      font-size:0.5em;
      span {
          text-indent: 12px;
          display: inline-block;
          margin-right:30px;
      }
  }
  .text {
    font-size: 14px;
    width:100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    border-bottom:1px solid #e5e5e5;
    padding:0.5em 0;
    color:#666;
    &:first-child {
        padding-top:0;
    }
  }
  .el-tabs__nav {
      width:100%;
  }
  .box-card {
    margin-left:0;
    margin-right:0;
  }
  .box-card2 {
   margin-right:0;
  }
  .el-card {
   border-radius: 0;
  }
  .el-notification {
   background-color: #ffeec8;
    & p {
      font-size: 0.8em;
    }
  }
  .fillwrap {
    padding: 8px 0;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    text-align: center;
    .fillbtn {
        width: 2.8em;
        height: 2.8em;
        line-height: 2.8em;
        margin:0 auto;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        -ms-border-radius: 4px;
        color:#fff;
        text-align: center;
    }
    span {
        display: inline-block;
        font-size: 0.5em;
        margin-top: 8px;
        color:#666;
    }
  }
  .editwrap .fillbtn {
    background-color:#b5d955;
  }
  .refreshwrap {
    margin-top:10px;
    .fillbtn {
      background-color:#fcc42f;
    }
  }
  .return-item {
    font-size: 0.8em;
    margin-top: 1.8em;
    &:first-child {
        margin-top: 0;
    }
    .r-txt em {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color:#ffb81e;
        vertical-align: 2px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -o-border-radius: 50%;
        -ms-border-radius: 50%;
        margin-right: 6px;
    }
    .r-num {
        float: right;
    }
  }
  .return-list {
    margin-top: 1.8em;
    font-size: 0.8em;
    &:first-child {
        margin-top: 0;
    }
  }
  .cardmorebtn .el-button--text {
      color:#999;
      &:hover {
          color:#3699ff;
      }
  }
}
</style>
