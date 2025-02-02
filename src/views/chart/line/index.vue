<script setup lang="ts">
import type { EChartsOption } from '@/components/Echarts/echarts'

const loading = ref(false)
const stackedAreaoption: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    textStyle: {
      color: '#a1a1a1',
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
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
      boundaryGap: false,
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
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}

const smoothedOption: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
}

const stackedOption: EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}

const colors = ['#5470C6', '#EE6666']
const multipleOption: EChartsOption = {
  color: colors,
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross',
    },
  },
  legend: {},
  grid: {
    top: 70,
    bottom: 50,
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          formatter(params) {
            return (
              `Precipitation  ${
                params.value
              }${params.seriesData.length ? `：${params.seriesData[0].data}` : ''}`
            )
          },
        },
      },
      // prettier-ignore
      data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0],
        },
      },
      axisPointer: {
        label: {
          formatter(params) {
            return (
              `Precipitation  ${
                params.value
              }${params.seriesData.length ? `：${params.seriesData[0].data}` : ''}`
            )
          },
        },
      },
      // prettier-ignore
      data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Precipitation(2015)',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      data: [
        2.6,
        5.9,
        9.0,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6.0,
        2.3,
      ],
    },
    {
      name: 'Precipitation(2016)',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      data: [
        3.9,
        5.9,
        11.1,
        18.7,
        48.3,
        69.2,
        231.6,
        46.6,
        55.4,
        18.4,
        10.3,
        0.7,
      ],
    },
  ],
}
</script>

<template>
    <div class="am-column">
        <el-row>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="smoothedOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="stackedOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="multipleOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="stackedAreaoption" />
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
}
</style>
