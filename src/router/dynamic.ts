import type { RouteRecordRaw } from 'vue-router'

export const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: '/overview',
        name: 'overview',
        component: async () => import('@/views/overview/index.vue'),
        meta: {
            title: '总览',
            icon: 'system',
            show: true,
        },
    },
    {
        path: '/user',
        name: 'user-manage',
        redirect: '/user/user',
        meta: {
            title: '用户管理',
            icon: 'system',
            show: true,
        },
        children: [
            {
                path: '/user/user',
                name: 'user',
                component: async () => import('@/views/user/user/index.vue'),
                meta: {
                    title: '用户',
                },
            },
            {
                path: '/user/role',
                name: 'role',
                component: async () => import('@/views/user/role/index.vue'),
                meta: {
                    title: '角色',
                },
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: async () => import('@/views/about/index.vue'),
        meta: {
            title: '关于项目',
            icon: 'system',
            show: true,
        },
    },
]
