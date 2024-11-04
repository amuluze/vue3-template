import { useUserStore } from '@/store/modules/user'

// 注册子模块
function useStore() {
    return {
        user: useUserStore(),
    }
}

export default useStore
