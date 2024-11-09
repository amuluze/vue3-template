import type { RouteRecordRaw } from 'vue-router'
import { dynamicRoutes } from '@/router/dynamic.ts'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: async () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/',
        name: 'layout',
        component: async () => import('@/layout/index.vue'),
        redirect: '/overview',
        children: [...dynamicRoutes],
    },
    {
        path: '/:pathMatch(.*)*',
        component: async () => import('@/components/Error/404.vue'),
    },
]

export default routes
