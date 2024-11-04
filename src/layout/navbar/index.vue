<script setup lang="ts">
import Avatar from '@/layout/navbar/Avatar.vue'
</script>

<template>
    <div class="am-navbar-container">
        <Avatar />
    </div>
</template>

<style scoped lang="scss">
@include b(navbar-container) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 64px;

    .el-header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
