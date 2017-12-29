<template>
  <el-card>
    <div slot="header">
        <span>通知公告</span>
    </div>
    <div class="list-container">
      <el-row>
        <el-col :span="2">
          <span>28</span>
          <span>2017-12</span>
        </el-col>
        <el-col :span="22">
          <div class="list-ctitle"></div>
          <div class="list-c"></div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import DividerHorizontal from '@/views/layout/components/DividerHorizontal'
export default {
  components: {
    DividerHorizontal
  }
}
</script>

<style lang="scss">

</style>
