<script setup lang="ts">
import Content from '@/layout/content/index.vue'
import Navbar from '@/layout/navbar/index.vue'
import Sidebar from '@/layout/sidebar/index.vue'
</script>

<template>
    <div class="am-layout-container">
        <el-container>
            <el-aside class="am-layout-container__left">
                <Sidebar />
            </el-aside>
            <el-container class="am-layout-container__right">
                <el-header class="am-header">
                    <Navbar />
                </el-header>
                <el-main class="am-content">
                    <content />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
@include b(layout-container) {
    width: 100%;
    height: 100%;

    :deep(.el-container) {
        height: 100% !important;
    }

    @include e(left) {
        width: 200px;

        .el-aside {
            width: 200px;
            height: 100%;
        }
    }

    @include e(right) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}

@include b(header) {
    width: 100%;
    height: 64px;
}

@include b(content) {
    width: 100%;
    padding: 0;
}
</style>
