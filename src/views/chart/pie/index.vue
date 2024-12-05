<script setup lang="ts">
import type { EChartsOption } from '@/components/Echarts/echarts.ts'

const loading = ref(false)
const option: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: ['rose 1', 'rose 2', 'rose 3', 'rose 4', 'rose 5', 'rose 6', 'rose 7', 'rose 8'],
    textStyle: {
      color: '#a1a1a1',
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [60, 280],
      center: ['50%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: true,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' },
      ],
    },
  ],
}

const roundedOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

const doughnutOption: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

const refererOption: EChartsOption = {
  // title: {
  //   text: 'Referer of a Website',
  //   subtext: 'Fake Data',
  //   left: 'center',
  // },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
</script>

<template>
    <div class="am-column">
        <el-row :gutter="8">
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="roundedOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="doughnutOption" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="refererOption" />
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
  height: 750px;
  width: 100%;
  margin-bottom: 8px;
}
</style>
