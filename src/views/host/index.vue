<template>
    <echarts :option="option" width="600px" height="600px" />
    <echarts :option="options2" width="600px" height="600px" />
    <echarts :option="options3" width="600px" height="600px" />
</template>
<script setup lang="ts">
import { EChartsOption } from '@/components/Echarts/echarts.ts'
import Echarts from '@/components/Echarts/index.vue'

let option: EChartsOption = {
    title: {
        text: '第二个 ECharts 实例'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Email']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
}

const options2: EChartsOption = {
    tooltip: {
        trigger: 'axis'
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        top: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7']
    },
    yAxis: {
        axisLabel: {
            formatter: function (val: number) {
                return val
            }
        }
    },
    series: [
        {
            name: 'QQ',
            type: 'line',
            stack: 'Total',
            data: [200, 201, 202, 203, 204, 205, 206]
        },
        {
            name: '微信',
            type: 'line',
            stack: 'Total',
            data: [200, 201, 202, 203, 204, 205, 206]
        }
    ]
}

const options3 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
}
</script>
