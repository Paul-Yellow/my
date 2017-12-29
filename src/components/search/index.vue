<template>
  <div class="header-search">
     <el-button @click="show = !show" icon="el-icon-search"></el-button>
    <transition name="fade">
      <el-input  v-if="show" placeholder="wingasldf"></el-input>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data: () => ({
      show: true
    })
  }
</script>

<style  lang="scss">
.header-search{
  .el-input{
    width: 60%
  }
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>