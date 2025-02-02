/**
 * @Author     : Amu
 * @Date       : 2024/11/26 12:00
 * @Description:
 */
import type { EChartsOption } from '@/components/Echarts/echarts.ts'

export const cpuOption = {
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

export const memOption = {
    title: {
        text: '内存使用率',
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
                color: '#c06504',
                insideColor: '#c06504',
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
                color: ['#c06504'],
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
                borderColor: '#c06504',
                borderWidth: 4,
            },
        },
    }],
} as EChartsOption

export const diskOption = {
    title: {
        text: '磁盘使用率',
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
                color: '#5f7906',
                insideColor: '#5f7906',
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
                color: ['#5f7906'],
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
                borderColor: '#5f7906',
                borderWidth: 4,
            },
        },
    }],
} as EChartsOption
