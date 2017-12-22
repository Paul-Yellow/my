<template>
  <scroll-bar>
    <div :class="{logo:!isCollapse,logoStyle:isCollapse}" style="logoStyle"><img :src="urlLogo"  v-show="!isCollapse"/></div>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#1c2a73" text-color="#fff" active-text-color="#409EFF"> <!--#304156-->
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import urlLogo from '@/assets/sidebar/logo.png'
export default {
  data() {
    return {
      urlLogo
    }
  },
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.logo {
  text-align: center;
  margin:20px 10px 0;
  padding-bottom:20px;
  border-bottom: 1px solid #8fa2cd;
  & img {
    width: 100px;
    height: 100px;
  }
}
.logoStyle{
  text-align: center;
  margin-top:140px;
 
   border-bottom: 'none'
}
/* .sidebar-container {
  background: linear-gradient(top,#2149a1 0%,#1f3a8b 50%,#1c2a73 100%);
  background: -webkit-linear-gradient(top,#2149a1 0%,#1f3a8b 50%,#1c2a73 100%);
  background: -moz-linear-gradient(top,#2149a1 0%,#1f3a8b 50%,#1c2a73 100%);
  background: -o-linear-gradient(top,#2149a1 0%,#1f3a8b 50%,#1c2a73 100%);
  background: -ms-linear-gradient(top,#2149a1 0%,#1f3a8b 50%,#1c2a73 100%);
} */
</style>
