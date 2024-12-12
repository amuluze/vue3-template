import type { RouteRecordRaw } from 'vue-router'

export const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: '/overview',
        name: 'overview',
        component: async () => import('@/views/overview/index.vue'),
        meta: {
            title: 'menu.overview',
            icon: 'overview',
            show: true,
        },
    },
    {
        path: '/component',
        name: 'component',
        redirect: '/component/svg',
        meta: {
            title: 'menu.components',
            icon: 'component',
            show: true,
        },
        children: [
            {
                path: '/component/svg',
                name: 'svg',
                component: async () => import('@/views/components/svg/index.vue'),
                meta: {
                    title: 'menu.svg',
                    icon: 'svg',
                },
            },
            {
                path: '/components/search',
                name: 'search',
                component: async () => import('@/views/components/search/index.vue'),
                meta: {
                    title: 'menu.searchForm',
                    icon: 'search',
                },
            },
            {
                path: '/components/table',
                name: 'table',
                component: async () => import('@/views/components/table/index.vue'),
                meta: {
                    title: 'menu.table',
                    icon: 'table',
                },
            },
            {
                path: '/components/dialog',
                name: 'dialog',
                component: async () => import('@/views/components/dialog/index.vue'),
                meta: {
                    title: 'menu.dialog',
                    icon: 'common',
                },
            },
            {
                path: '/components/description',
                name: 'description',
                component: async () => import('@/views/components/description/index.vue'),
                meta: {
                    title: 'menu.description',
                    icon: 'common',
                },
            },
            {
                path: '/components/code',
                name: 'codeEdit',
                component: async () => import('@/views/components/code/index.vue'),
                meta: {
                    title: 'menu.codeEdit',
                    icon: 'code',
                },
            },
        ],
    },
    {
        path: '/chart',
        name: 'chart',
        redirect: '/chart/line',
        meta: {
            title: 'menu.chart',
            icon: 'data',
            show: true,
        },
        children: [
            {
                path: '/chart/line',
                name: 'line',
                component: async () => import('@/views/chart/line/index.vue'),
                meta: {
                    title: 'menu.line',
                    icon: 'common',
                },
            },
            {
                path: '/chart/column',
                name: 'column',
                component: async () => import('@/views/chart/column/index.vue'),
                meta: {
                    title: 'menu.column',
                    icon: 'common',
                },
            },
            {
                path: '/chart/pie',
                name: 'pie',
                component: async () => import('@/views/chart/pie/index.vue'),
                meta: {
                    title: 'menu.pie',
                    icon: 'common',
                },
            },
            {
                path: '/chart/water',
                name: 'water',
                component: async () => import('@/views/chart/water/index.vue'),
                meta: {
                    title: 'menu.water',
                    icon: 'common',
                },
            },
        ],
    },
    {
        path: '/terminal',
        name: 'terminal',
        component: async () => import('@/views/terminal/index.vue'),
        meta: {
            title: 'menu.terminal',
            icon: 'terminal',
            show: true,
        },
    },
    {
        path: '/user',
        name: 'user-manage',
        redirect: '/user/user',
        meta: {
            title: 'menu.userManager',
            icon: 'people',
            show: true,
        },
        children: [
            {
                path: '/user/user',
                name: 'user',
                component: async () => import('@/views/user/user/index.vue'),
                meta: {
                    title: 'menu.user',
                    icon: 'user',
                },
            },
            {
                path: '/user/role',
                name: 'role',
                component: async () => import('@/views/user/role/index.vue'),
                meta: {
                    title: 'menu.role',
                    icon: 'role',
                },
            },
            {
                path: '/user/resource',
                name: 'permission',
                component: async () => import('@/views/user/resource/index.vue'),
                meta: {
                    title: 'menu.permission',
                    icon: 'permission',
                },
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: async () => import('@/views/about/index.vue'),
        meta: {
            title: 'menu.about',
            icon: 'about',
            show: true,
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: async () => import('@/views/profile/index.vue'),
        meta: {
            show: false,
        },
    },
]
