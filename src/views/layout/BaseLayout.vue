<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <base-main></base-main>
      <AppFooter/>
    </div>
  </div>
</template>

<script>
  import {
    Navbar,
    Sidebar,
    BaseMain,
    AppFooter
  } from '@/views/layout/components'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      BaseMain,
      AppFooter
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
