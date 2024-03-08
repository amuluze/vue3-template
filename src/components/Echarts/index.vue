<template>
    <div ref="chartRef" :style="{ height: props.option.height, width: props.option.width }" />
</template>

<script setup lang="ts">
import {  onBeforeUnmount, onMounted, ref } from 'vue'
import { EChartsOption } from './echarts'
import echarts from './echarts'

interface Props {
    width?: string;
    height?: string;
    option: EChartsOption;
}

const props = withDefaults(defineProps<Props>(), {
    width: '100%',
    height: '100%',
    option: () => ({})
})

console.log(props.option)

const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts;

const resizeHandler = () => {
    chart?.resize()
}

onMounted(() => {
    setTimeout(() => {
        initChart()
    }, 20)
    window.addEventListener('resize', resizeHandler)
})

const initChart = () => {
    chart = echarts.init(chartRef.value as HTMLDivElement)
    console.log(">>>>>", props.option.option)
    chart.setOption(props.option.option as EChartsOption, true)
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
    chart?.dispose()
})

</script>

<style scoped>

</style>
