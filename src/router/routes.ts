import type { RouteRecordRaw } from 'vue-router'
import { dynamicRoutes } from '@/router/dynamic.ts'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: async () => import('@/views/login/index.vue'), // 路由懒加载
    },
    {
        // The main page
        path: '/',
        name: 'layout',
        component: async () => import('@/layout/index.vue'),
        children: [...dynamicRoutes],
    },
    // Resolve refresh page, route warnings
    {
        path: '/:pathMatch(.*)*',
        component: async () => import('@/components/Error/404.vue'),
    },
]

export default routes
