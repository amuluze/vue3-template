<template>
    <div class="am-layout-container">
        <el-container>
            <el-aside class="am-layout-container__left">
                <sidebar />
            </el-aside>
            <el-container class="am-layout-container__right">
                <el-header class="am-header">
                    <navbar />
                </el-header>
                <el-main class="am-content">
                    <content />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '@/layout/sidebar/index.vue';
import Navbar from '@/layout/navbar/index.vue';
import Content from '@/layout/content/index.vue';
</script>

<style scoped lang="scss">
@include b(layout-container) {
    height: 100%;
    width: 100%;
    :deep(.el-container) {
        height: 100% !important;
    }

    @include e(left) {
        width: 200px;
        .el-aside {
            height: 100%;
            width: 200px;
        }
    }

    @include e(right) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}

@include b(header) {
    width: 100%;
    height: 64px;
}

@include b(content) {
    padding: 0;
    width: 100%;
}
</style>
