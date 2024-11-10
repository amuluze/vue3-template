<script setup lang="ts">
import { useEcharts } from '@/hooks/useEcharts'
import type { EChartsOption } from './echarts'
import useStore from '@/store'

interface Props {
  width?: string
  height?: string
  option: EChartsOption
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  option: () => ({}),
})

const chartRef = shallowRef<HTMLDivElement>()
const currentOptions = shallowRef<EChartsOption>(props.option)

const { setOptions, initCharts } = useEcharts(chartRef as Ref<HTMLDivElement>, currentOptions.value)

const store = useStore()

watch(
  () => props.option,
  (newVal) => {
    let targetOptions: EChartsOption = {}
    targetOptions = { ...newVal }
    setOptions(targetOptions)
  },
)

watch(
  () => store.theme.currentColorArray,
  (newValue) => {
    currentOptions.value.color = newValue
    setOptions(currentOptions.value)
  },
)

onMounted(() => {
  initCharts()
})
</script>

<template>
    <div ref="chartRef" :style="{ height: props.height, width: props.width }" />
</template>
