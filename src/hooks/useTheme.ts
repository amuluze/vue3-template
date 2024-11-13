/**
 * @Author     : Amu
 * @Date       : 2024/11/14 00:00
 * @Description:
 */
import { DEFAULT_PRIMARY } from '@/config/theme.ts'
import { success } from '@/components/Message/message.ts'
import useStore from '@/store'
import { getDarkColor, getLightColor } from '@/utils/color.ts'

function useTheme() {
    const store = useStore()

    // 修改主题颜色
    const changePrimary = (val: string | null) => {
        if (!val) {
            val = DEFAULT_PRIMARY
            success(`主题颜色已重置为 ${DEFAULT_PRIMARY}`)
        }
        store.theme.setTheme({ ...store.theme, primary: val })
        document.documentElement.style.setProperty(
            '--el-color-primary',
            store.theme.primary,
        )

        // 颜色加深或变浅
        for (let i = 1; i <= 9; i++) {
            document.documentElement.style.setProperty(
                `--el-color-primary-light-${i}`,
                !store.theme.isDark ? `${getLightColor(store.theme.primary, i / 10)}` : `${getDarkColor(store.theme.primary, i / 10)}`,
            )
        }
    }

    // 切换暗黑模式
    const switchDark = () => {
        const body = document.documentElement
        if (store.theme.isDark)
            body.setAttribute('class', 'dark')
        else body.setAttribute('class', '')
        changePrimary(store.theme.primary)
    }

    // 初始化主题
    const initTheme = () => {
        switchDark()
        // changePrimary(themeConfig.value.primary)
    }

    return { initTheme, switchDark, changePrimary }
}

export default useTheme
