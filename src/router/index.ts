import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useStore from '@/store'

const router = createRouter({
    history: createWebHistory(), // 可传参数，配置base路径，例如'/app'
    routes,
})

// 路由导航
router.beforeEach(async (to, _, next) => {
    const store = useStore()
    if (store.user.token === '' && to.name !== 'login') {
        // 未登录，to 非登录页
        next({ name: 'login' })
    }
    if (store.user.token === '' && to.name === 'login') {
        // 未登录，to 登录页
        next()
    }
    if (store.user.token !== '' && to.name === 'login') {
        next({ name: 'overview' })
    }
    // if (store.user.token === '' && to.name === 'login') {
    //     next()
    // }
    next()
})

export default router
