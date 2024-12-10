<script setup lang="ts">
import Avatar from '@/layout/navbar/Avatar.vue'
import Breadcrumb from './Breadcrumb.vue'
import ThemeChange from '@/layout/navbar/ThemeChange.vue'
import Language from '@/layout/navbar/Language.vue'
</script>

<template>
    <div class="am-navbar">
        <Breadcrumb style="cursor: pointer" />
        <div class="am-navbar__right">
            <Language />
            <ThemeChange />
            <Avatar />
        </div>
    </div>
</template>

<style scoped lang="scss">
@include b(navbar) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 0 16px;
  background-color: #e9effd;
  border-radius: 4px;
  border-bottom: #cdcfd2 1px solid;

  @include e(right) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
