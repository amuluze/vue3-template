<template>
    <div class="am-navbar-container">
        <avatar></avatar>
    </div>
</template>
<script setup lang="ts">
import Avatar from '@/layout/navbar/Avatar.vue'
</script>

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
