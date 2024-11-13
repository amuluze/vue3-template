/**
 * @Author     : Amu
 * @Date       : 2024/11/10 23:54
 * @Description:
 */
import type { themeState } from '@/interface/store.ts'
import { DEFAULT_PRIMARY } from '@/config/theme.ts'

export const useThemeStore = defineStore('theme', {
    state: (): themeState => ({
        primary: DEFAULT_PRIMARY,
        isDark: false,
    }),
    actions: {
        setTheme(state: themeState) {
            this.primary = state.primary
            this.isDark = state.isDark
        },
    },
})
