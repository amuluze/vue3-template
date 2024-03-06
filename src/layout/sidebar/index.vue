<template>
    <div class="am-sidebar-container">
        <div class="am-sidebar-container__logo">
            <span class="am-logo__text">Amprobe</span>
        </div>
        <el-menu :default-active="currentRoute.path">
            <menuitem v-for="(item, index) in dynamicRoutes" :key="index" :item="item" />
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import Menuitem from '@/layout/sidebar/Menuitem.vue';
import { dynamicRoutes } from '@/router/dynamic.ts';
const currentRoute = useRoute();
</script>

<style scoped lang="scss">
@include b(sidebar-container) {
    height: 100%;
    width: 200px;
    .el-menu {
        border: none;
    }

    @include e(logo) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
    }
}
</style>
