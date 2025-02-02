<script setup lang="ts">
// import ace from 'ace-builds'
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/mode-nginx'
import 'ace-builds/src-noconflict/theme-monokai'

const props = defineProps<{
  content?: string
  defaultHeight?: string
  readonly?: boolean
  placeholder?: string
}>()

const emit = defineEmits(['update:content'])

const value = computed({
  get() {
    return props.content ?? ''
  },
  set(v) {
    emit('update:content', v)
  },
})
// ace.config.setModuleUrl('ace/ext/searchbox', extSearchboxUrl)
</script>

<template>
    <VAceEditor
        v-model:value="value"
        lang="nginx"
        theme="monokai"
        :style="{
            minHeight: defaultHeight || '100vh',
            borderRadius: '5px',
        }"
        :readonly="readonly"
        :placeholder="placeholder"
        :options="{
            fontSize: 14,
            tabSize: 4,
            showPrintMargin: false,
        }"
    />
</template>

<style scoped lang="scss">
:deep(.ace_placeholder) {
  z-index: 1;
  position: relative;
}
</style>
