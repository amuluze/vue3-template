<script setup lang="ts">
import type { EChartsOption } from '@/components/Echarts/echarts.ts'
import Echarts from '@/components/Echarts/index.vue'

const loading = ref(false)
const option = {
  title: [{
    text: 'CPU 使用率',
    x: '50%',
    y: 30,
    textAlign: 'center',
    textStyle: {
      color: '#363535',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }],
  series: [{
    type: 'liquidFill',
    radius: '50%',
    center: ['50%', '65%'], // 分别是 x、y 轴的便宜
    data: [0.6],
    label: {
      normal: {
        color: '#045cc0',
        insideColor: '#045cc0',
        textStyle: {
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
    },
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 1,
        color: ['#fff'],
      }, {
        offset: 0,
        color: ['#6a7feb'],
      }],
      global: false,
    }],
    backgroundStyle: {
      borderWidth: 1,
      color: 'transparent',
    },
    outline: {
      show: true,
      borderDistance: 8, // 内层白圈的宽度
      itemStyle: { // 最外层圈的颜色的宽度
        borderColor: '#6a7feb',
        borderWidth: 4,
      },
    },
  }],
} as EChartsOption
</script>

<template>
    <div class="am-column">
        <el-row :gutter="8">
            <el-col :lg="8" :md="8" :sm="8" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="option" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="8" :md="8" :sm="8" :xs="24">
                <el-skeleton :loading="loading" animated>
                    <div class="am-column-content">
                        <el-card shadow="hover">
                            <Echarts :option="option" />
                        </el-card>
                    </div>
                </el-skeleton>
            </el-col>
            <el-col :lg="8" :md="8" :sm="8" :xs="24">
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
