<script setup lang="ts">
import Menuitem from '@/layout/sidebar/Menuitem.vue'
import { dynamicRoutes } from '@/router/dynamic.ts'

const currentRoute = useRoute()
</script>

<template>
    <div class="am-sidebar-container">
        <div class="am-sidebar-container__logo">
            <span class="am-logo__text">Amprobe</span>
        </div>
        <el-menu :default-active="currentRoute.path">
            <menuitem v-for="(item, index) in dynamicRoutes" :key="index" :item="item"></menuitem>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
@include b(sidebar-container) {
    width: 200px;
    height: 100%;

    .el-menu {
        border: none;
    }

    @include e(logo) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 64px;
    }
}
</style>
