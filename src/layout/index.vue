<script setup lang="ts">
import Content from '@/layout/content/index.vue'
import Navbar from '@/layout/navbar/index.vue'
import Sidebar from '@/layout/sidebar/index.vue'
</script>

<template>
    <div class="am-layout">
        <el-container>
            <div class="am-layout-sidebar">
                <Sidebar />
            </div>
            <div class="am-layout-main">
                <Navbar />
                <Content />
            </div>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
@include b(layout) {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  overflow: hidden;
}

@include b(layout-sidebar) {
  display: block;
  position: relative;
  height: 100%;
  transition: 0.5s;
  background-color: #e9effd;
}

@include b(layout-main) {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 8px;
  overflow-y: scroll;
}
</style>
