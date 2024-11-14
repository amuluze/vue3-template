<script setup lang="ts">
import Menuitem from '@/layout/sidebar/Menuitem.vue'
import useStore from '@/store'
import { dynamicRoutes } from '@/router/dynamic.ts'
import CollapseIcon from '@/layout/sidebar/CollapseIcon.vue'

const currentRoute = useRoute()
const store = useStore()

const menus = computed(() => {
  return dynamicRoutes.filter(item => item.meta?.show)
})
// const onRoute = computed(() => {
//   if (currentRoute.meta.activeMenu) {
//     return currentRoute.meta.activeMenu as string
//   }
//   return currentRoute.path
// })
</script>

<template>
    <el-aside :width="store.app.isCollapse ? '64px' : '180px'">
        <div class="am-logo">
            <img class="am-logo__img" src="@/assets/images/logo.png" alt="template" />
            <span v-show="!store.app.isCollapse" class="am-logo__text">Template</span>
        </div>
        <div class="am-menu">
            <el-scrollbar>
                <el-menu
                    :default-active="currentRoute.path"
                    :collapse="store.app.isCollapse"
                    :unique-opened="true"
                    :collapse-transition="false"
                    background-color="#e9effd"
                    text-color="#000"
                    active-text-color="#105eeb"
                    mode="vertical"
                >
                    <Menuitem v-for="(item, index) in menus" :key="index" :item="item" />
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="am-collapse">
            <CollapseIcon />
        </div>
    </el-aside>
</template>

<style scoped lang="scss">
@include b(logo) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  border-bottom: #cdcfd2 1px solid;

  @include e(img) {
    height: 28px;
    width: 28px;
    margin-right: 6px;
  }

  @include e(text) {
    font-size: 20px;
    font-weight: bold;
    color: #105eeb;
    white-space: nowrap;
  }
}

@include b(menu) {
  height: calc(100vh - 64px);

  .el-scrollbar {
    .is-active {
      color: #409eff !important;
    }
  }
  .el-menu {
    width: 100% !important;
    height: 100%;
    background-color: #e9effd !important;
    border: none !important;
  }
}
@include b(collapse) {
  width: 12px;
  height: 32px;
  background: #e9effd;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 16px;
  z-index: 999;
  right: -12px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-color: #e9e9ea;
}
</style>
