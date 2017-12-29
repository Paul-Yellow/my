<template>
  <div class="homewrap">
       <el-row :gutter="16">
            <el-col :span="10">
                <el-tabs type="border-card" class="firinline-box">
                    <el-tab-pane>
                        <el-badge slot="label" is-dot>
                            <span>在办事项</span>
                        </el-badge>

                        <div v-for="o in dealtList" :key="o.id" v-loading.body="listLoading" element-loading-text="Loading" class="text item clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }">
                                <div class="clearfix">
                                    <span class="h-listtxt">{{ o.title }}</span>
                                    <span class="tabs-state tab-new">[ {{ o.state }} ]</span>
                                </div>
                            </router-link>
                            <div class="tabs-info"><span>{{ o.from }}</span><span>{{ o.createTime }}</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <el-badge slot="label" is-dot>
                            <span>待办提醒</span>
                        </el-badge>
                        <div v-for="o in remindList" :key="o.id" class="text item clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }">
                            <div class="clearfix">
                                <span class="h-listtxt">{{ o.title }}</span>
                                <span class="tabs-state">[ {{ o.state }} ]</span>
                            </div>
                            </router-link>
                             <div class="tabs-info"><span>{{ o.from }}</span><span>{{ o.createTime }}</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待阅事项">

                         <div v-for="o in readList" :key="o.id" class="text item clearfix">
                             <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }">
                            <div class="clearfix">
                                <span class="h-listtxt">{{ o.title }}</span>
                                <span class="tabs-state">[ {{ o.state }} ]</span>
                            </div>
                             </router-link>
                             <div class="tabs-info"><span>{{ o.from }}</span><span>{{ o.createTime }}</span></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="提醒事项">
                        <div v-for="o in remindList" :key="o.id" class="text item">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }">
                            <div class="clearfix">
                                <span class="h-listtxt">{{ o.title }}</span>
                                <span class="tabs-state">[ {{ o.state }} ]</span>
                            </div>
                            </router-link>
                             <div class="tabs-info"><span>{{ o.from }}</span><span>{{ o.createTime }}</span></div>
                        </div>
                    </el-tab-pane>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-tabs>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card noticecard firinline-box">
                    <div slot="header" class="header">
                        <span>通知公告</span>
                    </div>
                    <div v-for="o in announcementList" :key="o.id" class="text item h-list">
                        <div class="clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"><span class="h-listtxt"> {{ o.title }}</span></router-link>
                            <span class="tabs-state">[{{o.createTime}}]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card class="fillcard firinline-box" :body-style="{'padding-top':'10px'}">
                    <div slot="header" class="header">
                        <span>快速填报入口</span>
                    </div>
                    <div v-for="o in fileOfficialList" :key="o.id" class="text item h-list">
                        <div class="clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"><span class="h-listtxt">{{ o.title }}</span></router-link>
                            <span class="tabs-state">{{ o.createTime }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 第二列 -->
        <el-row :gutter="16">
            <el-col :span="4" type="error">
              <el-card class="returncard secinline-box">
                  <div slot="header" class="header clearfix">
                  <span>回执信息统计</span>
                  <el-button style="display:inline-block; float: right; padding: 3px 0;  cursor: default; color:#666" type="text">今日新增</el-button>
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
            <el-col :span="20">
              <el-card class="box-card submitcard secinline-box clearfix">
                <div slot="header" class="header clearfix">
                  <span>报送量统计</span>
                  <el-button style="float: right; padding: 3px 0; color:#666;  cursor: default;" type="text">近一周数据统计（单位/条）</el-button>
                </div>
                <el-row :gutter="20">
                     <el-col :span="11" :lg="{span:11}" >
                        <!-- <div class="chartitle">总计：<span>2200</span>条</div> -->
                        <chart width="100%"></chart>
                     </el-col>
                     <el-col :span="13"  >
                        <div class="home-listnum">
                        <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="large"></em>大额新增报文</span>
                                <span class="r-num">122</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="suspicious"></em>可疑新增报文</span>
                                <span class="r-num">233</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="large"></em>大额系统补正报文</span>
                                <span class="r-num">0</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="suspicious"></em>可疑系统补正报文</span>
                                <span class="r-num">12</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="large"></em>大额主动纠错报文</span>
                                <span class="r-num">34</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="suspicious"></em>可疑主动纠错报文</span>
                                <span class="r-num">8</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="large"></em>大额删除报文</span>
                                <span class="r-num">455</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="correction"></em>人工补正-可疑信息更正</span>
                                <span class="r-num">178</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="return-list">
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="correction"></em>人工补正-大额信息更正：</span>
                                <span class="r-num">34</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="return-item clearfix">
                                <span class="r-txt"><em class="correction"></em>人工补正-信息补充：</span>
                                <span class="r-num">7</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                     </el-col>
                </el-row>
                </el-card>
            </el-col>
        </el-row>
        <!-- 第三列 -->
        <el-row :gutter="16">
            <el-col :span="6">
                 <el-card class="filecard thirinline-box">
                    <div slot="header" class="header">
                        <span>文件公函</span>
                    </div>
                    <div v-for="o in caseshareList" :key="o.id" class="text item">
                        <div class="clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"><span class="h-listtxt"> {{ o.title }}</span></router-link>
                            <span class="tabs-state">[{{ o.createTime }}]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card downcard thirinline-box">
                    <div slot="header" class="header">
                        <span>下载中心</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in downloadList" :key="o.id" class="text item">
                        <div class="clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"><span class="h-listtxt"> {{ o.title }}</span></router-link>
                            <span class="tabs-state">[{{ o.createTime }}]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card2 issuecard thirinline-box">
                    <div slot="header" class="header">
                        <span>常见问题</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in answerList" :key="o.id" class="text item">
                        <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"> {{ o.title }}</router-link>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="traincard thirinline-box">
                    <div slot="header" class="header">
                        <span>报送培训</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">更多</el-button> -->
                    </div>
                    <div v-for="o in trainList" :key="o.id" class="text item">
                         <div class="clearfix">
                            <router-link :to="{ name: 'detail', params: { id: o.id, title: o.title } }"><span class="h-listtxt">  {{ o.title }}</span></router-link>
                            <span class="tabs-state">[{{ o.createTime }}]</span>
                        </div>
                    </div>
                    <div class="cardmorebtn clearfix">
                        <router-link to="/detail/index"><el-button style="float: right; padding:12px 6px 0" type="text" class="button">更多></el-button></router-link>
                    </div>
                </el-card>
            </el-col>
        </el-row>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from '@/components/Echars'
import { getList } from '@/api/dashboard'

export default {
  name: 'dashboard',
  components: { Chart },
  data() {
    return {
      announcementList: null,
      fileOfficialList: null,
      caseshareList: null,
      downloadList: null,
      answerList: null,
      trainList: null,
      dealtList: null,
      matterList: null,
      readList: null,
      remindList: null,
      listLoading: true,
      activeName: 'first',
      msgStyle: {
        top: '60px',
        right: '0'
      }
    }
  },
  computed: {
    ...mapGetters([
    //   'name',
      'roles'
    ])
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.announcementList = response.data.announcementList
        this.fileOfficialList = response.data.fileOfficialList
        this.caseshareList = response.data.caseshareList
        this.downloadList = response.data.downloadList
        this.answerList = response.data.answerList
        this.trainList = response.data.trainList
        this.matterList = response.data.matterList
        this.dealtList = response.data.dealtList
        this.remindList = response.data.remindList
        this.readList = response.data.readList
        this.listLoading = false
      })
    }
  },
  mounted: function() {
    // this.open()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.homewrap {
  .el-badge__content.is-fixed {
      top: 10px;
      right: 0;
  }
  .firinline-box {
      height: 240px;
  }
  .secinline-box {
      height: 262px;
      margin-top:20px;
  }
//   .chartitle {  // 图表标题
//     //text-align: right;
//     font-size: 14px;
//     //margin-bottom: 6px;
//   }
  .thirinline-box {
      margin-top:20px;
      height: 200px;
  }
  .el-card__header {
      padding-top:10px;
      padding-bottom:10px;
  }
  .el-card__header .header > span {
    margin-left: -6px;
    padding-left:6px;
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
    &:hover {
        color: #cc2626;
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
    text-align: center;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    padding: 0.4em 0;
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
    background-color:#83a623;
  }
  .refreshwrap {
    margin-top:10px;
    .fillbtn {
      background-color:#d79d00;
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
          cursor: pointer;
      }
  }
  .home-listnum .return-item em{
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
  }
  .home-listnum .return-item em.large {
      background-color:#88abda;
  }
  .home-listnum .return-item em.suspicious {
      background-color:#8f82bc;
  }
  .home-listnum .return-item em.correction {
      background-color:#57c0bb;
  }
}
</style>
