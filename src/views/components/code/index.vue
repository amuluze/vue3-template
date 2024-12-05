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
</template>

<style scoped lang="scss">
@include b(container) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  height: 100%;
  width: 100%;
  padding: 16px;

  border: 1px solid #e5e7ed;
  border-radius: 4px;
  background-color: #fff;
}
</style>
