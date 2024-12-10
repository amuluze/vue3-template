/**
 * @Author     : Amu
 * @Date       : 2024/11/10 23:54
 * @Description:
 */
import type { themeState } from '@/interface/store.ts'

export const useThemeStore = defineStore('theme', {
    state: (): themeState => ({
        isDark: false,
    }),
    actions: {
        setDark(isDark: boolean) {
            this.isDark = isDark
        },
    },
    persist: true,
})
