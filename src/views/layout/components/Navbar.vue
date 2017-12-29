<template>
  <div class="navbarwrap">
    <el-menu class="navbar clearfix big-header" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

    <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->
    <div class="title-container clearfix">
      <div class="titleRow">
          <!-- <img :src="titleUrl" alt="error"> -->
          中国反洗钱监测分析系统
      </div>


    </div>

    <div class="right-menu clearfix">

      <div class="form-container">
        <div class="title">
          <el-input
          placeholder="全文检索"
          suffix-icon="el-icon-search"
          >
          </el-input>
        </div>
      </div>

      <!-- 错误日志 -->
      <error-log v-if="errorLogs.length>0" class="errLog-container right-menu-item" :logsList="errorLogs"></error-log>

      <!-- 全屏功能 -->
      <!-- <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip> -->

      <!-- 国际化语言切换 -->
      <!-- <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
        <div>
          <svg-icon class-name='right-menu-item international-icon' icon-class="language" />
        </div>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->

      <!-- 换肤 -->
      <!-- <el-tooltip effect="dark" content="换肤" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip> -->

      <!--  -->
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <!-- 用户头像 -->
          <!-- <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'"> -->
          {{name}}
           <i class="el-icon-caret-bottom"></i>

        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      |
      <!-- 退出 -->
      <span @click="logout" class="quitContainer"> <svg-icon icon-class="exit" /> <span class="quit">退出系统</span></span>


    </div>


  </el-menu>
  <el-alert title="您的数字证书2018年2月1日即将到期，请及时更换！" type="warning"  close-text="知道了" show-icon></el-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ThemePicker from '@/components/ThemePicker'
import Screenfull from '@/components/Screenfull'
import ErrorLog from '@/components/ErrorLog'
// import titleUrl from '@/assets/navbar/title.png'

export default {
  components: {
    // Breadcrumb,
    Hamburger,
    ThemePicker,
    ErrorLog,
    Screenfull

  },
  data() {
    return {
      // titleUrl: titleUrl
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'language',
      'errorLogs'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      }).catch()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.navbarwrap {
  .el-alert--warning {
    margin-top: 5px;
  }
}
.navbar {
  background: url('../../../assets/navbar/header-bg.png') no-repeat;
  height: 60px;
  line-height: 60px;
  border-radius: 0px !important;
  .hamburger-container {
    // line-height: 60px;
    height: 60px;
    float: left;
    padding: 0 10px;
    .hamburger {
      vertical-align: middle;
    }
  }
  .form-container{
     display: inline-block;
     height: 60px;
     .title{
       padding-right: 20%;
       .el-input--small{
         font-size: inherit
       }
       .el-input__inner{
        border-radius: 14px;
        font-size: 14px;
        }
     }

  }
  .title-container{
       float: left;
       .titleRow{
         height: 60px;
         line-height: 60px;
         font-size: 1.5em;
         letter-spacing: 2px;
        //  img{
        //    vertical-align: middle
        //  }
       }

  }
  @media screen and(max-width:1100px) {
    .title-container{
      display: none;
    }

  }
  // .breadcrumb-container{
  //   float: left;
  // }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    padding-right: 2em;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
      .international-icon{
        font-size: 20px;
        cursor: pointer;
        vertical-align: -5px;
      }
    }
    .theme-switch {
      vertical-align: 10px;
    }
    .avatar-container {
      font-size: 16px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;

        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
    .quitContainer{
      cursor: pointer;
      .quit{
        font-size: 14px;
        color: #606266
      }
    }
  }
};


</style>



