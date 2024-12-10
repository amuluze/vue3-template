/**
 * @Author     : Amu
 * @Date       : 2024/11/14 00:00
 * @Description:
 */
import useStore from '@/store'
import { themeConfig } from '@/config/theme.ts'

function useTheme() {
    const store = useStore()

    // 修改主题颜色
    const changePrimary = () => {
        let type: Theme.ThemeType = 'light'
        if (store.theme.isDark)
            type = 'dark'
        const theme = themeConfig[type]
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value)
        }
    }

    // 切换暗黑模式
    const switchDark = () => {
        const html = document.documentElement
        store.theme.setDark(!store.theme.isDark)
        if (store.theme.isDark)
            html.setAttribute('class', 'dark')
        else html.setAttribute('class', '')
        console.log('is dark: ', store.theme.isDark)
        changePrimary()
    }

    // 初始化主题
    const initTheme = () => {
        console.log('is dark: ', store.theme.isDark)
        changePrimary()
    }

    return { initTheme, switchDark, changePrimary }
}

export default useTheme
