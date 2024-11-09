<script setup lang="ts">
</script>

<template>
    <section class="am-content">
        <router-view />
    </section>
</template>

<style scoped lang="scss">
@include b(content) {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 96px);
  overflow: hidden;
  margin: 8px 0;
}
</style>
