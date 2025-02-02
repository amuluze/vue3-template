import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app.ts'
import { usePermissionStore } from '@/store/modules/permission.ts'
import { useThemeStore } from '@/store/modules/theme.ts'
import { useEChartsStore } from '@/store/modules/echarts.ts'

// 注册子模块
function useStore() {
    return {
        user: useUserStore(),
        app: useAppStore(),
        permissions: usePermissionStore(),
        theme: useThemeStore(),
        echarts: useEChartsStore(),
    }
}

export default useStore
