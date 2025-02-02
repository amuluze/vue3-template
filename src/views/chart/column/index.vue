<script setup lang="ts">
import type { EChartsOption } from '@/components/Echarts/echarts.ts'

const loading = ref(false)
const option: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    textStyle: {
      color: '#a1a1a1',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: '#a1a1a1',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#a1a1a1',
      },
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series',
      },
      markLine: {
        lineStyle: {
          type: 'dashed',
        },
        data: [[{ type: 'min' }, { type: 'max' }]],
      },
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
}

const basicOptions: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
}

const singleOption: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000',
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: 'bar',
    },
  ],
}

const datasetOption: EChartsOption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
}
</script>

<template>
    <div class="am-column">
        <el-row :gutter="8">
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="basicOptions" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="singleOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="datasetOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="option" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
@include b(column) {
  height: 100%;
  width: 100%;
  overflow: auto;

  .el-card {
    height: 100%;
    width: 100%;

    :deep(.el-card__body) {
      height: 100% !important;
      width: 100% !important;
    }
  }
}

@include b(column-content) {
  height: 400px;
  width: 100%;
  margin-bottom: 8px;
}
</style>
