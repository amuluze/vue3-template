import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app.ts'

// 注册子模块
function useStore() {
    return {
        user: useUserStore(),
        app: useAppStore(),
    }
}

export default useStore
