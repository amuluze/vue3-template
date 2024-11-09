<script setup lang="ts">
import useStore from '@/store'
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  item: RouteRecordRaw
}>()

const router = useRouter()
function handleClickMenu(item: RouteRecordRaw) {
  router.push(item.path)
}

const store = useStore()
const hideSidebar = computed(() => store.app.isCollapse)
</script>

<template>
    <div class="am-menuitem" :class="{ 'am-hide-sidebar': hideSidebar }">
        <el-sub-menu v-if="item.children?.length" :index="item.path">
            <template #title>
                <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon as string" />
                <span v-show="!store.app.isCollapse">{{ item.meta?.title }}</span>
            </template>
            <menuitem v-for="i in item.children" :key="i.name" :item="i" />
        </el-sub-menu>
        <el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
            <svg-icon v-if="item.meta && item.meta.icon" :icon-class="item.meta.icon as string" />
            <template #title>
                {{ item.meta?.title }}
            </template>
        </el-menu-item>
    </div>
</template>

<style scoped lang="scss">
@include b(menuitem) {
  .svg-icon {
    margin-right: 8px;
  }
}

@include b(hide-sidebar) {
  .el_sub-menu {
    overflow: hidden;
  }
  .svg-icon {
    margin-right: 0;
  }
}
</style>
