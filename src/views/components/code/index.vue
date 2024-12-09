<script setup lang="ts">
const content = ref('var a = 1')
function saveContent() {
  console.log(content.value)
}
</script>

<template>
    <div class="am-container">
        <code-editor v-model:content="content" default-height="600px" />
    </div>
    <el-button type="primary" plain @click="saveContent">
        保存
    </el-button>
</template>

<style scoped lang="scss">
</style>
