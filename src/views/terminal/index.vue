<script setup lang="ts">
// import type { Terminal } from '@xterm/xterm'
//
// let term: Terminal |
// const fitAddon = new FitAddon()
</script>

<template>
    <el-card>
        <div id="terminal" class="console" />
    </el-card>
</template>

<style scoped lang="scss">
.console {
  min-height: calc(100vh - 300px);

  :deep(.terminal) {
    padding: 10px;
  }

  :deep(.xterm-viewport) {
    border-radius: 5px;
  }
}
</style>
