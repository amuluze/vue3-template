/**
 * @Author     : Amu
 * @Date       : 2024/11/10 23:54
 * @Description:
 */

export const useThemeStore = defineStore('theme', () => {
    const currentColorArray = ref<string[]>()

    const updateCurrentColorArray = (colorArray: string[]) => {
        currentColorArray.value = colorArray
    }

    return {
        updateCurrentColorArray,
        currentColorArray,
    }
})
