<script setup lang="ts">
import type { HostInfo } from '@/interface/host'
import { queryCPUInfo, queryDiskInfo, queryHostInfo, queryMemInfo } from '@/mock/host'
import type { DockerInfo } from '@/interface/container'
import { queryContainers, queryDockerInfo, queryImages } from '@/mock/container'
import type { EChartsOption } from '@/components/Echarts/echarts.ts'
import { set } from 'lodash-es'

const loading = ref(false)

const hostInfo = ref<HostInfo>()
async function getHostInfo() {
  const { data } = await queryHostInfo()
  hostInfo.value = data
}

const dockerInfo = ref<DockerInfo>()
async function getDockerInfo() {
  const { data } = await queryDockerInfo()
  dockerInfo.value = data
}

const containerCount = ref(0)
const imageCount = ref(0)

async function statisticContainer() {
  const { data } = await queryContainers()
  containerCount.value = data.total
}

async function statisticImage() {
  const { data } = await queryImages()
  imageCount.value = data.total
}

const option = {
  title: {
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
  },
  series: [{
    type: 'liquidFill',
    radius: '50%',
    center: ['50%', '65%'], // 分别是 x、y 轴的便宜
    data: [0.5],
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

const cpuOption: EChartsOption = { ...option }
async function renderCPU() {
  const { data } = await queryCPUInfo()
  set(cpuOption, 'title.text', 'CPU')
  set(cpuOption, 'series[0].data', [Math.round(data.percent) / 100])
  console.log('cpu option: ', cpuOption)
}

const memOption: EChartsOption = { ...option }
async function renderMem() {
  const { data } = await queryMemInfo()
  set(memOption, 'title.text', 'Mem')
  set(memOption, 'series[0].data', [Math.round(data.percent) / 100])
  console.log('mem option: ', cpuOption)
}

const diskOption: EChartsOption = { ...option }
async function renderDisk() {
  const { data } = await queryDiskInfo()
  set(diskOption, 'title.text', 'Disk')
  set(diskOption, 'series[0].data', [Math.round(data.info[0].percent) / 100])
  console.log('disk option: ', cpuOption)
}

onMounted(async () => {
  await getHostInfo()
  await getDockerInfo()
  await statisticContainer()
  await statisticImage()
  await renderCPU()
  await renderMem()
  await renderDisk()
})
</script>

<template>
    <el-row :gutter="8" justify="space-between" class="am-container">
        <el-col :lg="16">
            <el-row :gutter="8">
                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
                    <el-card shadow="never" :style="{ 'margin-bottom': '8px', 'height': '140px' }">
                        <el-skeleton :loading="loading" animated :rows="2">
                            <template #default>
                                <div class="am-panel">
                                    <div class="am-icon">
                                        <svg-icon icon-class="container-color" size="60px" />
                                    </div>
                                    <div class="am-description">
                                        <div class="am-description__text">
                                            用户数量
                                        </div>
                                        <div class="am-description__number">
                                            {{ containerCount }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </el-skeleton>
                    </el-card>
                </el-col>
                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
                    <el-card shadow="never" :style="{ 'margin-bottom': '8px', 'height': '140px' }">
                        <el-skeleton :loading="loading" animated :rows="2">
                            <template #default>
                                <div class="am-panel">
                                    <div class="am-icon">
                                        <svg-icon icon-class="image-color" size="60px" />
                                    </div>
                                    <div class="am-description">
                                        <div class="am-description__text">
                                            角色数量
                                        </div>
                                        <div class="am-description__number">
                                            {{ imageCount }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </el-skeleton>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="8">
                <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24">
                    <div class="am-chart">
                        <el-card shadow="never">
                            <Echarts :option="cpuOption" />
                        </el-card>
                    </div>
                </el-col>
                <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24">
                    <div class="am-chart">
                        <el-card shadow="never">
                            <Echarts :option="memOption" />
                        </el-card>
                    </div>
                </el-col>
                <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="24">
                    <div class="am-chart">
                        <el-card shadow="never">
                            <Echarts :option="diskOption" />
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :lg="8">
            <content-wrap :style="{ 'margin-bottom': '8px', 'height': '250px' }" title="主机信息" message="主机信息">
                <p>
                    主机名称：<el-tag>{{ hostInfo?.hostname }}</el-tag>
                </p>
                <p>
                    启动时间：<el-tag>{{ hostInfo?.uptime }}</el-tag>
                </p>
                <p>
                    发行版本：<el-tag>{{ hostInfo?.platform }}-{{ hostInfo?.platform_version }}</el-tag>
                </p>
                <p>
                    内核版本：<el-tag>{{ hostInfo?.kernel_version }}</el-tag>
                </p>
                <p>
                    系统类型：<el-tag>{{ hostInfo?.os }}/{{ hostInfo?.kernel_arch }}</el-tag>
                </p>
            </content-wrap>
            <content-wrap :style="{ height: '200px' }" title="Docker 信息" message="Docker 信息">
                <p>
                    Docker 版本：<el-tag>{{ dockerInfo?.docker_version }}</el-tag>
                </p>
                <p>
                    API 版本： <el-tag>{{ dockerInfo?.min_api_version }}-{{ dockerInfo?.api_version }}</el-tag>
                </p>
                <p>
                    系统类型： <el-tag>{{ dockerInfo?.os }}/{{ dockerInfo?.arch }}</el-tag>
                </p>
            </content-wrap>
        </el-col>
    </el-row>
</template>

<style scoped lang="scss">
@include b(container) {
  overflow: auto;
}
@include b(panel) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@include b(chart) {
  height: 310px;
  margin-bottom: 8px;
  .el-card {
    height: 100%;
    :deep(.el-card__body) {
      height: 100%;
    }
  }
}

@include b(description) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include e(text) {
    font-size: 16px;
    font-weight: bold;
  }

  @include e(number) {
    font-size: 32px;
    font-weight: bold;
  }
}

h4 {
  margin: 16px 0;
}
p {
  margin: 4px;
}
</style>
