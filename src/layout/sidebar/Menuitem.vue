<template>
    <el-sub-menu v-if="item.children?.length" class="grid" :index="item.path">
        <template #title>
            <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon" />
        </template>
        <menuitem v-for="i in item.children" :key="i.name" :item="i"></menuitem>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
        <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon" />
        <template #title>{{ item.meta?.title }}</template>
    </el-menu-item>
</template>
<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';

defineProps<{
    item: RouteRecordRaw;
}>();

const router = useRouter();
function handleClickMenu(item: RouteRecordRaw) {
    router.push(item.path);
}
</script>

<style scoped></style>
