<script setup lang="ts">
    import type { EChartsOption } from '@/components/Echarts/echarts.ts'
    import Echarts from '@/components/Echarts/index.vue'

    const option: EChartsOption = {
        title: {
            text: '第二个 ECharts 实例',
        },
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
            data: ['Email'],
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
            },
        ],
        yAxis: [
            {
                type: 'value',
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
        ],
    }
</script>

<template>
    <Echarts :option="option" width="600px" height="600px" />
</template>
