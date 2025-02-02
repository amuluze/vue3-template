/**
 * @Author     : Amu
 * @Date       : 2024/11/17 13:25
 * @Description:
 */
import type { echartsThemeState } from '@/interface/store.ts'

export const useEChartsStore = defineStore('echarts', {
    state: (): echartsThemeState => ({
        currentColorArray: [],
    }),
    getters: {},
    actions: {
        setCurrentColorArray(colorArray: string[]) {
            this.currentColorArray = colorArray
        },
    },
})
