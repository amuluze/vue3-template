<script setup lang="ts">
    import Menuitem from '@/layout/sidebar/Menuitem.vue';
import { dynamicRoutes } from '@/router/dynamic.ts';

    const currentRoute = useRoute()
</script>

<template>
    <el-aside>
        <div class="am-logo">
            <img class="am-logo__img" src="@/assets/images/logo.png" alt="template" />
            <span class="am-logo__text">Template</span>
        </div>
        <el-menu :default-active="currentRoute.path">
            <menuitem v-for="(item, index) in dynamicRoutes" :key="index" :item="item" />
        </el-menu>
    </el-aside>
</template>

<style scoped lang="scss">
@include b(logo) {
  width: 200px;
  height: 100%;

  .el-menu {
    border: none;
  }

  @include e(img) {
    height: 28px;
    width: 28px;
    margin-right: 6px;
  }

  @include e(logo) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
  }
}
</style>
