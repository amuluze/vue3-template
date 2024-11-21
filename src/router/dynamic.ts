import type { RouteRecordRaw } from 'vue-router'

export const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: '/overview',
        name: 'overview',
        component: async () => import('@/views/overview/index.vue'),
        meta: {
            title: '总览',
            icon: 'overview',
            show: true,
        },
    },
    {
        path: '/data',
        name: 'data',
        component: async () => import('@/views/data/index.vue'),
        meta: {
            title: '数据',
            icon: 'data',
            show: true,
        },
    },
    {
        path: '/chart',
        name: 'chart',
        redirect: '/chart/line',
        meta: {
            title: 'Echarts',
            icon: 'chart',
            show: true,
        },
        children: [
            {
                path: '/chart/line',
                name: 'line',
                component: async () => import('@/views/chart/line/index.vue'),
                meta: {
                    title: '折线图',
                    icon: 'common',
                },
            },
            {
                path: '/chart/column',
                name: 'column',
                component: async () => import('@/views/chart/column/index.vue'),
                meta: {
                    title: '柱状图',
                    icon: 'common',
                },
            },
            {
                path: '/chart/pie',
                name: 'pie',
                component: async () => import('@/views/chart/pie/index.vue'),
                meta: {
                    title: '饼状图',
                    icon: 'common',
                },
            },
            {
                path: '/chart/water',
                name: 'water',
                component: async () => import('@/views/chart/water/index.vue'),
                meta: {
                    title: '水型图',
                    icon: 'common',
                },
            },
        ],
    },
    {
        path: '/user',
        name: 'user-manage',
        redirect: '/user/user',
        meta: {
            title: '用户管理',
            icon: 'people',
            show: true,
        },
        children: [
            {
                path: '/user/user',
                name: 'user',
                component: async () => import('@/views/user/user/index.vue'),
                meta: {
                    title: '用户',
                    icon: 'user',
                },
            },
            {
                path: '/user/role',
                name: 'role',
                component: async () => import('@/views/user/role/index.vue'),
                meta: {
                    title: '角色',
                    icon: 'role',
                },
            },
            {
                path: '/user/resource',
                name: 'permission',
                component: async () => import('@/views/user/resource/index.vue'),
                meta: {
                    title: '权限',
                    icon: 'permission',
                },
            },
        ],
    },
    {
        path: '/container',
        name: 'container',
        redirect: '/container/container',
        meta: {
            title: '容器管理',
            icon: 'container',
            show: true,
        },
        children: [
            {
                path: '/container/container',
                name: 'container_container',
                component: async () => import('@/views/container/container/index.vue'),
                meta: {
                    title: '容器',
                    icon: 'container',
                    show: false,
                },
            },
            {
                path: '/container/image',
                name: 'container_image',
                component: async () => import('@/views/container/image/index.vue'),
                meta: {
                    title: '镜像',
                    icon: 'image',
                    show: false,
                },
            },
            {
                path: '/container/network',
                name: 'container_network',
                component: async () => import('@/views/container/network/index.vue'),
                meta: {
                    title: '网络',
                    icon: 'network',
                    show: false,
                },
            },
            {
                path: '/container/setting',
                name: 'container_setting',
                component: async () => import('@/views/container/setting/index.vue'),
                meta: {
                    title: '设置',
                    icon: 'setting',
                    show: false,
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
