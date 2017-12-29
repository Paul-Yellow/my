<template>
  <div class="CenterSubmitProfile" id="CenterSubmitProfile">
      <el-card>
        <div slot="header">
          <span>报送概要</span>
        </div>
        <div class="filterContainer">
          <header class="filterHeader">
            <span >筛选条件</span>
          </header>
          <el-row class="filter-item" >
            <el-col :span="2" :offset="2" class="item-lable">
              <span>日期</span>

            </el-col>
           <el-col :span="16" :offset="1">
            
            <el-tag type="primary" class="date-tag">昨日</el-tag>
            <el-tag  class="date-tag">近一周</el-tag>
            <el-tag  class="date-tag">近一个月</el-tag>
            </el-col>
          </el-row>
          <el-row class="filter-item">
            <el-col :span="2" :offset="2" class="item-lable">
              <span>行业</span>

            </el-col>
           <el-col :span="16" :offset="1">
            <el-tag type="primary" class="date-tag" :hit="true">全部</el-tag>
            <el-tag  class="date-tag">银行业</el-tag>
            <el-tag  class="date-tag">证券业</el-tag>
            <el-tag  class="date-tag">保险业</el-tag>
            </el-col>
          </el-row>
          <el-row class="filter-item">
            <el-col :span="2" :offset="2" class="item-lable">
              <span>地域</span>

            </el-col>
           <el-col :span="16" :offset="1">
            <el-tag type="primary" class="date-tag">全部</el-tag>
            <el-tag  class="date-tag">全部</el-tag>
            <el-tag  class="date-tag">近一个月</el-tag>
            </el-col>
          </el-row>
          <el-row class="filter-item">
            <el-col :span="2" :offset="2" class="item-lable">
              <span>金融机构</span>

            </el-col>
           <el-col :span="16">
            
            </el-col>
          </el-row>                    
        </div>



      </el-card>


  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'CenterSubmitProfile',
  data() {
    return {
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            }
          }

        ],
        series: [
          {
            name: '当天数据',
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top' // 数据显示
                }
              }
            },
            data: [200, 250, 500, 750, 500]
          }
        ]
      })
    }
  }
}
</script>

<style  lang="scss">
.CenterSubmitProfile{
  .filterContainer{
    .filterHeader{
      margin-bottom: 30px;
   

    }
   
    .filter-item{
      .date-tag{
        margin: 0 2%
      }
      padding: 10px 0;
      .item-lable{
        text-align: right;
      }

    }

  }

}




</style>